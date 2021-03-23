const fetch = require("node-fetch");

async function logName(name) {
  console.log(1, name);
  //we can yield promises using await this function returns a promise
  return name;
}

logName('tom').then(res => {
  console.log(3, 'result from async function = ' + res);
});
//you get:
// tom
// result from async function = tom

//if didnt have async on line 3 you would get tom and an error
//cos cant return the promise (line 6 return name is a promise), if its not an async function.  line 8 fails.

async function logName2(name) {
  console.log(2, name);
  const transformName = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(name.toUpperCase())
    }, 5000);

  });
  const result = await transformName;
  console.log(4, result);
  return name;
}

logName2('antonio').then(res => {
  console.log(5, 'result from async2 function = ' + res);
})

//if you place async before a functions, you can await promises
//await waits until the promise returns a result back

//you get:
// 1 tom
// 2 antonio
// 3 result from async function = tom
// 4 ANTONIO
// 5 result from async2 function = antonio

//------------------------------------------------------------------------------------------------------------------------------

const getRandomUsers = async (n) => {
  try {
    const fetchRandomUsers = await fetch(`https://randomuser.me/api/?results=${n}`);
    const data = await fetchRandomUsers.json();
    data.results.forEach((user) => {
        const { gender, email } = user;
        console.log(`${gender}, ${email}`);
      });
    return data;
  } catch (error) {
    console.log(error);
  }
};

getRandomUsers(2);

// getRandomUsers(10).then((randomUsers) => {
//   randomUsers.results.forEach((user) => {
//     const { gender, email } = user;
//     console.log(`${gender}, ${email}`);
//   });
// }).catch((error) => {
//   console.log(error);
// })
