import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { createRouter, createWebHistory } from 'vue-router';

import ContactBookStart from './components/ContactBookStart.vue';
import ContactDetails from './components/ContactDetails.vue';
import NewContactForm from './components/NewContactForm.vue';
import EditContactForm from './components/EditContactForm.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: ContactBookStart },
    { path: '/contact/:id', component: ContactDetails },
    { path: '/new', component: NewContactForm },
    { path: '/edit/:id', component: EditContactForm },
  ],
});

createApp(App).mount('#app')
