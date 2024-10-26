<template>
  <div class="card border-0">
    <header-content title="Docente" show-link="off" show-btn="off"></header-content>
  </div>
  <div class="card mt-5 border-0 shadow-sm">
    <form @submit.stop.prevent="saveTeacher">
      <div class="card-header barra-vertical">
        <small>
          <div class="d-flex gap-2 align-items-center">
            <i class="fa-solid fa-users-gear"></i>
            <span class="ml-2">Novo Docente</span>
          </div>
        </small>
      </div>
      <div class="card-body">
        <div class="d-flex row align-items-center col-12">
          <div class="col-6 d-flex items-center gap-1 mb-3 flex-column size-n">
            <label for="name" class="font-semibold w-24">Nome <small class="text-danger">*</small></label>
            <InputGroup>
              <InputGroupAddon>
                <i class="pi pi-user size-n"></i>
              </InputGroupAddon>
              <InputText id="name" class="flex-auto size-n custom-input small-input-group" autocomplete="off" placeholder="nome" v-model="formData.nome"/>
            </InputGroup>
          </div>
          <div class="col-3 d-flex items-center gap-1 mb-3 flex-column size-n">
            <label for="name" class="font-semibold w-24">Email <small class="text-danger">*</small></label>
            <InputGroup>
              <InputGroupAddon>
                <i class="pi pi-user size-n"></i>
              </InputGroupAddon>
              <InputText id="name" type="email" class="flex-auto size-n custom-input small-input-group" autocomplete="off" placeholder="email" v-model="formData.email"/>
            </InputGroup>
          </div>
          <div class="col-3 d-flex items-center gap-1 mb-3 flex-column size-n">
            <label for="name" class="font-semibold w-24">Formação <small class="text-danger">*</small></label>
            <InputGroup>
              <InputGroupAddon>
                <i class="pi pi-user size-n"></i>
              </InputGroupAddon>
              <InputText id="name" class="flex-auto size-n custom-input small-input-group" autocomplete="off" placeholder="formação" v-model="formData.formacao"/>
            </InputGroup>
          </div>
          <div class="col-6 d-flex items-center gap-1 mb-3 flex-column size-n">
            <label for="name" class="font-semibold w-24">BI <small class="text-danger">*</small></label>
            <InputGroup>
              <InputGroupAddon>
                <i class="pi pi-user size-n"></i>
              </InputGroupAddon>
              <InputText id="name" class="flex-auto size-n custom-input small-input-group" autocomplete="off" placeholder="bi" v-model="formData.BI"/>
            </InputGroup>
          </div>
          <div class="col-6 d-flex items-center gap-1 mb-3 flex-column size-n">
            <label for="name" class="font-semibold w-24">NUIT <small class="text-danger">*</small></label>
            <InputGroup>
              <InputGroupAddon>
                <i class="pi pi-user size-n"></i>
              </InputGroupAddon>
              <InputText id="name" class="flex-auto size-n custom-input small-input-group" autocomplete="off" placeholder="NUIT" v-model="formData.NUIT"/>
            </InputGroup>
          </div>
          <div class="col-6 d-flex items-center gap-1 mb-3 flex-column size-n">
            <label for="name" class="font-semibold w-24">Senha <small class="text-danger">*</small></label>
            <InputGroup>
              <InputGroupAddon>
                <i class="pi pi-user size-n"></i>
              </InputGroupAddon>
              <InputText id="name" class="flex-auto size-n custom-input small-input-group" autocomplete="off" placeholder="senha" v-model="formData.password"/>
            </InputGroup>
          </div>
          <div class="col-6 d-flex items-center gap-1 mb-3 flex-column size-n">
            <label for="name" class="font-semibold w-24">Confirmar senha <small class="text-danger">*</small></label>
            <InputGroup>
              <InputGroupAddon>
                <i class="pi pi-user size-n"></i>
              </InputGroupAddon>
              <InputText id="name" class="flex-auto size-n custom-input small-input-group" autocomplete="off" placeholder="confirmar senha" v-model="formData.passwordConfirm"/>
            </InputGroup>
          </div>

          <div class="d-flex items-center gap-1 mb-3 flex-column size-n col-6">
            <label for="name" class="font-semibold w-24">Contacto Principal <small class="text-danger">*</small></label>
            <InputGroup>
              <InputGroupAddon>
                <i class="pi pi-user size-n"></i>
              </InputGroupAddon>
              <InputNumber placeholder="8x-xxxxxx" class="size-n small-input-group" v-model="formData.contacto_1"/>
            </InputGroup>
          </div>
          <div class="col-6 d-flex items-center gap-1 mb-3 flex-column size-n">
            <label for="name" class="font-semibold w-24">Contacto Secundario <small class="text-danger">*</small></label>
            <InputGroup>
              <InputGroupAddon>
                <i class="pi pi-user size-n"></i>
              </InputGroupAddon>
              <InputNumber id="basic" placeholder="8x-xxxxxx" class="size-n small-input-group" v-model="formData.contacto1"/>
            </InputGroup>
          </div>
        </div>
      </div>
      <div class="card-footer d-flex gap-3 justify-content-end">
        <Button label="Guardar" icon="pi pi-check" class="p-button-success" type="submit"/>
        <Button label="Cancelar" icon="pi pi-times" severity="secondary" outlined/>
      </div>
    </form>
  </div>
</template>

<script>
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';

import HeaderContent from "@/components/headercontent/HeaderContent.vue";
import {TeacherService} from "@/modules/teacher/service/TeacherService";
import InputNumber from "primevue/inputnumber";

export default {
  name: 'CreateRole',
  components: {
    HeaderContent,
    InputGroup,
    InputGroupAddon,
    Button,
    InputText,
    InputNumber
  },
  data() {
    return {
      permissions: [],
      selectedPermissions: [],
      roleName: '',
      description: '',
      formData: {
        nome: '',
        email: '',
        password: '',
        passwordConfirm: '',
        BI: '',
        NUIT: '',
        contacto_1: '',
        contacto1: '',
        formacao: '',
        papel_id: 2
      }
    };
  },
  mounted() {
  },
  methods: {
    showErrorAlert(msg) {
      this.$swal({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        icon: "error",
        title: msg,
      });
    },
    showSuccessAlert(msg) {
      this.$swal({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1500,
        icon: "success",
        title: msg,
      });
    },
    saveTeacher() {
      console.log(this.formData);
      TeacherService.create(this.formData).then(() => {
        this.showSuccessAlert('Docente criado com sucesso');
      }).catch(() => {
        this.showErrorAlert('Erro ao criar docente');
      });
    }
  },
}
</script>

<style scoped>
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

.pi-user {
  font-size: 1rem;
}

Button {
  font-size: 0.8rem;
  height: 30px;
}
.size-n {
  font-size: 0.7rem !important;
}

.size {
  font-size: 0.7rem;
  font-weight: bolder;
}

.size-m {
  font-size: 0.8rem;
}
</style>