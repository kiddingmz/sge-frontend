<template>
  <div class="card border-0">
    <header-content title="Cursos"
      @toggle-visibility="toggleVisibility" show-link="off" show-btn="on"
    ></header-content>
  </div>

  <Dialog v-model:visible="visible" modal header="Adicionar Curso" :style="{ width: '35rem' }">
<!--    <span class="text-surface-500 dark:text-surface-400 block mb-8">Adicionar Departamento</span>-->
    <div class="d-flex items-center gap-1 mb-3 flex-column size-n">
      <label for="name" class="font-semibold w-24">Nome <small class="text-danger">*</small></label>
      <InputGroup>
        <InputGroupAddon>
          <i class="pi pi-user size-n"></i>
        </InputGroupAddon>
        <InputText id="name" class="flex-auto size-n custom-input small-input-group" autocomplete="off" placeholder="nome" v-model="nome"/>
      </InputGroup>
    </div>

    <div class="d-flex items-center gap-1 mb-3 flex-column size-n">
      <label for="name" class="font-semibold w-24">Descrição <small class="text-danger">*</small></label>
      <InputGroup>
        <InputGroupAddon>
          <i class="pi pi-user size-n"></i>
        </InputGroupAddon>
        <InputText id="name" class="flex-auto size-n custom-input small-input-group" autocomplete="off" placeholder="descrição" v-model="nome"/>
      </InputGroup>
    </div>

    <div class="d-flex row mb-3">
      <div class="d-flex items-center gap-1 mb-3 flex-column size-n col-6 small-input-group">
        <label for="minmax-buttons" class="font-semibold w-24">Duração Minima <small class="text-danger">*</small></label>
        <InputGroup class="small-input-group">
          <InputGroupAddon>
            <i class="pi pi-user size-n"></i>
          </InputGroupAddon>
          <InputNumber v-model="value2" inputId="minmax-buttons" mode="decimal" showButtons :min="0" :max="100" fluid class="custom-input-number"/>
        </InputGroup>
      </div>
      <div class="d-flex items-center gap-1 mb-3 flex-column size-n col-6 small-input-group">
        <label for="minmax-buttons" class="font-semibold w-24">Duração Maxima <small class="text-danger">*</small></label>
        <InputGroup class="small-input-group">
          <InputGroupAddon>
            <i class="pi pi-user size-n"></i>
          </InputGroupAddon>
          <InputNumber v-model="value2" inputId="minmax-buttons" mode="decimal" showButtons :min="0" :max="100" fluid class="custom-input-number"/>
        </InputGroup>
      </div>
    </div>

    <div class="d-flex items-center gap-1 mb-3 flex-column size-n">
      <label for="name" class="font-semibold w-24">Departamento <small class="text-danger">*</small></label>

      <Select v-model="selectedCountry" :options="countries" filter optionLabel="name" placeholder="Selecione departamento" class="w-full md:w-56 small-input-group">
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

    <Divider />

    <div class="d-flex justify-content-end gap-2">
      <Button label="Cancelar" icon="pi pi-times" class="small-input-group size-n" severity="secondary" outlined @click="visible = false"
      />
      <Button label="Guardar" icon="pi pi-check" class="small-input-group size-n p-button-success" @click="visible = false"
      />
    </div>
  </Dialog>

  <div class="card mt-5 border-0 shadow-sm">
    <div class="card-header barra-vertical">
      <small class="d-flex justify-content-between">
        <div class="d-flex gap-2 align-items-center">
          <i class="fa-solid fa-user-shield"></i>
          <span class="ml-2">Lista de Cursos : 12</span>
        </div>
        <div>
          <a href="#" class="btn-p">
            <i class="fa-solid fa-rotate-right"></i>
          </a>
        </div>
      </small>
    </div>
    <div class="card-body">
      <Toast />
      <ConfirmDialog></ConfirmDialog>
      <DataTable :value="roles" responsiveLayout="scroll" table-style="font-size: 0.8rem"
                 :paginator="true"
                 :rows="10"
                 paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                 :rowsPerPageOptions="[5, 10, 25]"
                 :filters="filters"
                 :globalFilterFields="['name', 'role']"
                 :size="'small'"
      >
        <template #header>
          <div class="custom-input">
            <span>Pesquisar: </span>
            <InputText v-model="filters['global']" placeholder="Digite para pesquisar" class="custom-input small-input-group" />
          </div>
        </template>
        <Column field="id" header="ID"></Column>
        <Column field="name" header="Nome"></Column>
        <Column field="name" header="Descrição"></Column>
        <Column field="id" header="Duração">
          <template #body="slotProps">
            <span>{{  `${slotProps.data.id + 1} - ${slotProps.data.id + 5}` }}</span>
          </template>
        </Column>
        <Column field="name" header="Departamento"></Column>

        <Column field="actions" header="Acções">
          <template #body="slotProps" >
            <span v-if="1===2">{{slotProps.data.name}}</span>
            <div class="d-flex flex-wrap justify-center gap-1">
              <Button icon="pi pi-pen-to-square" severity="success" text rounded aria-label="Search"
                  @click="confirm1()"
              />
              <Button icon="pi pi-trash" severity="danger" text rounded aria-label="Cancelar"
                  @click="confirm2()"
              />
            </div>
          </template>
        </Column>

