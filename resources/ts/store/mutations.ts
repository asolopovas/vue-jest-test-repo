import {MutationTree} from 'vuex'
import {MutationTypes as types} from './mutations-types'
import {State} from './state'

interface Payload {
    loc: string,
    item: any
}

export type Mutations<S = State> = {
    [types.ITEM_DELETE](state: S, payload:Payload): void
    [types.ITEM_UPDATE](state: S, payload:Payload): void,
    [types.ITEM_CREATE](state: S, payload:Payload): void
}

export const mutations: MutationTree<State> & Mutations = {
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
    }
}

export default mutations
