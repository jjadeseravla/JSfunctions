const orderTotal = require('../order-total');

const order = {
  items: [
    { name: 'Dragon candy', price: 2, quantity: 3 }
  ]
}

const noQ = {
  items: [
    { name: 'Dragon candy', price: 3 }
  ]
}

const orderBig = {
  items: [
    { name: 'Dragon food', price: 8, quantity: 1 },
    { name: 'Dragon cage (small)', price: 800, quantity: 1 }
  ]
}

const orderBig2 = {
  items: [
    { name: 'Dragon collar', price: 20, quantity: 1 },
    { name: 'Dragon chew toy', price: 40, quantity: 1 }
  ]
}

it('test', () => {
  expect(1).toBe(1);
})

it("Quantity", () => {
  expect(orderTotal(order)).toBe(6);
})

it("No quantity specified", () => {
  expect(orderTotal(noQ)).toBe(3)
})

it("More than one type of item", () => {
  expect(orderTotal(orderBig)).toBe(808);
})

it("Another example of an order with two items", () => {
  expect(orderTotal(orderBig2)).toBe(60);
})