<!--        <Column v-for="col in columns" :key="col.field" :field="col.field" :header="col.header" :body="getColumnBody(col.field, roles)" />-->
      </DataTable>
    </div>
  </div>
</template>

<script>
// import Tag from "primevue/tag";
// import Toolbar from "primevue/toolbar";
import Button from "primevue/button";
import ConfirmDialog from "primevue/confirmdialog";
import Toast from "primevue/toast";
import Dialog from 'primevue/dialog';

// import FileUpload from "primevue/fileupload";
// import IconField from "primevue/iconfield";
// import InputIcon from "primevue/inputicon";
import InputText from "primevue/inputtext";
import InputGroup from "primevue/inputgroup";
import InputGroupAddon from "primevue/inputgroupaddon";
import InputNumber from 'primevue/inputnumber';
import Select from 'primevue/select';
import Divider from 'primevue/divider';



import HeaderContent from "@/components/headercontent/HeaderContent.vue";
import { CourseService } from "../service/CourseService";

export default {
  name: 'ListRoles',
  components: {
    HeaderContent,
    Button,
    ConfirmDialog,
    Toast,
    Dialog,
    InputText,
    InputGroup,
    InputGroupAddon,
    InputNumber,
    Select,
    Divider
  },
  data() {
    return {
      roles: null,
      columns: null,
      filters: {},
      visible: false,
      selectedCountry: null,
      countries: [
        { name: 'Quimica', code: 'Q' },
        { name: 'Electrotecnica', code: 'E' },
        { name: 'Civil', code: 'C' },
        { name: 'Mecanica', code: 'M' },
      ]
    };
  },
  created() {
    this.columns = [
      { field: 'id', header: 'ID' },
      { field: 'name', header: 'Nome' },
      { field: 'permissions', header: 'Permissões' },
      { field: 'actions', header: 'Acções' }
    ];
  },
  mounted() {
    CourseService.getRoles().then((data) => (this.roles = data));
  },
  methods: {
    toggleVisibility() {
      this.visible = !this.visible;
    },
    confirm1() {
      this.$confirm.require({
        message: 'Tem certeza de que deseja prosseguir?',
        header: 'Confirmação',
        icon: 'pi pi-exclamation-triangle',
        rejectProps: {
          label: 'Cancelar',
          severity: 'secondary',
          outlined: true
        },
        acceptProps: {
          label: 'Guardar'
        },
        accept: () => {
          this.$toast.add({ severity: 'info', summary: 'Confirmado', detail: 'Você aceitou', life: 3000 });
        },
        reject: () => {
          this.$toast.add({ severity: 'error', summary: 'Rejeitado', detail: 'Você rejeitou', life: 3000 });
        }
      });
    },
    confirm2() {
      this.$confirm.require({
        message: 'Deseja excluir este registro?',
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
          this.$toast.add({ severity: 'info', summary: 'Confirmado', detail: 'Registro excluído', life: 3000 });
        },
        reject: () => {
          this.$toast.add({ severity: 'error', summary: 'Rejeitado', detail: 'Você rejeitou', life: 3000 });
        }
      });
    }
  }
}
</script>

<style scoped>
.custom-input-number:focus {
  border-color: var(--primary) !important;
}

InputNumber:focus {
  border-color: var(--primary) !important;
}
.p-inputtext:enabled:focus {
  border-color: var(--primary) !important;
}
.size {
  font-size: 0.7rem;
  font-weight: bolder;
  color: #000;
}

.size-n {
  font-size: 0.7rem !important;
}

 .table-header {
   display: flex;
   justify-content: flex-start;
   align-items: center;
   gap: 0.5rem;
 }

.custom-input:focus {
  border-color: var(--primary) !important;
}

.small-input-group {
  height: 30px !important;
}

.custom-input {
  font-size: 0.9rem;
  padding: 0.5rem;
}

.p-inputtext {
  font-size: 0.8rem;
}

.p-paginator {
  font-size: 0.8rem;
}

.p-inputtext {
  font-size: 0.8rem;
}

.p-paginator {
  font-size: 0.8rem;
}

.p-paginator .p-link {
  font-size: 0.8rem !important;
}

.p-paginator .p-link.p-highlight {
  color: green  !important;
}
</style>
