// const longestPalindromeSubstr = (str) => {
//     const chars = str.split('');
//
//     let best_len = 0;
//     let newArr = [];
//
//     for (var i = 0; i < chars.length; i++) {
//       // console.log('mmmmm', chars[chars.length-1-i]);
//       let j = chars[chars.length-1-i];
//       // console.log('j', j, 'chars[i]', chars[i]);
//       // console.log(j === chars[i]);
//
//       if (j === chars[i]) {
//         console.log(chars[i]);
//
//         // newArr.push(chars.slice(i, chars.indexOf(j)))
//
//         continue;
//       }
//       isPalindrome();
//     }
//     console.log('no');
//     return newArr;
// }
//
// const isPalindrome = (str) => {
//   const reverseStr = str.split('').reverse().join('');
//   if (str === reverseStr) {
//     return str;
//   } else {
//     return 'no';
//   }
// }

const longestPalindromeSubstr = (str) => {
  const chars = str.split('');
  let best_len = 0;
  let best_s = '';
  let size = chars.length;

  for (let i = 0; i < size; i++) {
    for (let x=1; i-x >=0 && i+x < size; x++) {
      if (chars[i-x] !== chars[i+x]) {
        break;
      }
      let len = 2* x+1;
      if (len > best_len) {
        best_len = len;
        best_s = str.substr(i-x, len);
      }
    }
  }
  for (let i = 0; i < size-1; i++) {
    for (let x = 0; i-x+1 >=0 && i+x < size; x++) {
      if (chars[i-x+1] !== chars[i+x]) {
        break;
      }
      let len = 2* x;
      if(len > best_len) {
        best_len = len;
        best_s= str.substr(i-x+1, len);
      }
    }
  }
  return best_s;
}

//abcba
console.log(longestPalindromeSubstr('abcwxcba'));
console.log(longestPalindromeSubstr('babad')); //bab or aba
console.log(longestPalindromeSubstr('cbbd')); //bb

//is chars.slice(-1) same as chars[chars.length -1] ???
