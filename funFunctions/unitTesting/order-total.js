const orderTotal = (order) => {
  return order.items.reduce((prev, curr) => {
    return curr.price * (curr.quantity || 1) + prev
  }, 0)
}

//make it take a promise

// const orderTotal = (fetch, order) => {
//   return fetch('https://vatapi.com/v1/country-code-check?code=' + order.country)
//    .then((response) => reponse.json())
//    .then(data => data.rates.standard.value)
//    .then(vat => order.items.reduce((prev, cur) =>
//      cur.price * (cur.quantity || 1) + prev, 0) * (1+vat/100)) //cos multiply by 0.19
//   return Promise.resolve(order.items.reduce((prev, curr) => {
//     return curr.price * (curr.quantity || 1) + prev
//   }, 0));
// }

module.exports = orderTotal
