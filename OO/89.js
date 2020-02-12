// usando a anotacao literal 
const obj1 = {}
console.log(obj1) 

// objeto em js 
console.log(typeof Object , typeof new Object)

const obj2 = new Object 
console.log(obj2)

// funÇões construtoras 
function Produto( nome , preco, desc) {
    this.nome = nome 
    this.precoComDesconto =() => {
        return preco * (1 - desc)
    }
}
const p1 = new Produto ("CANETA " , 7.99, 0.15)
const p2 = new Produto("notebook", 2999.80, 0.25 )
console.log(p1.nome,p1.precoComDesconto(),p1.desc, "/", p2.nome, p2.precoComDesconto())


// criar objeto usando funcao factory 


function criarFuncionario(nome, salarioBase , faltas ) 
{
    return {
        nome,
        salarioBase,
        faltas,
     getSalario  (){
            return (salarioBase / 30 )* (30 - 1)
            
        }
    } 
}
const f1 = criarFuncionario('joao', 7890,4)
const f2 = criarFuncionario('maria', 11400, 2  )
console.log(f1.getSalario(), f2.getSalario()) 


// objeto.create

const filha = Object.create(null)
filha.nome= "ana"
console.log(filha)

// um funcao famosa que retorna obj

const  fromJson = JSON.parse('{"infor":"sou um JSON"}')
console.log(fromJson.infor)