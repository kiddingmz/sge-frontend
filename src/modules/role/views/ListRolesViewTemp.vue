
<template>
  <div class="card">
    <DataTable :value="products" tableStyle="min-width: 50rem">
      <i class="pi pi-check-circle text-green-500"></i>
      <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header"></Column>
    </DataTable>
  </div>
</template>

<script>
import { ProductService } from '../service/ProductService';

export default {
  data() {
    return {
      products: null,
      columns: null
    };
  },
  created() {
    this.columns = [
      { field: 'code', header: 'Code' },
      { field: 'name', header: 'Name' },
      { field: 'category', header: 'Category' },
      { field: 'quantity', header: 'Quantity' }
    ];
  },
  mounted() {
    ProductService.getProductsMini().then((data) => (this.products = data));
  }
};
</script>