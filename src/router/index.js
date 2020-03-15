import Vue from 'vue'
import VueRouter from 'vue-router'


//注册
Vue.use(VueRouter)

//导入子路由
import Login from '../views/login/index.vue'


//实例化路由
const router = new VueRouter({
    routes: [{
        path: "/login",
        component: Login
    }, ]
})

export default router