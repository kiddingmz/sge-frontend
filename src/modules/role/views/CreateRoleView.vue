<template>
  <div class="card border-0">
    <header-content title="Papel" show-btn="off" show-link="off"></header-content>
  </div>
  <Toast />
  <form @submit.stop.prevent="saveRole">
    <div class="card mt-5 border-0 shadow-sm">
      <div class="card-header barra-vertical">
        <small>
          <div class="d-flex gap-2 align-items-center">
            <i class="fa-solid fa-user-shield"></i>
            <span class="ml-2">Novo Papel</span>
          </div>
        </small>
      </div>
      <div class="card-body">
        <div class="d-flex row align-items-center">
          <div class="col-6 d-flex items-center gap-1 mb-3 flex-column size-n">
            <label for="name" class="font-semibold w-24">Papel <small class="text-danger">*
              <label
                  class="font-weight-normal text-danger"
                  v-if="errorsValidation.nome">
                {{ errorsValidation.nome }}
              </label>
            </small>
            </label>
            <InputGroup>
              <InputGroupAddon>
                <i class="pi pi-user size-n"></i>
              </InputGroupAddon>
              <InputText
                  :invalid="errorsValidation.nome"
                  id="name" class="flex-auto size-n custom-input small-input-group" autocomplete="off" placeholder="Nome do papel" v-model="formData.nome"/>
            </InputGroup>
          </div>
          <div class="col-6 d-flex items-center gap-1 mb-3 flex-column size-n">
            <label for="name" class="font-semibold w-24">Descrição <small class="text-danger">*
              <label
                  class="font-weight-normal text-danger"
                  v-if="errorsValidation.descricao">
                {{ errorsValidation.descricao }}
              </label>
            </small></label>
            <InputGroup>
              <InputGroupAddon>
                <i class="pi pi-book size-n"></i>
              </InputGroupAddon>
              <InputText
                  :invalid="errorsValidation.descricao"
                  id="name" type="text" class="flex-auto size-n custom-input small-input-group" autocomplete="off" placeholder="Descrição" v-model="formData.descricao"/>
            </InputGroup>
          </div>
        </div>
        <div class="mt-3 mx-1 size border p-4 row" >
          <h6 class="size-m">Selecionar Permissões</h6>
          <div v-for="role in permissions" :key="role.id" class="col-4">
            <h6><small class="size-m text-uppercase">{{ role.nome }}</small></h6>
            <div v-for="(permission, permIndex) in role.permissoes" :key="permIndex" class="d-flex gap-2 bg-body-secondary mb-1">
              <Checkbox
                  v-model="formData.permissoes"
                  :inputId="`permission_${role.id}_${permIndex}`"
                  :value="permission"
              />
              <label :for="`permission_${role.id}_${permIndex}`">{{ permission }}</label>
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer d-flex gap-3 justify-content-end">
        <Button label="Guardar" icon="pi pi-check" class="p-button-success" type="submit"/>
        <Button label="Cancelar" icon="pi pi-times" severity="secondary" outlined/>
      </div>
    </div>
  </form>
</template>

<script>
import Toast from 'primevue/toast';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Checkbox from 'primevue/checkbox';

import HeaderContent from "@/components/headercontent/HeaderContent.vue";
import { RoleService } from "@/modules/role/service/RoleService";

export default {
  name: 'CreateRole',
  components: {
    HeaderContent,
    InputGroup,
    InputGroupAddon,
    Button,
    InputText,
    Checkbox,
    Toast
  },
  data() {
    return {
      errorsValidation: {},
      permissions: [],
      formData: {
        nome: '',
        descricao: '',
        permissoes: []
      }
    };
  },
  mounted() {
    RoleService.list().then((data) => {
      this.permissions = data;
      console.log('Permissões:', this.permissions);
    });
  },
  methods: {
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

    saveRole() {
      console.log(this.formData);
      RoleService.create(this.formData).then(() => {
        this.toastSuccess('Papel criado com sucesso');
        this.formData = {
          nome: '',
          descricao: '',
          permissoes: [],
        };
      }).catch((error) => {
        this.validateForm(error.response.data.errors);
        console.log(error.response);
        console.log(this.formData);

        if (error.response.status === 422){
          this.toastError('Verifique os campos obrigatorios');
          return;
        }
        this.toastError('Erro ao criar usuario');
      });

      // console.log('Salvar Papel:', this.roleName);
      // console.log('Descrição:', this.description);
      // console.log('Permissões Selecionadas:', this.permissoes);

      //EnrollmentService.createRole({ name: this.roleName, description: this.description, permissions: this.permissoes });
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

  .size {
    font-size: 0.7rem;
    font-weight: bolder;
  }

  .size-n {
    font-size: 0.7rem !important;
  }

  .size-m {
    font-size: 0.8rem;
  }
</style>