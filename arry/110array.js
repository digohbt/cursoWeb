const carrinho = [
    '{"nome": "borracha", "preco": 3.45 }',
    '{"nome": "caderno", "preco": 13.90}',
    '{"nome": "caneta", "preco": 7.50}',
]
const ParaObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco 

let resultado = carrinho.map(ParaObjeto).map(apenasPreco)

console.log(resultado)
