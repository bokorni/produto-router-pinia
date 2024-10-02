<script setup>
import { useproductsStore } from '@/stores/product';
import { onMounted, ref } from 'vue';
const props = defineProps(['id']);
const product = ref({})
const productsStore = useproductsStore();

onMounted( () => {
  product.value = productsStore.getProductById(props.id)
})
</script>
<template>
  <h1>Detalhes do Produto - {{ id }}</h1>
  <h2>Nome: {{ product.name }}</h2>
  <h2>Preço: {{ product.price }}</h2>
  <h2>Quantidade:{{ product.qty }}</h2>
</template>
