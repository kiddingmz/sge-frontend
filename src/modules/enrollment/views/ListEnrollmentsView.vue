<template>
  <Toast />
  <div class="card border-0">
    <header-content title="Inscrições"
      @toggle-visibility="toggleVisibility" show-link="off" show-btn="on"
    ></header-content>
  </div>

  <Dialog v-model:visible="visible" modal header="Adicionar inscrição" :style="{ width: '30rem' }">
<!--    <span class e="text-surface-500 dark:text-surface-400 block mb-8">Adicionar Departamento</span>-->
    <form @submit.stop.prevent="saveEnrollment">
      <div class="d-flex items-center gap-1 mb-3 flex-column size-n"
      >
        <label for="name" class="font-semibold w-24">Estudante
          <small class="text-danger">*
            <label
                class="font-weight-normal text-danger"
                v-if="errorsValidation.estudanteId">
              {{ errorsValidation.estudanteId }}
            </label>
          </small>
        </label>

        <Select
            v-model="estudanteId"
            :options="filteredStudents"
        filter
        optionLabel="displayName"
        placeholder="Selecione estudante"
        class="w-full md:w-56 small-input-group"
        optionValue="dadosMatricula.numeroEstudante"
        :invalid="errorsValidation.estudanteId"
        >
        <template #value="slotProps">
          <div v-if="slotProps.value" class="flex items-center small-input-group size-n">
            <div class="small-input-group">
              {{ getStudentDisplayName(slotProps.value) }}
            </div>
          </div>
          <span v-else>{{ slotProps.placeholder }}</span>
        </template>

        <template #option="slotProps">
          <div class="flex items-center small-input-group size-n">
            <div class="small-input-group">{{ slotProps.option.displayName }}</div>
          </div>
        </template>
        </Select>



      </div>

      <div class="col-12 d-flex items-center gap-1 mb-3 flex-column size-n">
        <label for="name" class="font-semibold w-24">Cadeiras <small class="text-danger">*
          <label
              class="font-weight-normal text-danger"
              v-if="errorsValidation.cadeiraId">
            {{ errorsValidation.cadeiraId }}
          </label>
        </small>
        </label>
        <InputGroup>
          <InputGroupAddon>
            <i class="pi pi-user size-n"></i>
          </InputGroupAddon>
          <MultiSelect
              v-model="formData.cadeiraId"
              display="chip"
              :options="dataClasses"
              optionLabel="nome"
              option-value="cadeiraId"
              filter
              placeholder="Seleciona cadeiras"
              class="size-n custom-input expandable-multiselect"
              :invalid="errorsValidation.cadeiraId"
          />
        </InputGroup>
      </div>
      <Divider />

      <div class="d-flex justify-content-end gap-2">
        <Button label="Cancelar" icon="pi pi-times" class="small-input-group size-n" severity="secondary" type="reset" outlined @click="visible = false"
        />
        <Button label="Guardar" icon="pi pi-check" class="small-input-group size-n p-button-success" type="submit"
        />
      </div>
    </form>
  </Dialog>

