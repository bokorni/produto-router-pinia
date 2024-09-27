import { ref  } from 'vue'
import { defineStore } from 'pinia'

export const useproductsStore = defineStore('products', () => {
  const products = ref([
    {id: 1, name: 'Salgado frito', price: 4.5, qty: 100},
    {id: 2, name: 'Pão de batata', price: 5.5, qty: 50},
    {id: 3, name: 'Bolo de chocolate', price: 6.0, qty: 20},
    {id: 4, name: 'Bolo de cenoura', price: 3.0, qty: 70},
    {id: 5, name: 'Brownie', price: 6.4, qty: 10}
  ])
 

  return { products }
})
