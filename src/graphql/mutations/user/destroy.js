import {
    GraphQLNonNull,
    GraphQLString
} from 'graphql'
import UserEntity from './../../../models/user.model'
import { UserType } from './../../types/user.type'
import auth from './../../../providers/authorization'

export default {
    type: UserType,
    description: 'Remove data with id from database',
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve(root, params, context) {
        if (auth(context.headers.authorization)) {
            return UserEntity.findByIdAndRemove(params.id).then(result => {
                if (result !== null) return result
                throw new Error('Your data is looking not found!')
            }).catch(error => {
                throw new Error('Error in user.destroy: ' + error.message)
            })
        }
    }
}