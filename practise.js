const reverseString = (str) => {
  let reversed = '';

  for (let i = str.length-1; i >=0; i--) {
    reversed = reversed + str[i];
  }

  return reversed;
}

const isPalindrome = (string) => {
  const ans = string.split('').reverse().join('') === string? true : false;
return ans;
}

const charMostAndFrequency = (string) => {
  let arr = string.split('');
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    let char = arr[i]
    if (!obj[char]) {
      obj[char] =1
    } else {
      obj[char] += 1;
    }
  }
  const arrOfNums = Object.values(obj);
  const frequency = Math.max(...arrOfNums);
  return `The character ${getKeyByValue(obj, frequency)} appears ${frequency} times`;
}

function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

const reverseInt = (int) => {
  const str = int.toString();
  const reverse = str.split('').reverse().join('');
  if (int < 0 ) {
    return parseInt(reverse) * -1
  }
  return parseInt(reverse);
}

const chunkedArr = (arr, n) => {
   const chunked = [];

   for (var i = 0; i < arr.length; i++) {
     let last = chunked[chunked.length-1]; //get last element in arr

     if (!last || last.length === n) {
       chunked.push([arr[i]])
     } else {
       last.push(arr[i])
     }
   }
   return chunked;
}


const isUniqueChar = (string) => {
  const obj = {};
  let array = string.split('');

    for (let i = 0; i < array.length; i++) {
      if (!obj[array[i]]) { //1st iter - it doesnt contain f
        obj[array[i]] = 1 //make f (the key ) be equal to  1 (the value)
      } else {
        obj[array[i]] ++; //goes here when there is more than 1, eg when value is 1 or more already
      }
      if (obj[array[i]] > 1 ) {
        return false;
      }
    }
    //return obj;
    return true;
}
//ternary" (!obj[array[i]]) ? obj[array[i]] = 1 : obj[array[i]++]
//this prints an obj with key as the element and value of freq it shows
//{ '9': 2, f: 2, h: 1, '£': 1, '$': 1, '^': 1, '&': 2, '*': 1, s: 1 }
//{ '1': 1, '2': 1, '3': 1, p: 1, o: 1, i: 1, '%': 1, '*': 1, d: 1 }


const isSameCharsInString = (str1, str2) => {
  let chars1 = str1.split("").sort();
  let chars2 = str2.split("").sort();

  if (chars1.join('') === chars2.join('')) { //must include join as cant compare arrays
    return true;
  }

  const obj1 = isObject(chars1);
  const obj2 = isObject(chars2);
  //check if the objects character counts are equal
  console.log(JSON.stringify(obj1)); //to compare two objects use JSON.strigify or lodash library
  if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
    return true;
  }
  return false;

}

const isObject = (chars) => {
  const obj = {};

  for (let i = 0; i < chars.length; i++) {
    if (!obj[chars[i]]) {
      obj[chars[i]] = 1;
    } else {
      obj[chars[i]]++;
    }
  }
  return obj;
}

// const replaceSpaceWith = (str) => {
//   if (!str.includes(' ')) {
//     return str;
//   } else {
//     return str.replace(/ /g, "%20");
//   }
// }

const replaceSpaceWith = (str, charLength) => { //dont need charLength?
  const charArr = str.split('');
  for (let i = 0; i < charArr.length; i++) {
    if (charArr[i] === ' ' && charArr[i] !== charArr[-1]) {
      charArr[i] = "%20" //to replace you just make it equal to eg assign it
    }
  }
  return charArr.join('');
}

const areWordsMadePalindrome = (str) => {
  const charArr = str.replace(/ /g, '').split(''); // remove white spaces
  let obj = isObject(charArr);
  const arrOfValues = Object.keys(obj).map(key => obj[key]); //gives you array of values only
  let newArr = [];
  // if (Object.keys(obj).length % 2 !== 0 && allAreTwo(arrOfValues)) {
  //   return true;
  // }

  for (let i = 0; i < arrOfValues.length; i++) {
    if (arrOfValues % 2 === 0 && arrOfValues[i] % 2 === 0) {
      return true;
    } if (arrOfValues % 2 !== 0 && arrOfValues[i] % 2 !== 0) {
        newArr.push(arrOfValues[i])
    }
  }
  if (newArr.length === 1) {
    return true;
  }
}



const allAreTwo = (arrOfValues) => {
  return arrOfValues.every(val => val === 2);
}

//console.log(reverseString('abcdefg'));
//console.log(isPalindrome('hannah'));
//console.log(isPalindrome('abcdefg'));
// console.log(charMostAndFrequency('#%he3#33ll#l#o'))
// console.log(charMostAndFrequency('32eddseew3'));
// console.log(charMostAndFrequency('kdjf325  55555555o'));
// console.log(reverseInt(51));
// console.log(reverseInt(500));
// console.log(reverseInt(-15));
// console.log(reverseInt(-900));
// console.log(chunkedArr([1, 4, 12, 3, 2, 6, -9, 0], 3));
// console.log(chunkedArr([1, 4, 12, 3, 2, 6, -9, 0], 4));
// console.log(chunkedArr([1, 4, 12, 3, 2, 6, -9, 0], 7));
// console.log(isUniqueChar("fh99"));
// console.log(isUniqueChar("fh99£$^&&*fs"));
// console.log(isUniqueChar("1p2o3i%*d"));
// console.log(isSameCharsInString("helpp", "pelhp"));
// console.log(isSameCharsInString("cuento", "tneuc"));
// console.log(isSameCharsInString("loveeee", "quiche"));
// console.log(replaceSpaceWith("the cat sat on me"));
// console.log(replaceSpaceWith(" bellend "));
// console.log(replaceSpaceWith("me"));
// console.log(replaceSpaceWith("the cat sat on me", 17));
// console.log(replaceSpaceWith(" bellend ", 8));
// console.log(replaceSpaceWith("me", 0));
console.log(areWordsMadePalindrome("tact coa")); //true cos tacocat, atcocta, catptac - not real words but palindrome
//{ t: 2, a: 2, c: 2, o: 1 } ---> [2, 2, 2, 2, 1]
console.log(areWordsMadePalindrome("abcdef")); //false
