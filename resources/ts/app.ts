import Vue from 'vue'
import {sync} from 'vuex-router-sync'
import '@/js/bootstrap.js'
import '@/ts/bootstrap.ts'
import App from '@/ts/App.vue'
import router from '@/js/router/router'
import store from '@/ts/store/store'


const unsync = sync(store, router)

const app = new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App),
})


unsync()
