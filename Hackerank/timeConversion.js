const timeConversion = (time) => {
   if (time.substr(8, 2) === 'AM') {
     time.replace('AM', '');
     if (time.substr(0, 2) === '12') {
       return time.replace('12', '00');
     }
     else {
       return time;
     }
   }
  if (time.substr(8, 2) === 'PM') {
      time.replace('PM', '');
      if (time.substr(0, 2) === '12') {
       return time;
     } else {
       return rightNumber(time);
     }
   }

}

const rightNumber = (time) => {
  const num = parseInt(time, 10);
  const str =  (num + 12).toString();
  const piece = time.slice(0,2);
  return time.replace(piece, str);
}


console.log(timeConversion('12:01:00PM')); //'12:01:00'
console.log(timeConversion('06:01:00PM')); //'18:01:00'
console.log(timeConversion('12:01:00AM')); //'00:01:00'
console.log(timeConversion('06:01:00AM')); //'06:01:00'
