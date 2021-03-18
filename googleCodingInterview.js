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

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === true) {
  //     console.log("io");
       arr.splice(indexOf(arr[i], 1, 0))
     }
    else if (arr[i + 1] === true || (arr[i -1]) === true) {
      //  replace with i
      console.log("io");
      arr.splice(indexOf(arr[i]), 1, i);
      //check is arr[i+1] || arr[i-1] === true //if yes replace with 1
      //if no loop round and check arr[i+2] || arr[i-2] if yes replace with 2
      }
     }
  return arr;
}

console.log(booleansToNums([false, true, true, false, false]));
//console.log(bestBlock(blocks, reqs));

//  DONT USE SPLICE AS IT MUTATES ARRAY AND THEN ARR.LENGTH IS ALWAYS DIFFERNT, LOOOK AT CLICE OR BINARY TREE
