import {
    GraphQLSchema,
    GraphQLObjectType
} from 'graphql'
import mutation from './mutations'
import query from './queries'

export default new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        description: 'This query for display data from database.',
        fields: query
    }),
    mutation: new GraphQLObjectType({
        name: 'Mutation',
        description: 'This mutation is action data from database.',
        fields: mutation
    })
})
