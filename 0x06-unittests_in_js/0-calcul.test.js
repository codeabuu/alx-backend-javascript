// 0-calcul.test.js

const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return the sum of two rounded numbers (1 and 3)', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return the sum of two rounded numbers (1 and 3.7)', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should return the sum of two rounded numbers (1.2 and 3.7)', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should return the sum of two rounded numbers (1.5 and 3.7)', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
});
