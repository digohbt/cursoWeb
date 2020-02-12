const produto = [ 
    {nome:"notebook", preco: 2499, fragil:true },
    {nome:"Ipad pro", preco: 4199, fragil:true },
    {nome:"copo de vidro", preco: 12.49, fragil:true },
    {nome:"Copo De Plastico", preco: 18.99, fragil:false },
    ]

    // console.log(produto.filter(function (e){
    //     return e.preco > 500
    // }) )

const caros = produto => produto.preco > 500 
const frag = produto => produto.fragil 
    
    let resultado =  produto.filter(caros).filter(frag) 
    console.log(resultado)
