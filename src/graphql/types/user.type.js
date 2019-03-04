import {
    GraphQLNonNull,
    GraphQLInputObjectType,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLID
} from 'graphql'
import GraphQLDate from 'graphql-date'

export const UserType = new GraphQLObjectType({
    name: 'UserType',
    fields: () => ({
        _id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        createdAt: { type: GraphQLDate },
        updatedAt: { type: GraphQLDate }
    })
})

export const UserListType = new GraphQLList(UserType)

export const UserInputType = new GraphQLInputObjectType({
    name: 'UserInputType',
    fields: () => ({
        _id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        createdAt: { type: GraphQLDate },
        updatedAt: { type: GraphQLDate }
    })
})

export const UserUpdateInputType = new GraphQLInputObjectType({
    name: 'UserUpdateInputType',
    fields: () => ({
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        updatedAt: { type: GraphQLDate }
    })
})
