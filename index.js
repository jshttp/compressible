module.exports = compressible

compressible.specs =
compressible.specifications = require('./specifications.json')

compressible.regex =
compressible.regexp = /json|text|javascript|dart|ecmascript|xml/

compressible.get = get

function compressible(type) {
  var spec = compressible.specs[type]
  return spec ? spec.compressible : compressible.regex.test(type)
}

function get(type) {
  var spec = compressible.specs[type]
  return spec ? spec : {
    compressible: compressible.regex.test(type),
    sources: ["compressible.regex"],
    notes: "Automatically generated via regex."
  }
}