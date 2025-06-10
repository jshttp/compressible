/*!
 * compressible
 * Copyright(c) 2013 Jonathan Ong
 * Copyright(c) 2014 Jeremiah Senkpiel
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */

'use strict'

/**
 * Module dependencies.
 * @private
 */

var db = require('mime-db')

/**
 * Module variables.
 * @private
 */

var COMPRESSIBLE_TYPE_REGEXP = /^text\/|\+(?:json|text|xml)$/i
var EXTRACT_TYPE_REGEXP = /^\s*([^;\s]*)(?:;|\s|$)/

/**
 * Module exports.
 * @public
 */

module.exports = compressible

/**
 * Checks if a type is compressible.
 *
 * @param {string} type
 * @return {(boolean|undefined)} Returns `true` if compressible, `false` if not, or `undefined` if indeterminate.
 * @public
 */

function compressible (type) {
  if (typeof type !== 'string') return false

  var match = EXTRACT_TYPE_REGEXP.exec(type)
  if (!match) return undefined

  var mime = match[1].toLowerCase()
  var data = db[mime]

  return typeof data !== 'undefined' && typeof data.compressible !== 'undefined'
    ? data.compressible
    : COMPRESSIBLE_TYPE_REGEXP.test(mime) || undefined
}
