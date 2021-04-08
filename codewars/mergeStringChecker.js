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
    const removed = arr3.filter((el) => {
      return !arr1.includes(el);
    })
    const removed2 = arr3.filter((el) => {
      return !arr2.includes(el);
    })

    const newWord = [...removed, ...removed2].sort().join('');
    const oldWord = arr3.sort().join('')
    if (newWord === oldWord) {
      return true
    }
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
