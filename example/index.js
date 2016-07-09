var throttle = require('../')

// polyfill raf
require('raf').polyfill()

setInterval(function () {
  console.log('unthrottled')
}, 5)

setInterval(throttle(function () {
  console.log('throttled')
}), 5)
