
function hasTargetSum(arr, target) {
  const seenNumbers = new Set();

  for (const num of arr) {
    const complement = target - num;

    if (seenNumbers.has(complement)) {
      return true;
    }

    seenNumbers.add(num);
  }

  return false;
}

module.exports = hasTargetSum;
