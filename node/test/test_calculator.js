/* jshint node: true, asi: true, laxcomma: true, esversion: 6 */
'use strict'

const ava = require('ava')
const calculator = require('../index.js')

ava.test('add', t => {
  t.is(2, calculator.add(1, 1));
});

ava.test('add_#2', t => {
  t.is(7, calculator.add(5, 2));
})

ava.test('subtract', t => {
  t.is(0, calculator.subtract(1, 1));
});

