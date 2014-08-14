/*!
 * compressible
 * Copyright(c) 2014 Jeremiah Senkpiel
 * MIT Licensed
 */

/**
 * Module exports.
 */

module.exports = compressible

compressible.specs = require('./specs.json')
compressible.regex = /json|text|xml/
compressible.get = get

/**
 * Checks if a type is compressible.
 *
 * @param {string} type
 * @return {Boolean} compressible
 */

function compressible(type) {
  if (!type || typeof type !== "string") return false
  var i = type.indexOf(';')
  if (~i) type = type.slice(0, i)
  var spec = compressible.specs[type.toLowerCase().trim()]
  return spec ? spec.compressible : compressible.regex.test(type)
}

/**
 * Returns the specifications object associated with the given `Content-Type`.
 * Generates an object using the regex if none is found.
 *
 * @param {string} type
 * @return {object} spec
 */

function get(type) {
  if (!type || typeof type !== "string") return {
    compressible: false,
    notes: "Invalid type."
  }
  var i = type.indexOf(';')
  if (~i) type = type.slice(0, i)
  var spec = compressible.specs[type.toLowerCase().trim()]
  return spec ? spec : {
    compressible: compressible.regex.test(type),
    sources: ["compressible.regex"],
    notes: "Automatically generated via regex."
  }
}
