// const lastDigit = (arr) => {
//   if (arr.length === 0) {
//     return 1;
//   }
//   if (arr.length === 1) {
//     return arr[0];
//   } else if (arr.length === 2) {
//     return Math.pow(arr[1], arr[0])
//   } else {
//     return thePower(arr);
//   }
// }
//
// const thePower = (arr) => {
//   for (var i = 0; i < arr.length-1; i++) {
//
//     const remainderOfArr = arr.reverse().splice(-1, 1); // take 1 last element of arr
//     const newVal = Math.pow(arr[i], arr[i+1]);
//     console.log('arr[i]', arr[i]);
//     console.log('arr[i]+1', arr[i+1]);
//     console.log('remainderOfArr', remainderOfArr); //[3]
//     console.log('newVal', newVal); //16
//
//     if (remainderOfArr.length === 1) {
//       console.log('remainderOfArr[0]', remainderOfArr[0]);
//       const bigNum = Math.pow(remainderOfArr[0], newVal);
//       const resArr = String(bigNum).split('').map((num) => {return Number(num)})
//       return resArr[resArr.length-1];
//
//     } else if (remainderOfArr.length === 0) {
//       const chars = newVal.split('');
//       console.log(chars[chars.length-1]);
//       return chars[chars.length-1];
//
//     } else {
//     thePower([...remainderOfArr, newVal]);
//     }
//
//   }
// }


const lastDigit = (arr) => {
  console.log(1)
  if (!arr.length) {
    console.log(2)
    return 1;
  }
//   if (arr.length > )
  if (arr.length === 1) {
    console.log(3);
    return arr[0];
  } else if (arr.length === 2) {
    console.log(4)
    return Math.pow(arr[0], arr[1])
  } else {
    console.log(5)
     return thePower(arr);
  }
}

const thePower = (arr) => {
  for (var i = 0; i < arr.length-1; i++) {

    const remainderOfArr = arr.reverse().splice(-1, 1); // take 1 last element of arr
    const newVal = Math.pow(arr[i], arr[i+1]);
    console.log('arr[i]', arr[i]);
    console.log('arr[i]+1', arr[i+1]);
    console.log('remainderOfArr', remainderOfArr); //[3]
    console.log('newVal', newVal); //16

    if (remainderOfArr.length === 1) {
      console.log('remainderOfArr[0]', remainderOfArr[0]);
      const bigNum = Math.pow(remainderOfArr[0], newVal);
      console.log('bigNum', bigNum);
      const resArr = String(bigNum).split('').map((num) => {return Number(num)})
      return resArr[resArr.length-1];

    } else if (remainderOfArr.length === 0) {
      const chars = newVal.split('');
      console.log('nnnnnn', chars[chars.length-1]);
      return chars[chars.length-1];

    } else {
      console.log('power');
    thePower([...remainderOfArr, newVal]);
    }

  }
}

//console.log(thePower([3, 4, 2]));
//console.log(thePower([4, 3, 1, 2])); //64

//console.log(lastDigit([3, 4, 2])); // 3^(4^2) = 3^16 = 43046721 --> 1
console.log(lastDigit([3, 4, 5])); // 3^ 1024 -->1
