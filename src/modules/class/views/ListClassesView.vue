<template>
  <div class="card border-0">
    <header-content title="Cadeiras"
      @toggle-visibility="toggleVisibility" show-link="off" show-btn="on"
    ></header-content>
  </div>

  <Dialog v-model:visible="visible" modal header="Adicionar Cadeira" :style="{ width: '35rem' }">
    <div class="card size-n">
      <Tabs value="0">
        <TabList>
          <Tab value="0" as="div" class="d-flex items-center gap-2">
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
            <span class="font-bold whitespace-nowrap">Adicionar cadeira</span>
          </Tab>
          <Tab value="1" as="div" class="d-flex items-center gap-2">
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" shape="circle" />
            <span class="font-bold whitespace-nowrap">Adicionar cadeira ao Curso</span>
          </Tab>
        </TabList>
        <TabPanels>
          <form @submit.stop.prevent="saveClasse">

            <TabPanel value="0" as="p" class="m-0">
            <div class="d-flex items-center gap-1 mb-3 flex-column size-n">
              <label for="name" class="font-semibold w-24">Nome
                <small class="text-danger">*
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
                    id="name"
                    class="flex-auto size-n custom-input small-input-group"
                    autocomplete="off"
                    placeholder="nome"
                    v-model="formData.nome"
                    :invalid="errorsValidation.nome"
                />
              </InputGroup>
            </div>

            <div class="d-flex items-center gap-1 mb-3 flex-column size-n"
            >
              <label for="name" class="font-semibold w-24">Departamento
                <small class="text-danger">*
                  <label
                      class="font-weight-normal text-danger"
                      v-if="errorsValidation.departamentoId">
                    {{ errorsValidation.departamentoId }}
                  </label>
                </small>
              </label>

              <Select
                  v-model="formData.departamentoId"
                  :options="departments"
                  filter optionLabel="nome"
                  placeholder="Selecione departamento"
                  class="w-full md:w-56 small-input-group"
                  optionValue="id"
                  :invalid="errorsValidation.departamentoId"
              >
                <template #value="slotProps">
                  <div v-if="slotProps.value" class="flex items-center small-input-group size-n">
                    <div class="small-input-group">
                      {{
                        `${departments.find(c => c.id === slotProps.value)?.nome} - ${departments.find(c => c.id === slotProps.value)?.faculdade?.nome}`
                      }}
                    </div>
                  </div>
                  <span v-else>{{ slotProps.placeholder }}</span>
                </template>

                <template #option="slotProps">
                  <div class="flex items-center small-input-group size-n">
                    <div class="small-input-group">{{ `${slotProps.option.nome} - ${slotProps.option.faculdade.nome}` }}</div>
                  </div>
                </template>
              </Select>
            </div>
            <Divider />

            <div class="d-flex justify-content-end gap-2">
              <Button label="Cancelar" icon="pi pi-times" class="small-input-group size-n" severity="secondary" type="reset" outlined @click="visible = false"
              />
              <Button label="Guardar" icon="pi pi-check" class="small-input-group size-n p-button-success" type="submit"
              />
            </div>
          </TabPanel>
          </form>
          <TabPanel value="1" as="p" class="m-0">
            <div class="d-flex items-center gap-1 mb-3 flex-column size-n">
              <label for="name" class="font-semibold w-24">Cadeira <small class="text-danger">*</small></label>

              <Select v-model="selectedCountry" :options="countries" filter optionLabel="name" placeholder="Selecione cadeira" class="w-full md:w-56 small-input-group">
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
            <div class="d-flex items-center gap-1 mb-3 flex-column size-n">
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

            <div class="d-flex items-center gap-1 mb-3 flex-column size-n">
              <label for="name" class="font-semibold w-24">Precendencia <small class="text-danger">*</small></label>
              <InputGroup>
                <InputGroupAddon>
                  <i class="pi pi-user size-n"></i>
                </InputGroupAddon>
                <InputText id="name" class="flex-auto size-n custom-input small-input-group" autocomplete="off" placeholder="precendencia" v-model="nome"/>
              </InputGroup>
            </div>

            <div class="d-flex row mb-5">
              <div class="d-flex items-center gap-1 mb-3 flex-column size-n col-4 small-input-group">
                <label for="minmax-buttons" class="font-semibold w-24">Ano de entrada em vigor <small class="text-danger">*</small></label>
                <InputGroup class="small-input-group">
                  <InputGroupAddon>
                    <i class="pi pi-user size-n"></i>
                  </InputGroupAddon>
                  <InputNumber v-model="value2" inputId="minmax-buttons" mode="decimal" showButtons :min="2000" :max="3000" fluid class="custom-input-number"/>
                </InputGroup>
              </div>
              <div class="d-flex items-center gap-1 mb-3 flex-column size-n col-4 small-input-group">
                <label for="minmax-buttons" class="font-semibold w-24">Ano de saida em vigor  <small class="text-danger">*</small></label>
                <InputGroup class="small-input-group">
                  <InputGroupAddon>
                    <i class="pi pi-user size-n"></i>
                  </InputGroupAddon>
                  <InputNumber v-model="value2" inputId="minmax-buttons" mode="decimal" showButtons :min="0" :max="100" fluid class="custom-input-number"/>
                </InputGroup>
              </div>
              <div class="d-flex items-center gap-1 mb-3 flex-column size-n col-4 small-input-group">
                <label for="minmax-buttons" class="font-semibold w-24">Semestre <small class="text-danger">*</small></label>
                <InputGroup class="small-input-group">
                  <InputGroupAddon>
                    <i class="pi pi-user size-n"></i>
                  </InputGroupAddon>
                  <InputNumber v-model="value2" inputId="minmax-buttons" mode="decimal" showButtons :min="0" :max="100" fluid class="custom-input-number"/>
                </InputGroup>
              </div>
            </div>
            <Divider />

            <div class="d-flex justify-content-end gap-2">
              <Button label="Cancelar" icon="pi pi-times" class="small-input-group size-n" severity="secondary" outlined @click="visible = false"
              />
              <Button label="Guardar" icon="pi pi-check" class="small-input-group size-n p-button-success" @click="visible = false"
              />
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  </Dialog>

  <div class="card mt-5 border-0 shadow-sm">
    <div class="card-header barra-vertical">
      <small class="d-flex justify-content-between">
        <div class="d-flex gap-2 align-items-center">
          <i class="fa-solid fa-user-shield"></i>
          <span class="ml-2">Lista de Cadeiras : {{ quantity }}</span>
        </div>
        <div>
          <a @click="refresh" class="btn-p">
            <i class="fa-solid fa-rotate-right"></i>
          </a>
        </div>
      </small>
    </div>
    <div class="card-body">
      <Toast />
      <ConfirmDialog></ConfirmDialog>
      <DataTable :value="classes" responsiveLayout="scroll" table-style="font-size: 0.8rem"
                 :paginator="true"
                 :rows="10"
                 :loading="loading"
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
        <Column field="nome" header="Nome"></Column>
        <Column field="departamento.nome" header="Departamento"></Column>
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

