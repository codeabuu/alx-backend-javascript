function calculateNumber(a, b) {
  const roundA = Math.round(a);
  const roundB = Math.round(b);
  return roundA + roundB;
}

module.exports = calculateNumber;
