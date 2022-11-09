//--------- Funcao convencional -------------
class Carro{
    constructor (modelo, ano){
        this.modelo = modelo
        this.ano = ano
    }

    getData(){
        return [this.modelo, this.ano]
    }
}

const carro = new Carro("Uno", "2015")
console.log(carro.getData())

//---------------- Factory ------------------
const CarroFactory = (modelo, ano) => ({
    modelo,
    ano,
    getData: () => ({modelo, ano})
})

const carroFactory = CarroFactory("Ideia", "2012")
console.log(carroFactory.getData())