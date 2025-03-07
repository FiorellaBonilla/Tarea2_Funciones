import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import bookIndex from './bookIndex.vue';
import bookDetails from './bookDetails.vue';
import publisherDetails from './publisherDetails.vue';
import publisherIndex from './publisherIndex.vue';
import authorIndex from './authorIndex.vue';
import authorDetails from './authorDetails.vue';

const routes = [
  
  
  { path: '/book', component: bookIndex, props: true },
  { path: '/book/show/:id', component: bookDetails, props: { show: true } },
  { path: '/publisher', component: publisherIndex, props: true },
  { path: '/publisher/show/:id', component: publisherDetails, props: { show: true } },
  { path: '/author', component: authorIndex, props: true },
  { path: '/author/show/:id', component: authorDetails, props: { show: true } }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);

app.use(router);

app.mount('#app');
