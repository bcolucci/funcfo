
const cloneArr = require('../../utils/cloneArr')

const loginFilter = login => user => user.login === login

const findAll = users => cloneArr(users)

const findByLogin = (users, login) => {
  return findAll(users).find(loginFilter(login))
}

const save = (users, account) => {
  if (findByLogin(users, account.login))
    return cloneArr(users)
  return cloneArr(users).concat(account)
}

const remove = (users, account) => {
  const idx = users.findIndex(loginFilter(account.login))
  return cloneArr(users).filter((_, i) => i !== idx)
}

module.exports = { findAll, findByLogin, save, remove }
