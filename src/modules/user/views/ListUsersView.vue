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
          <a @click="refresh" class="btn-p">
            <i class="fa-solid fa-rotate-right"></i>
          </a>
        </div>
      </small>
    </div>
    <Toast />
    <ConfirmDialog></ConfirmDialog>
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
<!--            <div class e="d-flex gap-2">-->
<!--              <router-link :to="{name: 'editUser', params: {id: slotProps.data.dadosPessoais.id}}">-->
<!--                <i class e="pi pi-pen-to-square text-success"></i>-->
<!--              </router-link>-->
<!--              <a :href="slotProps.data.dadosPessoais.id">-->
<!--                <i class e="pi pi-trash text-danger"></i>-->
<!--              </a>-->
<!--            </div>-->
            <div class="d-flex flex-wrap justify-center gap-1">
              <Button icon="pi pi-pen-to-square" severity="success" text rounded aria-label="Search"
                      @click="pushToEdit(slotProps.data.id)"
              />
              <Button icon="pi pi-trash" severity="danger" text rounded aria-label="Cancelar"
                      @click="deleteUser(slotProps.data.id)"
              />
            </div>
          </template>
        </Column>
      </DataTable>


    </div>
  </div>
</template>

<script>
import Tag from "primevue/tag";
import Toast from "primevue/toast";
import ConfirmDialog from "primevue/confirmdialog";

import HeaderContent from "@/components/headercontent/HeaderContent.vue";
import { UserService } from "../service/UserService";

export default {
  name: 'ListRoles',
  components: { HeaderContent, Tag, ConfirmDialog, Toast},
  data() {
    return {
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
    UserService.list().then((data) => {
      this.users = data;
      this.loading = false;
    });

  },
  methods: {
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
    pushToEdit(id) {
      this.$router.push({ name: 'editUser', params: { id: id } });
    },
    deleteUser(id) {
      this.$confirm.require({
        message: 'Deseja excluir este usuario?',
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
          UserService.delete(id).then((res) => {
            this.toastSuccess('Usuario eliminado com sucesso');
            console.log(res);
            this.refresh();
          }).catch(() => {
            this.toastError('Erro ao eliminar o usuario');
          });
        },
        reject: () => {
          this.$toast.add({ severity: 'error', summary: 'Rejeitado', detail: 'Você rejeitou', life: 3000 });
        }
      });
    },
    refresh() {
      this.loading = true;
      UserService.list().then((data) => {
        this.users = data;
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
</style>
