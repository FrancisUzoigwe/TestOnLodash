// function getRandomNumbers(arr: number[]): number[] {
//   const shuffledArray = arr.slice();
//   for (let i = shuffledArray.length - 1; i > 0; i--) {
//     const shuffle = Math.floor(Math.random() * (i + 1));
//     [shuffledArray[i], shuffledArray[shuffle]] = [
//       shuffledArray[shuffle],
//       shuffledArray[i],
//     ];
//   }
//   return shuffledArray.slice(0, 5);
// }

// const inputArray: number[] = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
// ];
// // console.log(inputArray);
// const randomNumbers: number[] = getRandomNumbers(inputArray);
// console.log(randomNumbers);

import lodash from "lodash"
function getRandomNumbers(arr: number[]): number[] {
  return lodash.sampleSize(arr, 3);
}
const inputArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const randomNumbers: number[] = getRandomNumbers(inputArray);
console.log(randomNumbers);
