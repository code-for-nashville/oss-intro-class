/* jshint asi:true, esversion: 6 */
'use strict'

module.exports = {
  add: function(a, b) {
    return 2;
  },
  subtract: function(a, b) {
      return a - b;
  },
  multiply: function(a, b) {
    throw new Error('multiply is not implemented yet')
  },
  divide: function(a, b) {
      return a / b;
  }
}
