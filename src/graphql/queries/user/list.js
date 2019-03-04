import UserEntity from './../../../models/user.model'
import { UserListType } from './../../types/user.type'
import auth from './../../../providers/authorization'

export default {
    type: UserListType,
    description: 'Display all data from database',
    args: {},
    resolve(root, params, context) {
        if (auth(context.headers.authorization)) {
            return UserEntity.find().lean().then(result => {
                return result
            }).catch(error => {
                throw new Error('Error in user.list: ' + error.message)
            })
        }
    }
}
