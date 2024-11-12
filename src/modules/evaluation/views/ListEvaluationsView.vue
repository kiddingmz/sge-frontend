<template>
  <div class="card border-0">
    <header-content title="Avaliações"
      @toggle-visibility="toggleVisibility" show-link="off" show-btn="on"
    ></header-content>
  </div>
  <Toast />
  <Dialog v-model:visible="visible" modal header="Adicionar Avaliação" :style="{ width: '35rem' }">
<!--    <span class e="text-surface-500 dark:text-surface-400 block mb-8">Adicionar Departamento</span>-->
    <form @submit.stop.prevent="saveEvaluation">
      <div class="d-flex items-center gap-1 mb-3 flex-column size-n">
        <label for="name" class="font-semibold w-24">Nome
          <small class="text-danger">*
            <label
                class="font-weight-normal text-danger"
                v-if="errorsValidation.nomeAvaliacao">
              {{ errorsValidation.nomeAvaliacao }}
            </label>
          </small>
        </label>
        <InputGroup>
          <InputGroupAddon>
            <i class="pi pi-user size-n"></i>
          </InputGroupAddon>
          <InputText
              :invalid="errorsValidation.nomeAvaliacao"
              id="name" class="flex-auto size-n custom-input small-input-group" autocomplete="off" placeholder="nome da avaliação" v-model="formData.nomeAvaliacao"/>
        </InputGroup>
      </div>

      <div class="d-flex row mb-3">
        <div class="d-flex items-center gap-1 mb-3 flex-column size-n col-6 small-input-group">
          <label for="minmax-buttons" class="font-semibold w-24">Peso
            <small class="text-danger">*
              <label
                  class="font-weight-normal text-danger"
                  v-if="errorsValidation.peso">
                {{ errorsValidation.peso }}
              </label>
            </small>
          </label>
          <InputGroup class="small-input-group">
            <InputGroupAddon>
              <i class="pi pi-user size-n"></i>
            </InputGroupAddon>
            <InputNumber
                :invalid="errorsValidation.peso"
                v-model="formData.peso" inputId="minmax-buttons" mode="decimal" showButtons :min="0" :max="100" fluid class="custom-input-number"/>
          </InputGroup>
        </div>
        <div class="d-flex items-center gap-1 mb-3 flex-column size-n col-6 small-input-group">
          <label for="minmax-buttons" class="font-semibold w-24">Ano
            <small class="text-danger">*
              <label
                  class="font-weight-normal text-danger"
                  v-if="errorsValidation.ano">
                {{ errorsValidation.ano }}
              </label>
            </small>
          </label>
          <InputGroup class="small-input-group">
            <InputGroupAddon>
              <i class="pi pi-user size-n"></i>
            </InputGroupAddon>
            <DatePicker
                mask="YYYY"
                :invalid="errorsValidation.ano"
                v-model="ano" view="year" dateFormat="yy" />
          </InputGroup>
        </div>
      </div>
      <div class="d-flex row mb-3">
        <div class="d-flex items-center col-6 gap-1 mb-3 flex-column size-n">
          <label for="name" class="font-semibold w-24">Curso
            <small class="text-danger">*
              <label
                  class="font-weight-normal text-danger"
                  v-if="errorsValidation.cursoId">
                {{ errorsValidation.cursoId }}
              </label>
            </small></label>

          <Select
              v-model="formData.cursoId"
              :options="curses"
              filter optionLabel="nome"
              placeholder="Selecione curso"
              class="w-full md:w-56 small-input-group"
              optionValue="id"
              :invalid="errorsValidation.cursoId"
          >
            <template #value="slotProps">
              <div v-if="slotProps.value" class="flex items-center small-input-group size-n">
                <div class="small-input-group">{{ curses.find(c => c.id === slotProps.value)?.nome }}</div>
              </div>
              <span v-else>{{ slotProps.placeholder }}</span>
            </template>

            <template #option="slotProps">
              <div class="flex items-center small-input-group size-n">
                <div class="small-input-group">{{ slotProps.option.nome }}</div>
              </div>
            </template>
          </Select>
        </div>

        <div class="d-flex items-center col-6 gap-1 mb-3 flex-column size-n">
          <label for="name" class="font-semibold w-24">Cadeira
            <small class="text-danger">*
              <label
                  class="font-weight-normal text-danger"
                  v-if="errorsValidation.cadeiraId">
                {{ errorsValidation.cadeiraId }}
              </label>
            </small></label>

          <Select
              v-model="formData.cadeiraId"
              :options="classes"
              filter optionLabel="nome"
              placeholder="Selecione cadeira"
              class="w-full md:w-56 small-input-group"
              optionValue="id"
              :invalid="errorsValidation.cadeiraId"
          >
            <template #value="slotProps">
              <div v-if="slotProps.value" class="flex items-center small-input-group size-n">
                <div class="small-input-group">{{ classes.find(c => c.id === slotProps.value)?.nome }}</div>
              </div>
              <span v-else>{{ slotProps.placeholder }}</span>
            </template>

            <template #option="slotProps">
              <div class="flex items-center small-input-group size-n">
                <div class="small-input-group">{{ slotProps.option.nome }}</div>
              </div>
            </template>
          </Select>
        </div>

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

  <div class="card border-0 shadow-sm mt-5">
    <form @submit.stop.prevent="searchEvaluation">
      <div class="d-flex justify-content-between p-2">
        <div class="d-flex items-center col-3 gap-1 mb-2 flex-column size-n">
          <label for="name" class="font-semibold w-24">Curso
            <small class="text-danger">*
              <label
                  class="font-weight-normal text-danger"
                  v-if="errorsValidation.cursoId_error">
                {{ errorsValidation.cursoId_error }}
              </label>
            </small></label>

          <Select
              v-model="cursoId"
              :options="curses"
              filter optionLabel="nome"
              placeholder="Selecione curso"
              class="w-full md:w-56 small-input-group"
              optionValue="id"
              :invalid="errorsValidation.cursoId_error"
          >
            <template #value="slotProps">
              <div v-if="slotProps.value" class="flex items-center small-input-group size-n">
                <div class="small-input-group">{{ curses.find(c => c.id === slotProps.value)?.nome }}</div>
              </div>
              <span v-else>{{ slotProps.placeholder }}</span>
            </template>

            <template #option="slotProps">
              <div class="flex items-center small-input-group size-n">
                <div class="small-input-group">{{ slotProps.option.nome }}</div>
              </div>
            </template>
          </Select>
        </div>
        <div class="d-flex items-center col-3 gap-1 mb-2 flex-column size-n">
          <label for="name" class="font-semibold w-24">Ano
            <small class="text-danger">*
              <label
                  class="font-weight-normal text-danger"
                  v-if="errorsValidation.yearCourse_error">
                {{ errorsValidation.yearCourse_error }}
              </label>
            </small></label>

          <Select
              v-model="yearCourse"
              :options="yearsCourse"
              filter optionLabel="ano"
              placeholder="Selecione ano"
              class="w-full md:w-56 small-input-group"
              optionValue="ano"
              :invalid="errorsValidation.yearCourse_error"
          >
            <template #value="slotProps">
              <div v-if="slotProps.value" class="flex items-center small-input-group size-n">
                <div class="small-input-group">{{ slotProps.value }}</div>
              </div>
              <span v-else>{{ slotProps.placeholder }}</span>
            </template>

            <template #option="slotProps">
              <div class="flex items-center small-input-group size-n">
                <div class="small-input-group">{{ slotProps.option.ano }}</div>
              </div>
            </template>
          </Select>
        </div>
        <div class="d-flex items-center col-3 gap-1 mb-2 flex-column size-n">
          <label for="name" class="font-semibold w-24">Cadeira
            <small class="text-danger">*
              <label
                  class="font-weight-normal text-danger"
                  v-if="errorsValidation.classByCourse_error">
                {{ errorsValidation.classByCourse_error }}
              </label>
            </small></label>

          <Select
              v-model="classByCourse"
              :options="classesByCourse"
              filter optionLabel="cadeiraNome"
              placeholder="Selecione cadeira"
              class="w-full md:w-56 small-input-group"
              optionValue="cadeiraId"
              :disabled="allEvaluationChecked"
              :invalid="errorsValidation.classByCourse_error"
          >
            <template #value="slotProps">
              <div v-if="slotProps.value" class="flex items-center small-input-group size-n">
                <div class="small-input-group">{{ classesByCourse.find(c => c.cadeiraId === slotProps.value)?.cadeiraNome }}</div>
              </div>
              <span v-else>{{ slotProps.placeholder }}</span>
            </template>

            <template #option="slotProps">
              <div class="flex items-center small-input-group size-n">
                <div class="small-input-group">{{ slotProps.option.cadeiraNome }}</div>
              </div>
            </template>
          </Select>
        </div>
        <div class="align-content-end">
          <Button label="Pesquisar" class="small-input-group size-n" severity="success" size="small" icon="pi pi-search"  iconPos="left" type="submit"/>
        </div>
      </div>
      <div class="d-flex gap-2 col-md-2 mb-2 size-n mx-2">
        <Checkbox
            inputId="all_evaluation"
            v-model="allEvaluation"
            :value="true"
            @change="getAllEvaluation"
        />
        <label for="all_evaluation">Ver todas avaliações do curso</label>
      </div>
    </form>
  </div>
  <div class="card mt-5 border-0 shadow-sm" v-if="evaluationTableType === 'class'">
    <div class="card-header barra-vertical">
      <small class="d-flex justify-content-between">
        <div class="d-flex gap-2 align-items-center">
          <i class="fa-solid fa-user-shield"></i>
          <span class="ml-2">Lista de Avaliações : {{ quantity }}</span>
        </div>
        <div>
          <a @click="refresh" class="btn-p">
            <i class="fa-solid fa-rotate-right"></i>
          </a>
        </div>
      </small>
    </div>
    <div class="card-body">
      <ConfirmDialog></ConfirmDialog>
      <DataTable responsiveLayout="scroll" table-style="font-size: 0.8rem"
                 :paginator="true"
                 :loading="loading"
                 :rows="10"
                 paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                 :rowsPerPageOptions="[5, 10, 25]"
                 :filters="filters"
                 :globalFilterFields="['name', 'role']"
                 :size="'small'"
                 v-if="evaluationTableType === 'class'" :value="tableData"
      >
        <template #header>
          <div class="custom-input">
            <span>Pesquisar: </span>
            <InputText v-model="filters['global']" placeholder="Digite para pesquisar" class="custom-input small-input-group" />
          </div>
        </template>
