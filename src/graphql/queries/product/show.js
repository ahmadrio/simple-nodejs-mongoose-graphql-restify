import {
    GraphQLNonNull,
    GraphQLString
} from 'graphql'
import ProductEntity from './../../../models/product.model'
import { ProductType } from './../../types/product.type'
import auth from './../../../providers/authorization'

export default {
    type: ProductType,
    description: 'Display single data with id from database',
    args: {
        id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve(root, params, context) {
        if (auth(context.headers.authorization)) {
            return ProductEntity.findById(params.id).then(result => {
                return result
            }).catch(error => {
                throw new Error('Error in product.show: ' + error.message)
            })
        }
    }
}
