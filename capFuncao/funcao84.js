function Pessoa (nome) {
        this.nome = nome
          this.falar = () => console.log("meu nome e", nome) 
        
}


let p1 = new Pessoa ("diego")
p1.falar()
console.log(p1.nome)
