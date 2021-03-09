import Vuex from 'vuex'
import {createLocalVue} from '@vue/test-utils'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import '../resources/js/lib/helpers'
import GlobalHelpers from '@/ts/global-helpers'
import './helpers'

// Local Vue Config
const localVue = createLocalVue()
localVue.component('fa-icon', FontAwesomeIcon)
localVue.use(Vuex)
localVue.use(GlobalHelpers)

import BaseInput from '../resources/js/components/BaseInput'
localVue.component('base-input', BaseInput)

import BaseButton from '../resources/js/components/BaseButton'
localVue.component('base-button', BaseButton)

import Modal from '../resources/js/components/Modal'
localVue.component('modal', Modal)

import Pagination from '../resources/js/components/Pagination'
localVue.component('pagination', Pagination)

export {localVue, Vuex}
