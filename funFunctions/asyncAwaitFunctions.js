//promise
const fetch = require('node-fetch');

const fetchAvatarUrl = (userId) => {
  return fetch(`https://catappapi.herokuapp.com/users/${userId}`)
    .then(response => response.json())
    .then(data => data.imageUrl)
}

const result = fetchAvatarUrl(123);

//now using async await
const fetchAvatarUrl = async (userId) => {
  const response = await fetch(`https://catappapi.herokuapp.com/users/${userId}`)
  const data = await response.json() //write await infront so its no longer a promise, its the actual data
  return data.imageUrl;
}

const result = fetchAvatarUrl(123);
