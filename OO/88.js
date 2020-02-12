let produto = new Object 
produto.nome = "cadeira"
produto['marca'] = "generica"
produto.preco = 20 

console.log(produto)

delete produto.nome
delete produto['marca']
console.log(produto)
 


const carro = {
    medelo:"a4",
    preco: 89000,
    endereco: {
        rua :"pedra lavrada ",
        nemero:19,
    },
    condutors: [ {
        nome:"diego",
        idade:19,
     }, {
        nome:"ana",
        idade:18 ,
     } , ] ,
     calcularSegoro: (nome) => {
       console.log("dia feliz2",nome)
     }, 
}
 console.log(carro.calcularSegoro("diego"))