<script setup>
import { useproductsStore } from '@/stores/product'

const productStore = useproductsStore()

</script>

<template>
  <h1>Listagem de produtos</h1>
  <table>
    <thead>
      <tbody>
        <tr v-for="product in productStore.products" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td>Em breve...</td>
          <button>Ver</button>
        </tr>
      </tbody>
    </thead>
  </table>
</template>
