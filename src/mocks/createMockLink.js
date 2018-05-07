import { addMockFunctionsToSchema  } from 'graphql-tools';
import { SchemaLink }  from 'apollo-link-schema'
import schema from './schema'
import mocks from './mocks'

function createMockLink() {
    addMockFunctionsToSchema({
    schema,
    mocks,
    })
    return new SchemaLink({schema})
}

export default createMockLink