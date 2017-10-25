const add = (x) => (y) => {
  console.log(`${x == 1 ? "increment" : x + " +"} ${y} = ${x+y}`)
}
const increment = add(1)
const qA = (question) => (answer) => console.log(`\nQ: ${question}\nA: ${answer}`)

module.exports = {
  add,
  increment,
  qA
}
