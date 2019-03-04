import { GraphQLNonNull } from 'graphql'
import ProductEntity from './../../../models/product.model'
import { ProductInputType, ProductType } from './../../types/product.type'
import auth from './../../../providers/authorization'

export default {
    type: ProductType,
    description: 'Add new data from database',
    args: {
        data: {
            name: 'data',
            type: new GraphQLNonNull(ProductInputType)
        }
    },
    resolve(root, params, context) {
        if (auth(context.headers.authorization)) {
            return ProductEntity.create(params.data).then(result => {
                return result
            }).catch(error => {
                throw new Error('Error in product.create: ' + error.message)
            })
        }
    }
}
