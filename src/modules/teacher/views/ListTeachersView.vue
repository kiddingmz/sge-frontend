<template>
  <div class="card border-0">
    <header-content title="Docentes" show-link="on" show-btn="off" :link="{ name: 'createTeacher' }"></header-content>
  </div>
  <div class="card mt-5 border-0 shadow-sm">
    <div class="card-header barra-vertical">
      <small class="d-flex justify-content-between">
        <div class="d-flex gap-2 align-items-center">
          <i class="fa-solid fa-user-shield"></i>
          <span class="ml-2">Lista de Docentes : {{ quantity }}</span>
        </div>
        <div>
          <a @click="refresh" class="btn-p">
            <i class="fa-solid fa-rotate-right"></i>
          </a>
        </div>
      </small>
    </div>
    <div class="card-body">
      <DataTable :value="teachers" responsiveLayout="scroll" table-style="font-size: 0.8rem"
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
        <Column field="dadosPessoais.id" header="ID"></Column>
        <Column field="dadosPessoais.nome" header="Nome"></Column>
        <Column field="dadosPessoais.email" header="Email"></Column>
        <Column field="dadosPessoais.contacto.0"  header="Contacto"></Column>
        <Column field="formacao"  header="Formação"></Column>
        <Column header="Acções">
          <template #body="slotProps" >
            <div class="d-flex gap-2">
              <router-link :to="{name: 'editRole', params: {id: 1}}">
                <i class="pi pi-pen-to-square text-success"></i>
              </router-link>
              <a :href="slotProps.data.id">
                <i class="pi pi-trash text-danger"></i>
              </a>
            </div>
          </template>
        </Column>

<!--        <Column v-for="col in columns" :key="col.field" :field="col.field" :header="col.header" :body="getColumnBody(col.field, teachers)" />-->
      </DataTable>
    </div>
  </div>
</template>

<script>
// import Tag from "primevue/tag";
// import Toolbar from "primevue/toolbar";
// import Button from "primevue/button";
// import FileUpload from "primevue/fileupload";
// import IconField from "primevue/iconfield";
// import InputIcon from "primevue/inputicon";
// import InputText from "primevue/inputtext";


import HeaderContent from "@/components/headercontent/HeaderContent.vue";
import { TeacherService } from "../service/TeacherService";

export default {
  name: 'ListRoles',
  components: {
    HeaderContent,
  },
  data() {
    return {
      filters: {},
      teachers: null,
      loading: true,
      quantity: 0,
    };
  },
  watch: {
    teachers: {
      handler: function (val) {
        this.quantity = val.length;
      },
      deep: true,
    },
  },
  mounted() {
    TeacherService.list().then((data) => {
      this.teachers = data;
      this.loading = false;
    });
  },
  methods: {
    refresh() {
      this.loading = true;
      TeacherService.list().then((data) => {
        this.teachers = data;
        this.loading = false;
      });
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
