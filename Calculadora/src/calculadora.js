const validate = require('validate.js');
const Validar = require('./validate');

const Calculadora = {
    soma(X, Y) {
        const validateA = validate({ X },  Validar.valida); 
        const validateB = validate({ Y },  Validar.valida);
        if(validateA !== undefined || validateB !== undefined){
            return 'Error';
        }
        let sa = X + Y;
        return sa;
    },
    subtracao(X, Y) {
        const validateA = validate({ X },  Validar.valida); 
        const validateB = validate({ Y },  Validar.valida);
        if(validateA !== undefined || validateB !== undefined){
            return 'Error';
        }
        let s = X - Y;
        return s;
    },
    multiplicacao(X, Y) {
        const validateA = validate({ X },  Validar.valida); 
        const validateB = validate({ Y },  Validar.valida);
        if(validateA !== undefined || validateB !== undefined){
            return 'Error';
        }
        let m = X * Y;
        return m;
    },
    divisao(X, Y) {
        const validateA = validate({ X },  Validar.valida); 
        const validateB = validate({ Y },  Validar.valida);
        if(validateA !== undefined || validateB !== undefined){
            return 'Error';
        }
        let d = X / Y;
        return d;
    },
    porcentagem(X, Y) {
        const validateA = validate({ X },  Validar.valida); 
        const validateB = validate({ Y },  Validar.valida);
        if(validateA !== undefined || validateB !== undefined){
            return 'Error';
        }
        let p = X * (Y / 100);
        return p;
    }
};

module.exports = Calculadora;