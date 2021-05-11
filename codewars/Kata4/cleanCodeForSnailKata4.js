const snail = (nestedArr) => {

  if (nestedArr.flatten().length === 0) {
    return [];
  }

  let ans = [];
  ans.push(...nestedArr[0]);

  const sizeNoLast = nestedArr.length-1

  for (let i = 1; i < sizeNoLast; i++) {
    ans.push(nestedArr[i][sizeNoLast])
  }

  nestedArr.shift();

  for (let i = 0; i < nestedArr.length-1; i++) {
    nestedArr[i].splice(([nestedArr[i].length-1]), 1)
  }

  const swoped = nestedArr[nestedArr.length-1].reverse()
  ans.push(...swoped);

  nestedArr.pop();

  for (let i = nestedArr.length-1; i > -1; i--) {
    ans.push(nestedArr[i][0]);
    nestedArr[i].shift();
  }

  if (nestedArr.length === 1 || nestedArr.length === 0) {
    const flatened = nestedArr.reduce((acc, curVal) => {
      return acc.concat(curVal)
    }, []);
    ans.push(...flatened);
    return ans;
  } else {
    ans = [...ans, ...snail(nestedArr)];
    return ans
  }
}

// const nestedArr = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]]
// console.log(snail(nestedArr)); //[1, 2, 3, 6, 9, 8, 7, 4, 5]

// const nestedArr2 = [[1, 2, 3], [8, 9, 4], [7, 6, 5]]
// console.log(snail(nestedArr2)); //[1, 2, 3, 4, 5, 6, 7, 8, 9]

// const nestedArr = [[ 1,  2,  3,  4,  5],
//                     [6,  7,  8,  9,  10],
//                     [11, 12, 13, 14, 15],
//                     [16, 17, 18, 19, 20],
//                     [21, 22, 23, 24, 25]];
// console.log(snail(nestedArr));
//
const nestedArr = [[ 1,  2,  3,  4,  5,  6],
                  [  20, 21, 22, 23, 24, 7],
                  [  19, 32, 33, 34, 25, 8],
                  [  18, 31, 36, 35, 26, 9],
                  [  17, 30, 29, 28, 27, 10],
                  [  16, 15, 14, 13, 12, 11]];

console.log(snail(nestedArr));
// // [1,  2,  3,  4,  5,  6,
// //  7,  8,  9,  10, 11, 12,
// //  13, 14, 15, 16, 17, 18,
// //  19, 20, 21, 22, 23, 24,
// //  25, 26, 27, 28, 29, 30,
// //  31, 32, 33, 34, 35, 36]);
