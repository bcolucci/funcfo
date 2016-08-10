
const shortid = require('shortid')

const generateId = currentTs => shortid.generate().concat(currentTs.toString(16))

module.exports = currentTs => generateId(currentTs)
