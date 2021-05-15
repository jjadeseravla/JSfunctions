const nextBigger = (n) => {

  const originalSize = n.toString().length
  if (originalSize === 1) {
    return -1;
  } else {
    let arrOfStr =  ('' +n).split('');

    for (let i = arrOfStr.length-1; i > -1; i--) {
      console.log('p', parseInt(arrOfStr[i]) < parseInt(arrOfStr[i-1]));
      console.log(parseInt(arrOfStr[i]));
      console.log(parseInt(arrOfStr[i-1]));
      if (parseInt(arrOfStr[i]) < parseInt(arrOfStr[i-1])) {
        return -1;
      } else if (parseInt(arrOfStr[i]) === parseInt(arrOfStr[i-1])) {
        for (let j = arrOfStr.length-1; j > -1; j--) {
          console.log('****', parseInt(arrOfStr[i-j]));
          if (parseInt(arrOfStr[i]) < parseInt(arrOfStr[i-j])) {
            arrOfStr.splice(arrOfStr.length -j, 0, arrOfStr[i])
            arrOfStr.pop();
          }
        }
      } else {
        arrOfStr.splice(arrOfStr.length -2, 0, arrOfStr[i])
        arrOfStr.pop();

        if (originalSize <= 3) {
          return parseInt(arrOfStr.join(''));
        } else {
          //count++;
          arrOfStr = [...nextBigger(parseInt(arrOfStr.join('')))];
          return parseInt(arrOfStr.join(''));
        }
      }
    }
  }
}


//console.log(nextBigger(12)); // 21
// console.log(nextBigger(513)); // 531
// console.log(nextBigger(2017)); // 2071
//console.log(nextBigger(414)); // 441
console.log(nextBigger(144)); // 414
