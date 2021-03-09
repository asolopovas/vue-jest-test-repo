import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutations-types'
// import productFactory from './../../ts/data-factory'
import productFactory from '../../ts/factories/product-factory'

Vue.use(Vuex)

export const state = {
    products: productFactory(10),
}

export const mutations = {
    [types.ITEM_DELETE](state, {loc, item}) {
        const index = state[loc].map(item => item.id).indexOf(item.id);
        state[loc].splice(index, 1);
    },
    [types.ITEM_UPDATE](state, {loc, item}) {
        const index = state[loc].map(item => item.id).indexOf(item.id);
        Object.assign(state[loc][index], item)
    },
    [types.ITEM_CREATE](state, {loc, item}) {
        state[loc].push(item)
    },
}

export const actions = {
    itemDelete(context, payload) {
        context.commit(types.ITEM_DELETE, payload)
    },
    itemUpdate(context, payload) {
        context.commit(types.ITEM_UPDATE, payload)
    },
    itemCreate(context, payload) {
        context.commit(types.ITEM_CREATE, payload)
    },
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
})

