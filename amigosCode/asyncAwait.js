async function logName(name) {
  console.log(name);
  //we can yield promises using await this function returns a promise
  return name;
}

logName('tom').then(res => {
  console.log('result from async function = ' + res);
});
//you get:
// tom
// result from async function = tom

//if didnt have asunc on line 1 you would get tom and an error
//cos cant return the promise (line 4 return name is a promise), if its not an async function.  line 8 fails.
