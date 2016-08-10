
const crypto = require('crypto')

const hashPassword = generateId => rawPassword => {
  const salt = generateId()
  const hash = crypto.createHash('sha256').update(rawPassword + salt).digest('hex')
  return { salt, hash }
}

module.exports = generateId => hashPassword(generateId)
