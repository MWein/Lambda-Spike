const hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: {
      message: 'hello',
    },
  }

  callback(null, response)

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
}


module.exports.hello = hello
