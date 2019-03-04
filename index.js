import restify from 'restify'
import mongoose from 'mongoose'
import config from './config/app'

import schema from './src/graphql'
import { graphqlRestify, graphiqlRestify } from 'apollo-server-restify'

// create server
const server = restify.createServer({
    name: config.APP_NAME
})

// middleware
server.use(restify.plugins.acceptParser(server.acceptable))
server.use(restify.plugins.bodyParser())
server.use(restify.plugins.queryParser())

console.log(config.MONGODB_URI)

// connected to database
mongoose.connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})

server.listen(config.APP_PORT, () => {
    const db = mongoose.connection
    db.on('error', (error) => {
        console.log(error)
    })
    db.once('open', () => {
        server.get('/', (req, res) => {
            res.send('Run GraphQL in URL: http://192.168.10.10/graphiql')
        })

        // graphql configuration
        const graphqlOptions = req => ({
            schema: schema,
            context: {
                headers: {
                    authorization: req.headers.authorization || ''
                }
            }
        })
        server.get('/graphql', graphqlRestify((req, res) => graphqlOptions(req)))
        server.post('/graphql', graphqlRestify((req, res) => graphqlOptions(req)))
        server.get('/graphiql', graphiqlRestify({ endpointURL: '/graphql' }))

        console.log(`Database done and server is running in port ${config.APP_PORT}`)
    })
})


