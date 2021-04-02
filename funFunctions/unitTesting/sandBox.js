const fetch = require('node-fetch');

const result =
  fetch('https://vatapi.com/v1/country-code-check?code=' + order.country, {
    headers: {
      'apikey': process.env.VAT_API_KEY
    }
  })
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      data.rates.standard.value
    })

//i dont have api key you have to pay for it but for this example let the answer be 19
