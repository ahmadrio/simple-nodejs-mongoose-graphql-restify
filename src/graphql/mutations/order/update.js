import {
    GraphQLNonNull,
    GraphQLString
} from 'graphql'
import OrderEntity from './../../../models/order.model'
import { OrderType, OrderUpdateInputType } from './../../types/order.type'
import auth from './../../../providers/authorization'

export default {
    type: OrderType,
    description: 'Update data with id from database',
    args: {
        id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLString)
        },
        data: {
            name: 'data',
            type: new GraphQLNonNull(OrderUpdateInputType)
        }
    },
    resolve(root, params, context) {
        if (auth(context.headers.authorization)) {
            return OrderEntity.findByIdAndUpdate(params.id, params.data).then(result => {
                return result
            }).catch(error => {
                throw new Error('Error in order.update: ' + error)
            })
        }
    }
}
