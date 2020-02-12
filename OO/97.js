function MeuObjeto (){ }
console.log(MeuObjeto.prototype)
const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__ )
// saber se os obj1 , obj2 estao apontando para funcao MeuObjeto
console.log(MeuObjeto.prototype === obj1.__proto__)
// a heranca esta ligada ha funcao MeuObjeto
MeuObjeto.prototype.nome = 'Anonimo'     // criar attributo ao meuObjeto Pai
MeuObjeto.prototype.falar = function () {  // criar funcao para atributo  ao meuObjeto Pai
     console.log(`Bom dia meu nome e ${this.nome}!!`) }
obj1.falar()
obj2.nome = 'rafael'
obj2.falar()

obj3 = {}
obj3.__proto__ = MeuObjeto.prototype 
 obj3.nome= 'diego'
 obj3.falar()

// revisao 
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log( MeuObjeto.__proto__ === Function.prototype)
console.log( Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)



