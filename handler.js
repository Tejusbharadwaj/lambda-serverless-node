'use strict';

module.exports.helloWorld = (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    },
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };

  callback(null, response);
};

module.exports.currentTime = (event, context, callback) => {
  var localTime = new Date();
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello, the current time is ${localTime}.`,
    }),
  };

  callback(null, response);
};

module.exports.flipCoin = (event, context, callback) => {
  var output = 'HEADS'
  if (Math.random() < 0.5) {
    output = 'TAILS'
  }
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', 
    },
    body: JSON.stringify({
      message: `${output}!`,
      input: event,
    }),
  };
  callback(null, response);
};
