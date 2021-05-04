const firstAndLastIndexOfX = (arr, x) => {
  //let newArr = [];

  const res =  arr.reduce((newArr, elem, i) => {

    if (elem === x) {
      newArr.push(i);
      }
      return newArr;
    }, [])

    if (res.length === 0) {
      return [-1, -1];
    }

  return [Math.min(...res), Math.max(...res)];
}

console.log(firstAndLastIndexOfX([2, 3, 6, 7, 7, 8, 8, 8, 12], 8)); //[5, 7]
console.log(firstAndLastIndexOfX([5, 7, 7, 8, 8, 10], 8)); //[3, 4]
console.log(firstAndLastIndexOfX([5, 7, 7, 8, 8, 10], 6)); //[-1, -1]
