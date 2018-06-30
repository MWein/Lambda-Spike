const { someHelper } = require('../helpers/someHelper')

const goodbye = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: someHelper('Goodbye'),
  }

  callback(null, response)
}


module.exports.goodbye = goodbye
