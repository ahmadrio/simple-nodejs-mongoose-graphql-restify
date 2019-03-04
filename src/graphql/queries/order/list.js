import OrderEntity from './../../../models/order.model'
import { OrderListType } from './../../types/order.type'
import auth from './../../../providers/authorization'

export default {
    type: OrderListType,
    description: 'Display all data from database',
    args: {},
    resolve(root, params, context) {
        if (auth(context.headers.authorization)) {
            return OrderEntity.find(params).lean().then(results => {
                return results
            }).catch(error => {
                throw new Error('Error in order.list: ' + error.message)
            })
        }
    }
}
