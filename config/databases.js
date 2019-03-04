require('dotenv').config()

const database = () => {
    switch (process.env.DB_CONNECTION) {
        case 'mongodb':
            const authentication = process.env.DB_USER || process.env.DB_PASS
                ? process.env.DB_USER + ':' + process.env.DB_PASS + '@'
                : ''

            const ip = process.env.DB_IP || '127.0.0.1'
            const authSource = process.env.MONGO_OPTIONS || ''
            return `mongodb://${authentication}${ip}:${process.env.DB_PORT}/${process.env.DB_NAME}${authSource}`

        default:
            return false
    }
}

module.exports = database()