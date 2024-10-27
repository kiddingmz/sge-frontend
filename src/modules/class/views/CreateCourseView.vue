<template>
  <div class="card border-0">
    <header-content title="Docente" show-link="off" show-btn="off"></header-content>
  </div>
  <div class="card mt-5 border-0 shadow-sm">
    <div class="card-header barra-vertical">
      <small>
        <div class="d-flex gap-2 align-items-center">
          <i class="fa-solid fa-user-shield"></i>
          <span class="ml-2">Novo Docente</span>
        </div>
      </small>
    </div>
    <div class="card-body">
      <div class="d-flex row align-items-center">
        <div class="col-6">
          <InputGroup class="small-input-group">
            <InputGroupAddon>
              <i class="pi pi-user"></i>
            </InputGroupAddon>
            <InputText v-model="roleName" placeholder="Papel" class="custom-input" />
          </InputGroup>
        </div>
        <div class="col-6">
          <InputGroup class="small-input-group">
            <InputGroupAddon>
              <i class="pi pi-book"></i>
            </InputGroupAddon>
            <InputText v-model="description" placeholder="Descrição" class="custom-input" />
          </InputGroup>
        </div>
      </div>
      <div class="mt-3 mx-1 size border p-4 row" >
        <h6 class="size-m">Selecionar Permissões</h6>
        <div v-for="role in permissions" :key="role.id" class="col-4">
          <h6><small class="size-m">{{ role.name }}</small></h6>
          <div v-for="(permission, permIndex) in role.permissions" :key="permIndex" class="d-flex gap-2 bg-body-secondary mb-1">
            <Checkbox
                v-model="selectedPermissions"
                :inputId="`permission_${role.id}_${permIndex}`"
                :value="permission"
            />
            <label :for="`permission_${role.id}_${permIndex}`">{{ permission }}</label>
          </div>
        </div>
      </div>
    </div>
    <div class="card-footer d-flex gap-3 justify-content-end">
      <Button label="Guardar" icon="pi pi-check" class="p-button-success" @click="saveRole" />
      <Button label="Cancelar" icon="pi pi-times" severity="secondary" outlined/>
    </div>
  </div>
</template>

<script>
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
    Checkbox
  },
  data() {
    return {
      permissions: [],
      selectedPermissions: [],
      roleName: '',
      description: '',
    };
  },
  mounted() {
    RoleService.getRolesGroup().then((data) => {
      this.permissions = data;
    });
  },
  methods: {
    saveRole() {
      console.log('Salvar Papel:', this.roleName);
      console.log('Descrição:', this.description);
      console.log('Permissões Selecionadas:', this.selectedPermissions);

      //EnrollmentService.createRole({ name: this.roleName, description: this.description, permissions: this.selectedPermissions });
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
</style>