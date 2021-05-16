const keyPad = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [null, 0, null],
];
let getPinsCalled = 0;

const getPins = (strNum) => {
  getPinsCalled = ++getPinsCalled;

  return strNum.length > 1
    ? strNum
        .split('')
        .map((individualNum) => getPins(individualNum))
        .pop()
    : getPinsBaseCase(strNum);
};

const getPinsBaseCase = (num) => {
  let ans = [];
  let numsArr = [];
  for (var i = 0; i < keyPad.length; i++) {
    for (var j = 0; j < keyPad.length - 1; j++) {
      if (keyPad[i][j] === parseInt(num)) {
        ans.push(...getNums(keyPad[i][j]));
        console.log(3, ans);
      }
    }
  }
  ans = [...ans, ...chooseClosest(numsArr, parseInt(num))].filter(
    (elem) => !!elem
  );
  console.log(4, ans);
  ans = Array.from(new Set(ans.flat()));
  ans = ans.sort((a, b) => a - b);
  console.log(6, getPinsCalled);
  console.log(7, allCombos(ans, getPinsCalled));
  return getPinsCalled < num.length + 1 ? ans : allCombos(ans, getPinsCalled);
};

const getNums = (num) => {
  const keyPadFlat = [1, 2, 3, 4, 5, 6, 7, 8, 9, null, 0, null];
  const position = keyPadFlat.indexOf(num);
  let newArr = [];
  newArr.push(keyPadFlat[position - 3]);
  if ([1, 4, 7, 10].includes(position)) {
    console.log('no1');
    newArr.push(
      keyPadFlat[position - 1],
      keyPadFlat[position],
      keyPadFlat[position + 1]
    );
  } else if ([2, 5, 8].includes(position)) {
    console.log('here');
    newArr.push(keyPadFlat[position - 1], keyPadFlat[position]);
  } else if ([0, 3, 6].includes(position)) {
    console.log('no2');
    newArr.push(keyPadFlat[position], keyPadFlat[position + 1]);
  }
  newArr.push(keyPadFlat[position + 3]);
  console.log('newArr', newArr);
  return newArr;
};

const chooseClosest = (numsArr, num) => {
  const position = numsArr.indexOf(num);
  return numsArr.slice(position - 1, position + 2);
};

const allCombos = (ansArrNums, getPinsCalledNum) => {
  let nestedArrOfNCopies = [];
  console.log('getPinsCalledNum', getPinsCalledNum);
  let ansArr = [];
  for (var i = 0; i < ansArrNums.length; i++) {
    ansArr.push(ansArrNums[i].toString());
  }

  for (var i = 0; i < getPinsCalledNum - 1; i++) {
    nestedArrOfNCopies[i] = [...ansArr];
  }
  console.log('nestedArrOfNCopies', nestedArrOfNCopies);
  return permute(nestedArrOfNCopies);
};

const permute = (arr) => {
  if (arr.length < 2) {
    return arr[0] ? arr[0] : [];
  } else {
    var result = [];
    var allCasesOfRest = permute(arr.slice(1)); // recur with the rest of array
    for (var c in allCasesOfRest) {
      for (var i = 0; i < arr[0].length; i++) {
        result.push(arr[0][i] + allCasesOfRest[c]);
      }
    }
    return result;
  }
};

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
