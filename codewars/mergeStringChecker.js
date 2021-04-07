const isMerge = (s, str1, str2) => {
  const arr1 = str1.split('');
  const arr2 = str2.split('');
  const arr3 = s.split('');

  let checker = (arr, target) => {
    console.log('target', target);
    console.log('arr', arr);
    return target.every(v => arr.includes(v));
  };

  if (checker(arr3, arr1) && checker(arr3, arr1)) {
    return true;
  }
  return false;
}

console.log(isMerge('codewars', 'code', 'wars'));

module.exports = {isMerge};

//arr [
//   'c', 'o', 'd',
//   'e', 'w', 'a',
//   'r', 's'
// ]
// target [ 'c', 'o', 'd', 'e' ]
