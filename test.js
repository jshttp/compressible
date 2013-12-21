var assert = require('assert')

var specifications = require('./specifications.json')
var compressible = require('./')

// None of these should be actual types so that the lookup will never include them.
var example_types = [
  { type: 'something/text', should: true },
  { type: 'thingie/dart', should: true },
  { type: 'type/json', should: true },
  { type: 'ecmascript/6', should: true },
  { type: 'data/beans+xml', should: true },
  { type: 'asdf/nope', should: false },
  { type: 'cats', should: false }
]

describe('regex tests', function () {
  example_types.forEach(function (example) {
    it(example.type + ' should' + (example.should ? ' ' : ' not ') + 'be compressible', function (done) {
      assert.equal(compressible(example.type), example.should)
      done()
    })
  })
})

describe('spec lookup tests', function () {
  for (var type in specifications) {
    var value = specifications[type].compressible
    if (typeof value !== 'boolean') return
    it(type + ' should' + (value ? ' ' : ' not ') + 'be compressible', function () {
      assert.equal(compressible(type), value)
    })
  }
})