import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';



import HeaderContent from "@/components/headercontent/HeaderContent.vue";
import { ClassService } from "../service/ClassService";
import {DepartmentService} from "@/modules/department/service/DepartmentService";

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
    Divider,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel
  },
  data() {
    return {
      errorsValidation: {},
      loading: true,
      classes: [],
      filters: {},
      visible: false,
      departments: [],
      quantity: 0,
      formData: {
        nome: '',
        departamentoId: '',
      },
    };
  },
  watch: {
    classes: {
      handler: function (val) {
        this.quantity = val.length;
      },
      deep: true,
    },
  },
  mounted() {
    ClassService.list().then((data) => {
      this.classes = data;
      this.loading = false;
    });

    DepartmentService.list().then((data) => {
      this.departments = data;
    });
  },
  methods: {
    toggleVisibility() {
      this.visible = !this.visible;
    },

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
    refresh() {
      this.loading = true;
      ClassService.list().then((data) => {
        this.classes = data;
        this.loading = false;
      });
    },
    saveClasse() {
      ClassService.create(this.formData).then(() => {
        this.toastSuccess('Cadeira criado com sucesso');
        this.formData = {
          nome: '',
          departamentoId: '',
        };
      }).catch((error) => {
        this.validateForm(error.response.data.errors);

        if (error.response.status === 422){
          this.toastError('Verifique os campos obrigatorios');
          return;
        }
        this.toastError('Erro ao criar cadeira');
      });

    }
  },

  // methods: {
  //
  //   confirm1() {
  //     this.$confirm.require({
  //       message: 'Tem certeza de que deseja prosseguir?',
  //       header: 'Confirmação',
  //       icon: 'pi pi-exclamation-triangle',
  //       rejectProps: {
  //         label: 'Cancelar',
  //         severity: 'secondary',
  //         outlined: true
  //       },
  //       acceptProps: {
  //         label: 'Guardar'
  //       },
  //       accept: () => {
  //         this.$toast.add({ severity: 'info', summary: 'Confirmado', detail: 'Você aceitou', life: 3000 });
  //       },
  //       reject: () => {
  //         this.$toast.add({ severity: 'error', summary: 'Rejeitado', detail: 'Você rejeitou', life: 3000 });
  //       }
  //     });
  //   },
  //   confirm2() {
  //     this.$confirm.require({
  //       message: 'Deseja excluir este registro?',
  //       header: 'Zona de perigo',
  //       icon: 'pi pi-info-circle',
  //       rejectProps: {
  //         label: 'Cancelar',
  //         severity: 'secondary',
  //         outlined: true
  //       },
  //       acceptProps: {
  //         label: 'Apagar',
  //         severity: 'danger'
  //       },
  //       accept: () => {
  //         this.$toast.add({ severity: 'info', summary: 'Confirmado', detail: 'Registro excluído', life: 3000 });
  //       },
  //       reject: () => {
  //         this.$toast.add({ severity: 'error', summary: 'Rejeitado', detail: 'Você rejeitou', life: 3000 });
  //       }
  //     });
  //   }
  // }
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
