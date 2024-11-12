<template>
  <div class="card border-0">
    <header-content title="Notas"
      @toggle-visibility="toggleVisibility" show-link="off" show-btn="off"
    ></header-content>
  </div>
  <Toast />

  <Dialog v-model:visible="visible" modal header="Adicionar Notas" :style="{ width: '25rem' }">
<!--    <span class e="text-surface-500 dark:text-surface-400 block mb-8">Adicionar Departamento</span>-->
    <div class="d-flex items-center gap-1 mb-3 flex-column size-n">
      <label for="name" class="font-semibold w-24">Nome <small class="text-danger">*</small></label>
      <InputText id="name" class="flex-auto size-n custom-input small-input-group" autocomplete="off" placeholder="nome" />
    </div>
    <div class="d-flex items-center gap-1 mb-3 flex-column size-n">
      <label for="description" class="font-semibold w-24 ">Descrição</label>
      <InputText id="description" class="flex-auto size-n custom-input small-input-group" autocomplete="off" placeholder="descrição"/>
    </div>
    <div class="d-flex justify-content-end gap-2">
      <Button label="Cancelar" icon="pi pi-times" class="small-input-group size-n" severity="secondary" outlined @click="visible = false"
      />
      <Button label="Guardar" icon="pi pi-check" class="small-input-group size-n p-button-success" @click="visible = false"
      />
    </div>
  </Dialog>

  <div class="card border-0 shadow-sm mt-5">
    <form @submit.stop.prevent="searchGrade">
      <div class="d-flex justify-content-between p-2 flex-wrap">
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
        <div class="d-flex items-center col-2 gap-1 mb-2 flex-column size-n">
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
        <div class="d-flex items-center col-3 gap-1 mb-2 flex-column size-n">
          <label for="name" class="font-semibold w-24">Avaliação
            <small class="text-danger">*
              <label
                  class="font-weight-normal text-danger"
                  v-if="errorsValidation.classByCourse_error">
                {{ errorsValidation.classByCourse_error }}
              </label>
            </small></label>
          <Select
              v-model="nomeAvaliacao"
              :options="dataEvaluation"
              filter optionLabel="nomeAvaliacao"
              placeholder="Selecione avaliação"
              class="w-full md:w-56 small-input-group"
              optionValue="nomeAvaliacao"
              :invalid="errorsValidation.classByCourse_error"
          >
            <template #value="slotProps">
              <div v-if="slotProps.value" class="flex items-center small-input-group size-n">
                <div class="small-input-group">{{slotProps.value}}</div>
              </div>
              <span v-else>{{ slotProps.placeholder }}</span>
            </template>

            <template #option="slotProps">
              <div class="flex items-center small-input-group size-n">
                <div class="small-input-group">{{ slotProps.option.nomeAvaliacao }}</div>
              </div>
            </template>
          </Select>
        </div>
      </div>
      <div class="d-flex justify-content-end p-2">
        <Button label="Pesquisar" class="small-input-group size-n" severity="success" size="small" icon="pi pi-search"  iconPos="left" type="submit"/>
      </div>
    </form>
  </div>
  <div class="card size-n shadow border-0 mt-4 border-radius">

    <Tabs value="0">
      <TabList>
        <Tab value="0" class="d-flex gap-2 align-items-center justify-content-center">
          <i class="pi pi-eye"></i>
          <span class="ml-2">Ver notas</span>
        </Tab>
        <Tab value="1" class="d-flex gap-2 align-items-center justify-content-center">
          <i class="pi pi-pen-to-square"></i>
          <span class="ml-2">Lançar notas</span>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">
          <div class="card mt-1 size-nn border-0 shadow">
            <div class="card-header barra-vertical">
              <small class="d-flex justify-content-between">
                <div class="d-flex gap-2 align-items-center">
                  <i class="fa-solid fa-user-shield"></i>
                  <span class="ml-2">Lista de Estudantes : 12</span>
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
              <DataTable :value="dataGrades" responsiveLayout="scroll" table-style="font-size: 0.8rem"
                         :paginator="true"
                         :rows="10"
                         paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                         :rowsPerPageOptions="[5, 10, 25]"
                         :filters="filters"
                         :globalFilterFields="['name', 'role']"
                         :size="'small'"
                         :loading="loading"
              >
                <template #header>
                  <div class="custom-input">
                    <span>Pesquisar: </span>
                    <InputText v-model="filters['global']" placeholder="Digite para pesquisar" class="custom-input small-input-group" />
                  </div>
                </template>
                <Column field="estudante.numero_estudante" header="Numero Estudante"></Column>
                <Column field="estudante.nome" header="Nome"></Column>
                <Column field="nota" header="Nota"></Column>
                <!--        <Column field="id"  header="Nivel">-->
                <!--          &lt;!&ndash;          <template #body="slotProps">&ndash;&gt;-->
                <!--          &lt;!&ndash;            <Tag&ndash;&gt;-->
                <!--          &lt;!&ndash;                  v-for="permission in slotProps.data.permissions"&ndash;&gt;-->
                <!--          &lt;!&ndash;                  :key="permission"&ndash;&gt;-->
                <!--          &lt;!&ndash;                  :value="permission"&ndash;&gt;-->
                <!--          &lt;!&ndash;                  severity="null"&ndash;&gt;-->
                <!--          &lt;!&ndash;                  class e="m-1 p-0 px-1 size bg-body-secondary"&ndash;&gt;-->
                <!--          &lt;!&ndash;              />&ndash;&gt;-->
                <!--          &lt;!&ndash;          </template>&ndash;&gt;-->
                <!--        </Column>-->
                <!--        <Column field="name" header="Semestre"></Column>-->
                <!--        <Column field="name" header="Tipo"></Column>-->
                <!--        <Column v-for="col in columns" :key="col.field" :field="col.field" :header="col.header" :body="getColumnBody(col.field, grades)" />-->
              </DataTable>
            </div>
          </div>

        </TabPanel>
        <TabPanel value="1">
          <div class="card mt-1 size-nn border-0 shadow">
            <div class="card-header barra-vertical">
              <small class="d-flex justify-content-between">
                <div class="d-flex gap-2 align-items-center">
                  <i class="fa-solid fa-user-shield"></i>
                  <span class="ml-2">Lista de Estudantes : 12</span>
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
                <DataTable :loading="loading" :value="dataGrades" editMode="cell" @cell-edit-complete="onCellEditComplete"
                           size="'small'"
                           :pt="{
                table: { style: 'min-width: 50rem' },
                column: {
                    bodycell: ({ state }) => ({
                        class: [{ '!py-0': state['d_editing'] }]
                    })
                }
            }"
                >

                  <Column field="estudante.numero_estudante" header="Numero Estudante" style="font-size: 0.8rem"></Column>
                  <Column field="estudante.nome" header="Nome" style="font-size: 0.8rem"></Column>
                  <Column field="nota" header="Nota" style="font-size: 0.8rem">
                    <template #editor="{ data, field }">
                        <InputNumber v-model="data[field]" style="font-size: 0.8rem" class="small-input-group size-n"/>
                    </template>
                  </Column>
                </DataTable>
            </div>
          </div>

        </TabPanel>
      </TabPanels>
    </Tabs>
  </div>
