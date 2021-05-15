let getPinsCalled = 0;
const getPins = (strNum) => {
  let ans = [];
  let numsArr = [];
  const keyPad = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [null, 0, null]];
  getPinsCalled = ++getPinsCalled;
  console.log(1, strNum);

  if (strNum.length === 1) {
    for (var i = 0; i < keyPad.length; i++) {
      for (var j = 0; j < keyPad.length-1; j++) {
        // console.log(2, keyPad[i][j]);
        if (keyPad[i][j] === parseInt(strNum)) {
          const possibleNums = getNums(keyPad[i][j]);
          ans.push(...possibleNums)
          console.log(3, ans);
        }
      }
    }
    ans = [...ans, ...chooseClosest(numsArr, parseInt(strNum))];
    console.log(4, ans);
    ans = ans.filter((elem) => elem !== undefined);
    console.log(5, ans);
    ans = new Set(ans.flat());
    ans = Array.from(ans);
    ans =  ans.sort((a,b) => a-b);
    console.log(6, getPinsCalled);
    if (getPinsCalled < 2 ) {
      return ans;
    } else {
      console.log(7, ans, getPinsCalled);
      const val = allCombos(ans, getPinsCalled);
      console.log('val', val);
      return val;
    }

  } else {
    const arr = strNum.split('');
    arr.map((individualNum) => {
      return getPins(individualNum);
    })
  }
}

const getNums = (num) => {
  const keyPadFlat = [1, 2, 3, 4, 5, 6, 7, 8, 9, null, 0, null];
  const position =  keyPadFlat.indexOf(num);
  let newArr = [];
  for (var i = 0; i < keyPadFlat.length; i++) {
    if (position === i) {
    newArr.push(keyPadFlat[i-3], keyPadFlat[i-1], keyPadFlat[i], keyPadFlat[i+1], keyPadFlat[i+3])
    }
  }
  return newArr;
}

const chooseClosest = (numsArr, num) => {
  const position = numsArr.indexOf(num);
  return numsArr.slice(position-1, position+2);
}
//console.log(chooseClosest([2, 5, 8, 0], 8));

const allCombos = (ansArrNums, getPinsCalledNum) => {
  let nestedArrOfNCopies = [];
  // console.log('ansArrNums',ansArrNums);
  console.log('getPinsCalledNum', getPinsCalledNum);
  let ansArr = [];
  for (var i = 0; i < ansArrNums.length; i++) {
    ansArr.push(ansArrNums[i].toString());
  }
  //  console.log('2ansArr',ansArr);

  for (var i = 0; i < getPinsCalledNum-1; i++) {
    nestedArrOfNCopies[i] = [...ansArr]
  }
  console.log('nestedArrOfNCopies', nestedArrOfNCopies);
  const allPermutations = permute(nestedArrOfNCopies);
  //console.log('allP', allPermutations);
  return allPermutations;
}

const permute = (arr) => {
  if (arr.length === 0) {
      return [];
    }
  else if (arr.length ===1){
  return arr[0];
  }
  else {
      var result = [];
      var allCasesOfRest = permute(arr.slice(1));  // recur with the rest of array
      for (var c in allCasesOfRest) {
        for (var i = 0; i < arr[0].length; i++) {
          result.push(arr[0][i] + allCasesOfRest[c]);
        }
      }
      return result;
    }
 }

//console.log(allCombos([1, 2, 4], 3));

const keyPad = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [null, 0, null]];
// [[1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9],
//  [-, 0, -]]

//console.log(getPins('8')); //["5", "7", "8", "9", "0"] and im getting [ 0, 5, 7, 8, 9 ]
 console.log(getPins('11')); //["11", "22", "44", "12", "21", "14", "41", "24", "42"]
 //console.log(getPins('369'));

//a character map <--IMPORTANT LEARN
// const isObject2 = (charArr) => { //works with a str too, not just charsArr!
//   const obj = {};
//
//   for (let i = 0; i < charArr.length; i++) {
//     if (!obj[charArr[i]] ) {
//       obj[charArr[i]] = 1;
//     } else {
//       obj[charArr[i]] ++;
//     }
//   }
//   return obj;
// }
//if(!obj[charArr[i]]) ? obj[charArr[i]] = 1 : obj[charArr[i]] ++;
