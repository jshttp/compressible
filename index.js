module.exports = compressible

compressible.specs =
compressible.specifications = require('./specifications.json')

compressible.regex
compressible.regexp = /json|text|javascript|dart|ecmascript|xml|x-font-ttf|ms-opentype|ms-fontobject/

function compressible(type) {
  return compressible.regexp.test(type)
}