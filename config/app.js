require('dotenv').config()
const database = require('./../config/databases')

export default {
    APP_NAME: process.env.APP_NAME || '',
    APP_PORT: process.env.APP_PORT || 3000,
    APP_BASE_URL: process.env.APP_BASE_URL || 'http://localhost:3000',

    MONGODB_URI: process.env.DB_CONNECTION === 'mongodb' ? database : false,

    JWT_SECRET: process.env.JWT_SECRET || '&@$!changeme!$@&'
}