import FakerStatic = Faker.FakerStatic;
import faker from 'faker'
faker.locale = 'en_GB'

// Create 100 Products

export default function(cb: (faker:FakerStatic) => object, amount: number): Array<object> {
    const out: Array<object> = []
    for (let i = 1; i <= amount; i++) {
        out.push(cb(faker))
    }
    return out;
}
