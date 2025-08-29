import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import './assets/style.css'

import axios from 'axios'
import VueAxios from 'vue-axios'


const app = createApp(App);


app.use(VueAxios, axios);

app.use(i18n)

app.use(router);

app.use(store)

app.mount("#app");
