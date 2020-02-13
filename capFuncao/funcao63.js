//CRIAR FUNCAO MODO LITER
function fun1() { }

// armazena funcao variavel 
const fun2 = function (){ }

// armazernar em um array uma funcao 
const array = [ function (a, b){ return a + b } , fun1 , fun2]
console.log(array [0](2,3))
console.log(array [0](2,3))
console.log(array [0](2,3))
console.log(array [0](2,3))

// armazrar em um atributo de objeto 
const obj = {}
obj.falar = function(){ return 'opa'}
console.log(obj.falar())
console.log(obj.falar)

// passar funcao como parametro 
function rum (fum){
    fum()
}
rum(function(){console.log('executando..')})

// um funco pode retornar  oi conster um funcao 
function soma( a, b){
    return function ( c ){
        const  sex1 = a + b + c
        return sex1 
    } 
}
 const sex = soma(2,3)(4)
 const cinco = soma(2,3)(4)
 console.log (cinco ,sex)
