import Vue from "vue"
import GlobalHelpers from './global-helpers.ts'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

Vue.component('fa-icon', FontAwesomeIcon)
Vue.use(GlobalHelpers)

// ComponentOptions is declared in types/options.d.ts
