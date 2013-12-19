var assert = require('assert')

var specifications = require('./specifications.json')
var compressible = require('./')

specifications.forEach(function (type) {
  var value = type.compressible
  if (typeof value !== 'boolean') return
  it(type.mime + ' should' + (value ? ' ' : ' not ') + 'be compressible', function () {
    assert.equal(compressible(type.mime), value)
  })
})