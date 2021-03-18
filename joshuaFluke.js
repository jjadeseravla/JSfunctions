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
//-----------------------------------------------------------------------------------------------------------------
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

//----------------------------------------------------------------------------------------------------------------

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

//-----------------------------------------------------------------------------------------------------------------
const array = ['a', 'b', 'c'];
const array2 = array;
array2.push('d');
//console.log(array); // ['a', 'b', 'c', 'd'];
// has a d cos storing by reference even tho consoling original array
// not creating a new variable in memory, its pointing to the original array like redirecting you
// BUT if you use spread operator you can successfully duplicate it

//const array2 = [...array];
array2.push('d')
// console.log(array); //['a', 'b', 'c'] instead now
// console.log(array2) // ['a', 'b', 'c', 'd'];

//-----------------------------------------------------------------------------------------------------------------

const isPalindrome= (str) => {
  const backwardsStr = str.split('').reverse().join('');

  return backwardsStr === str ? true : false;
}

console.log(isPalindrome('hannah'));
console.log(isPalindrome('afsafasfsg'));

//-----------------------------------------------------------------------------------------------------------------

//Array Essentials: indexOf(),
//() (forEach changes one you looped over - mutable, so no need to return it),
// .map() (does not change original array, it makes a new one - immutable, so need to return it)
// .filter()

const numArr =[3, 5, 7];

numArr.indexOf(5) // 1

const pizzaToppings = ['cheese', 'peppers', 'jalapeños', 'mushrooms', 'onions']
if (pizzaToppings.indexOf('jalapeños' > -1)) { //is there jalapeños?
  console.log('too spicy no thanks');
  pizzaToppings.splice(pizzaToppings.indexOf('jalapeños'), 1) //remove it
}

const fruits = ['banana', 'apple', 'orange', 'strawberry'];
let notApple = 0;
fruits.forEach((fruit) => {
  if (fruit != 'apple') {
    console.log(notApple);
    notApple++;
  }
})

const num = [1, 2, 3, 4, 5];

const afterNum = num.map((number) => {
  return number + 1;
});

const old = [
  {
    firstName: 'Jade',
    lastName: 'Alvares',
  },
  {
    firstName: 'Liam',
    lastName: 'Tate',
  },
  {
    firstName: 'Rita',
    lastName: 'Sjilmass',
  },
];

//ALWAYS REMEMBER TO RETURN IN A MAP() function
const newAndPretty = () => {
  return old.map((item) => {
    item.fullName = [item.firstName, item.lastName].join(' - '); ///making a new item with first and last name
    //fullName: [item.firstName, item.lastName].join(' - '), if you dont want the fullName and lastName to show too
    return item; //and no return item
  })
}

console.log(newAndPretty());
//[
//   {
//     firstName: 'Jade',
//     lastName: 'Alvares',
//     fullName: 'Jade - Alvares'
//   },
//   { firstName: 'Liam', lastName: 'Tate', fullName: 'Liam - Tate' },
//   {
//     firstName: 'Rita',
//     lastName: 'Sjilmass',
//     fullName: 'Rita - Sjilmass'
//   }
// ]

const checkNum = (num) => {
  return num > 90;
}

const newFilter = [31, 2, 98, 119, 54].filter(checkNum);
// pass checkNum function as filter parameter to newFilter function --> CALLBACK
console.log(newFilter); //[98, 119]

//CALLBACK
const vegFilter = (foods) => {
  return foods.type === 'meat';
}

const foods = [
  {
    name: 'chicken',
    type: 'meat',
    price: '3.99 lb'
  },
  {
    name: 'pork',
    type: 'meat',
    price: '2.99 lb'
  },
  {
    name: 'carrot',
    type: 'veg',
    price: '.99 lb'
  },
].filter(vegFilter);

console.log(foods);
