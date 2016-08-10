
const createAccount = hashPassword => (opts = { login, password }) => {
  const passwordHash = hashPassword(opts.password)
  return { login: opts.login, password: passwordHash }
}

module.exports = hashPassword => createAccount(hashPassword)
