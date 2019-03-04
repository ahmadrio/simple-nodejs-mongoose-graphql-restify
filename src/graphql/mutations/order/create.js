import {
    GraphQLNonNull,
    GraphQLString
} from 'graphql'
import OrderEntity from './../../../models/order.model'
import { OrderType, OrderInputType } from './../../types/order.type'
import auth from './../../../providers/authorization'

export default {
    type: OrderType,
    description: 'Add new data from database',
    args: {
        data: {
            name: 'data',
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve(root, params, context) {
        if (auth(context.headers.authorization)) {
            return OrderEntity.create(params.data).then(result => {
                return result
            }).catch(error => {
                throw new Error('Error in order.create' + error)
            })
        }
    }
}
