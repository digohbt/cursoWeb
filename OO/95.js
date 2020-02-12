// cadeia de Prototipos(prototype chain)
const avo = { atri1:'a'}
const pai = { __proto__:avo, atri2:'c', atri3:'d'}
const filho ={ __proto__:pai, atri4:'e', atri5:'f',atri3:'diego' }
console.log(filho.atri1, filho.atri2, filho.atri3, filho.atri4, pai.atri4, filho.atri5)


const carro = {
    velAtual :0,
    velMax:200,
        aceleraMais (delta) {
            if (this.velAtual + delta <= this.velMax){ 
            this.velAtual += delta

        } else {
            this.velAtual = this.velMax 
        } 
    },
    status (){
        return `${this.velAtual} Km de ${this.velMax} hm `

    }
}


const ferrari = {
    modelo:'f40',
    velMax: 324
}


const volvo = {
    modelo:'f40',
    status(){
        return `${this.modelo} Km de ${super.status()} hm `

    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)
console.log(ferrari)
console.log(volvo)
volvo.aceleraMais(250)
console.log(volvo.status())
ferrari.aceleraMais(350)
console.log(ferrari.status())

