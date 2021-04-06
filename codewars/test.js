const result = [ ['EAST', 'l'], ['NORTH'] ];
const test = result.flatMap(val => {
  if(Array.isArray(val)) {
    return val
  } else {
    return [val];
  }
})
console.log(test);
