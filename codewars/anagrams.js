const  anagrams = (word, words) => {
  const orderedWord = word.split('').sort().join('');

  let ans = []
  for (let i = 0; i < words.length; i++) {
     const theOrderedWordToCompare = words[i].split('').sort().join('');
     if (orderedWord === theOrderedWordToCompare) {
       console.log(theOrderedWordToCompare);
       ans.push(words[i]);
     }
  }

  return ans;
}

// String.prototype.sort = function() {
//   return this.split("").sort().join("");
// };
//
// function anagrams(word, words) {
//   return words.filter(function(x) {
//       return x.sort() === word.sort();
//   });
// }

console.log(anagram('abba', ['aabb', 'abcd', 'bbaa', 'dada'])); //['aabb', 'bbaa']
console.log(anagram('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));
console.log(anagram('laser', ['lazing', 'lazy',  'lacer']));
