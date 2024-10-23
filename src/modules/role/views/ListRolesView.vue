<template>
  <div class="card border-0">
    <header-content title="Papeis" show-btn="off" show-link="on" :link="{ name: 'createRole' }"></header-content>
  </div>
  <div class="card mt-5 border-0 shadow-sm">
    <div class="card-header barra-vertical">
      <small class="d-flex justify-content-between">
        <div class="d-flex gap-2 align-items-center">
          <i class="fa-solid fa-user-shield"></i>
          <span class="ml-2">Lista de Papeis : {{ quantity }}</span>
        </div>
        <div>
          <a href="#" class="btn-p">
            <i class="fa-solid fa-rotate-right"></i>
          </a>
        </div>
      </small>
    </div>
    <div class="card-body">
      <DataTable :value="roles" responsiveLayout="scroll" table-style="font-size: 0.8rem" :size="'small'" :loading="loading">
        <Column field="id" header="ID"></Column>
        <Column field="nome" header="Nome"></Column>
        <Column header="Permissões">
          <template #body="slotProps">
            <Tag
                  v-for="permission in slotProps.data.permissoes"
                  :key="permission"
                  :value="permission"
                  severity="null"
                  class="m-1 p-0 px-1 size bg-body-secondary"
              />
          </template>
        </Column>
        <Column field="actions" header="Acções">
          <template #body="slotProps" >
            <div class="d-flex gap-2">
              <router-link :to="{name: 'editRole', params: {id: slotProps.data.id}}">
                <i class="pi pi-pen-to-square text-success"></i>
              </router-link>
              <a :href="slotProps.data.id">
                <i class="pi pi-trash text-danger"></i>
              </a>
            </div>
          </template>
        </Column>

<!--        <Column v-for="col in columns" :key="col.field" :field="col.field" :header="col.header" :body="getColumnBody(col.field, roles)" />-->
      </DataTable>
    </div>
  </div>
</template>

<script>
import Tag from "primevue/tag";

import HeaderContent from "@/components/headercontent/HeaderContent.vue";
import { RoleService } from "../service/RoleService";

export default {
  name: 'ListRoles',
  components: { HeaderContent, Tag },
  data() {
    return {
      roles: null,
      quantity: 0,
      loading: true,
    };
  },
  watch: {
    roles: {
      handler: function (val) {
        this.quantity = val.length;
      },
      deep: true,
    },
  },
  mounted() {
    RoleService.list().then((data) => {
      this.roles = data;
      this.loading = false;
    });
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
