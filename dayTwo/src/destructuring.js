const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
}

const f = ({
  a,
  b
}) => {
  console.log(`
    a : ${a},
    b : ${b}
    `)
}

const g = ([a, b]) => {
  console.log(`
      first : ${a}
      second : ${b}
    `)
}

module.exports = {
  obj,
  f,
  g
}