<!--  <div class="card mt-5 border-0 shadow-sm">-->
<!--    <div class="card-header barra-vertical">-->
<!--      <small class="d-flex justify-content-between">-->
<!--        <div class="d-flex gap-2 align-items-center">-->
<!--          <i class="fa-solid fa-user-shield"></i>-->
<!--          <span class="ml-2">Lista de Inscrição</span>-->
<!--        </div>-->
<!--        <div>-->
<!--          <a @click="refresh" class="btn-p">-->
<!--            <i class="fa-solid fa-rotate-right"></i>-->
<!--          </a>-->
<!--        </div>-->
<!--      </small>-->
<!--    </div>-->
<!--    <div class="card-body">-->
<!--      <ConfirmDialog></ConfirmDialog>-->
<!--      <DataTable :value="students" responsiveLayout="scroll" table-style="font-size: 0.8rem"-->
<!--                 :paginator="true"-->
<!--                 :loading="loading"-->
<!--                 :rows="10"-->
<!--                 paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"-->
<!--                 :rowsPerPageOptions="[5, 10, 25]"-->
<!--                 :filters="filters"-->
<!--                 :globalFilterFields="['name', 'role']"-->
<!--                 :size="'small'"-->
<!--      >-->
<!--        <template #header>-->
<!--          <div class="custom-input">-->
<!--            <span>Pesquisar: </span>-->
<!--            <InputText v-model="filters['global']" placeholder="Digite para pesquisar" class="custom-input small-input-group" />-->
<!--          </div>-->
<!--        </template>-->
<!--        <Column field="id" header="ID"></Column>-->
<!--        <Column field="nome" header="Nome"></Column>-->
<!--        <Column field="descricao" header="Descrição"></Column>-->
<!--        <Column field="faculdade.nome" header="Faculdade"></Column>-->
<!--        <Column header="Acções">-->
<!--          <template #body="slotProps" >-->
<!--            <span v-if="1===2">{{slotProps.data.name}}</span>-->
<!--            <div class="d-flex flex-wrap justify-center gap-1">-->
<!--              <Button icon="pi pi-pen-to-square" severity="success" text rounded aria-label="Search"-->
<!--                  @click="confirm1()"-->
<!--              />-->
<!--              <Button icon="pi pi-trash" severity="danger" text rounded aria-label="Cancelar"-->
<!--                  @click="confirm2()"-->
<!--              />-->
<!--            </div>-->
<!--          </template>-->
<!--        </Column>-->

<!--&lt;!&ndash;        <Column v-for="col in columns" :key="col.field" :field="col.field" :header="col.header" :body="getColumnBody(col.field, roles)" />&ndash;&gt;-->
<!--      </DataTable>-->
<!--    </div>-->
<!--  </div>-->
</template>

<script>
import Button from "primevue/button";
import Toast from "primevue/toast";
import Dialog from 'primevue/dialog';
import InputGroup from "primevue/inputgroup";
import InputGroupAddon from "primevue/inputgroupaddon";
import Select from 'primevue/select';
import Divider from 'primevue/divider';
import MultiSelect from 'primevue/multiselect';
import HeaderContent from "@/components/headercontent/HeaderContent.vue";
import { EnrollmentService } from "../service/EnrollmentService";
import {ClassService} from "@/modules/class/service/ClassService";
import {RegistrationService} from "@/modules/registration/service/RegistrationService";

