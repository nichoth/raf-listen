var window = require('global/window')

module.exports = function onRaf (fn) {
  var inProgress = false

  function throttled () {
    if (!inProgress) {
      inProgress = true
      window.requestAnimationFrame(doIt(arguments))
    }
  }

  function doIt () {
    var args = arguments
    return function () {
      fn.apply(null, args)
      inProgress = false
    }
  }

  return throttled
}
