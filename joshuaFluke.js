//https://www.youtube.com/watch?v=JSbm2drnVR0&list=PLhURsu87NO8sI9gGkz7XQC1Jhyxzl4xD3&index=2

let arr = ['a', 'b', 'c', 'd'];

arr.push('end');
arr.unshift('start');

//with ES6
arr = ['start', ...arr];
arr = [...arr, 'end'];
//or
arr = ['start', ...arr, 'end']
// console.log(arr);
//----------------------------------------------------------------------------------------------------
//create a private variable in JS
const secretVar = () => {
  const private = 'super secret code';
  //inside of function scope so cannot be accessed
  return () => {
    return private
  }
}

const getPrivateVar = secretVar();
console.log(getPrivateVar()); //returns super secret code
console.log(secretVar()); //doesnt work

//----------------------------------------------------------------------------------------------------

const uglyArr = [[1, 2, [3, [5]]], 4];

const flatten = (items) => {
  const flat = [];

  items.forEach(element => {
    //check if array or free floating integer
    if (Array.isArray(element)) {
      flat.push(...flatten(element));
    } else {
      flat.push(element);
    }
  })
  return flat;
}

console.log(flatten(uglyArr));

//----------------------------------------------------------------------------------------------------
