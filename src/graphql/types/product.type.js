import {
    GraphQLInputObjectType,
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLList,
    GraphQLID
} from 'graphql'
import GraphQLDate from 'graphql-date'

export const ProductType = new GraphQLObjectType({
    name: 'ProductType',
    fields: () => ({
        _id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        category: { type: GraphQLString },
        description: { type: GraphQLString },
        quantity: { type: GraphQLString },
        price: { type: GraphQLString },
        createdAt: { type: GraphQLDate },
        updatedAt: { type: GraphQLDate }
    })
})

export const ProductListType = new GraphQLList(ProductType)

export const ProductInputType = new GraphQLInputObjectType({
    name: 'ProductInputType',
    fields: () => ({
        _id: { type: GraphQLID },
        name: { type: GraphQLString },
        category: { type: GraphQLString },
        description: { type: GraphQLString },
        quantity: { type: GraphQLString },
        price: { type: GraphQLString },
        createdAt: { type: GraphQLDate },
        updatedAt: { type: GraphQLDate }
    })
})

export const ProductUpdateInputType = new GraphQLInputObjectType({
    name: 'ProductUpdateInputType',
    fields: () => ({
        name: { type: GraphQLString },
        category: { type: GraphQLString },
        description: { type: GraphQLString },
        quantity: { type: GraphQLString },
        price: { type: GraphQLString },
        updatedAt: { type: GraphQLDate }
    })
})
