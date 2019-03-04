import {
    GraphQLNonNull,
    GraphQLString
} from 'graphql'
import OrderEntity from './../../../models/order.model'
import { OrderListType } from './../../types/order.type'
import auth from './../../../providers/authorization'

export default {
    type: OrderListType,
    description: 'Display single data with id from database',
    args: {
        id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve(root, params, context) {
        if (auth(context.headers.authorization)) {
            return OrderEntity.findById(params.id).then(results => {
                return results
            }).catch(error => {
                throw new Error('Error in order.show: ' + error.message)
            })
        }
    }
}
