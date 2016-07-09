# raf listen

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

Call a function at most once per animation frame.

*Featuring:*
* commonjs
* no es6

## install

    $ npm install raf-listen

## example

```js
var throttle = require('raf-listen')
// polyfill raf if you want
require('raf').polyfill()

setInterval(function () {
  console.log('unthrottled')
}, 5)

setInterval(throttle(function () {
  console.log('throttled')
}), 5)
```
