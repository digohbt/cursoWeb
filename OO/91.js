const a = 1 , b = 2, c = 3  
const obj1 = {a,b,c}
const obj2 = {a:a, b:b,c:c}
console.log(obj1, obj2)

// segunda forma 
const  nomeAtrr = 'nota'
const valorAtt = 7.3

const obj3 = {}
obj3[nomeAtrr] = valorAtt 
console.log(obj3)


//  3 forma 
const obj4 = {[nomeAtrr]:valorAtt}
console.log(obj4)

// 4 forma 
 const obj5 = {
     funcao1: (a , b) => {
         a = nomeAtrr 
         b = valorAtt 
         let arr = 0
         return arr = {a ,b} 
         
     }  ,
     
 }
console.log(obj5.funcao1(nomeAtrr,valorAtt))