import {localVue, Vuex}  from '../setup'
import {mount} from '@vue/test-utils'
import Products from '@/ts/page/Products.vue'
import {mutations} from '@/ts/store/mutations'
// import {ActionTypes} from "@/ts/store/action-types"
import productsFactory from '@/ts/factories/product-factory'

describe('Products.vue', () => {
    let actions = {
        ITEM_UPDATE: jest.fn(),
        ITEM_DELETE: jest.fn(),
    }
    let store
    let wrapper

    beforeEach(() => {
        store = new Vuex.Store({
            state: {
                products: productsFactory(2),
            },
            mutations,
            actions,
        })
    })

    it('actions called on #btn-proceed event', () => {
        wrapper = mount(Products, {
            data() {
                return {modalDel: true}
            },
            localVue, store,
        })

        wrapper.find('#btn-proceed').trigger('click')
        expect(actions.ITEM_DELETE).toHaveBeenCalled()
    })

    it('ITEM_UPDATE actions called on #btn-proceed event', () => {
        wrapper = mount(Products, {
            data() {
                return {modalUpdate: true}
            },
            localVue, store,
        })
        wrapper.find('#btn-proceed').trigger('click')
        expect(actions.ITEM_UPDATE).toHaveBeenCalled()
    })

})

