
const bubbleSort = (arr) => {
  //for bubble sort arr[i] is compared to arr[i+1]
  //6 is bigger than 4 so 6 becomes arr[i+1]
  //than 6 is compared to 5 etc etc until 6 = arr[i-1] last one in arr
  //next iteration 4 is compared to 5 but not bigger
  //so then 5 is compared to 3 and swopped etc until it reaches arr[i-2]


  for (let i = 0, size = arr.length; i <arr.length - 1; i++) {
    for (let j = 0; j < size - 1 -i; j++) {
    console.log(arr[j]);
      if (arr[j] > arr[j+1]) { //eg in in first iteration is 6 is bigger than 4 so
        const temp = arr[j]; //make temp = index 0 eg 6 in this iteration
        arr[j] = arr[j+1]; // 6 is now moved from index 0 to index 1
        arr[j+1] = temp; // make temp = index 1 eg 6 for this iteration
      }
    }
  }
  return arr;
}

const arr = [6, 4, 5, 3, 2, 1];
console.log(bubbleSort(arr));

const howNormalPeopleSort = (arr) => {
  return arr.sort((a, b) => {
    return a - b;
  })
}

console.log(howNormalPeopleSort(arr));
