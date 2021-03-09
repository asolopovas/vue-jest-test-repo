import isEmpty from 'lodash/isEmpty'
import startCase from 'lodash/startCase'
import camelCase from 'lodash/camelCase'
import cloneDeep from 'lodash/cloneDeep'
import clone from 'lodash/clone'
import upperFirst from 'lodash/upperFirst'
import format from 'date-fns/format'

const pluralize = require('pluralize')

function fixedNum(value: number) {
    return Number(value).toFixed(2)
}

function currency(value: number) {
    return Number(value).toLocaleString('en-US', {style: 'currency', currency: 'GBP'})
}

function dateFormat(value, formatOpt) {
    let date = Date.parse(value)
    return format(date, formatOpt)
}

class GlobalHelpers {
    install(Vue) {
        Vue.filter('currency', currency)
        Vue.filter('startCase', startCase)
        Vue.filter('dateFormat', dateFormat)
        Vue.filter('fixedNum', fixedNum)
        Vue.filter('percentage', (value: any) => `${value}%`)
        Vue.filter('raw', data => data)
        Vue.mixin({
            methods: {
                currency,
                pluralize,
                camelCase,
                upperFirst,
                isEmpty,
                clone,
                cloneDeep,
            }
        })
    }
}

declare module 'vue/types/vue' {
    interface Vue {
        currency: (item) => any
        pluralize: (item) => any
        camelCase: (item) => any
        upperFirst: (item: string) => any
        isEmpty: (item: number) => any
        clone: (item) => any
        cloneDeep: (item) => any
    }
}

export {currency}
export default new GlobalHelpers()
