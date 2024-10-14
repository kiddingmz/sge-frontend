<template>
  <HeaderContent title="Estudantes" />
  <vue3-datatable ref="datatable" :data="students" :columns="columns" :options="options" />
  <div class="card shadow-sm p-2 mt-5 border-0">
    <div class="card shadow-sm border-0 p-2">
      <div class="app-card-body">
        <div class="table-responsive">
          <table class="table app-table-hover mb-0 text-left ">
            <thead>
            <tr>
              <th class="cell border text-center text-secondary">Id</th>
              <th class="cell border text-center text-secondary">Curso</th>
              <th class="cell border text-center text-secondary">Codigo</th>
              <th class="cell border text-center text-secondary">Apelido</th>
              <th class="cell border text-center text-secondary">Outros nomes</th>
              <th class="cell border text-center text-secondary">Nivel</th>
              <th class="cell border text-center text-secondary">Acções</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td class="cell border align-vertical-middle text-secondary">100233</td>
              <td class="cell border align-vertical-middle text-secondary">LEI</td>
              <td class="cell border align-vertical-middle text-secondary">20240142</td>
              <td class="cell border align-vertical-middle text-secondary">Jade</td>
              <td class="cell border align-vertical-middle text-secondary">Bernize</td>
              <td class="cell border align-vertical-middle text-secondary">2</td>
              <td class="cell text-center align-vertical-middle border">

                <a
                >
                                            <span class="badge text-primary">
                                              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                              </svg>
                                            </span>
                </a>

                <a class="add-row">
                                            <span class="badge text-center text-danger">
                                              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16">
                                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                                              </svg>
                                            </span>
                </a>

              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import HeaderContent from "@/components/headercontent/HeaderContent.vue";

  export default {
    name: 'ListStudent',
    components: {HeaderContent}
  }
</script>

<style scoped>

</style>