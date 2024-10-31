<template>
  <div class="card border-0">
    <header-content title="Matriculas" show-btn="off" show-link="on" :link="{ name: 'createRegistration' }"></header-content>
  </div>
  <div class="card mt-5 border-0 shadow-sm">
    <div class="card-header barra-vertical">
      <small class="d-flex justify-content-between">
        <div class="d-flex gap-2 align-items-center">
          <i class="fa-solid fa-registration-gear"></i>
          <span class="ml-2">Lista de Matriculas : {{ quantity }}</span>
        </div>
        <div>
          <a @click="refresh" class="btn-p">
            <i class="fa-solid fa-rotate-right"></i>
          </a>
        </div>
      </small>
    </div>
    <div class="card-body">
      <DataTable :value="registration" responsiveLayout="scroll" table-style="font-size: 0.8rem" :size="'small'" :loading="loading"
                 :paginator="true"
                 :rows="10"
                 paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                 :rowsPerPageOptions="[5, 10, 25]"
      >
        <Column field="dadosPessoais.id" header="ID"></Column>
        <Column field="dadosMatricula.numeroEstudante" header="Nr Estudante"></Column>
        <Column field="dadosPessoais.nome" header="Nome"></Column>
        <Column field="dadosPessoais.email" header="Email"></Column>
        <Column field="dadosPessoais.contacto.0" header="Contacto"></Column>
        <Column field="dadosMatricula.dataEntrada" header="Data Entrada"></Column>
        <Column field="dadosMatricula.curso.nome" header="Curso"></Column>
        <Column field="actions" header="Acções">
          <template #body="slotProps" >
            <div class="d-flex gap-2">
              <router-link :to="{name: 'editUser', params: {id: slotProps.data.dadosPessoais.id}}">
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
import HeaderContent from "@/components/headercontent/HeaderContent.vue";
import { RegistrationService } from "../service/RegistrationService";

export default {
  name: 'ListRoles',
  components: { HeaderContent},
  data() {
    return {
      registration: null,
      loading: true,
      quantity: 0,
    };
  },
  watch: {
    registration: {
      handler: function (val) {
        this.quantity = val.length;
      },
      deep: true,
    },
  },
  mounted() {
    RegistrationService.list().then((data) => {
      this.registration = data;
      this.loading = false;
    });

  },
  methods: {
    refresh() {
      this.loading = true;
      RegistrationService.list().then((data) => {
        this.registration = data;
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
