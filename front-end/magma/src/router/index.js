import Vue          from 'vue'
import Router       from 'vue-router'
import Login        from '@/views/Login.vue'
import Choose       from '@/views/Choose.vue'
import Invest       from '@/views/Invest.vue'
import CreateInvest from '@/views/CreateInvest.vue'
import DetailInvest from '@/views/DetailInvest.vue'
import EditInvest   from '@/views/EditInvest.vue'

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
    },
    {
        name: 'CreateInvest',
        path: '/Choose/CreateInvest',
        component: CreateInvest,
        meta: {}
    },
    {
        name: 'DetailInvest',
        path: '/Choose/Invest/DetailInvest',
        component: DetailInvest,
        meta: {}
    },
    {
        name: 'EditInvest',
        path: '/Choose/Invest/DetailInvest/EditInvest',
        component: EditInvest,
        meta: {}
    }
]

const router = new Router({ routes })

export default router;