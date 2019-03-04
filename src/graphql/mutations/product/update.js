import {
    GraphQLNonNull,
    GraphQLString
} from 'graphql'
import ProductEntity from './../../../models/product.model'
import { ProductType, ProductUpdateInputType } from './../../types/product.type'
import auth from './../../../providers/authorization'

export default {
    type: ProductType,
    description: 'Update data with id from database',
    args: {
        id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLString)
        },
        data: {
            name: 'data',
            type: new GraphQLNonNull(ProductUpdateInputType)
        }
    },
    resolve(root, params, context) {
        if (auth(context.headers.authorization)) {
            return ProductEntity.findByIdAndUpdate(params.id, params.data).then(result => {
                return result
            }).catch(error => {
                throw new Error('Error in user.update: ' + error)
            })
        }
    }
}
