require('./bootstrap');

let Vue = require('vue')

import router from './routes';
import App from "./vue/App.vue";

const app = Vue.createApp(App)

app.use(router)
app.mount("#app")

