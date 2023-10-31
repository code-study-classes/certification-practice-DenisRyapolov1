import { string } from "yargs";

function calculateDistance(x1, x2) {
    return Math.abs(x2-x1);
};

function calculateSegmentProduct(a, b, c) {
    return Math.abs(a - c) * Math.abs(b - c);
};

function calculateKilobytes(num) {
    const fileSizeInBytes=1024
    return Math.floor(num/fileSizeInBytes);
};


function calculateSegments(a,b) {
    return Math.floor(a/b);
};

function calculateDigitSum(twoDigitNumber) {
    if (twoDigitNumber >= 10 && twoDigitNumber <= 99) {
        const tens = Math.floor(twoDigitNumber / 10);
        const ones = twoDigitNumber % 10;
        return tens + ones;
    } else {
        return '';
    }
}

function swapHundredsAndTens(num) {
   const a=num.toString();
   const b=a.slice(0,1);
   const c=a.slice(-1);
};

function getHundredsDigit() {
    
};

function getFullHours() {

};

function getDayOfWeek() {

};

function countSquares() {

};

export {
    calculateDistance, calculateSegmentProduct, calculateKilobytes, calculateSegments, calculateDigitSum, swapHundredsAndTens, getHundredsDigit, getFullHours, getDayOfWeek, countSquares   
};