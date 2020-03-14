import Vue from 'vue'
import VueRouter from 'vue-router'
import multiguard from 'vue-router-multiguard'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    redirect: 'dashboard',
    component: require('./../views/HomePage.vue').default,
    children: [{
        path: 'dashboard',
        name: 'dashboard',
        component: require('./../views/DashboardPage.vue').default
    }]
}, {
    path: '/login',
    name: 'login',
    component: require('./../views/LoginPage.vue').default
}, ]

const router = new VueRouter({
    mode: process.env.CORDOVA_PLATFORM ? 'hash' : 'history',
    base: process.env.BASE_URL,
    routes
})

export default router