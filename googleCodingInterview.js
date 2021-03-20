//https://www.youtube.com/watch?v=rw4s4M3hFfs

// list of blocks
//every block has an apartment
// each index there is an apartment
// you want apartment that is close to some buildins you like
// eg.gym/office
// find the apartment that minimises the distance to all buildings

const blocks = [
  {
    'gym': false, //eg at block 0 there is no gym
    'school': true,
    'store': false,
  },
  {
    'gym': true,
    'school': false,
    'store': false,
  },
  {
    'gym': true,
    'school': true,
    'store': false,
  },
  {
    'gym': false,
    'school': true,
    'store': false,
  }, //eg this one (index 3) would be the best cos has gym in index 2, has a school and has store in index 4
  {
    'gym': false,
    'school': true,
    'store': true,
  },
]

//list of buildings you value
const reqs = ['gym', 'school', 'store'];

const bestBlock = (obj, arr) => {

  let gymArr = [];
  let schoolArr = [];
  let storeArr = [];

  for(let i in obj) {
    gymArr.push(obj[i].gym);
    schoolArr.push(obj[i].school);
    storeArr.push(obj[i].store);
  }

  booleansToNums(gymArr);
  booleansToNums(schoolArr);
  booleansToNums(storeArr);
  return 1;
  //split obj into arr of true and false for gym etc
  //check if true make it = 0, if not count indexes to front and back of how far for true and write num down
  //add all index 0's together (etc) from 3 arrays of gym, school and office
  //return index of smallest total
}

const booleansToNums = (arr) => {

//  let newArr = [];

  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] === true) {
  //   arr.splice(i, 1, 0)
  //  }
  //  else {
  //
  //    arr.splice(i, 1, distanceToTrue); //j
  // }

  const indexesOfTrues = getAllIndexes(arr, true); //[1, 2]


  arr.map((element) => {
    if(indexOf(element))
  })
  for (let i = 0; i < arr.length; i++) {

   }

     //}
  return arr;
}

const replaceAt = (arr, index, value) => {
  const ret = arr.slice(0); //slice(0) makes a copy of the original array by taking a slice from the element at index 0 to the last element.
  //slice(0) creates a new array identical to the original array. Many a times you want to preserve your original array and create a new one
  ret[index]= value;
  return ret;
}

function getAllIndexes(arr, val) {
    var indexes = [], i = -1;
    while ((i = arr.indexOf(val, i+1)) != -1){
        indexes.push(i);
    }
    return indexes;
}

console.log(getAllIndexes([false, true, true, false, false], true));
//                            [0,     1,    2,    3,     4   ]
//[1, 0, 0, 1, 2] - gym
//[0, 1, 0, 0, 0] - school
//[4, 3, 2, 1, 0] - store
//check vertically down which has the lowest numbers
//console.log(bestBlock(blocks, reqs));

//  DONT USE SPLICE AS IT MUTATES ARRAY AND THEN ARR.LENGTH IS ALWAYS DIFFERNT, LOOOK AT CLICE OR BINARY SEARCH TREE
