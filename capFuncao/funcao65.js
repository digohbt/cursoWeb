function soma(){
    let soma1 = 0 
    for (i in arguments ){
            soma1 += arguments[i]
    }
    return soma1 
}
 console.log(soma())
 console.log(soma(1 ))
 console.log(soma(1.1, 2.2, 3.3))
 console.log(soma())
 console.log(soma("A","B","C"))