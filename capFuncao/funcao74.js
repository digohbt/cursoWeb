const fabricantes = [ "Audi", "BMW", "Mercedes"]

const carro = function (a , b) {
console.log(`${b + 1}. ${a} `)
} 

fabricantes.forEach(carro) 
fabricantes.forEach( fabricante  => console.log(fabricante) )


