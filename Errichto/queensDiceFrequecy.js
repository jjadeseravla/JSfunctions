const queensThatCanKillKing = (queens, king) => {
  let res = [];

  const sameX = queens.map((coords) => {
    if (coords[0] === king[0]){
      return coords
    };
  })

  const xNewArr = removeUndefined(sameX);

  const diffX = xNewArr.map((coords) => {
    return difference(coords[1], king[1]);
  })
  res.push( [xNewArr[0][0], Math.min(...diffX)] );

  const sameY = queens.map((coords) => {
    if (coords[1] === king[1]){
      return coords
    };
  })

  const yNewArr = removeUndefined(sameY);

  console.log('yNewArr', yNewArr);

  const diffY = yNewArr.map((coords) => {
    return difference(coords[0], king[0]);
  })
  res.push( [Math.min(...diffY), xNewArr[0][0]] );

  //  for (var i = 0; i < queens.length; i++) {
  // //   // if (queens[i][0] && queens[i][1]) {
  // //   //
  // //   // }
  //    compare(queens[i], queens[i+1]);
  //  }

  console.log('res', res);
  return res;
}

const compare = (coord1, coord2) => {
  let ans = []
  console.log(coord1[0], coord2[0]);
  if (coord1[0] !== coord2[0] && coord1[1] !== coord2[1]) {
    ans.push(coord1, coord2)
  }
  return ans;
}
//TODO: need to compare all of index0(x coords) and make sure individual
//and all of index1(y coords) of queens nested array and make sure only [3,3] is given back as the 3 is individual
//in x coords and y coods.
 
console.log('expect [0, 1], [1, 0]', compare([0, 1], [1, 0]))
console.log('expect undefined', compare([1, 2], [1, 2]))
console.log('expect [0, 1], [0, 2]', compare([0, 1], [0, 2]))

const removeUndefined = (sameCoOrdArr) => {
  return sameCoOrdArr.reduce((newArr, coords) => {
    if (coords) { //check if undefined or 0
    return [...newArr, coords] //building newArr with everything in old arr and adding extra item
    }
    return newArr; //if 'if' is doingnothing this block just return same newArr. (you do this when trying to remove elements)
  }, [])
}

const difference = (a, b) => {
  return Math.abs(a-b);
}


const queens = [[0,1], [1,0], [4,0], [0,4], [3,3], [2,4]];
const king  = [0,0]
console.log(queensThatCanKillKing(queens, king)); //[[0,1], [1,0], [3,3]]

//[k, q, -, -, q, -, -, -],
//[q, -, -, -, -, -, -, -],
//[-, -, -, -, q, -, -, -],
//[-, -, -, q, -, -, -, -],
//[q, -, -, -, -, -, -, -],
//[-, -, -, -, -, -, -, -],
//[-, -, -, -, -, -, -, -]
// ]
