# compressible

[![NPM Version][npm-version-image]][npm-url]
[![NPM Downloads][npm-downloads-image]][npm-url]
[![Node.js Version][node-version-image]][node-version-url]
[![Build Status][ci-image]][ci-url]
[![Test Coverage][coveralls-image]][coveralls-url]

Compressible `Content-Type` / `mime` checking.

## Installation

```sh
$ npm install compressible
```

## API

```js
var compressible = require('compressible')
```

### compressible(type)

Checks if the given `Content-Type` is compressible. The `type` argument is expected
to be a value MIME type or `Content-Type` string, though no validation is performed.

The MIME is looked up in the [`mime-db`](https://www.npmjs.com/package/mime-db) and
if there is compressible information in the database entry, that is returned. Otherwise,
this module will fallback to `true` for the following types:

  * `text/*`
  * `*/*+json`
  * `*/*+text`
  * `*/*+xml`

If this module is not sure if a type is specifically compressible or specifically
uncompressible, `undefined` is returned.

```js
compressible('text/html') // => true
compressible('image/png') // => false
```

## License

[MIT](LICENSE)

[ci-image]: https://badgen.net/github/checks/jshttp/compressible/master?label=ci
[ci-url]: https://github.com/jshttp/compressible/actions?query=workflow%3Aci
[coveralls-image]: https://badgen.net/coveralls/c/github/jshttp/compressible/master
[coveralls-url]: https://coveralls.io/r/jshttp/compressible?branch=master
[node-version-image]: https://badgen.net/npm/node/compressible
[node-version-url]: https://nodejs.org/en/download
[npm-downloads-image]: https://badgen.net/npm/dm/compressible
[npm-url]: https://npmjs.org/package/compressible
[npm-version-image]: https://badgen.net/npm/v/compressible
