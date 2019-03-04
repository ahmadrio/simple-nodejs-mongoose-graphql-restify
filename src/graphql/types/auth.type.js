import {
    GraphQLInputObjectType,
    GraphQLObjectType,
    GraphQLString
} from 'graphql'

export const LoginType = new GraphQLObjectType({
    name: 'LoginType',
    fields: () => ({
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        token: { type: GraphQLString }
    })
})

export const LoginInputType = new GraphQLInputObjectType({
    name: 'LoginInputType',
    fields: () => ({
        email: { type: GraphQLString },
        password: { type: GraphQLString }
    })
})
