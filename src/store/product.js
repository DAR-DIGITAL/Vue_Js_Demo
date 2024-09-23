import { defineStore } from 'pinia'
import { reactive } from 'vue'
import axios from 'axios'
import { useAuthStore } from './auth' // assuming you have an authStore


export const useProductStore = defineStore('product', {
  state: () => {
    
const api = axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: {
    Authorization: `Bearer ${useAuthStore().token}`,
    'Content-Type': 'application/json'
  }
})
    const products = reactive([])
    const product = reactive({})

    return {
      products,
      product,
      api
    }
  },
  actions: {
    async fetchProducts() {
      try {
        const response = await this.api.get('/products')
        this.products = response.data
      } catch (error) {
        console.error(error)
      }
    },
    async createProduct(data) {
      try {
        const response = await this.api.post('/products', data)
        this.products.push(response.data)
      } catch (error) {
        console.error(error)
      }
    },
    async getProduct(id) {
      try {
        const response = await this.api.get(`/products/${id}`)
        this.product = response.data
      } catch (error) {
        console.error(error)
      }
    },
    async updateProduct(id, data) {
      try {
        const response = await this.api.put(`/products/${id}`, data)
        const index = this.products.findIndex(product => product.id === id)
        this.products.splice(index, 1, response.data)
      } catch (error) {
        console.error(error)
      }
    },
    async deleteProduct(id) {
      try {
        await this.api.delete(`/products/${id}`)
        const index = this.products.findIndex(product => product.id === id)
        this.products.splice(index, 1)
      } catch (error) {
        console.error(error)
      }
    }
  }
})