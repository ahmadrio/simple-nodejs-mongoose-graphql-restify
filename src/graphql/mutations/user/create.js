import { GraphQLNonNull } from 'graphql'
import UserEntity from './../../../models/user.model'
import { UserType, UserInputType } from './../../types/user.type'
import auth from './../../../providers/authorization'

export default {
    type: UserType,
    description: 'Add new data from database',
    args: {
        data: {
            name: 'data',
            type: new GraphQLNonNull(UserInputType)
        }
    },
    resolve(root, params, context) {
        if (auth(context.headers.authorization)) {
            return UserEntity.create(params.data).then(result => {
                return result
            }).catch(error => {
                throw new Error('Error in user.create: ' + error.message)
            })
        }
    }
}