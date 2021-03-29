const orderTotal = (order) => {
  return order.items.reduce((prev, curr) => {
    return curr.price * (curr.quantity || 1) + prev
  }, 0)
}

module.exports = orderTotal
