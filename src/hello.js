const { someHelper } = require('../helpers/someHelper')

const hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: someHelper('Hello'),
  }

  callback(null, response)
}


module.exports.hello = hello
