import {ActionTree, ActionContext} from 'vuex'
import {State} from './state'
import {ActionTypes} from './action-types';
import {MutationTypes} from './mutations-types';
import {Mutations} from "./mutations"

type AugmentedActionContext = {
    commit<K extends keyof Mutations>(
        key: K,
        payload: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, State>, 'commit'>

export interface Actions {
    [ActionTypes.ITEM_DELETE]({commit}: AugmentedActionContext, payload: {loc: string, item:any}): void
    [ActionTypes.ITEM_UPDATE]({commit}: AugmentedActionContext, payload: {loc: string, item:any}): void
    [ActionTypes.ITEM_CREATE]({commit}: AugmentedActionContext, payload: {loc: string, item:any}): void
}

export const actions: ActionTree<State, State> & Actions = {
    [ActionTypes.ITEM_DELETE]({commit}, payload): void {
        commit(MutationTypes.ITEM_DELETE, payload)
    },
    [ActionTypes.ITEM_UPDATE]({commit}, payload): void {
        commit(MutationTypes.ITEM_UPDATE, payload)
    },
    [ActionTypes.ITEM_CREATE]({commit}, payload): void {
        commit(MutationTypes.ITEM_CREATE, payload)
    },
}

export default actions
