const calculadora = {
    somar: (x, y) => {
        return x+y
    },
    subtrair: (x, y) => {
        return x-y
    },
    multiplicar: (x, y) => {
        return x*y
    },
    dividir: (x, y) => {
        return x/y
    }
}

console.log(calculadora.somar(4,5));
console.log(calculadora.subtrair(8,3));
console.log(calculadora.multiplicar(2,5));
console.log(calculadora.dividir(10,5));
