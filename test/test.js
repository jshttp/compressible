var assert = require('assert')
var db = require('mime-db')
var compressible = require('../')

// None of these should be actual types so that the lookup will never include them.
var example_types = [
  { type: 'text/penguins', should: true },
  { type: 'text/html', should: true },
  { type: 'text/plain', should: true },
  { type: 'something/text', should: false },
  { type: 'something/frog+TEXT', should: true },
  { type: 'type/json;askjkl+json', should: false },
  { type: 'type/+json', should: true },
  { type: 'data/beans+xml ; charset="utf-8"', should: true },
  { type: 'can/worms+xml;blaaaah', should: true },
  { type: 'data/xml', should: false },
  { type: 'asdf/nope', should: false },
  { type: 'cats', should: false }
]

var invalid_types = [
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
      var value = db[type].compressible
      assert.equal(compressible(type), value)
    }
  })
})

describe('Testing if the regex works as intended.', function () {
  example_types.forEach(function (example) {
    it(example.type + ' should' + (example.should ? ' ' : ' not ') + 'be compressible', function () {
      assert.equal(compressible(example.type), example.should)
    })
  })
})

describe('Testing if charsets are handled correctly.', function () {
  it('Charsets should be stripped off without issue', function () {
    for (var type in db) {
      var value = db[type].compressible
      assert.equal(compressible(type + '; charset=utf-8'), value)
    }
  })
})

describe('Ensuring invalid types do not cause errors.', function () {
  it('No arguments should return false without error', function () {
    assert.equal(compressible(), false)
  })

  invalid_types.forEach(function (invalid) {
    it(invalid + ' should return false without error', function () {
      assert.doesNotThrow(function () {
        assert.equal(compressible(invalid), false)
      })
    })
  })
})

describe('Ensuring types are always stripped correctly.', function () {
  it('Uppercase types should work', function () {
    assert.equal(compressible('TEXT/HTML'), true)
    assert.equal(compressible('TEXT/plain; charset="utf-8"'), true)
  })

  it('White-spaced types should work', function () {
    assert.equal(compressible('application/json ; charset="utf-8"'), true)
  })
})
