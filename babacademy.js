//https://www.youtube.com/watch?v=JcYVuVVr5sU&list=PLD_PIFu4jYOuMnFRKQbl21_jZvtxsIFuz&index=10
//Babacademy

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

const isObject = (charsArr) => {
  const obj = {};

  for (let i = 0; i < charsArr.length; i++) {
    if (!obj[charsArr[i]]) {
      obj[charsArr[i]] = 1;
    } else {
      obj[charsArr[i]]++;
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

const areWordsMadePalindrome = (str) => { //FUNCTION DOES NOT WORK!!
  const charArr = str.replace(/ /g, '').split(''); // remove white spaces
  console.log("charArr", charArr);
  let obj = isObject(charArr);
  console.log("1", obj);

  const arrOfValues = Object.keys(obj).map(key => obj[key]); //gives you array of values only
  let newArr = [];

  // if (Object.keys(obj).length % 2 !== 0 && allAreTwo(arrOfValues)) {
  //   return true;
  // }
  console.log("2", arrOfValues);
  console.log(arrOfValues.length);

  for (let i = 0; i < arrOfValues.length; i++) {
    if (arrOfValues.length % 2 !== 0 && arrOfValues[i] % 2 !== 0) {
      console.log("3");
        newArr.push(arrOfValues[i])
    }
    if (arrOfValues[i] % 2 === 0) {
      console.log("4", arrOfValues[i]);
      return true;
    }
  }
  if (newArr.length === 1) {
    console.log("5");
    return true;
  }
  console.log("6");
  return false;
}



const allAreTwo = (arrOfValues) => {
  return arrOfValues.every(val => val === 2);
}


const isInsertRemoveReplaceSameWord = (str1, str2) => {

  if ( str1 === str2) { //if strings are identical
    return false;
  }

  const obj1 = isObject2(str1.split('').sort());
  const obj2 = isObject2(str2.split('').sort());
  let counter = 0;

  for(let i in obj1) { //comparing objects?!
    console.log(1, obj1);
    if(obj1[i] !== obj2[i]) {
      counter++;
      console.log("counter", counter);
    }
     if (counter >= 2){
      return false;
    }
  }
  console.log(3);
return true;
}
//insert = obj length has one more obj of value 1 || obj value +1
//remove = obj value is -1 || obj length is -1
//replace = obj values same && obj length the same && one obj key changed



//a character map <--IMPORTANT LEARN
const isObject2 = (charArr) => { //works with a str too, not just charsArr!
  const obj = {};

  for (let i = 0; i < charArr.length; i++) {
    if (!obj[charArr[i]] ) {
      obj[charArr[i]] = 1;
    } else {
      obj[charArr[i]] ++;
    }
  }
  return obj;
}
//if(!obj[charArr[i]]) ? obj[charArr[i]] = 1 : obj[charArr[i]] ++;

const charCompression = (str) => {
  const charArr = str.split('');
  const charMapObj = isObject2(str.split(''));
  console.log("1", charMapObj);
  let count = 1;
  let uniqueCount = 0;
  let output = '';

  const charMapObjValuesArr = Object.keys(charMapObj).map(key => charMapObj[key]);
  console.log("2", charMapObjValuesArr);

  for (var i = 0; i < charMapObjValuesArr.length; i++) {
    if (charMapObjValuesArr[i] === 1) {
      const chars = Object.keys(charMapObj)
      return chars.join('');
      console.log("3", chars.join(''));
      //return JSON.stringify(charMapObj).replace(/[^\w\s]/gi, ''); // gives you ['a, 'b', 'c', 'd']
    } else {
      for (var i = 0; i < charArr.length; i++) {
        if (charArr[i] === charArr[i+1]) {
          count++;
          console.log("4", count);
        } else {
          output += charArr[i] + count
          count = 1;
          uniqueCount ++;
          console.log("5", output, count, uniqueCount);
        }
      }
    }
  }
  if (uniqueCount === str.length) {
    return str;
    console.log("6", str);
  } else {
    return output;
    console.log("7", output);
  }
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
// console.log(areWordsMadePalindrome("tact coa")); //true cos tacocat, atcocta,  - not real words but palindrome
// //{ t: 2, a: 2, c: 2, o: 1 } ---> [2, 2, 2, 2, 1]
//console.log(areWordsMadePalindrome("abcdef")); //false
// console.log(areWordsMadePalindrome("tpopto")); // true "tpoopt"
//console.log(areWordsMadePalindrome("puipip")); //false but its giving me true cos last element in array is a 2 and so my code is wrong
// console.log(isInsertRemoveReplaceSameWord("pale", "ple")); //true
// console.log(isInsertRemoveReplaceSameWord("pale", "pole")); //true
// console.log(isInsertRemoveReplaceSameWord("pale", "kale")); //true
// console.log(isInsertRemoveReplaceSameWord("pale", "pales")); //true
// console.log(isInsertRemoveReplaceSameWord("pale", "bake")); //false
// console.log(isInsertRemoveReplaceSameWord("palee", "pale")); //true
console.log(charCompression("aabcccccaaabbbbbb")); //a2b1c5a3
console.log(charCompression("abcd"));//abcd
