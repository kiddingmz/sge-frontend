<template>
  <div class="card border-0">
    <header-content title="Usuario" show-btn="off" show-link="off"></header-content>
  </div>
  <Toast />
  <div class="card mt-5 border-0 shadow-sm">
    <form @submit.stop.prevent="saveUser">
    <div class="card-header barra-vertical">
      <small>
        <div class="d-flex gap-2 align-items-center">
          <i class="fa-solid fa-users-gear"></i>
          <span class="ml-2">Novo Usuario</span>
        </div>
      </small>
    </div>
    <div class="card-body">
<!--      <div>-->
<!--        <i class="pi pi-info-circle"></i> Campos obrigatorios contem-->
<!--        <small class="text-danger">*</small>-->
<!--      </div>-->
        <div class="d-flex row align-items-center col-12">
          <div class="col-6 d-flex items-center gap-1 mb-3 flex-column size-n">
            <label for="name" class="font-semibold w-24">Nome <small class="text-danger">*
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
                  id="name" class="flex-auto size-n custom-input small-input-group" autocomplete="off" placeholder="nome" v-model="formData.nome"/>
            </InputGroup>
          </div>
          <div class="col-6 d-flex items-center gap-1 mb-3 flex-column size-n">
            <label for="name" class="font-semibold w-24">Email <small class="text-danger">*
              <label
                  class="font-weight-normal text-danger"
                  v-if="errorsValidation.email">
                {{ errorsValidation.email }}
              </label>
            </small></label>
            <InputGroup>
              <InputGroupAddon>
                <i class="pi pi-user size-n"></i>
              </InputGroupAddon>
              <InputText
                  :invalid="errorsValidation.email"
                  id="name" type="email" class="flex-auto size-n custom-input small-input-group" autocomplete="off" placeholder="email" v-model="formData.email"/>
            </InputGroup>
          </div>
          <div class="col-6 d-flex items-center gap-1 mb-3 flex-column size-n">
            <label for="name" class="font-semibold w-24">BI <small class="text-danger">*
              <label
                  class="font-weight-normal text-danger"
                  v-if="errorsValidation.BI">
                {{ errorsValidation.BI }}
              </label>
            </small></label>
            <InputGroup>
              <InputGroupAddon>
                <i class="pi pi-user size-n"></i>
              </InputGroupAddon>
              <InputText
                  :invalid="errorsValidation.BI"
                  id="name" class="flex-auto size-n custom-input small-input-group" autocomplete="off" placeholder="bi" v-model="formData.BI"/>
            </InputGroup>
          </div>
          <div class="col-6 d-flex items-center gap-1 mb-3 flex-column size-n">
            <label for="name" class="font-semibold w-24">NUIT <small class="text-danger">*
              <label
                  class="font-weight-normal text-danger"
                  v-if="errorsValidation.NUIT">
                {{ errorsValidation.NUIT }}
              </label>
            </small></label>
            <InputGroup>
              <InputGroupAddon>
                <i class="pi pi-user size-n"></i>
              </InputGroupAddon>
              <InputText
                  :invalid="errorsValidation.NUIT"
                  id="name" class="flex-auto size-n custom-input small-input-group" autocomplete="off" placeholder="NUIT" v-model="formData.NUIT"/>
            </InputGroup>
          </div>
          <div class="col-6 d-flex items-center gap-1 mb-3 flex-column size-n">
            <label for="name" class="font-semibold w-24">Senha <small class="text-danger">*
              <label
                  class="font-weight-normal text-danger"
                  v-if="errorsValidation.password">
                {{ errorsValidation.password }}
              </label>
            </small></label>
            <InputGroup>
              <InputGroupAddon>
                <i class="pi pi-user size-n"></i>
              </InputGroupAddon>
              <InputText
                  :invalid="errorsValidation.password"
                  id="name" class="flex-auto size-n custom-input small-input-group" autocomplete="off" placeholder="senha" v-model="formData.password"/>
            </InputGroup>
          </div>
          <div class="col-6 d-flex items-center gap-1 mb-3 flex-column size-n">
            <label for="name" class="font-semibold w-24">Confirmar senha <small class="text-danger">*
              <label
                  class="font-weight-normal text-danger"
                  v-if="errorsValidation.passwordConfirm">
                {{ errorsValidation.passwordConfirm }}
              </label>
            </small></label>
            <InputGroup>
              <InputGroupAddon>
                <i class="pi pi-user size-n"></i>
              </InputGroupAddon>
              <InputText
                  :invalid="errorsValidation.passwordConfirm"
                  id="name" class="flex-auto size-n custom-input small-input-group" autocomplete="off" placeholder="confirmar senha" v-model="formData.passwordConfirm"/>
            </InputGroup>
          </div>

          <div class="d-flex items-center gap-1 mb-3 flex-column size-n col-6">
            <label for="name" class="font-semibold w-24">Contacto Principal <small class="text-danger">*
              <label
                  class="font-weight-normal text-danger"
                  v-if="errorsValidation.contacto1">
                {{ errorsValidation.contacto1 }}
              </label>
            </small></label>
            <InputGroup>
              <InputGroupAddon>
                <i class="pi pi-user size-n"></i>
              </InputGroupAddon>
              <InputNumber
                  :invalid="errorsValidation.contacto1"
                  id="basi"  placeholder="8x-xxxxxx" class="size-n small-input-group" v-model="formData.contacto1"/>
            </InputGroup>
          </div>
          <div class="col-6 d-flex items-center gap-1 mb-3 flex-column size-n">
            <label for="name" class="font-semibold w-24">Contacto Secundario <small class="text-danger">*
              <label
                  class="font-weight-normal text-danger"
                  v-if="errorsValidation.contacto2">
                {{ errorsValidation.contacto2 }}
              </label>
            </small></label>
            <InputGroup>
              <InputGroupAddon>
                <i class="pi pi-user size-n"></i>
              </InputGroupAddon>
              <InputNumber
                  :invalid="errorsValidation.contacto2"
                  id="basic"  placeholder="8x-xxxxxx" class="size-n small-input-group" v-model="formData.contacto2"/>
            </InputGroup>
          </div>
        </div>
        <div class="mt-3 mx-1 size border p-4 row" >
          <h6 class="size-m">Selecionar Papeis: <small class="text-danger">*
            <label
                class="font-weight-normal text-danger"
                v-if="errorsValidation.papelId">
              {{ errorsValidation.papelId }}
            </label>
          </small></h6>

          <div class="col-12">
            <div class="d-flex gap-2 bg-body-secondary mb-1 col-2">
              <Checkbox
                  inputId="all_role"
                  v-model="allSelected"
                  @change="toggleAllRoles"
              />
              <label for="all_role">Selecionar tudo</label>
            </div>
          </div>

          <div v-for="role in roles" :key="role.id" class="col-4">
            <div class="d-flex gap-2 bg-body-secondary mb-1">
              <Checkbox
                  v-model="formData.papelId"
                  :inputId="`role_${role.id}`"
                  :value="role.id"
              />
              <label :for="`role_${role.id}`">{{ role.nome }}</label>
            </div>
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
import Toast from 'primevue/toast';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Checkbox from 'primevue/checkbox';
import InputNumber from 'primevue/inputnumber';
import HeaderContent from "@/components/headercontent/HeaderContent.vue";
import { RoleService } from "@/modules/role/service/RoleService";
import {UserService} from "@/modules/user/service/UserService";

