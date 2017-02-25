/* jshint node: true, asi: true, laxcomma: true, esversion: 6 */
'use strict'

const ava = require('ava')
const calculator = require('../index.js')

ava.test('add', t => {
  t.is(2, calculator.add(1, 1));
})

ava.test('subtract', t => {
	t.is(3, calculator.subtract(6,3));
})

ava.test('multiply', t => {
	t.is(8, calculator.multiply(2,4));
})

ava.test('divide', t => {
	t.is(4, calculator.divide(16,4));
})

