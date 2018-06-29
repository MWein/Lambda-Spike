const cronExample = (event, context, callback) => {
  console.log('CRRRRROOOOOONNNN')

  callback(null, 'Some response')
}


module.exports.cronExample = cronExample
