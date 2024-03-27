const reverseString = require('./reverseString')
const truncateString = require('./truncateString')
const getCurrentTimestamp = require('./getCurrentTimestamp')

module.exports = (num, precision) => {
    return parseFloat(num.toFixed(precision));
  }