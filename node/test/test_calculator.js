/* jshint node: true, asi: true, laxcomma: true, esversion: 6 */
'use strict'

const ava = require('ava')
const calculator = require('../index.js')

ava.test('add', t => {
  t.is(2, calculator.add(1, 1));
});

ava.test('subtract', t => {
  t.is(0, calculator.subtract(1, 1));
});

ava.test('multiply', t => {
  t.is(4, calculator.multiply(2, 2));
  t.not(4, calculator.multiply(2, 3));
  t.is(Infinity, calculator.multiply(Infinity, 1));
  t.is(0, calculator.multiply(0, 100));
});