</template>

<script>
// import Tag from "primevue/tag";
// import Toolbar from "primevue/toolbar";
import Button from "primevue/button";
import ConfirmDialog from "primevue/confirmdialog";
import Toast from "primevue/toast";
import Dialog from 'primevue/dialog';
import InputNumber from "primevue/inputnumber";
import InputText from "primevue/inputtext";
import Column from "primevue/column";

// import FileUpload from "primevue/fileupload";
// import IconField from "primevue/iconfield";
// import InputIcon from "primevue/inputicon";
// import InputText from "primevue/inputtext";

import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';


import HeaderContent from "@/components/headercontent/HeaderContent.vue";
import { GradeService } from "../service/GradeService";
import Select from "primevue/select";
import {CourseService} from "@/modules/course/service/CourseService";
import {ClassService} from "@/modules/class/service/ClassService";
import {EvaluationService} from "@/modules/evaluation/service/EvaluationService";

export default {
  name: 'ListRoles',
  components: {
    HeaderContent,
    Button,
    ConfirmDialog,
    Toast,
    Dialog,
    Select,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    Column,
    InputText,
    InputNumber
  },
  data() {
    return {
      allEvaluationChecked: false,
      ano: '',
      loading: true,
      yearsCourse: [],
      classes: [],
      quantity: 0,
      cursoId: '',
      yearCourse: '',
      classByCourse: '',
      classesByCourse: [],
      evaluationTableType: null,
      nomeAvaliacao: '',
      curses: [],
      errorsValidation: {},
      grades: [],
      filters: {},
      visible: false,
      dataEvaluation: [],
      dataGrades: [],
      formData: {
        "cursoId":"3",
        "cadeiraId":"21",
        "ano":"2024",
        "estudanteId":"73",
        "nota":"20",
        "nomeAvaliacao":"teste trigger criarAvaliacoes "
      }
    };
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
    classByCourse: {
      handler: function () {
        this.getEvaluation();
      },
      deep: true,
    }
  },
  mounted() {
    CourseService.list().then((data) => {
        this.curses = data;
    });

    ClassService.list().then((data) => {
      this.classes = data;
    });

  },
  computed: {
    tableData() {
      return this.dataEvaluation ? [this.dataEvaluation] : [];
    }
  },
  methods: {
    searchGrade() {
      let error = {};

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
        this.getAllGrades();
    },
    getAllGrades() {
      GradeService.list(JSON.stringify({
        'cursoId': this.cursoId,
        'cadeiraId': this.classByCourse,
        'ano': this.yearCourse,
        'nomeAvaliacao': this.nomeAvaliacao
      }))
          .then((data) => {
            this.toastSuccess(`Notas de ${this.nomeAvaliacao} obtidas com sucesso`);
            this.dataGrades = data.data;
            console.log(this.dataGrades);
            this.loading = false;
          })
          .catch(() => {
            this.evaluationTableType = null;
            this.toastError(`Erro ao obter notas de ${this.nomeAvaliacao}`);
            this.loading = false;
          });
    },
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
    getEvaluation() {
      EvaluationService.listByClass(JSON.stringify({
        'cursoId': this.cursoId,
        'cadeiraId': this.classByCourse,
        'ano': this.yearCourse
      }))
          .then((data) => {
            this.toastSuccess(`Avaliações do curso obtidas com sucesso`);
            this.dataEvaluation = [data.data];
            console.log(this.dataEvaluation);
          }).catch(() => {
          this.toastError('Erro ao obter avaliações do curso');
      });
    },
    toggleVisibility() {
      this.visible = !this.visible;
    },
    confirm1() {
      this.$confirm.require({
        message: 'Tem certeza de que deseja prosseguir?',
        header: 'Confirmação',
        icon: 'pi pi-exclamation-triangle',
        rejectProps: {
          label: 'Cancelar',
          severity: 'secondary',
          outlined: true
        },
        acceptProps: {
          label: 'Guardar'
        },
        accept: () => {
          this.$toast.add({ severity: 'info', summary: 'Confirmado', detail: 'Você aceitou', life: 3000 });
        },
        reject: () => {
          this.$toast.add({ severity: 'error', summary: 'Rejeitado', detail: 'Você rejeitou', life: 3000 });
        }
      });
    },
    confirm2() {
      this.$confirm.require({
        message: 'Deseja excluir este registro?',
        header: 'Zona de perigo',
        icon: 'pi pi-info-circle',
        rejectProps: {
          label: 'Cancelar',
          severity: 'secondary',
          outlined: true
        },
        acceptProps: {
          label: 'Apagar',
          severity: 'danger'
        },
        accept: () => {
          this.$toast.add({ severity: 'info', summary: 'Confirmado', detail: 'Registro excluído', life: 3000 });
        },
        reject: () => {
          this.$toast.add({ severity: 'error', summary: 'Rejeitado', detail: 'Você rejeitou', life: 3000 });
        }
      });
    },

    onCellEditComplete(event) {
      let { data, newValue, field } = event;

      switch (field) {
        case 'nota':
          if (this.isPositiveInteger(newValue)) data[field] = newValue;
          else event.preventDefault();
          break;

        default:
          if (newValue.trim().length > 0) data[field] = newValue;
          else event.preventDefault();
          break;
      }

      data = {
        numeroEstudante	: data.estudante.numero_estudante,
        nota: data.nota,
        cursoId: this.cursoId,
        cadeiraId: this.classByCourse,
        ano: this.yearCourse,
        nomeAvaliacao: this.nomeAvaliacao
      };

      GradeService.update(data).then(() => {
        this.$toast.add({ severity: 'success', summary: 'Sucesso', detail: 'Nota atualizada com sucesso', life: 3000 });
      }).catch(() => {
        this.$toast.add({ severity: 'error', summary: 'Erro', detail: 'Erro ao atualizar a nota', life: 3000 });
      });
    },
    isPositiveInteger(val) {
      let str = String(val);

      str = str.trim();

      if (!str) {
        return false;
      }

      str = str.replace(/^0+/, '') || '0';
      var n = Math.floor(Number(str));

      return n !== Infinity && String(n) === str && n >= 0;
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
      this.getAllGrades();
      this.loading = false;
    }
  }
}
</script>

<style scoped>
.size {
  font-size: 0.7rem;
  font-weight: bolder;
  color: #000;
}

.size-n {
  font-size: 0.7rem;
}

.size-nn {
  font-size: 0.878rem;
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
  height: 30px;
}

.custom-input {
  font-size: 0.9rem;
  padding: 0.5rem;
}

.border-radius {
  border-radius: 60px !important;
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
