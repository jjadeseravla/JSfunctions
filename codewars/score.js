const score = (arr) => {
  const obj = scoreFunc(arr);
  const  numberAndCounts = arrayOfNumberAndCounts(obj);
  const filteredObj = report(numberAndCounts);
  return getPoints(filteredObj);
}


const scoreFunc = (arr) => {
  let obj = {};
  for (var i = 0; i < arr.length; i++) {
    !obj[arr[i]] ? obj[arr[i]] = 1 : obj[arr[i]]++;
  }
  console.log('objjjjjjjjjjjj', obj);
  return obj;
}

const arrayOfNumberAndCounts = (obj) => {
   const result =  Object.entries(obj).reduce((acc, entry) => { //Object.entries gives you arr of arrs
    console.log(entry);
    return [...acc, { number: entry[0], count: entry[1] }]
  }, []);
  console.log('arrayOfNumberAndCounts', arrayOfNumberAndCounts);
  return result;
}

const report = (numberAndCounts) => {
  const reducer = numberAndCounts.reduce((acc, entry) => {
    console.log('entry.count', entry.count);

    if (entry.count > 3) {
      const remainder = entry.count % 3 //1
      console.log('remainder', remainder);

      if (remainder === 0) {
        const multiplier = entry.count /3 //1
        console.log('multiplier', multiplier);
        let newArr = new Array(multiplier).fill({number: entry.number , count: 3});
        return [...acc, ...newArr]
      }

      console.log('entry--------count', entry.count);
      console.log('remainder-----', remainder);
      return [...acc,
        {number: entry.number , count: (entry.count - remainder)},
        {number: entry.number , count: remainder}
      ]
    }
    return [...acc, entry]; //unchanged
  }, [])

  console.log('reducer', reducer);
  return reducer; // eg.getPoints(reducer)
}

const getPoints = (filteredObj) => {
  let points = 0;
  console.log('filteredObj', filteredObj);
  const calculatePoints =  Object.entries(filteredObj).map( ([iterator, item]) => {
  //console.log('look at thissssss', item.number); //0

    if (item.number === '1' && item.count === 1) {
      console.log(1, points);
      points += 100
    }
    if (item.number === '1' && item.count === 2) {
      points += 200
    }
    if (item.number === '1' && item.count === 3) {
      //console.log(3, points);
      points += 1000
    }
    if (item.number === '2' && item.count === 3) {
      points += 200
    }
    if (item.number === '3' && item.count === 3) {
      points += 300
    }
    if (item.number === '4' && item.count === 3) {
      points += 400
    }
    if (item.number === '5' && item.count === 3) {
      points += 500
    }
    if (item.number === '5' && item.count === 1) {
      points += 50
    }
    if (item.number === '5' && item.count === 2) {
      points += 100
    }
    if (item.number === '6' && item.count === 3) {
      points += 600
    }
  })
  //console.log(points);
  return points;
}


module.exports = {score, scoreFunc, arrayOfNumberAndCounts, report, getPoints};
























// //HOW TO LOOP OVER MAP!!!!!!!!!!!!!!!!!!!! <<<<---------------------------------------------------------------------------------------------------------------------------------
// const score = (arr) => {
//   let points = 0;
//   let obj = {};
//   for (var i = 0; i < arr.length; i++) {
//     !obj[arr[i]] ? obj[arr[i]] = 1 : obj[arr[i]]++;
//   }
//   console.log(obj);
//   // for (let i = 0; i < arr.length; i++) {
//   //   if (!obj[arr[i]]) { //1st iter - it doesnt contain f
//   //     obj[arr[i]] = 1 //make f (the key ) be equal to  1 (the value)
//   //   } else {
//   //     obj[arr[i]] ++; //goes here when there is more than 1, eg when value is 1 or more already
//   //   }
//   // }
// }
//


// // console.log(score([2, 4, 4, 5, 4])); //450
// // console.log(score([4, 4, 4, 3, 3]));// 400
// // console.log(score([2, 3, 4, 6, 2])); //0
// //console.log(score([5, 1, 3, 4, 1])); //250
// //-------console.log(score([1, 1, 1, 3, 1])); //1100
// //console.log(score([2, 4, 4, 5, 4])); //450
