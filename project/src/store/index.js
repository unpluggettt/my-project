import { createRouter, createWebHistory } from 'vue-router';
import Home from "@/components/Home.vue"; 
import Services from "@/components/Services.vue"; 
import Login from "@/components/Login.vue"; 
import Registration from "@/components/Registration.vue";

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/registration',
      name: 'Registration',
      component: Registration
    },
    {
      path: '/services',
      name: 'Services',
      component: Services
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

 export default router;