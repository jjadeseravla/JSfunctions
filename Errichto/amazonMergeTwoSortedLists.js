const mergeTwoSortedLists = (arr1, arr2) => {
  const arr3 = [...arr1, ...arr2];
  console.log(arr3.sort((a, b) => a - b ));
  return Math.min(...arr3);
}

console.log(mergeTwoSortedLists([2, 5, 7, 8], [3, 4, 5, 9, 12])); //merge and give back first elem --> 2
console.log(mergeTwoSortedLists([1, 2, 4], [1, 3, 4]));
