console.log(module.exports === this )
console.log(module.exports === exports )

this.a=1
module.exports.b = 2 
exports.c=2
exports =null 

console.log(module.exports)

exports = {
    nome:'teste'
}
console.log(module.exports)