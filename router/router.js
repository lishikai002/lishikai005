import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import routes from './router.config';
var router = new VueRouter({
    routes:routes
})
export default router;