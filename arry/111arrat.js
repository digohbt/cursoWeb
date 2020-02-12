Array.prototype.map2 = function(callback){
    const newarray = []
    for( let i =0 ; i < this.length; i++){
     newarray.push(callback (this[i], i,this))
    }
    return newarray
} 


const carrinho = [
    '{"nome": "borracha", "preco": 3.45 }',
    '{"nome": "caderno", "preco": 13.90}',
    '{"nome": "caneta", "preco": 7.50}',
]
const ParaObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco 

let resultado = carrinho.map2(ParaObjeto).map2(apenasPreco)

console.log(resultado)