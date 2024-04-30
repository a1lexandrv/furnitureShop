function calcSum(arr) {
  return arr.reduce((acc, item) => (acc = acc + Number(item.price)), 0);
}

export { calcSum };
