<template>
  <div></div> 
  <!-- <div class="card border-0">
    <header-content title="Estudante" show-link="off" show-btn="off"></header-content>
  </div>
  <div class="card mt-5 border-0 shadow-sm">
    <div class="card-header barra-vertical">
      <small>
        <div class="d-flex gap-2 align-items-center">
          <i class="fa-solid fa-user-shield"></i>
          <span class="ml-2">Novo estudante</span>
        </div>
      </small>
    </div>
    <div class="card-body row">
      <div class="d-flex row align-items-center col-12">
        <div class="col-6 d-flex items-center gap-1 mb-3 flex-column size-n">
          <label for="name" class="font-semibold w-24">Nome <small class="text-danger">*</small></label>
          <InputGroup>
            <InputGroupAddon>
              <i class="pi pi-user size-n"></i>
            </InputGroupAddon>
            <InputText id="name" class="flex-auto size-n custom-input small-input-group" autocomplete="off" placeholder="nome" v-model="nome"/>
          </InputGroup>
        </div>
        <div class="col-6 d-flex items-center gap-1 mb-3 flex-column size-n">
          <label for="name" class="font-semibold w-24">Email <small class="text-danger">*</small></label>
          <InputGroup>
            <InputGroupAddon>
              <i class="pi pi-user size-n"></i>
            </InputGroupAddon>
            <InputText id="name" class="flex-auto size-n custom-input small-input-group" autocomplete="off" placeholder="email" v-model="nome"/>
          </InputGroup>
        </div>
        <div class="col-6 d-flex items-center gap-1 mb-3 flex-column size-n">
          <label for="name" class="font-semibold w-24">BI <small class="text-danger">*</small></label>
          <InputGroup>
            <InputGroupAddon>
              <i class="pi pi-user size-n"></i>
            </InputGroupAddon>
            <InputText id="name" class="flex-auto size-n custom-input small-input-group" autocomplete="off" placeholder="bi" v-model="nome"/>
          </InputGroup>
        </div>
        <div class="col-6 d-flex items-center gap-1 mb-3 flex-column size-n">
          <label for="name" class="font-semibold w-24">NUIT <small class="text-danger">*</small></label>
          <InputGroup>
            <InputGroupAddon>
              <i class="pi pi-user size-n"></i>
            </InputGroupAddon>
            <InputText id="name" class="flex-auto size-n custom-input small-input-group" autocomplete="off" placeholder="NUIT" v-model="nome"/>
          </InputGroup>
        </div>
        <div class="col-6 d-flex items-center gap-1 mb-3 flex-column size-n">
          <label for="name" class="font-semibold w-24">Senha <small class="text-danger">*</small></label>
          <InputGroup>
            <InputGroupAddon>
              <i class="pi pi-user size-n"></i>
            </InputGroupAddon>
            <InputText id="name" class="flex-auto size-n custom-input small-input-group" autocomplete="off" placeholder="senha" v-model="nome"/>
          </InputGroup>
        </div>
        <div class="col-6 d-flex items-center gap-1 mb-3 flex-column size-n">
          <label for="name" class="font-semibold w-24">Confirmar senha <small class="text-danger">*</small></label>
          <InputGroup>
            <InputGroupAddon>
              <i class="pi pi-user size-n"></i>
            </InputGroupAddon>
            <InputText id="name" class="flex-auto size-n custom-input small-input-group" autocomplete="off" placeholder="confirmar senha" v-model="nome"/>
          </InputGroup>
        </div>

        <div class="d-flex items-center gap-1 mb-3 flex-column size-n col-4">
          <label for="name" class="font-semibold w-24">Curso <small class="text-danger">*</small></label>

          <Select v-model="selectedCountry" :options="countries" filter optionLabel="name" placeholder="Selecione curso" class="w-full md:w-56 small-input-group">
            <template #value="slotProps">
              <div v-if="slotProps.value" class="flex items-center small-input-group size-n">
                <div class="small-input-group">{{ slotProps.value.name }}</div>
              </div>
              <span v-else>
                    {{ slotProps.placeholder }}
                </span>
            </template>
            <template #option="slotProps">
              <div class="flex items-center small-input-group size-n">
                <div class="small-input-group">{{ slotProps.option.name }}</div>
              </div>
            </template>
          </Select>
        </div>
        <div class="d-flex items-center gap-1 mb-3 flex-column size-n col-4">
          <label for="name" class="font-semibold w-24">Contacto Principal <small class="text-danger">*</small></label>
          <InputGroup>
            <InputGroupAddon>
              <i class="pi pi-user size-n"></i>
            </InputGroupAddon>
            <InputNumber v-model="value2" id="name" class="size-n small-input-group" inputId="withoutgrouping" :useGrouping="false" fluid />
          </InputGroup>
        </div>
        <div class="col-4 d-flex items-center gap-1 mb-3 flex-column size-n">
          <label for="name" class="font-semibold w-24">Contacto Secundario <small class="text-danger">*</small></label>
          <InputGroup>
            <InputGroupAddon>
              <i class="pi pi-user size-n"></i>
            </InputGroupAddon>
            <InputNumber v-model="value2" inputId="withoutgrouping" id="name" class="size-n small-input-group" :useGrouping="false" fluid />
          </InputGroup>
        </div>
      </div>
    </div>
    <div class="card-footer d-flex gap-3 justify-content-end">
      <Button label="Guardar" icon="pi pi-check" class="p-button-success" @click="saveRole" />
      <Button label="Cancelar" icon="pi pi-times" severity="secondary" outlined/>
    </div>
  </div> -->
</template>

<script>
// import HeaderContent from "@/components/headercontent/HeaderContent.vue";
// import { RoleService } from "@/modules/role/service/RoleService";
// import InputNumber from "primevue/inputnumber";
// import Select from "primevue/select";
// import Button from "primevue/button";
// import InputText from "primevue/inputtext";
// import InputGroup from "primevue/inputgroup";
// import InputGroupAddon from "primevue/inputgroupaddon";


export default {
  name: 'CreateRole',
  components: {
    // HeaderContent,
    // Button,
    // InputText,
    // InputGroup,
    // InputGroupAddon,
    // Select,
    // InputNumber
  },
  data() {
    return {
      permissions: [],
      selectedPermissions: [],
      roleName: '',
      description: '',
      selectedCountry: null,
      countries: [
        { name: 'Quimica', code: 'Q' },
        { name: 'Electrotecnica', code: 'E' },
        { name: 'Civil', code: 'C' },
        { name: 'Mecanica', code: 'M' },
      ]
    };
  },
  mounted() {
    // RoleService.getRolesGroup().then((data) => {
    //   this.permissions = data;
    // });
  },
  methods: {
    saveRole() {
      console.log('Salvar Papel:', this.roleName);
      console.log('Descrição:', this.description);
      console.log('Permissões Selecionadas:', this.selectedPermissions);

      //UserService.createRole({ name: this.roleName, description: this.description, permissions: this.selectedPermissions });
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

.size-m {
  font-size: 0.8rem;
}

.size-n {
  font-size: 0.7rem !important;
}
</style>