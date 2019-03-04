import User from './user'
import Product from './product'
import Order from './order'

export default {
    ...User,
    ...Product,
    ...Order
}