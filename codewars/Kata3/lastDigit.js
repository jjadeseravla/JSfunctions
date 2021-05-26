
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
  } else if (arr.every((elem) => elem === 0) && arr.length > 2) {
    return 0;
  } else if (arr.length === 2) {
    console.log(4)
    return Math.pow(arr[0], arr[1])
  } else {
    console.log(5)
     return thePower(arr);
  }
}

const thePower = (arr) => {
  const backwards = arr.reverse();
  for (var i = 0; i < arr.length-1; i++) {

    const remainderOfArr = backwards.splice(-1, 1); // take 1 last element of arr
    // const newValLastDigit = lasttDigitt(arr[i+1], arr[i]);
    const newVal = Math.pow(arr[i], arr[i+1]);
    console.log('arr[i]', arr[i]);
    console.log('arr[i]+1', arr[i+1]);
    console.log('remainderOfArr', remainderOfArr); //[3]
    console.log('newVal', newVal); //16

    if (remainderOfArr.length === 1) {
      console.log('remainderOfArr[0]', remainderOfArr[0]);
      // const bigNum = Math.pow(remainderOfArr[0], newVal);

      const bigNum = lasttDigitt(remainderOfArr[0], newVal);
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

console.log(lastDigit([3, 4, 2])); // 3^(4^2) = 3^16 = 43046721 --> 1
//console.log(lastDigit([3, 4, 5])); // 3^ 1024 -->1
//console.log(lastDigit([4, 3, 6])); //4

//console.log(lastDigit([7, 6, 21])); //1



// Function to find b % a
function Modulo(lastNum, secondToLastNum)
{

   // Initialize result
   let result = 0;

   // calculating mod of b with a to make
   // b like 0 <= b < a
   for (let i = 0; i < secondToLastNum.length; i++)
       result = (result * 10 + secondToLastNum[i] - '0') % lastNum;

   return result; // return modulo
}

// function to find last digit of a^b
function lasttDigitt(firstNum, secondNum) {

    const a = firstNum.toString();
    const b = secondNum.toString();

   let len_a = a.length;
   let len_b = b.length;
   console.log('***', a.length);

   // if a and b both are 0
   if (len_a == 1 && len_b == 1 &&
               b[0] == '0' && a[0] == '0')
       return 1;

   // if exponent is 0
   if (len_b == 1 && b[0] == '0')
       return 1;

   // if base is 0
   if (len_a == 1 && a[0] == '0')
       return 0;

   // if exponent is divisible by 4 that
   // means last digit will be pow(a, 4)
   // % 10. if exponent is not divisible
   // by 4 that means last digit will be
   // pow(a, b%4) % 10
   const exp = (Modulo(4, b) == 0) ? 4 :
                           Modulo(4, b);

                           console.log('exp', exp);

   // Find last digit in 'a' and compute
   // its exponent
   console.log(len_a);
   const res = Math.pow(a[len_a - 1] - '0', exp);
   console.log('res', res);

   // Return last digit of result
   return res % 10;
}

// Driver program to run test case
// let a = "117";
// let b = "3";
// document.write(LastDigit(a, b));