<!--        <Column field="cadeira.id" header="ID"></Column>-->
        <Column field="nomeAvaliacao" header="Nome"></Column>
        <Column field="peso" header="Peso"></Column>
        <Column field="actions" header="Acções">
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
  <div class="card mt-5 border-0 shadow-sm" v-if="evaluationTableType === 'all'">
    <div class="card-header barra-vertical">
      <small class="d-flex justify-content-between">
        <div class="d-flex gap-2 align-items-center">
          <i class="fa-solid fa-user-shield"></i>
          <span class="ml-2">Lista de Avaliações : {{ quantity }}</span>
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
      <DataTable responsiveLayout="scroll" table-style="font-size: 0.8rem"
                 :paginator="true"
                 :loading="loading"
                 :rows="10"
                 paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                 :rowsPerPageOptions="[5, 10, 25]"
                 :filters="filters"
                 :globalFilterFields="['name', 'role']"
                 :size="'small'"
                 v-if="evaluationTableType === 'all'" :value="tableData"
      >
        <template #header>
          <div class="custom-input">
            <span>Pesquisar: </span>
            <InputText v-model="filters['global']" placeholder="Digite para pesquisar" class="custom-input small-input-group" />
          </div>
        </template>
        <Column header="ID">
          <template #body="slotProps">
            {{ slotProps.index + 1 }}
          </template>
        </Column>
        <Column field="cadeira.nome" header="Cadeira"></Column>
        <Column field="nomeAvaliacao" header="Nome da Avaliação"></Column>
        <Column field="peso" header="Peso"></Column>
        <Column field="actions" header="Acções">
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
// import Tag from "primevue/tag";
// import Toolbar from "primevue/toolbar";
import Button from "primevue/button";
import ConfirmDialog from "primevue/confirmdialog";
import Toast from "primevue/toast";
import Dialog from 'primevue/dialog';

