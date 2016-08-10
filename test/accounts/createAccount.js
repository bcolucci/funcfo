
const { deepEqual } = require('assert')
const createAccount = require('../../src/accounts/createAccount')

describe('accounts/createAccount', () => {

  it('should create an account', () => {
    const hashPassword = password => Object.assign({}, { salt: 'salt', hash: 'passwordHash' })
    const account = createAccount(hashPassword)({ login: 'bcolucci', password: 'mySecretPassword' })
    deepEqual(account, {
      login: 'bcolucci',
      password: {
        salt: 'salt',
        hash: 'passwordHash'
      }
    })
  })

})
