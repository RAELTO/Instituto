import { createApp } from 'vue';
import App from '../src/App.vue';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import router from './router'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';




createApp(App)
  .use(router)
  .use(VueSweetalert2)
  .mount('#app')
