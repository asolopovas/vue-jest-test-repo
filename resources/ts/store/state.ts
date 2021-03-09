import productFactory from '../../ts/factories/product-factory'

export const state = {
    products: productFactory(10),
}

export type State = typeof state

export default state
