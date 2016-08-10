
const findAll = (args = {}) => Object.assign({ type: 'findAll' }, args)

const findByLogin = (args = { login }) => Object.assign({ type: 'findByLogin' }, args)

const save = (args = { account }) => Object.assign({ type: 'save' }, args)

const remove = (args = { account }) => Object.assign({ type: 'remove' }, args)

module.exports = { findAll, findByLogin, save, remove }
