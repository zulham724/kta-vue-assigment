import Vue from 'vue'
import VueRouter from 'vue-router'
import multiguard from 'vue-router-multiguard'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    redirect: 'login',
    component: require('./../views/HomePage.vue').default,
    children: [{
        path: 'dashboard',
        name: 'dashboard',
        component: require('./../views/DashboardPage.vue').default
    }, {
        path: 'profile',
        name: 'profile',
        component: require('./../views/ProfilePage.vue').default
    }, {
        path: 'notif',
        name: 'notif',
        component: require('./../views/NotifPage.vue').default
    }, ]
}, {
    path: '/login',
    name: 'login',
    component: require('./../views/LoginPage.vue').default
}, {
    path: '/search',
    name: 'search',
    component: require('./../views/SearchPage.vue').default
}, {
    path: '/favorite',
    name: 'favorite',
    component: require('./../views/FavoritePage.vue').default
}, {
    path: '/create',
    name: 'create',
    component: require('./../views/CreatePage.vue').default
}, {
    path: '/build',
    name: 'build',
    component: require('./../views/BuildPage.vue').default
}, {
    path: '/comment',
    name: 'comment',
    component: require('./../views/CommentPage.vue').default
}, {
    path: '/assigment',
    name: 'assigment',
    component: require('./../views/AssigmentPage.vue').default
}]

const router = new VueRouter({
    mode: process.env.CORDOVA_PLATFORM ? 'hash' : 'history',
    base: process.env.BASE_URL,
    routes
})

export default router