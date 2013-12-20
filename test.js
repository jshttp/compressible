var assert = require('assert')

var specifications = require('./specifications.json')
var compressible = require('./')

for (var type in specifications) {
  var value = specifications[type].compressible
  if (typeof value !== 'boolean') return
  it(type + ' should' + (value ? ' ' : ' not ') + 'be compressible', function () {
    assert.equal(compressible(type), value)
  })
}