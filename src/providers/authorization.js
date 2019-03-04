import jwt from 'jsonwebtoken'
import config from './../../config/app'

export default (token) => {
    return jwt.verify(token, config.JWT_SECRET, function (error) {
        if (error) throw new Error('Invalid authorization failed!')
        return true
    })
}