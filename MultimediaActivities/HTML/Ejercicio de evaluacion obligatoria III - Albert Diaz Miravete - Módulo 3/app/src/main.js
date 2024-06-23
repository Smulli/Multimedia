import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import('./assets/style/style.css');
import('./assets/style/header.css'); 
import('./assets/style/footer.css')

createApp(App).use(router).mount('#app');
