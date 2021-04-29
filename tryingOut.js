const items = [
  { name: 'a', content: { value: 1 }},
  { name: 'b', content: { value: 2 }},
  { name: 'c', content: { value: 3 }}
]

const doIt = (items) => {
  // let count = 0;
  // for (let i = 0; i <items.length; i++) {
  //   count += items[i].content.value;
  // }
  // return count;
  
  const count = items.reduce((result, {content: {value}}) => {
    return result + value;
  }, 0)
  return count;
}

console.log(doIt(items)); //6
