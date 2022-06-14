import './bootstrap';

import {createApp} from "vue";
import VueCookie from 'vue-cookies';


import Root from './App.vue';

const app = createApp(Root);
app.use(VueCookie);
app.provide('cookies', app.config.globalProperties.$cookies);


app.mount("#app");