// import FileUpload from "primevue/fileupload";
// import IconField from "primevue/iconfield";
// import InputIcon from "primevue/inputicon";
import InputText from "primevue/inputtext";
import InputGroup from "primevue/inputgroup";
import InputGroupAddon from "primevue/inputgroupaddon";
import InputNumber from 'primevue/inputnumber';
import Select from 'primevue/select';
import Divider from 'primevue/divider';
import Checkbox from 'primevue/checkbox';
import HeaderContent from "@/components/headercontent/HeaderContent.vue";
import { EvaluationService } from "../service/EvaluationService";
import {RegistrationService} from "@/modules/registration/service/RegistrationService";
// import {GradeService} from "@/modules/department I/service/GradeService";

import DatePicker from 'primevue/datepicker';
import {CourseService} from "@/modules/course/service/CourseService";
import {ClassService} from "@/modules/class/service/ClassService";
import $ from 'jquery';
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
    DatePicker,
    Checkbox,
  },
  data() {
    return {
      allEvaluationChecked: false,
      allEvaluation: false,
      curses: [],
      ano: '',
      errorsValidation: {},
      roles: null,
      columns: null,
      filters: {},
      visible: false,
      loading: true,
      yearsCourse: [],
      classes: [],
      departments: [],
      quantity: 0,
      cursoId: '',
      yearCourse: '',
      classByCourse: '',
      classesByCourse: [],
      dataEvaluation: null,
      evaluationTableType: null,
      formData: {
        nomeAvaliacao: '',
        cadeiraId: '',
        cursoId: '',
        peso: '',
        ano: 2024
      },
    };
  },
  computed: {
    tableData() {
      return Array.isArray(this.dataEvaluation) ? this.dataEvaluation : [this.dataEvaluation];
    }
  },
  watch: {
    cursoId: {
      handler: function (val) {
        this.getYearByCourse(val);
      },
      deep: true,
    },
    yearCourse: {
      handler: function (val) {
        this.getClassByCourseAndYear(val);
      },
      deep: true,
    },
    tableData: {
      handler: function (val) {
        this.quantity = val.length;
      },
      deep: true,
    },
  },
  mounted() {
    // EvaluationService.list().then((data) => {
    //   // this.curses = data;
    //   this.loading = false;
    //   console.log(data);
    // });
    // GradeService.list().then((data) => {
    //   this.departments = data;
    //   console.log(data);
    // });
    ClassService.list().then((data) => {
      this.classes = data;
    });
    CourseService.list().then((data) => {
        this.curses = data;
    });
  },

  methods: {
    getAllEvaluation() {
      let result = $('#all_evaluation:checked').val();
      if (result) {
        this.allEvaluationChecked = true;
      }
      if (result === undefined) {
        this.allEvaluationChecked = false;
      }
    }
    ,
    saveEvaluation() {
      EvaluationService.create(this.formData).then(() => {
        this.toastSuccess('Avaliação criado com sucesso');
        this.formData = {
          nomeAvaliacao: '',
          cadeiraId: '',
          cursoId: '',
          peso: '',
        };
        this.refresh();
      }).catch((error) => {
        this.validateForm(error.response.data.errors);

        if (error.response.status === 422){
          this.toastError('Verifique os campos obrigatorios');
          return;
        }
        this.toastError('Erro ao criar avaliação');
      });

    }
    ,
    searchEvaluation() {
      let error = {};

      if (this.allEvaluationChecked) {
        if (this.cursoId === '' || this.yearCourse === '') {
          this.toastError('Verifique os campos obrigatórios');
          if (this.cursoId === '') {
            error.cursoId_error = ['Campo obrigatório'];
          }
          if (this.yearCourse === '') {
            error.yearCourse_error = ['Campo obrigatório'];
          }
          this.validateForm(error);
          return;
        }
      } else {
        if (this.classByCourse === '' || this.cursoId === '' || this.yearCourse === '') {
          this.toastError('Verifique os campos obrigatórios');
          if (this.classByCourse === '') {
            error.classByCourse_error = ['Campo obrigatório'];
          }
          if (this.cursoId === '') {
            error.cursoId_error = ['Campo obrigatório'];
          }
          if (this.yearCourse === '') {
            error.yearCourse_error = ['Campo obrigatório'];
          }
          this.validateForm(error);
          return;
        }
      }

      this.loading = true;

      const evaluationService = this.allEvaluationChecked
          ? EvaluationService.list
          : EvaluationService.listByClass;

      if (this.allEvaluationChecked){
        evaluationService(JSON.stringify({
          'cursoId': this.cursoId,
          'ano': this.yearCourse
        }))
            .then((data) => {
              this.toastSuccess(`Avaliações do curso ${this.allEvaluationChecked ? 'obtidas' : 'por classe obtidas'} com sucesso`);
              this.evaluationTableType = this.allEvaluationChecked ? 'all' : 'class';
              this.dataEvaluation = data.data;
              this.loading = false;
            })
            .catch(() => {
              this.evaluationTableType = null;
              this.toastError('Erro ao obter avaliações do curso');
              this.loading = false;
            });
      }
      else {
        evaluationService(JSON.stringify({
          'cursoId': this.cursoId,
          'cadeiraId': this.classByCourse,
          'ano': this.yearCourse
        }))
            .then((data) => {
              this.toastSuccess(`Avaliações do curso ${this.allEvaluationChecked ? 'obtidas' : 'por classe obtidas'} com sucesso`);
              this.evaluationTableType = this.allEvaluationChecked ? 'all' : 'class';
              this.dataEvaluation = data.data;
              console.log(this.dataEvaluation);
              this.loading = false;
            })
            .catch(() => {
              this.evaluationTableType = null;
              this.toastError('Erro ao obter avaliações do curso');
              this.loading = false;
            });
      }
    }
    ,
    getYearByCourse(id) {
      EvaluationService.findYearByCourse(JSON.stringify({'cursoId': id})).then((data) => {
        this.toastSuccess('Anos do curso com sucesso');
        data.forEach(item => {
          this.yearsCourse.push(
              {'ano':item}
          );
        });
      }).catch(() => {
        this.toastError('Erro ao obter Anos do curso');
      });
    },
    getClassByCourseAndYear(year) {
      EvaluationService.findClassByCourseAndYear(JSON.stringify({
            'cursoId': this.cursoId,
            'ano': year
          },
      )).then((data) => {
        this.toastSuccess('Cadeira(as) do curso com sucesso');
        this.classesByCourse = data;
      }).catch(() => {
        this.toastError('Erro ao obter Cadeira(as) do curso');
      });
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
      // EvaluationService.list().then((data) => {
      //   this.curses = data;
      //   this.loading = false;
      // });
    },

    saveRegistration() {
      console.log(this.formData);
      RegistrationService.create(this.formData).then(() => {
        this.toastSuccess('Matricula criado com sucesso');
        this.formData = {
          nome: '',
          email: '',
          password: '',
          passwordConfirm: '',
          BI: '',
          NUIT: '',
          contacto_1: '',
          contacto_2: '',
          curso_id: ''
        };
      }).catch((error) => {
        this.validateForm(error.response.data.errors);
        console.log(error.response);
        console.log(this.formData);

        if (error.response.status === 422){
          this.toastError('Verifique os campos obrigatorios');
          return;
        }
        this.toastError('Erro ao criar matricula');
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
