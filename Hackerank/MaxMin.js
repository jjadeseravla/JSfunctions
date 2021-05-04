//https://www.youtube.com/watch?v=SB4fbNHwavY

const maxMin = (arr, k) => {
  const sortedArr = arr.sort((a, b) => {
    return a - b;
  });

  let nestedArr = [];

  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr.slice(i, i+k).length === k) {
      const section = check(sortedArr.slice(i, i+k));
      nestedArr.push(section);
    }
  }

  // return sortedArr.map((num) => {
  //   return sortedArr.split()
  // })

  return Math.min(...nestedArr);
}

const check = (sortedArr) => {
  const max = Math.max(...sortedArr);
  const min = Math.min(...sortedArr);

  return max - min;
}

//console.log(check([1, 2, 3])); [2, 3, 5], [3, 5, 6], [5, 6, 7] ---> nestedArr = nestedArr [ 2, 3, 3, 2 ]
console.log(maxMin([3, 7, 2, 5, 6, 1], 3)); //2 cos this arr split into arrs of length k the smallest
//distance between max and min number of each arr of length k is 2
console.log(maxMin([10, 100, 300, 200, 1000, 20, 30], 3)); //20
console.log(maxMin([1, 2, 3, 4, 10, 20, 30, 40, 100, 200], 4)); //3
console.log(maxMin([1, 2, 1, 2, 1], 2)); //0