export default {
  name: 'CreateRole',
  components: {
    HeaderContent,
    InputGroup,
    InputGroupAddon,
    Button,
    InputText,
    Checkbox,
    InputNumber,
    Toast
  },
  data() {
    return {
      allSelected: false,
      roles: [],
      selectedRoles: [],
      roleName: '',
      description: '',
      errorsValidation: {},
      formData: {
        nome: '',
        email: '',
        password: '',
        passwordConfirm: '',
        BI: '',
        NUIT: '',
        contacto1: '',
        contacto2: '',
        papelId: ''
      }
    };
  },
  mounted() {
    RoleService.list().then((data) => {
      this.roles = data;
    });
  },
  methods: {
    toggleAllRoles() {
      if (this.allSelected) {
        this.formData.papelId = this.roles.map(role => role.id);
      } else {
        this.formData.papelId = [];
      }
    },
    validateForm(error) {
      let errorsFormed = {};
      for (const [key, value] of Object.entries(error)) {
        errorsFormed[key] = value[0];
      }
      this.errorsValidation = { ...errorsFormed };
    },

    toastSuccess() {
      this.$toast.add({
        severity: 'success',
        summary: 'Success Message',
        detail: 'Message Content',
        life: 3000 });
    },
    toastInfo(title, msg) {
      this.$toast.add({
        severity: 'info',
        summary: title,
        detail: msg,
        life: 3000 });
    },
    toastWarn() {
      this.$toast.add({
        severity: 'warn',
        summary: 'Warn Message',
        detail: 'Message Content',
        life: 3000 });
    },
    toastError(msg) {
      this.$toast.add({
        severity: 'error',
        summary: msg,
        life: 3000 });
    },

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

    saveUser() {
      console.log(this.formData);
      UserService.create(this.formData).then(() => {
        this.showSuccessAlert('Usuario criado com sucesso');
      }).catch((error) => {
        this.validateForm(error.response.data.errors);

        if (error.response.status === 422){
          // this.showErrorAlert('Verifique os campos obrigatorios');
          this.toastError('Verifique os campos obrigatorios');
          return;
        }
        this.showErrorAlert('Erro ao criar usuario');
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