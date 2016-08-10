
const { deepEqual } = require('assert')
const { actions, reduce } = require('../../src/accounts/memRepository')

const { findAll, findByLogin, save, remove } = actions

describe('accounts/memRepository', () => {

  it('should findAll accounts', () => {
    const account = { login: 'brice' }
    deepEqual(reduce(findAll(), []), [])
    deepEqual(reduce(findAll(), [ account ]), [ account ])
  })

  it('should find one account by login', () => {
    const account = { login: 'brice' }
    deepEqual(reduce(findByLogin({ login: 'brice' }), []), undefined)
    deepEqual(reduce(findByLogin({ login: 'john' }), [ account ]), undefined)
    deepEqual(reduce(findByLogin({ login: 'brice' }), [ account ]), account)
  })

  it('should save an account', () => {
    const account = { login: 'brice' }
    deepEqual(reduce(save({ account }), []), [ account ])
    deepEqual(reduce(save({ account }), [ account ]), [ account ])
  })

  it('should remove an account', () => {
    const account = { login: 'brice' }
    deepEqual(reduce(remove({ account }), []), [])
    deepEqual(reduce(remove({ account }), [ account ]), [])
  })

})
