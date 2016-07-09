# raf listen

Call a function at most once per animation frame.


## install

    $ npm install raf-listen

## example

```js
var throttle = require('raf-listen')

// polyfill raf
require('raf').polyfill()

setInterval(function () {
  console.log('unthrottled')
}, 5)

setInterval(throttle(function () {
  console.log('throttled')
}), 5)
```
