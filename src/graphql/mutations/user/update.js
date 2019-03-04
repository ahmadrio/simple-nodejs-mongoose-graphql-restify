import {
    GraphQLNonNull,
    GraphQLString
} from 'graphql'
import UserEntity from './../../../models/user.model'
import { UserType, UserUpdateInputType } from './../../types/user.type'
import auth from './../../../providers/authorization'

export default {
    type: UserType,
    description: 'Update data with id from database',
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLString)
        },
        data: {
            type: new GraphQLNonNull(UserUpdateInputType)
        }
    },
    resolve(root, params, context) {
        if (auth(context.headers.authorization)) {
            return UserEntity.findByIdAndUpdate(params.id, params.data, { new: true }).then(result => {
                return result
            }).catch(error => {
                throw new Error('Error in user.update: ' + error)
            })
        }
    }
}