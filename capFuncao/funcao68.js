const pessoa = {
    saudacao: "bom dia ",
    falar () {
        console.log(this.saudacao)

    }
}
pessoa.falar()
const falar1 = pessoa.falar 
falar1() // conflito emtre paradigmas funcional 

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()
