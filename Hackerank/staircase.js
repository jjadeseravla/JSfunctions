const staircase = (n) => {
  for (let i = 0; i < n; i++) {
    let stair = '';
    for (var j = 1; j <= n; j++) {
      if (j>= n - i) {
        stair += '*'
      } else {
        stair += ' ';
      }
    }
    console.log(stair);
  }
}

console.log(staircase(4));

//[[0, 0, 0, '*'],[0, 0, '*', '*'],[0, '*', '*', '*'],['*', '*', '*', '*']]

// [
//   [0, 0, 0, '*'],
//   [0, 0, '*', '*'],
//   [0, '*', '*', '*'],
//   ['*', '*', '*', '*']
// ]
