import {
    GraphQLInputObjectType,
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLList,
    GraphQLID
} from 'graphql'
import GraphQLDate from 'graphql-date'

export const OrderType = new GraphQLObjectType({
    name: 'OrderType',
    fields: () => ({
        _id: { type: new GraphQLNonNull(GraphQLID) },
        productId: { type: GraphQLString },
        userId: { type: GraphQLString },
        quantity: { type: GraphQLString },
        total: { type: GraphQLString },
        grandTotal: { type: GraphQLString },
        createdAt: { type: GraphQLDate },
        updatedAt: { type: GraphQLDate }
    })
})

export const OrderListType = new GraphQLList(OrderType)

export const OrderInputType = new GraphQLInputObjectType({
    name: 'OrderInputType',
    fields: () => ({
        _id: { type: GraphQLID },
        productId: { type: GraphQLString },
        userId: { type: GraphQLString },
        quantity: { type: GraphQLString },
        total: { type: GraphQLString },
        grandTotal: { type: GraphQLString },
        createdAt: { type: GraphQLDate },
        updatedAt: { type: GraphQLDate }
    })
})

export const OrderUpdateInputType = new GraphQLInputObjectType({
    name: 'OrderUpdateInputType',
    fields: () => ({
        productId: { type: GraphQLString },
        userId: { type: GraphQLString },
        quantity: { type: GraphQLString },
        total: { type: GraphQLString },
        grandTotal: { type: GraphQLString },
        updatedAt: { type: GraphQLDate },
    })
})
