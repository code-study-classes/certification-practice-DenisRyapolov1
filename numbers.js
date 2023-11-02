function calculateDistance(x1, x2) {
  return Math.abs(x2 - x1);
}

function calculateSegmentProduct(a, b, c) {
  return Math.abs(a - c) * Math.abs(b - c);
}

function calculateKilobytes(num) {
  const fileSizeInBytes = 1024;
  return Math.floor(num / fileSizeInBytes);
}

function calculateSegments(a, b) {
  return Math.floor(a / b);
}

function calculateDigitSum(twoDigitNumber) {
  if (twoDigitNumber >= 10 && twoDigitNumber <= 99) {
    const tens = Math.floor(twoDigitNumber / 10);
    const ones = twoDigitNumber % 10;
    return tens + ones;
  }
  return '';
}

function swapHundredsAndTens(twoDigitNumber) {
  const dr = twoDigitNumber.toString();
  const dd = dr.slice(0, 1);
  const dg = dr.slice(-2, -1);
  const ds = dr.slice(2);
  const fd = dd + dg;
  const rv = fd.split('').reverse().join('');

  return Number(`${rv}${ds}`);
}

function getHundredsDigit(number) {
  if (number <= 999) {
    return 0;
  }

  return Math.floor((number % 1000) / 100);
}

function getFullHours(seconds) {
  return Math.floor(seconds / 3600);
}

function getDayOfWeek(dayOfYear) {
  return dayOfYear % 7;
}

function countSquares(A, B, C) {
  return Math.floor(A / C) * Math.floor(B / C);
}

export {
  calculateDistance, calculateSegmentProduct, calculateKilobytes, calculateSegments, calculateDigitSum, swapHundredsAndTens, getHundredsDigit, getFullHours, getDayOfWeek, countSquares,
};
