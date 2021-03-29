const someOrder = {
  items: [
    { name: 'Dragon food', price: 8, quantity: 8},
    { name: 'Dragon cage (small)', price: 800, quantity: 2}
  ]
}

const orderTotal = (someOrder) => {
  return someOrder.items.reduce((prev, curr) => {
    return prev + (curr.price * curr.quantity)
  }, 0)
}

console.log(orderTotal(someOrder)); //1664

//now if orderTotal is above 1000, than shipping is free, if not its 40

const someOrder2 = {
  items: [
    { name: 'Dragon food',        price: 8,    quantity: 8},
    { name: 'Dragon cage (small)',price: 800,  quantity: 1},
    { name: 'Shipping',           price: 40,   shipping: true},
  ]
}

const orderTotal2 = (someOrder2) => {
  const totalItems =
    someOrder2.items
      .filter((order) => {
        return !order.shipping //only sum items that are not shipping items
      })
      .reduce((prev, curr) => {
        return prev + (curr.price * curr.quantity)
      }, 0);

  const shippingItem =
    someOrder2.items.find((thing) => {
      return thing.shipping
    })

  const shipping = totalItems > 1000 ? 0 : shippingItem.price //only add shipping it totalitems is less than 1000

  return totalItems + shipping;

}

console.log(orderTotal2(someOrder2)); //904
