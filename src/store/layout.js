import { defineStore } from 'pinia'
import { reactive, ref } from 'vue';

export const useLayoutStore = defineStore('layout', {
  // arrow function recommended for full type inference
  state: () => {
    const darkMode = ref(false)
    const currentRoute = ref('/dashboard')

 

    return {
      darkMode,
      currentRoute,
    
   

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