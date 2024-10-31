<template>
  <div class="card border-0">
    <header-content title="Cursos"
      @toggle-visibility="toggleVisibility" show-link="off" show-btn="on"
    ></header-content>
  </div>

  <Dialog v-model:visible="visible" modal header="Adicionar Curso" :style="{ width: '35rem' }">
<!--    <span class e="text-surface-500 dark:text-surface-400 block mb-8">Adicionar Departamento</span>-->
    <form @submit.stop.prevent="saveCourse">
      <div class="d-flex items-center gap-1 mb-3 flex-column size-n">
        <label for="name" class="font-semibold w-24">Nome
          <small class="text-danger">*
            <label
                class="font-weight-normal text-danger"
                v-if="errorsValidation.nome">
              {{ errorsValidation.nome }}
            </label>
          </small>
        </label>
        <InputGroup>
          <InputGroupAddon>
            <i class="pi pi-user size-n"></i>
          </InputGroupAddon>
          <InputText
              id="name"
              class="flex-auto size-n custom-input small-input-group"
              autocomplete="off"
              placeholder="nome"
              v-model="formData.nome"
              :invalid="errorsValidation.nome"
          />
        </InputGroup>
      </div>

      <div class="d-flex items-center gap-1 mb-3 flex-column size-n">
        <label for="name" class="font-semibold w-24">Descrição
          <small class="text-danger">*
            <label
                class="font-weight-normal text-danger"
                v-if="errorsValidation.descricao">
              {{ errorsValidation.descricao }}
            </label>
          </small>
        </label>
        <InputGroup>
          <InputGroupAddon>
            <i class="pi pi-user size-n"></i>
          </InputGroupAddon>
          <Textarea
              id="name"
              class="flex-auto size-n custom-input"
              placeholder="descrição"
              v-model="formData.descricao"
              rows="5"
              style="width: 100%"
              :invalid="errorsValidation.descricao"
          />
        </InputGroup>
      </div>

      <div class="d-flex row mb-3">
        <div class="d-flex items-center gap-1 mb-3 flex-column size-n col-6 small-input-group">
          <label for="minmax-buttons" class="font-semibold w-24">Duração Minima
            <small class="text-danger">*
              <label
                  class="font-weight-normal text-danger"
                  v-if="errorsValidation.duracaoMinima">
                {{ errorsValidation.duracaoMinima }}
              </label>
            </small>
          </label>
          <InputGroup class="small-input-group">
            <InputGroupAddon>
              <i class="pi pi-user size-n"></i>
            </InputGroupAddon>
            <InputNumber
                v-model="formData.duracaoMinima"
                inputId="minmax-buttons"
                mode="decimal"
                showButtons
                :min="0"
                :max="100"
                fluid
                class="custom-input-number"
                :invalid="errorsValidation.duracaoMinima"
            />
          </InputGroup>
        </div>
        <div class="d-flex items-center gap-1 mb-3 flex-column size-n col-6 small-input-group">
          <label for="minmax-buttons" class="font-semibold w-24">Duração Maxima
            <small class="text-danger">*
              <label
                  class="font-weight-normal text-danger"
                  v-if="errorsValidation.duracaoMaxima">
                {{ errorsValidation.duracaoMaxima }}
              </label>
            </small>
          </label>
          <InputGroup class="small-input-group">
            <InputGroupAddon>
              <i class="pi pi-user size-n"></i>
            </InputGroupAddon>
            <InputNumber
                v-model="formData.duracaoMaxima"
                inputId="minmax-buttons"
                mode="decimal"
                showButtons
                :min="0"
                :max="100"
                fluid
                class="custom-input-number"
                :invalid="errorsValidation.duracaoMaxima"
            />
          </InputGroup>
        </div>
      </div>

      <div class="d-flex items-center gap-1 mb-3 flex-column size-n"
           :class="{ 'mt-5': errorsValidation.duracaoMaxima || errorsValidation.duracaoMinima }"
      >
        <label for="name" class="font-semibold w-24">Departamento
          <small class="text-danger">*
            <label
                class="font-weight-normal text-danger"
                v-if="errorsValidation.departamentoId">
              {{ errorsValidation.departamentoId }}
            </label>
          </small>
        </label>

        <Select
            v-model="formData.departamentoId"
            :options="departments"
            filter optionLabel="nome"
            placeholder="Selecione departamento"
            class="w-full md:w-56 small-input-group"
            optionValue="id"
            :invalid="errorsValidation.departamentoId"
        >
          <template #value="slotProps">
            <div v-if="slotProps.value" class="flex items-center small-input-group size-n">
              <div class="small-input-group">
                {{
                  `${departments.find(c => c.id === slotProps.value)?.nome} - ${departments.find(c => c.id === slotProps.value)?.faculdade?.nome}`
                }}
              </div>
            </div>
            <span v-else>{{ slotProps.placeholder }}</span>
          </template>

          <template #option="slotProps">
            <div class="flex items-center small-input-group size-n">
              <div class="small-input-group">{{ `${slotProps.option.nome} - ${slotProps.option.faculdade.nome}` }}</div>
            </div>
          </template>
        </Select>
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

  <div class="card mt-5 border-0 shadow-sm">
    <div class="card-header barra-vertical">
      <small class="d-flex justify-content-between">
        <div class="d-flex gap-2 align-items-center">
          <i class="fa-solid fa-user-shield"></i>
          <span class="ml-2">Lista de Cursos : {{ quantity }}</span>
        </div>
        <div>
          <a @click="refresh" class="btn-p">
            <i class="fa-solid fa-rotate-right"></i>
          </a>
        </div>
      </small>
    </div>
    <div class="card-body">
      <Toast />
      <ConfirmDialog></ConfirmDialog>
      <DataTable :value="curses" responsiveLayout="scroll" table-style="font-size: 0.8rem"
                 :paginator="true"
                 :loading="loading"
                 :rows="10"
                 paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                 :rowsPerPageOptions="[5, 10, 25]"
                 :filters="filters"
                 :globalFilterFields="['name', 'role']"
                 :size="'small'"
      >
        <template #header>
          <div class="custom-input">
            <span>Pesquisar: </span>
            <InputText v-model="filters['global']" placeholder="Digite para pesquisar" class="custom-input small-input-group" />
          </div>
        </template>
        <Column field="id" header="ID"></Column>
        <Column field="nome" header="Nome"></Column>
        <Column field="descricao" header="Descrição"></Column>
        <Column field="duracaoMinima" header="Duração Minima"></Column>
        <Column field="duracaoMaxima" header="Duração Maxima"></Column>
        <Column field="departamento.nome" header="Departamento"></Column>
        <Column header="Acções">
          <template #body="slotProps" >
            <span v-if="1===2">{{slotProps.data.name}}</span>
            <div class="d-flex flex-wrap justify-center gap-1">
              <Button icon="pi pi-pen-to-square" severity="success" text rounded aria-label="Search"
                  @click="confirm1()"
              />
              <Button icon="pi pi-trash" severity="danger" text rounded aria-label="Cancelar"
                  @click="confirm2()"
              />
            </div>
          </template>
        </Column>

