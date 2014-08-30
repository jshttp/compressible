/*!
 * compressible
 * Copyright(c) 2014 Jeremiah Senkpiel
 * MIT Licensed
 */

/**
 * Module dependencies.
 */

var db = require('mime-db')

/**
 * Module exports.
 */

module.exports = compressible

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
  var mime = db[type.toLowerCase().trim()]
  return mime ? mime.compressible : /text|json|xml/.test(type)
}
