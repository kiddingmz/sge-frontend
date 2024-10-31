<template>
  <div class="card border-0">
    <header-content title="Departamentos"
      @toggle-visibility="toggleVisibility" show-link="off" show-btn="on"
    ></header-content>
  </div>

  <Dialog v-model:visible="visible" modal header="Adicionar Departamento" :style="{ width: '25rem' }">
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

  <div class="card mt-5 border-0 shadow-sm">
    <div class="card-header barra-vertical">
      <small class="d-flex justify-content-between">
        <div class="d-flex gap-2 align-items-center">
          <i class="fa-solid fa-user-shield"></i>
          <span class="ml-2">Lista de Departamentos : 12</span>
        </div>
        <div>
          <a href="#" class="btn-p">
            <i class="fa-solid fa-rotate-right"></i>
          </a>
        </div>
      </small>
    </div>
    <div class="card-body">
      <Toast />
      <ConfirmDialog></ConfirmDialog>
      <DataTable :value="departments" responsiveLayout="scroll" table-style="font-size: 0.8rem"
                 :paginator="true"
                 :rows="10"
                 :loading="loading"
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
        <Column field="faculdade.nome" header="Faculdade"></Column>
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
// import InputText from "primevue/inputtext";


import HeaderContent from "@/components/headercontent/HeaderContent.vue";
import { DepartmentService } from "../service/DepartmentService";

export default {
  name: 'ListRoles',
  components: {
    HeaderContent,
    Button,
    ConfirmDialog,
    Toast,
    Dialog,
  },
  data() {
    return {
      loading: true,
      departments: [],
      filters: {},
      visible: false,
      formData: {
        nome: '',
        descricao: '',
        faculdadeId: ''
      }
    };
  },
  mounted() {
    DepartmentService.list().then((data) => {
      this.departments = data;
      this.loading = false;
    });
  },
  methods: {
    toggleVisibility() {
      this.visible = !this.visible;
    },
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
