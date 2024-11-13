<template>
  <div class="card border-0">
    <header-content title="Catalogo" show-link="off" show-btn="off"
    ></header-content>
  </div>
  <Toast />

  <div class="card border-0 shadow-sm mt-5">
    <form @submit.stop.prevent="searchCatalog">
      <div class="d-flex justify-content-center gap-4 p-2">
        <div class="d-flex items-center col-3 gap-1 flex-column size-n">
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
        <div class="align-content-end">
          <Button label="Pesquisar" class="small-input-group size-n" severity="success" size="small" icon="pi pi-search"  iconPos="left" type="submit"/>
        </div>
      </div>
    </form>
  </div>
  <div class="card mt-5 border-0 shadow-sm">
    <div class="card-header barra-vertical">
      <small class="d-flex justify-content-between">
        <div class="d-flex gap-2 align-items-center">
          <i class="fa-solid fa-user-shield"></i>
          <span class="ml-2">Catalogo</span>
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
        <DataTable
            responsiveLayout="scroll"
            :value="cadeiras"
            :paginator="true"
            :rows="10"
            :loading="loading"
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            :rowsPerPageOptions="[5, 10, 25]"
            :filters="filters"
            :globalFilterFields="['nome', 'ano', 'semestre']"
            class="p-datatable-gridlines p-datatable-sm shadow-md rounded-lg"
            table-style="font-size: 0.8rem"
        >
          <template #header>
            <div class="mb-4">
              <h6 class="text-2xl font-bold">{{ dataCatalogs.nome }} - Catálogo de Disciplinas</h6>
              <p class="size-n mt-3"><strong>Descrição:</strong> {{ dataCatalogs.descricao || "Não disponível" }}</p>
              <p class="size-n"><strong>Duração mínima:</strong> {{ dataCatalogs.duracaoMinima }} anos</p>
              <p class="size-n"><strong>Duração máxima:</strong> {{ dataCatalogs.duracaoMaxima }} anos</p>
            </div>
            <Divider/>
            <div class="flex justify-between items-center size-n">
              <div class="flex items-center">
                <span class="mr-2 mt-2">Pesquisar:</span>
                <InputText
                    v-model="filters['global']"
                    placeholder="Digite para pesquisar"
                    class="p-inputtext-sm p-rounded custom-search"
                />
              </div>
            </div>
          </template>

          <Column field="ano" header="Ano" sortable></Column>
          <Column field="semestre" header="Semestre" sortable></Column>
          <Column field="nome" header="Nome" sortable></Column>
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
// import FileUpload from "primevue/fileupload";
// import IconField from "primevue/iconfield";
// import InputIcon from "primevue/inputicon";
import InputText from "primevue/inputtext";
import Select from 'primevue/select';
import HeaderContent from "@/components/headercontent/HeaderContent.vue";
import { CatalogService } from "../service/CatalogService";
import Divider from "primevue/divider";

import {CourseService} from "@/modules/course/service/CourseService";
export default {
  name: 'ListCatalog',
  components: {
    HeaderContent,
    Button,
    ConfirmDialog,
    Toast,
    InputText,
    Select,
    Divider
  },
  data() {
    return {
      errorsValidation: {},
      curses: [],
      filters: {},
      cadeiras: [],
      loading: false,
      quantity: 0,
      dataCatalogs: [],
      cursoId: '',
    };
  },
  mounted() {
    CourseService.list().then((data) => {
        this.curses = data;
    });
  },
  watch:{
    dataCatalogs: {
      handler: function (val) {
        this.dataCatalogs = val;
      },
      deep: true,
    },
  },
  methods: {
    searchCatalog() {
      let error = {};

      if (!this.cursoId) {
        this.toastError('Verifique os campos obrigatórios');
        error.cursoId_error = ['Campo obrigatório'];
        this.validateForm(error);
        return;
      }

      this.loading = true;
      CatalogService.list(this.cursoId)
          .then((data) => {
            if (data) {
              // Atribui diretamente o catálogo e suas cadeiras
              this.dataCatalogs = data;
              this.cadeiras = data.cadeiras || [];
              this.quantity = this.cadeiras.length;

              this.toastSuccess('Pesquisa realizada com sucesso');
            } else {
              this.toastError('Nenhum dado encontrado para o curso selecionado');
              this.cadeiras = [];
              this.quantity = 0;
            }
          })
          .catch(() => {
            this.toastError('Erro ao pesquisar');
          })
          .finally(() => {
            this.loading = false;
          });
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
      this.loading = false;
    },
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
