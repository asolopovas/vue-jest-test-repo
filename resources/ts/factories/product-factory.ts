import dataFactory from '../data-factory'
import {ProductType} from '@/ts/store/store'


export default (amount: number) => dataFactory((faker):ProductType => ({
    id: faker.random.number(1000000),
    image: {
        src: `${faker.image.city(300, 200)}?random=${Math.round(Math.random() * 1000)}`,
        class: 'h-12 w-12 bg-white rounded-full border'
    },
    value: faker.commerce.product(),
    category: faker.commerce.productMaterial(),
    units: faker.random.number({min: 1, max: 10}),
    unitPrice: faker.random.float({min: 10, max: 100}),
}), amount)
