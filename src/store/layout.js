import { defineStore } from 'pinia'
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

export const useLayoutStore = defineStore('layout', {
  // arrow function recommended for full type inference
  state: () => {
    const darkMode = ref(false)
    const currentRoute = ref('/dashboard')
    const router = useRouter()

    const routes = reactive([
      { name: 'Dashboard', path: '/dashboard' },
      { name: 'Products', path: '/products' },
      { name: 'Users', path: '/users' },
      { name: 'Categories', path: '/categories' },
      
    ])

    return {
      darkMode,
      currentRoute,
      routes,
      router

    }
  },
  actions: {
    toggleDarkMode() {
        this.darkMode = !this.darkMode;
      },
      updateCurrentRoute( route) {
        this.currentRoute = route.path;
       

      }
  },
})