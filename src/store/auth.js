import { defineStore } from 'pinia'
import { reactive } from 'vue'
import axios from 'axios'



export const useAuthStore = defineStore('auth', {
  state: () => {
    const user = reactive({})
    const token = reactive('')
    const api = axios.create({
      baseURL: 'http://localhost:8000/api',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json'
      }
    })
    return {
      user,
      token,
      api
    }
  },
  actions: {
    async login(data) {
      try {
        const response = await this.api.post('/login', data)
        this.token = response.data.api_token

        this.user = response.data.data
        localStorage.setItem('token', this.token)

      } catch (error) {
        console.error(error)
      }
    },
    async logout() {
      try {
        // await this.api.post('/logout')
        this.token = ''
        this.user = {}
        localStorage.removeItem('token')
      } catch (error) {
        console.error(error)
      }
    },
    async verifyToken() {
      try {
        const token = localStorage.getItem('token')
        this.token = token
        // if (token) {
        //   const response = await api.get('/user', {
        //     headers: {
        //       Authorization: `Bearer ${token}`
        //     }
        //   })
        //   this.user = response.data
        // }
      } catch (error) {
        console.error(error)
      }
    }
  }
})