export default {
  name: 'ListRoles',
  components: {
    HeaderContent,
    Button,
    Toast,
    Dialog,
    InputGroup,
    InputGroupAddon,
    Select,
    Divider,
    MultiSelect
  },
  data() {
    return {
      students: [],
      filters: {},
      visible: false,
      loading: true,
      classes: [],
      quantity: 0,
      selectedClasses: [],
      errorsValidation: {},
      estudanteId: '',
      dataClasses: [],
      formData: {
        estudanteId: null,
        cadeiraId: null,
      },
    };
  },
  watch: {
    students: {
      handler: function (val) {
        this.quantity = val.length;
      },
      deep: true,
    },
    estudanteId: {
      handler: function (val) {
        this.formData.estudanteId = val;
        this.getClassByStudentId(val);
      },
      deep: true,
    },
    'formData.cadeiraId': {
      handler: function (val) {
        if (val.length > 8) {
          this.formData.cadeiraId = val.slice(0, 8);
          this.toastError('Você só pode selecionar no máximo 8 cadeiras');
        }
      },
      deep: true
    }
  },
  computed: {
    filteredStudents() {
      return this.students.map(student => ({
        ...student,
        displayName: `${student.dadosMatricula.numeroEstudante}: ${student.dadosPessoais.nome}`
      }));
    }
  },
  mounted() {
    this.loading = false;
    ClassService.list().then((data) => {
      this.classes = data;
    });
    RegistrationService.list().then((data) => {
      this.students = data;
      console.log(data);
    });
  },
  methods: {
    getClassByStudentId(id) {
      EnrollmentService.listClassByStudentId(JSON.stringify({estudanteId: id})).then((data) => {
        this.dataClasses = data;
        this.toastSuccess('Cadeiras carregadas com sucesso');
      }).catch(() => {
        this.toastError('Erro ao carregar cadeiras');
      });
    },
    getStudentDisplayName(numeroEstudante) {
      this.refresh();
      const student = this.students.find(c => c.dadosMatricula.numeroEstudante === numeroEstudante);
      return student ? `${student.dadosPessoais.nome} - ${student.dadosMatricula.numeroEstudante}` : '';
    },
    limitSelection() {
      if (this.formData.cadeiraId.length > 8) {
        this.formData.cadeiraId = this.formData.cadeiraId.slice(0, 8);
        this.toastError('Você só pode selecionar no máximo 8 cadeiras');
      }
    },
    toggleVisibility() {
      this.visible = !this.visible;
    },

    validateForm(error) {
      let errorsFormed = {};
      for (const [key, value] of Object.entries(error)) {
        errorsFormed[key] = value[0];
      }
      this.errorsValidation = { ...errorsFormed };
    },
    toastSuccess(msg) {
      this.$toast.add({
        severity: 'success',
        summary: msg,
        life: 3000 });
    },

    toastError(msg) {
      this.$toast.add({
        severity: 'error',
        summary: msg,
        life: 3000 });
    },

    refresh() {
      this.loading = true;
      EnrollmentService.list().then((data) => {
        this.students = data;
        this.loading = false;
      });
    },

    saveEnrollment() {
      if (this.formData.estudanteId === null || !this.formData.cadeiraId === null) {
        this.toastError('Verifique os campos obrigatorios');
        if (this.formData.estudanteId === null) {
          this.errorsValidation.estudanteId = 'Estudante é obrigatório';
        }
        if (this.formData.cadeiraId === null) {
          this.errorsValidation.cadeiraId = 'Cadeira é obrigatório';
        }
        return;
      }
      EnrollmentService.create(this.formData).then(() => {
        this.toastSuccess('Inscricao criado com sucesso');
        this.formData = {
          cadeiraId: '',
        };
        this.refresh();
      }).catch((error) => {

        if (error.response.data.errors === undefined) {
          this.toastError('Erro interno');
          return
        }
        this.validateForm(error.response.data.errors);

        if (error.response.status === 422){
          this.toastError('Verifique os campos obrigatorios');
          return;
        }
        this.toastError('Erro ao criar inscricao');
      });

    }
  }
}
</script>

<style scoped>
.custom-input-number:focus {
  border-color: var(--primary) !important;
}

InputNumber:focus {
  border-color: var(--primary) !important;
}
.p-inputtext:enabled:focus {
  border-color: var(--primary) !important;
}
.size {
  font-size: 0.7rem;
  font-weight: bolder;
  color: #000;
}

.size-n {
  font-size: 0.7rem !important;
}

 .table-header {
   display: flex;
   justify-content: flex-start;
   align-items: center;
   gap: 0.5rem;
 }

.custom-input:focus {
  border-color: var(--primary) !important;
}

.small-input-group {
  height: 30px !important;
}

.custom-input {
  font-size: 0.9rem;
  padding: 0.5rem;
}

.p-inputtext {
  font-size: 0.8rem;
}

.p-paginator {
  font-size: 0.8rem;
}

.p-inputtext {
  font-size: 0.8rem;
}

.p-paginator {
  font-size: 0.8rem;
}

.p-paginator .p-link {
  font-size: 0.8rem !important;
}

.p-paginator .p-link.p-highlight {
  color: green  !important;
}
</style>
