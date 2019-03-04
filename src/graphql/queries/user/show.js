import {
    GraphQLNonNull,
    GraphQLString
} from 'graphql'
import UserEntity from './../../../models/user.model'
import { UserType } from './../../types/user.type'
import auth from './../../../providers/authorization'

export default {
    type: UserType,
    description: 'Display single data with id from database',
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve(root, params, context) {
        if (auth(context.headers.authorization)) {
            return UserEntity.findById(params.id).then(result => {
                return result
            }).catch(error => {
                throw new Error('Error in user.show: ' + error.message)
            })
        }
    }
}
