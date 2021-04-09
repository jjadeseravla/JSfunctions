const findMostSimilar = (wordArr, word) => {
  if (wordArr.indexOf(word) > -1) { //or use wordArr.includes(word)
    return word;
  }
  const wordAsObj = isObject(word.split('').sort());
  const arrOfObj = wordArr.map((eachWord) => {
    return isObject(eachWord.split('').sort());
  })
  return arrOfObj;

}

const isObject = (arr) => {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    !obj[arr[i]] ? obj[arr[i]] = 1 : obj[arr[i]]++;
  }
  return obj;
}

const iterateObj = (wordAsObj, arrOfObj) => {
  console.log(1);
  let howManyChangesArr =[];
  for (var i = 0; i < arrOfObj.length; i++) {
    console.log(2);
      howManyChangesArr.push(compareObj(arrOfObj[i], wordAsObj));
  }
  console.log(8);
  return howManyChangesArr;
}

// const compareObj = (arrOfObjI, wordAsObj) => {
//   // let diffs = {};
//    let key;
//   for (key in arrOfObjI) {
//     if (arrOfObjI.hasOwnProperty(key)) {
//       compare(arrOfObjI[key], wordAsObj[key], key, arrOfObjI, wordAsObj)
//     }
//   }
// //   let counter = 0;
// //   console.log(3);
// //
// //   for(let i in arrOfObjI) { //comparing objects?!
// //     console.log(4, arrOfObjI);
// //     if(arrOfObjI[i] !== wordAsObj[i]) {
// //       counter++;
// //       console.log("5 counter", counter);
// //     }
// //      if (counter >= 2){
// //        console.log(6);
// //       return false;
// //     }
// //   }
// //   console.log(7);
// // return true;

class Dictionary { //words = array
  constructor(words) {
    this.words = words;
  }
  findMostSimilar(term) { //term  = coddwar
    console.log(this.words);
    const minNumOfSingleCharEdits = (word) => {
      if (word === term) {
        return 0;
      }
      if (term.length === 0) {
        return word.length
      }
      if (word.length === 0) {
        return term.length;
      }

      let newArr1 = new Array(term.length + 1);
      let newArr2 = new Array(term.length + 1);

      for (var i = 0; i < newArr1.length; i++) {
        newArr1[i] = i;
      }
      for (var i = 0; i < word.length; i++) {
        newArr2[0] = i + 1;
        for (var j = 0; j < term.length; j++) {
          const cost = word.charAt(i) === term.charAt(j) ? 0 : 1;
          newArr2[j+1] = Math.min(newArr2[j] + 1, newArr1[j+1]+1, newArr1[j]+cost);
        }
        let temp = newArr1;
        newArr1 = newArr2;
        newArr2 = temp;
      }
      return newArr1[term.length];
    }
    console.log(this.words);
    const res =  this.words.sort((a, b) => {
      return minNumOfSingleCharEdits(a) - minNumOfSingleCharEdits(b)
    });
    return res[0]; //codewars
  }
}

//module.exports {findMostSimilar, isObject};

const things = new Dictionary(['stars', 'mars', 'wars', 'codec', 'codewars']);
//things.findMostSimilar('coddwars'); // must return "codewars"

console.log(things.findMostSimilar('coddwars'));

// function TestDictionary(spec) {
//   var matcher = new Dictionary(spec.words);
//   spec.expectations.forEach(function (e) {
//     Test.expect(
//       matcher.findMostSimilar(e.query) == e.nearest
//     , 'expected findMostSimilar("' + e.query + '") == "' + e.nearest + '"'
//     );
//   });
// }
//
// TestDictionary({
//   words: ['cherry', 'pineapple', 'melon', 'strawberry', 'raspberry'],
//   expectations: [
//     { query:   'strawbery',
//       nearest: 'strawberry'
//     },
//     { query:   'berry',
//       nearest: 'cherry'
//     }
//   ],
// });
//
// TestDictionary({
//   words: Test.randomize(['javascript', 'java', 'ruby', 'php', 'python', 'coffeescript']),
//   expectations: [
//     { query:   'heaven',
//       nearest: 'java'
//     },
//     { query:   'javascript',
//       nearest: 'javascript'
//     }
//   ],
// });
