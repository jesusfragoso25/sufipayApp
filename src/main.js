import App from './App.vue'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router' //rutas
import VueSweetalert2 from 'vue-sweetalert2' //ventanas modales
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';


//Componentes
import Login from './components/Login.vue';
import Home from './components/Home.vue';

const app = createApp(App)

    const router = createRouter({ 
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [    
    { 
        path: '/', 
        name: 'login',
        component: Login 
    },
    { 
        path: '/home', 
        name: 'home',
        component: Home 
    }
  ]});
  export default router
  

app.use (VueSweetalert2)
app.use(router) 
app.mount('#app')
