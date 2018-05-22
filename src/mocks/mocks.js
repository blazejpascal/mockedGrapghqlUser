import { MockList } from 'graphql-tools'
import casual from 'casual-browserify'
import names from './profileInfo/profileInfo.mock.js'
import { pickRandomFromArray } from './mockUtils'

const mocks = {
RootQuery: () => ({
profileInfos: (root, {size}) => new MockList(size)
}),

profileInfo: () => ({
/* By powrócic do dostarczania imienia i nazwiska z biblioteki casual należy usunąć linie 3,4,14 i odkomentować linię poniżej */
//name: casual.full_name,
name: pickRandomFromArray(names),
age:  casual.integer( 10, 100),
website: casual.url,
isFriend: casual.coin_flip,
})
}

export default mocks