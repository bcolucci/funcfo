
const { deepEqual } = require('assert')
const hashPassword = require('../../src/utils/hashPassword')

describe('utils/hashPassword', () => {

  it('should hash password with a salt', () => {
    const generateId = () => 'my_generated_id'
    deepEqual(hashPassword(generateId)('test'), {
      salt: 'my_generated_id',
      hash: '7515228a2413c058fe5d94a717fbdfe64975891f8058233adc2f28647db026c0'
    })
  })

})
