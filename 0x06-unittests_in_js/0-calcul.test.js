const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('return the sum of two rounded numbers', () => {
    assert.strictEqual(calculateNumber(1.4, 2.6), 4);
    assert.strictEqual(calculateNumber(-1.4, -2.6), -4);
    assert.strictEqual(calculateNumber(0, 0), 0);
    assert.strictEqual(calculateNumber(3.14, 1.49), 4);
    assert.strictEqual(calculateNumber(999999999.9, 0.1), 1000000000);
  });
});
