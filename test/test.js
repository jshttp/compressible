var assert = require('assert')
var db = require('mime-db')
var compressible = require('../')

// None of these should be actual types so that the lookup will never include them.
var EXAMPLE_TYPES = [
  { type: 'text/penguins', should: true },
  { type: 'text/html', should: true },
  { type: 'text/plain', should: true },
  { type: 'text/jade', should: true },
  { type: 'something/text', should: undefined },
  { type: 'something/frog+TEXT', should: true },
  { type: 'type/json;askjkl+json', should: undefined },
  { type: 'type/+json', should: true },
  { type: 'data/beans+xml ; charset="utf-8"', should: true },
  { type: 'can/worms+xml;blaaaah', should: true },
  { type: 'data/xml', should: undefined },
  { type: 'asdf/nope', should: undefined },
  { type: 'cats', should: undefined }
]

var INVALID_TYPES = [
  undefined,
  null,
  0,
  1,
  false,
  true
]

describe('Testing if spec lookups are correct.', function () {
  it('All DB `compressible` types should reflect in compressible', function () {
    for (var type in db) {
      if (db[type].compressible !== undefined) {
        assert.strictEqual(compressible(type), db[type].compressible)
      }
    }
  })
})

describe('Testing if the regex works as intended.', function () {
  EXAMPLE_TYPES.forEach(function (example) {
    it(example.type + ' should' + (example.should ? ' ' : ' not ') + 'be compressible', function () {
      assert.strictEqual(compressible(example.type), example.should)
    })
  })
})

describe('Testing if charsets are handled correctly.', function () {
  it('Charsets should be stripped off without issue', function () {
    for (var type in db) {
      if (db[type].compressible !== undefined) {
        assert.strictEqual(compressible(type + '; charset=utf-8'), db[type].compressible)
      }
    }
  })
})

describe('Ensuring invalid types do not cause errors.', function () {
  it('No arguments should return false without error', function () {
    assert.strictEqual(compressible(), false)
  })

  INVALID_TYPES.forEach(function (invalid) {
    it(invalid + ' should return false without error', function () {
      assert.doesNotThrow(function () {
        assert.strictEqual(compressible(invalid), false)
      })
    })
  })
})

describe('Ensuring types are always stripped correctly.', function () {
  it('Uppercase types should work', function () {
    assert.strictEqual(compressible('TEXT/HTML'), true)
    assert.strictEqual(compressible('TEXT/plain; charset="utf-8"'), true)
  })

  it('White-spaced types should work', function () {
    assert.strictEqual(compressible('application/json ; charset="utf-8"'), true)
  })
})
