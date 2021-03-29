const orderTotal = require('../order-total');

//const order = items: []

it('wewe', () => {
  expect(1).toBe(1);
})

it("quantity", () => {
  expect(orderTotal({
    items: [
      { name: 'Dragon candy', price: 2, quantity: 3 }
    ]
  })).toBe(6);
})
