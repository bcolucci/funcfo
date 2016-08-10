
const actions = require('./actions')
const controllers = require('./controllers')

const { findAll, findByLogin, save, remove } = controllers

const reduce = (action = {}, users = []) => {
  switch (action.type) {
    case 'findAll':
      return findAll(users)
    case 'findByLogin':
      return findByLogin(users, action.login)
    case 'save':
      return save(users, action.account)
    case 'remove':
      return remove(users, action.account)
  }
  return users
}

module.exports = { actions, controllers, reduce }
