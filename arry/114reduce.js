const aluno = [
    {nome:"joao ", nota:7.3, bolsista:false },
    {nome:"Maria", nota:9.2, bolsista:true },
    {nome:"Pedro", nota: 9.8, bolsista:false },
    {nome:"Ana", nota: 8.7, bolsista:true }, ]
    console.log(aluno.map(a => a.nota))

    const resultado = aluno.map(a => a.nota).reduce(function (acumulados, atual ){
         console.log(acumulados, atual)
     return acumulados + atual 
})
    console.log(resultado) 