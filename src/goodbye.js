const goodbye = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: 'Goodbye',
  }

  callback(null, response)
}


module.exports.goodbye = goodbye
