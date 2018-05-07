import { MockList } from 'graphql-tools'
import casual from 'casual-browserify'
import names from './profileInfo/profileInfo.mock.js'
import { pickRandomFromArray } from './mockUtils'

const mocks = {
RootQuery: () => ({
profileInfos: (root, {size}) => new MockList(size)
}),

profileInfo: () => ({
name: pickRandomFromArray(names),
//name: casual.full_name,
age:  casual.integer( 10, 100),
website: casual.url,
isFriend: casual.coin_flip,
})
}

export default mocks