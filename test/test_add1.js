/* jshint node: true, asi: true, laxcomma: true, esversion: 6 */
'use strict'

const assert = require('assert')
const addingMachine = require('../index.js')

assert.doesNotThrow(
    () => {
        addingMachine.add1(1, 3)
    }
)

assert.equal(6, addingMachine.add1(1, 5))
assert.equal(7, addingMachine.add1(2, 5))
