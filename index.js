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



// var throttled = onRaf(function () {
//   console.log('test')
// });





// function onScroll() {
//   latestKnownScrollY = window.scrollY;
//   requestTick();
// }

// function requestTick() {
//   if(!ticking) {
//     requestAnimationFrame(update);
//   }
//   ticking = true;
// }

// function update() {
//   // reset the tick so we can
//   // capture the next onScroll
//   ticking = false;

//   var currentScrollY = latestKnownScrollY;

//   // read offset of DOM elements
//   // and compare to the currentScrollY value
//   // then apply some CSS classes
//   // to the visible items
// }
