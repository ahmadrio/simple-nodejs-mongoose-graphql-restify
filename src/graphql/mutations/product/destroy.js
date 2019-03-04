import {
    GraphQLNonNull,
    GraphQLString
} from 'graphql'
import ProductEntity from './../../../models/product.model'
import { ProductType } from './../../types/product.type'
import auth from './../../../providers/authorization'

export default {
    type: ProductType,
    description: 'Remove data with id from database',
    args: {
        id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve(root, params, context) {
        if (auth(context.headers.authorization)) {
            return ProductEntity.findOneAndRemove(params.id).then(result => {
                if (result !== null) return result
                throw new Error('Your data is looking not found!')
            }).catch(error => {
                throw new Error('Error in product.destroy: ' + error.message)
            })
        }
    }
}
