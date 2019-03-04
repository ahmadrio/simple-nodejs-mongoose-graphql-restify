import {
    GraphQLNonNull,
    GraphQLString
} from 'graphql'
import OrderEntity from './../../../models/order.model'
import { OrderType } from './../../types/order.type'
import auth from './../../../providers/authorization'

export default {
    type: OrderType,
    description: 'Remove data with id from database',
    args: {
        id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve(root, params, context) {
        if (auth(context.headers.authorization)) {
            return OrderEntity.findByIdAndRemove(params.id).then(result => {
                if (result !== null) return result
                throw new Error('Your data is looking not found!')
            }).catch(error => {
                throw new Error('Error in order.update: ' + error)
            })
        }
    }
}
