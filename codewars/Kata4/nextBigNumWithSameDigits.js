const nextBigger = (n) => {

  const originalSize = n.toString().length;

  if (originalSize === 1) {
    return -1;

  } else {
    let arrOfStr =  ('' +n).split('');


    for (let i = arrOfStr.length-1; i > -1; i--) {
      // console.log('p', parseInt(arrOfStr[i]) < parseInt(arrOfStr[i-1]));
      // console.log(parseInt(arrOfStr[i]));
      // console.log(parseInt(arrOfStr[i-1]));
      if (parseInt(arrOfStr[i]) < parseInt(arrOfStr[i-1]) && originalSize <= 3) {
        return -1;
       }
       else {
          // console.log('here');
        arrOfStr.splice(-2, 0, arrOfStr[i])
        console.log(arrOfStr);
        arrOfStr.pop();
        console.log(arrOfStr);

        if (parseInt(arrOfStr[i]) < parseInt(arrOfStr[i-1])) {
          console.log('here2', parseInt(arrOfStr.join('')));
          return parseInt(arrOfStr.join(''));
        } else {
          const lastNumRemovedFromMain = arrOfStr.splice(arrOfStr.length -1, 1);
          // console.log('lasNumRemovedFromMain', arrOfStr);
          // console.log('what goes in', parseInt(arrOfStr.join('')));
          arrOfStr = [nextBigger(parseInt(arrOfStr.join('')))];
          // console.log('arrOfStr[0]', arrOfStr[0]);
          // console.log('lastNumRemovedFromMainStr', lastNumRemovedFromMain.toString());
          const theEnd = `${arrOfStr[0]}${lastNumRemovedFromMain.toString()}`
          return parseInt(theEnd);
        }
      }
    }
  }
}


// console.log(nextBigger(12)); // 21
//  console.log(nextBigger(513)); // 531
// console.log(nextBigger(2017)); // 2071
//  console.log(nextBigger(414)); // 441
//  console.log(nextBigger(144)); // 414
 console.log(nextBigger(4296)); // 4629


 //MY SOLUTION DOENST WORK FOR ANYTHING PAST 4 DIGITS, SO THIS IS THE CORRECT WAY:

 function getIndex(arr) {
  let leftMostIndexOfNumsToChange = 0;

  // finds index starting from right most digit then comparing to digit to the left.
  // once we find a left digit that is smaller than the right digit, break loop and return the index of left digit
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > arr[i - 1]) {
      leftMostIndexOfNumsToChange = i - 1;
      break;
    };
  }

  return leftMostIndexOfNumsToChange;
}

function getClosestGreaterNum(numToCompareTo, arr) {
  let greaterNum = 10;
  let indexOfClosestGreaterNum = -1;

  arr.forEach((digit, i) => {
    if (digit > numToCompareTo && digit < greaterNum) {
      greaterNum = digit;
      indexOfClosestGreaterNum = i;
    };
  });

  return indexOfClosestGreaterNum;
}

function nextBigger(n){
  // make number an array of single digits
  const arr = n.toString().split('');
  // get index of left most digit that will need to be shuffled around
  const leftMostIndex = getIndex(arr);
  // store left most number for later comparison
  const numToCompareTo = arr[leftMostIndex];
  // create new array by taking out digits that will shift from old array (we'll combine these later) and sort the digits from smallest to biggest
  let availableDigitsToShift = arr.splice(leftMostIndex, arr.length).sort();
  // get the index of the array digit that is the closest greater number compared to the smallest number
  const indexOfClosestGreaterNum = getClosestGreaterNum(numToCompareTo, availableDigitsToShift);
  // move closest greater num digit to front and shift the rest right
  availableDigitsToShift.splice(0, 0, availableDigitsToShift.splice(indexOfClosestGreaterNum, 1)[0]);
  // combine both arrays, turn to string and then to number
  const final = parseInt(arr.concat(availableDigitsToShift).join(''));

  return (final > n ? final : -1);
}

// overview
// 10755
// 15057
// find out what numbers are going to need to be shuffled by looking at last number (5) and compare to next digit to the left. 5 is <= to 5 so move left again. 5 is <= 7 so move left again. 7 is not >= 0 so we know 0755 will all need to shift around.
// the numbers shifting/sorting is first based on the 0. we find the next largest available number that is greater than 0. that's 5. next we place the remaining numbers from smallest to largest after the 5 (057).
