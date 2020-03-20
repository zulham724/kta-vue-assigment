import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueScroller from 'vue-scroller'
import virtualList from 'vue-virtual-scroll-list'
import VueVirtualScroller from 'vue-virtual-scroller'
import { RecycleScroller } from 'vue-virtual-scroller'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
import VueFroala from 'vue-froala-wysiwyg'
import 'froala-editor/css/froala_editor.pkgd.min.css'
import 'froala-editor/js/plugins.pkgd.min.js'

Vue.use(VueScroller)
Vue.use(VueVirtualScroller)
Vue.use(VueFroala)

Vue.component('virtual-list', virtualList)
Vue.component('RecycleScroller', RecycleScroller)

Vue.config.productionTip = true


new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')