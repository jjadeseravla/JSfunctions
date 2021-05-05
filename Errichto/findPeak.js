//element that is greater than both adjascent elements

const findPeak = (arr) => {

  let newArr  = [];
  if (isAscending(arr) === false && isDescending(arr) === false) {
    for (var i = 1; i < arr.length-1; i++) {
      // console.log('arr[i]',  arr[i] > arr[i-1])
      if (arr[i] > arr[i+1] && arr[i] > arr[i-1]) {
        newArr.push(i);
      }
    }
  }

  else if (isAscending(arr) === true) {
    return arr.length-1;
  }
  else {
    return 0;
  }
    return newArr;
}

const isAscending = (arr) => { //arr = [1, 2, 3, 4, 5, 6, 7]
  return arr.slice(1) //[2, 3, 4, 5, 6, 7]
      .map((elem, i) => elem > arr[i])
      .every(x => x);
}

const isDescending = (arr) => {
  return arr.slice(1)
      .map((elem, i) => elem < arr[i])
      .every(x => x);
}

console.log(findPeak([1, 2, 3, 4, 5, 6, 7]));//7 is biggest so index 6
console.log(findPeak([7, 6, 5, 4, 3, 2, 1]));//7 is biggest to index 0
console.log(findPeak([1, 2, 3, 1])); //3 is peak so index 2
console.log(findPeak([1, 2, 1, 3, 5, 6, 4]));//2 and 6 is peak so index 1 and 5
