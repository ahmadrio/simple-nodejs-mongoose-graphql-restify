import User from './user'
import Product from './product'
import Order from './order'
import Auth from './auth'

export default {
    ...User,
    ...Product,
    ...Order,
    ...Auth
}
