function Carro (velocidadeMaxima = 200 , delta = 5 ){
    // atributo privado 
    let velocidadeAtual = 0 
    // metodo puplico 
    this.aceletar = function(){
        if (velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta 
        }else {
            velocidadeAtual = velocidadeMaxima 
        }
    }
    // metodo publico 
    this.getvelocidadeAtual = function () {
        return velocidadeAtual 
    }
}

const uno = new Carro 
uno.aceletar()
console.log(uno.getvelocidadeAtual())

const ferrari = new Carro (300, 20 )
ferrari.aceletar()
console.log(ferrari.aceletar(getvelocidadeAtual))