const { hello } = require('../src/hello')
const sinon = require('sinon')


describe('this is a test', () => {
  it('Does a thing', () => {
    const callback = sinon.spy()

    hello('some event', 'some context', callback)

    const expected = {
      statusCode: 200,
      body: 'Hello',
    }

    expect(callback.calledWith(null, expected)).toEqual(true)

  })

})
