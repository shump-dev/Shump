import Vue from 'vue'
import Router from 'vue-router'
import Login  from '@/views/Login.vue'
import Choose  from '@/views/Choose.vue'
import Invest  from '@/views/Invest.vue'

Vue.use(Router)

const routes = [
    {
        name: 'Choose',
        path: '/Choose',
        component: Choose,
        meta: {}
    },
    {
        name: 'Login',
        path: '/',
        component: Login,
        meta: {}
    },
    {
        name: 'Invest',
        path: '/Choose/Invest',
        component: Invest,
        meta: {}
    }
]

const router = new Router({ routes })

export default router;