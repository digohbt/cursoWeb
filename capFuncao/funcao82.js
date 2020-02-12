// criar produto [nome oreco + obj parametro cria ptrofuto ]]
let estoque = []
function criarProdruto(nome,preco) {
    return {
        nome,
        preco,
        desconto: 0.1
        
    }
    


}
console.log(criarProdruto('Notebook', 2119.40))
estoque[0] = criarProdruto ('Notebook', 2119.40)
console.log(criarProdruto('ipos', 2119.40))
console.log(criarProdruto('tv', 2119.40))
console.log(estoque[0])