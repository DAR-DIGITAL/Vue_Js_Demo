import { createApp } from 'vue';
import App from './App.vue';
import './style.css';
import { createPinia } from 'pinia';
import router from './route/index.js'; // Import the router

const app = createApp(App);
const pinia = createPinia();
app.use(router); // Use the router

app.use(pinia);

app.mount('#app');