const aluno = [
    {nome:"joao ", nota:7.3, bolsista:false },
    {nome:"Maria", nota:9.2, bolsista:true },
    {nome:"Pedro", nota: 9.8, bolsista:false },
    {nome:"Ana", nota: 8.7, bolsista:true }, ]
    console.log(aluno.map(a => a.nota))

    // desafio 1 todos alunos sao bolcistas 
    const todosBolsita = (resultado , bolsista) => resultado && bolsista 

    console.log(aluno.map( a => a.bolsista).reduce(todosBolsita))

    const todosBolsitas = (resultado , bolsista) => resultado || bolsista 

    console.log(aluno.map( a => a.bolsista).reduce(todosBolsitas))
