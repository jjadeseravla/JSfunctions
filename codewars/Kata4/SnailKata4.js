const snail = (nestedArr) => {
  //https://www.freecodecamp.org/news/how-to-clone-an-array-in-javascript-1d3183468f6a/
  //const nestedArr = JSON.parse(JSON.stringify(nestedArrReal)); //make a deep copy of array to mess about with it and then we can use original
  let ans = [];
  ans.push(...nestedArr[0]); //ans -> [1, 2, 3]

  const sizeNoLast = nestedArr.length-1 //sizeNoLast -> 1

  for (let i = 1; i < sizeNoLast; i++) {
    ans.push(nestedArr[i][sizeNoLast])
  }
  //console.log('ans', ans);

  //remove nA[0]
  nestedArr.shift();
  //console.log(1, nestedArr);

  for (let i = 0; i < nestedArr.length-1; i++) {
    nestedArr[i].splice(([nestedArr[i].length-1]), 1)
  }
  //remove nA[nA.length-1]
  //nestedArr[0].splice(([nestedArr[0].length-1]), 1)
  //console.log('nestedArr', nestedArr); // nestedArr -> [[8, 9], [7, 6, 5]]
  //ans -> [1, 2, 3, 4]
  //console.log(ans);

  //ans.push(...sortedNums(nestedArr[nestedArr.length-1]));
  const swoped = nestedArr[nestedArr.length-1].reverse()
  ans.push(...swoped);
  // console.log(ans);
  //ans -> [1, 2, 3, 4, 5, 6, 7]
  nestedArr.pop();
  //console.log('nestedArr', nestedArr);//nestedArr -> [[8, 9]]

  for (let i = nestedArr.length-1; i > -1; i--) {
    // console.log('1nestedArr', nestedArr);
    // console.log('********', nestedArr[i][0]);
    ans.push(nestedArr[i][0]);
    nestedArr[i].shift();
  }

  if (nestedArr.length === 1) {
    const flatened = nestedArr.reduce((acc, curVal) => {
      return acc.concat(curVal)
    }, []);
    ans.push(...flatened);
    return ans;
  } else {
    // console.log('2nestedArr', nestedArr);
    // console.log('2ans', ans);
    ans = [...ans, ...snail(nestedArr)];
    return ans
  }
}

//[
//    [1,  2,  3,  4,  5],
//    [6,  7,  8,  9,  10],
//    [11, 12, 13, 14, 15],
//    [16, 17, 18, 19, 20],
//    [21, 22, 23, 24, 25]
// ]


const nestedArr = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]];
console.log(snail(nestedArr));
//[1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]

// const nestedArr = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]]
// console.log(snail(nestedArr)); //[1, 2, 3, 6, 9, 8, 7, 4, 5]

// const nestedArr2 = [[1, 2, 3], [8, 9, 4], [7, 6, 5]]
// console.log(snail(nestedArr2)); //[1, 2, 3, 4, 5, 6, 7, 8, 9]

//[
//   [1, 2, 3],
//   [8, 9, 4],
//   [7, 6, 5]
// ]

//[
//   [1,   2,   3,   4],
//   [12,  13,  14,  5],
//   [11,  16,   15,  6],
//   [10,   9,   8,  7]
// ]

//remove nA[0],                      -> [1, 2, 3, 4]
//loop+remove nA[nA.length-1],       -> [5, 6, 7]
///reverse+remove nA[nA.length -1]   -> [8, 9, 10]
//loop+remove nA[-i][0]              -> [11, 12]
//remove nA[0]                       -> [13, 14]
//etc
//[[1,2,3,4], [12,13,14,5], [11,16,15,6], [10,9,8,7]]

//[
//    [1,  2,  3,  4,  5],
//    [6,  7,  8,  9,  10],
//    [11, 12, 13, 14, 15],
//    [16, 17, 18, 19, 20],
//    [21, 22, 23, 24, 25]
// ]

//---> [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]
