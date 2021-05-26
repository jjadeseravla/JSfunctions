const nextBigger = (n) => {

  const originalSize = n.toString().length;

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

      // } else if (parseInt(arrOfStr[i]) === parseInt(arrOfStr[i-1])) {
      //   continue;
      //   // for (let j = arrOfStr.length-1; j > -1; j--) {
      //   //   console.log('****', parseInt(arrOfStr[i-j]));
      //   //   if (parseInt(arrOfStr[i]) < parseInt(arrOfStr[i-j])) {
      //   //     arrOfStr.splice(arrOfStr.length -j, 0, arrOfStr[i])
      //   //     arrOfStr.pop();
      //   //   }
      //   // }
      //
       }
       else {
          console.log('here');
        // arrOfStr.splice(arrOfStr.length -2, 0, arrOfStr[i])
        arrOfStr.splice(-2, 0, arrOfStr[i])
        console.log(arrOfStr);
        arrOfStr.pop();
        console.log(arrOfStr);
        //it should come here and be mutated and ready to compare the next 2 integers??! instead keeps iterating over same thing!


        // if (originalSize <= 3) {
        // console.log('p', parseInt(arrOfStr[i]) < parseInt(arrOfStr[i-1]));
        // console.log(parseInt(arrOfStr[i]));
        // console.log(parseInt(arrOfStr[i-1]));
        if (parseInt(arrOfStr[i]) < parseInt(arrOfStr[i-1])) {
          console.log('here2', parseInt(arrOfStr.join('')));
          return parseInt(arrOfStr.join(''));
        } else {
          const lastNumRemovedFromMain = arrOfStr.splice(arrOfStr.length -1, 1);
          console.log('lasNumRemovedFromMain', arrOfStr);
          console.log('what goes in', parseInt(arrOfStr.join('')));
          arrOfStr = [nextBigger(parseInt(arrOfStr.join('')))];
          console.log('arrOfStr[0]', arrOfStr[0]);
          console.log('lastNumRemovedFromMainStr', lastNumRemovedFromMain.toString());
          const theEnd = `${arrOfStr[0]}${lastNumRemovedFromMain.toString()}`
          console.log('theEnd', theEnd);
          return parseInt(theEnd);
        }
      }
    }
  }
}


console.log(nextBigger(12)); // 21
 console.log(nextBigger(513)); // 531
console.log(nextBigger(2017)); // 2071
 console.log(nextBigger(414)); // 441
 console.log(nextBigger(144)); // 414
