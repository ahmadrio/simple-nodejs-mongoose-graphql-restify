import { GraphQLNonNull } from 'graphql'
import UserEntity from './../../../models/user.model'
import { LoginType, LoginInputType } from '../../types/auth.type'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import config from './../../../../config/app'

export default {
    type: LoginType,
    args: {
        data: {
            name: 'login',
            type: new GraphQLNonNull(LoginInputType)
        }
    },
    resolve(root, params) {
        return UserEntity.findOne({ email: params.data.email }).then(success => {
            if (!success) {
                throw new Error('Email is invalid')
            }
            const checkPassword = bcrypt.compareSync(params.data.password, success.password)
            if (checkPassword) {
                const token = jwt.sign({ user_id: success._id }, config.JWT_SECRET, { expiresIn: '3h' })
                return {
                    token: token
                }
            }
            throw new Error('Password or email is not valid')
        })
    }
}
