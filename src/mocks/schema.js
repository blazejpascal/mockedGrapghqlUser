import  { makeExecutableSchema } from 'graphql-tools'
import profileInfo from './profileInfo/profileInfo.type'

const RootQuery = `
    type RootQuery {
        profileInfos(size: Int! ): [profileInfo],
    }
    `
const SchemaDefinition = `
    schema {
        query: RootQuery
    }
    `
export default makeExecutableSchema({
    typeDefs: [
        SchemaDefinition,
        RootQuery,
        ...profileInfo,
    ],
    resolvers: {},
})