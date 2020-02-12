// Metodos simples 
const pilotos =[ 'Vettel', 'Alonso', 'reikkonen', 'Massa'] 
console.log(pilotos)
pilotos.pop()// remove utimo elemanto 
pilotos.push('Vestappen')
console.log(pilotos)
pilotos.shift()//remove primeiro da lista
console.log(pilotos, pilotos.length,pilotos[0])
pilotos.unshift ('Hamiltom')// adiciona valor no indice 0 ou primeiro
console.log(pilotos, pilotos.length,pilotos[0])
pilotos.splice(2, 0 ,'botas','massa') // adicionou elemntos ao array aartir posicao 3
console.log(pilotos, pilotos.length,pilotos[0])
pilotos.splice(3,1 )// removel apartir da posicao 3 1 elemento
console.log(pilotos, pilotos.length,pilotos[0])
const algunsPilotos = pilotos.slice(2) // cria um novo array apartir 3
console.log(algunsPilotos, algunsPilotos.length)
const algunsPilotos2 = pilotos.slice(1, 4) //cria um array primeiro incide 1 utimo 3 
console.log(pilotos)
console.log(algunsPilotos2)




