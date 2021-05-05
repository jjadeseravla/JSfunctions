const breakAPalindrome = (s) => {
  const chars = s.split('');
  let size = s.length;

  if (size === 1) {
    return 'empty';
  }

  for (let i = 0; i < size; i++) { // eg abczcba size is 7
    let j = size -1 -i; // 7-1-0=6, 7-1-1=5, 7-1-2=4, 7-1-3=3 <---goes in on 4th iteration
    console.log(j, i);
    if (j === i) {
      continue; //eg where size is odd number, no point changing middle letter as its still a palidrome, so continue
    }
    if (chars[i] !== 'a') {
      console.log('not a', chars[i], i);
      chars[i] = 'a';
      return chars.join('');
    }
  }
  chars[size-1] ='b'; //1st iteration
  return chars.join(''); //---> 'abczcbb'
}

console.log(breakAPalindrome('abczcba')); //aaczcba
// console.log(breakAPalindrome('abccba')); //'aaccba'
// console.log(breakAPalindrome('a')); //''
