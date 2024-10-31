<template>
  <div class="card border-0">
    <header-content title="Matricula" show-btn="off" show-link="off"></header-content>
  </div>
  <Toast />
  <div class="card mt-5 border-0 shadow-sm">
    <form @submit.stop.prevent="saveRegistration">
    <div class="card-header barra-vertical">
      <small>
        <div class="d-flex gap-2 align-items-center">
          <i class="fa-solid fa-users-gear"></i>
          <span class="ml-2">Nova Matricula</span>
        </div>
      </small>
    </div>
    <div class="card-body">
<!--      <div>-->
<!--        <i class e="pi pi-info-circle"></i> Campos obrigatorios contem-->
<!--        <small class e="text-danger">*</small>-->
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
                  v-if="errorsValidation.contacto_1">
                {{ errorsValidation.contacto_1 }}
              </label>
            </small></label>
            <InputGroup>
              <InputGroupAddon>
                <i class="pi pi-user size-n"></i>
              </InputGroupAddon>
              <InputNumber
                  :invalid="errorsValidation.contacto_1"
                  id="basi"  placeholder="8x-xxxxxx" class="size-n small-input-group" v-model="formData.contacto1"/>
            </InputGroup>
          </div>
          <div class="col-6 d-flex items-center gap-1 mb-3 flex-column size-n">
            <label for="name" class="font-semibold w-24">Contacto Secundario <small class="text-danger">*
              <label
                  class="font-weight-normal text-danger"
                  v-if="errorsValidation.contacto_2">
                {{ errorsValidation.contacto_2 }}
              </label>
            </small></label>
            <InputGroup>
              <InputGroupAddon>
                <i class="pi pi-user size-n"></i>
              </InputGroupAddon>
              <InputNumber
                  :invalid="errorsValidation.contacto_2"
                  id="basic"  placeholder="8x-xxxxxx" class="size-n small-input-group" v-model="formData.contacto2"/>
            </InputGroup>
          </div>
          <div class="d-flex items-center col-6 gap-1 mb-3 flex-column size-n">
            <label for="name" class="font-semibold w-24">Curso
              <small class="text-danger">*
                <label
                    class="font-weight-normal text-danger"
                    v-if="errorsValidation.curso_id">
                  {{ errorsValidation.curso_id }}
                </label>
              </small></label>

            <Select
                v-model="formData.cursoId"
                :options="curses"
                filter optionLabel="nome"
                placeholder="Selecione curso"
                class="w-full md:w-56 small-input-group"
                optionValue="id"
                :invalid="errorsValidation.curso_id"
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
import InputNumber from 'primevue/inputnumber';
import HeaderContent from "@/components/headercontent/HeaderContent.vue";
import {RegistrationService} from "@/modules/registration/service/RegistrationService";
import Select from 'primevue/select';
import {CourseService} from "@/modules/course/service/CourseService";

export default {
  name: 'CreateRole',
  components: {
    HeaderContent,
    InputGroup,
    InputGroupAddon,
    Button,
    InputText,
    InputNumber,
    Toast,
    Select
  },
  data() {
    return {
      curses: [],
      allSelected: false,
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
        cursoId: ''
      }
    };
  },
  watch: {
    curso_id(value) {
      this.formData.curso_id = value.id;
    }
  },
  mounted() {
    CourseService.list().then((data) => {
      this.curses = data;
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

    saveRegistration() {
      console.log(this.formData);
      RegistrationService.create(this.formData).then(() => {
        this.toastSuccess('Matricula criado com sucesso');
        this.formData = {
          nome: '',
          email: '',
          password: '',
          passwordConfirm: '',
          BI: '',
          NUIT: '',
          contacto_1: '',
          contacto_2: '',
          curso_id: ''
        };
      }).catch((error) => {
        this.validateForm(error.response.data.errors);
        console.log(error.response);
        console.log(this.formData);

        if (error.response.status === 422){
          this.toastError('Verifique os campos obrigatorios');
          return;
        }
        this.toastError('Erro ao criar matricula');
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