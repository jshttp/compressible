# compressible

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependency Status][david-image]][david-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

Compressible `Content-Type` / `mime` checking.

### Installation

```bash
$ npm install compressible
```

## API

### compressible(type)

Checks if the given content-type is compressible.

```js
var compressible = require('compressible')

compressible('text/html') // => true
compressible('image/png') // => false
```

## [MIT Licensed](LICENSE)

[npm-image]: https://img.shields.io/npm/v/compressible.svg?style=flat
[npm-url]: https://npmjs.org/package/compressible
[github-tag]: http://img.shields.io/github/tag/jshttp/compressible.svg?style=flat
[github-url]: https://github.com/jshttp/compressible/tags
[travis-image]: https://img.shields.io/travis/jshttp/compressible.svg?style=flat
[travis-url]: https://travis-ci.org/jshttp/compressible
[coveralls-image]: https://img.shields.io/coveralls/jshttp/compressible.svg?style=flat
[coveralls-url]: https://coveralls.io/r/jshttp/compressible?branch=master
[david-image]: http://img.shields.io/david/jshttp/compressible.svg?style=flat
[david-url]: https://david-dm.org/jshttp/compressible
[license-image]: http://img.shields.io/npm/l/compressible.svg?style=flat
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/compressible.svg?style=flat
[downloads-url]: https://npmjs.org/package/compressible
