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
         //console.log(2, keyPad[i][j]);
        if (keyPad[i][j] === parseInt(strNum)) {
          const possibleNums = getNums(keyPad[i][j]);
          ans.push(...possibleNums)
          console.log(3, ans);
        }
      }
    }
    ans = [...ans, ...chooseClosest(numsArr, parseInt(strNum))];
    console.log(4, ans);
    ans = ans.filter((elem) => elem !== undefined && elem !== null);
    console.log(5, ans);
    ans = new Set(ans.flat());
    ans = Array.from(ans);
    ans =  ans.sort((a,b) => a-b);
    console.log(6, getPinsCalled);
    if (getPinsCalled < strNum.split('').length+1 ) {
      return ans;
    } else {
      console.log(7, ans, getPinsCalled);
      const val = allCombos(ans, getPinsCalled);
      console.log('val', val);
      return val;
    }

  } else {
    const arr = strNum.split('');
    let result = [];
    arr.map((individualNum) => {
      result = getPins(individualNum);
    })
    return result;
  }
}

const getNums = (num) => {
  const keyPadFlat = [1, 2, 3, 4, 5, 6, 7, 8, 9, null, 0, null];
  const position =  keyPadFlat.indexOf(num);
  let newArr = [];
//  for (var i = 0; i < keyPadFlat.length; i++) {
    //if (position === i) {
    if (position === 1 || position === 4 || position === 7 || position === 10) {
      console.log('no1');
      newArr.push(keyPadFlat[position -3], keyPadFlat[position -1], keyPadFlat[position], keyPadFlat[position +1], keyPadFlat[position +3])
    }
    else if (position === 2 || position === 5 || position === 8) {
      console.log('here');
      newArr.push(keyPadFlat[position -3], keyPadFlat[position -1], keyPadFlat[position], keyPadFlat[position +3])
    }
    else if (position === 0 || position === 3 || position === 6) {
      console.log('no2');
      newArr.push(keyPadFlat[position -3], keyPadFlat[position ], keyPadFlat[position +1], keyPadFlat[position +3])
    }
//  }
  console.log('newArr', newArr);
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
 //console.log(getPins('11')); //["11", "22", "44", "12", "21", "14", "41", "24", "42"]
 console.log(getPins('369'));

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
