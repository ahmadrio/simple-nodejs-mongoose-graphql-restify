import ProductEntity from './../../../models/product.model'
import { ProductListType } from './../../types/product.type'
import auth from './../../../providers/authorization'

export default {
    type: ProductListType,
    description: 'Display all data from database',
    args: {},
    resolve(root, params, context) {
        if (auth(context.headers.authorization)) {
            return ProductEntity.find(params).lean().then(results => {
                return results
            }).catch(error => {
                throw new Error('Error in product.list: ' + error.message)
            })
        }
    }
}
