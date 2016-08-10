
const sinon = require('sinon')
const shortid = require('shortid')
const { strictEqual } = require('assert')
const generateId = require('../../src/utils/generateId')

describe('utils/generateId', () => {

  it('should generate a random id', () => {
    const currentTs = 123456789
    sinon.stub(shortid, 'generate', () => 'a_short_id')
    strictEqual(generateId(currentTs), 'a_short_id75bcd15')
    shortid.generate.restore()
  })

})
