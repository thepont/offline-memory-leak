'use strict';
var array = require('pauls-list');
array.push('Something from this module that I want one of')
// Your function handler
module.exports.helloWorldHandler = function (event, context, callback) {
  const message = {
    status: 200,
    body: array.length,
    event,
  };
  // callback will send message object back
  callback(null, message);
};
