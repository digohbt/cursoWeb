const  pessoa = {
    nome:'Rebeca',
    idade:2,
    peso: 13,

}

console.log(Object.keys(pessoa))// devolve chaves  (nome das variaves de pessoa)
console.log(Object.values(pessoa))// valor atrinuidos as variaves 
console.log(Object.entries(pessoa))// devolve um aray contando varial e atribuicoes 

Object.entries(pessoa).forEach( ( [chave,valo]) =>{
    console.log(chave, valo)
}  )


Object.defineProperty(pessoa, 'dataNascimeto', {
    enumerable:true ,
    writable: false ,
    value: '01/ 01/2019',
})
pessoa.dataNascimeto= 01/01/2017 
console.log(pessoa.dataNascimeto)

// object.assign 
const desc = {a:1}
const ob1 = {b:2}
const ob2 = { c:3, a:4} 
const obj = Object.assign(desc,ob1, ob2)
console.log(obj)


Object.freeze(obj)
