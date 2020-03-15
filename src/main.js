import Vue from 'vue'
import App from './App.vue'

//导入element
import ElementUI from 'element-ui';
//导入element css
import 'element-ui/lib/theme-chalk/index.css';

//导入全局样式
import css from './style/index.css'

//注册
Vue.use(ElementUI);
Vue.use(css);

//导入子路由
import router from './router/index'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router
}).$mount('#app')