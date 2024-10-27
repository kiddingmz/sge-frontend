<template>
  <div class="card border-0">
    <header-content title="Usuarios" show-btn="off" show-link="on" :link="{ name: 'createUser' }"></header-content>
  </div>
  <div class="card mt-5 border-0 shadow-sm">
    <div class="card-header barra-vertical">
      <small class="d-flex justify-content-between">
        <div class="d-flex gap-2 align-items-center">
          <i class="fa-solid fa-users-gear"></i>
          <span class="ml-2">Lista de Usuarios : {{ quantity }}</span>
        </div>
        <div>
          <a href="#" class="btn-p">
            <i class="fa-solid fa-rotate-right"></i>
          </a>
        </div>
      </small>
    </div>
    <div class="card-body">
      <DataTable :value="users" responsiveLayout="scroll" table-style="font-size: 0.8rem" :size="'small'" :loading="loading"
                 :paginator="true"
                 :rows="10"
                 paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                 :rowsPerPageOptions="[5, 10, 25]"
      >
        <Column field="id" header="ID"></Column>

        <Column field="nome" header="Nome"></Column>

        <Column field="email" header="Email"></Column>

        <Column header="Papeis">
          <template #body="slotProps">
            <Tag
                v-for="papel in slotProps.data.papeis"
                :key="papel"
                :value="papel"
                severity="null"
                class="m-1 p-0 px-1 size bg-body-secondary"
            />
          </template>
        </Column>

        <Column field="actions" header="Acções">
          <template #body="slotProps" >
            <span v-if="slotProps === 1"></span>
<!--            <div class="d-flex gap-2">-->
<!--              <router-link :to="{name: 'editUser', params: {id: slotProps.data.dadosPessoais.id}}">-->
<!--                <i class="pi pi-pen-to-square text-success"></i>-->
<!--              </router-link>-->
<!--              <a :href="slotProps.data.dadosPessoais.id">-->
<!--                <i class="pi pi-trash text-danger"></i>-->
<!--              </a>-->
<!--            </div>-->
            <div class="d-flex gap-2">
              <router-link :to="{name: 'editUser', params: {id: 1}}">
                <i class="pi pi-pen-to-square text-success"></i>
              </router-link>
              <a href="#">
                <i class="pi pi-trash text-danger"></i>
              </a>
            </div>
          </template>
        </Column>
      </DataTable>


    </div>
  </div>
</template>

<script>
import Tag from "primevue/tag";

import HeaderContent from "@/components/headercontent/HeaderContent.vue";
import { EnrollmentService } from "../service/EnrollmentService";

export default {
  name: 'ListRoles',
  components: { HeaderContent, Tag },
  data() {
    return {
      roles: null,
      users: null,
      loading: true,
      quantity: 0,
    };
  },
  watch: {
    users: {
      handler: function (val) {
        this.quantity = val.length;
      },
      deep: true,
    },
  },
  mounted() {
    EnrollmentService.getUsers().then((data) => (this.roles = data));
    EnrollmentService.list().then((data) => {
      this.users = data;
      this.loading = false;
    });

    // console.log(this.users);
  },
  methods: {
  }
}
</script>

<style scoped>
.size {
  font-size: 0.7rem;
  font-weight: bolder;
  color: #000;
}
</style>
