class Pessoa {
    constructor (nome) {
        this.nome = nome 
    }
    falar(){
        console.log(`meu nome e ${this.nome}`)

    }
}
let  p1 = new Pessoa ( 'joao')
p1.falar()
p1 = new Pessoa ( 'diego')
p1.falar()


const criarpessoa = (nome1) => { 
    return {
        falar: () => console.log("meu nome e ", nome1),
     }

}
 const p2 = criarpessoa("arlindo") 
 p2.falar()


