class Veiculo {
    placa;
    ano;

    constructor(placa, ano){
        this.placa = placa;
        this.ano = ano;
    }

    setPlaca(placa){
        this.placa = placa;
    }

    setAno(ano){
        this.ano = ano;
    }    

    getPlaca(){
        return this.placa;
    }

    getAno(){
        return this.ano;
    }

    exibirDados(){
        console.log(`O veiculo possui a placa ${this.placa} e eh do ano ${this.ano}`);
    }
}

class Onibus extends Veiculo{
    assentos;

    constructor(placa, ano, assentos){
        super(placa, ano);
        this.assentos = assentos;
    }

    setAssentos(assentos){
        this.assentos = assentos;
    }

    getAssentos(){
        return this.assentos;
    }

    exibirDados(){
        console.log(`O onibus que tem ${this.assentos} assentos, tem a placa ${this.placa} e eh do ano ${this.ano}`);
    }
}

class Caminhao extends Veiculo{
    eixos;

    constructor(placa, ano, eixos){
        super(placa, ano);
        this.eixos = eixos;
    }


    setAEixos(eixos){
        this.eixos = eixos;
    }

    getEixos(){
        return this.eixos;
    }

    exibirDados(){
        console.log(`O caminhão possui a placa ${this.placa} tem ${this.eixos} eixos, e eh do ano ${this.ano}`);
    }
}

let testeVeiculo = new Veiculo("FYZ-6347", 2018);
testeVeiculo.exibirDados();

let testeOnibus = new Onibus("PXA-1175", 1998, 50);
testeOnibus.exibirDados();

let testeCaminhao = new Caminhao("LCA-0906", 2000, 2);
testeCaminhao.exibirDados();