var coth = require('../');
var test = require('tape');
var isFunction = require('lodash.isfunction');
var approx = require('almost-equal');

test('exports a function', function(t) {
  t.plan(1);
  t.ok(isFunction(coth));
});

test('coth', function(t) {
  t.plan(5);
  t.equal(coth(0), Number.POSITIVE_INFINITY);
  t.ok(approx(coth(1), 1.3130352854993, 0.0001));
  t.ok(approx(coth(2), 1.0373147207275, 0.0001));
  t.ok(approx(coth(3), 1.0049698233137, 0.0001));
  t.ok(approx(coth(Math.PI), 1.0037418731973, 0.0001));
});
