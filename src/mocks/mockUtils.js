import casual from 'casual-browserify'

const pickRandomFromArray = (array) => array[casual.integer(0, array.length - 1)]

export { pickRandomFromArray }
