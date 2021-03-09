import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export interface ProductType {
    id: number,
    image: {
        src: string
        class: string
    }
    value: string,
    category: string
    units: number,
    unitPrice: number
}

export default new Vuex.Store({
    state,
    actions,
    mutations,
});
