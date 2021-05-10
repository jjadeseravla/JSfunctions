//CANNOT DO!!!!!!!!!!!!!!!!!!!!!!!!!

// const matrixZeros = (nestedArr) => {
//
//   for (let row = 0; row < nestedArr.length; row++) {
//     for (let i = 0; i < nestedArr[row].length; i++) {
//       if (nestedArr[row][i] === 0) {
//         nestedArr[row][i] = true;
//       } else {
//         nestedArr[row][i] = false;
//       }
//     }
//   }
//   //---> nestedArr = [
// //   [ false, false, true, false, false ],
// //   [ false, false, false, false, false ],
// //   [ true, false, false, false, false ],
// //   [ false, false, true, false, false ]
// // ]
//   for (let row = 0; row < nestedArr.length; row++) {
//     for (let i = 0; i < nestedArr[row].length; i++) {
//       if (nestedArr[row][i] === true) {
//         // for (let i = 0; i < nestedArr[row].length; i++) {
//         //   nestedArr[row][i]
//         // }
//         const zeros = nestedArr[row].map((num) => num = 0);
//         nestedArr[row].splice(0, nestedArr[row].length, zeros);
//       }
//     }
//   }
//     return nestedArr.flat();
// [
//   [ 0, 0, 0, 0, 0 ],
//   false, need to get this in an array
//   false,
//   false,
//   false,
//   false,
//   [ 0, 0, 0, 0, 0 ],
//   [ 0, 0, 0, 0, 0 ]
// ]
// }

const matrixZeros = (nestedArr) => {
  const h = nestedArr.length;
  const w = nestedArr[0].length;

  let first_row_zero = false;
  for (let col = 0; col < w; col++) {
    if (nestedArr[0][col] === 0) {
      first_row_zero = true;
    }
  }

  for (let row = 0; row < h; row++) {
    for (let col = 0; col < w; col++) {
      if (nestedArr[row][col] === 0) {
        nestedArr[0][col] = 0;
      }
    }
  }

    for (let row = 0; row < h; row++) {
      let contains_zero = false;
        for (let col = 0; col < w; col++) {
          if (nestedArr[row][col] === 0) {
            contains_zero = true;
            break;
          }
        }
      for (let col = 0; col < w; col++) {
        if (contains_zero || nestedArr[0][col] === 0) {
          nestedArr[row][col] = 0;
        }
      }
    }
    if (first_row_zero) {
        for (let col = 0; col < w; col++) {
          nestedArr[0][col] =0;
        }
    }
    return nestedArr;
}

console.log(matrixZeros([[1, 2, 0, 1, 5], [2, 3, 20, 3, 2], [0, 4, 1, 8, 7], [3, 3, 0, 1, 2]]));
                          //nestedArr[row+1][col+2]--> the 20
// [
//   [1, 2, 0, 1, 5],
//   [2, 3, 20, 3, 2],
//   [0, 4, 1, 8, 7],
//   [3, 3, 0, 1, 2]
// ]
//
// [
//   [0, 0, 0, 0, 0],
//   [0, 3, 0, 3, 2],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0]
// ]
