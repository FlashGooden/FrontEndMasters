console.log('Hi troy')
setTimeout(()=> console.log('ok in timeout'), 1000)
console.log(process)
console.log(__dirname + `/wow`)
console.log(module)
console.log(__filename, 'is filename')
console.log(this, 'is this')
console.log(exports)
console.log('object')
const sayHi = () => {
  console.log('hi')
}

module.exports = {sayHi, ruthy: 'hello', test(){console.log('bye')}}


