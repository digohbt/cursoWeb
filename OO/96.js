 const pai = { nome:'pedro', corCabelo:'preto ' }
 
 const filha = Object.create(pai)
 filha.nome ='ana '


 const filha2 = Object.create(pai, { 
     nome:{value:'bia', writable:false, enumerable:true } } )
    
 console.log(filha2)
 filha2.nome='carla'
 console.log(filha2.nome,filha2.corCabelo)
 console.log( `${filha2.nome} tem corcabelo... ${filha2.corCabelo}`)
 console.log(Object.keys(filha))
 console.log(Object.keys(filha2))


 for (let key in filha2){
        filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`por heranca  ${key}` )
 }