const carro = require('./exercise2');

const car = carro.sort((a, b) => {
    return a.modelo > b.modelo ? 1 : (a.modelo < b.modelo ? -1 : 0);
});

//console.log(car);

module.exports = car;//será usado no exercício 4
