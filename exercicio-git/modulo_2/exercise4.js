const car = require('./exercise3');

const rotate = (d) => {//d = 0, 1, 2, 3, 4, 5 ou 6
    if (d % 6 > 0) {//verifica se é dia útil
        const a = (d % 5) * 2;//placa final par conforme o dia
        const b = (a + 9) % 10;//placa final impar conforme o dia
        return car.filter((c) => {return c.placa.endsWith(a) || c.placa.endsWith(b);})
    }
}

/*
console.log(rotate(0))//domingo
console.log(rotate(1))//2ª feira
console.log(rotate(2))//3ª feira
console.log(rotate(3))//4ª feira
console.log(rotate(4))//5ª feira
console.log(rotate(5))//6ª feira
console.log(rotate(6))//sábado
*/

module.exports = rotate;//será usado no exercício 5
