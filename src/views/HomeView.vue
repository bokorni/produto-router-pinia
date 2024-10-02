<script setup>
import { useproductsStore } from '@/stores/product'
import { useRouter } from 'vue-router';
const router = useRouter();
const productStore = useproductsStore();
function visualizar(id){
router.push(`/produto/${id}`)
}
</script>

<template>
  <h1>Listagem de produtos</h1>
  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>Nome</th>
        <th>Preço</th>
        <th>Ações</th>
      </tr>
      <tbody>
        <tr v-for="product in productStore.products" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          
          <td>
            <button @click="visualizar(product.id)">Ver</button>
 
          </td>
        </tr>
      </tbody>
    </thead>
  </table>
</template>
