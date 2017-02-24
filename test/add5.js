/* jshint node: true, asi: true, laxcomma: true, esversion: 6 */
'use strict'

const assert = require('assert')
const addingMachine = require('../index.js')

assert.doesNotThrow(
    () => {
        addingMachine.add5(1, 3)
    }
)

assert.equals(6, addingMachine.add5(1, 5))
