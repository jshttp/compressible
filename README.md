# compressible

[![NPM Version](https://img.shields.io/npm/v/compressible.svg?style=flat)](https://www.npmjs.org/package/compressible)
[![Node.js Version](https://img.shields.io/badge/node.js->=_0.8-blue.svg?style=flat)](http://nodejs.org/download/)
[![Build Status](http://img.shields.io/travis/expressjs/compressible.svg?style=flat)](https://travis-ci.org/expressjs/compressible)


Compressible `Content-Type` / `mime` checking.

### Installation

```bash
$ npm install compressible
```

## API

### compressible(type)

```js
var compressible = require('compressible')
compressible('text/html') // => true
compressible('image/png') // => false
```

### compressible.get(type)

Returns the specifications object associated with the given `Content-Type`.
Generates an object using the regex if none is found.

### [MIT Licensed](LICENSE)