<!--        <Column v-for="col in columns" :key="col.field" :field="col.field" :header="col.header" :body="getColumnBody(col.field, roles)" />-->
      </DataTable>
    </div>
  </div>
</template>

<script>
import Button from "primevue/button";
import ConfirmDialog from "primevue/confirmdialog";
import Toast from "primevue/toast";
import Dialog from 'primevue/dialog';
import Textarea from 'primevue/textarea';

import InputText from "primevue/inputtext";
import InputGroup from "primevue/inputgroup";
import InputGroupAddon from "primevue/inputgroupaddon";
import InputNumber from 'primevue/inputnumber';
import Select from 'primevue/select';
import Divider from 'primevue/divider';

import HeaderContent from "@/components/headercontent/HeaderContent.vue";
import { CourseService } from "../service/CourseService";
import {DepartmentService} from "@/modules/department/service/DepartmentService";

export default {
  name: 'ListRoles',
  components: {
    HeaderContent,
    Button,
    ConfirmDialog,
    Toast,
    Dialog,
    InputText,
    InputGroup,
    InputGroupAddon,
    InputNumber,
    Select,
    Divider,
    Textarea
  },
  data() {
    return {
      curses: [],
      columns: null,
      filters: {},
      visible: false,
      loading: true,
      departments: [],
      quantity: 0,
      errorsValidation: {},
      formData: {
        nome: '',
        descricao: '',
        duracaoMinima: '',
        duracaoMaxima: '',
        departamentoId: ''
      },
    };
  },
  watch: {
    curses: {
      handler: function (val) {
        this.quantity = val.length;
      },
      deep: true,
    },
  },
  mounted() {
    CourseService.list().then((data) => {
      this.curses = data;
      this.loading = false;
    });
   DepartmentService.list().then((data) => {
      this.departments = data;
    });
  },
  methods: {
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
      CourseService.list().then((data) => {
        this.curses = data;
        this.loading = false;
      });
    },

    saveCourse() {
      CourseService.create(this.formData).then(() => {
        this.toastSuccess('Curso criado com sucesso');
        this.formData = {
          nome: '',
          descricao: '',
          duracaoMinima: '',
          duracaoMaxima: '',
          departamentoId: ''
        };
        this.refresh();
      }).catch((error) => {
        this.validateForm(error.response.data.errors);

        if (error.response.status === 422){
          this.toastError('Verifique os campos obrigatorios');
          return;
        }
        this.toastError('Erro ao criar curso');
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
