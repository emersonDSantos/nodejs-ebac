const rotate = require('./exercise4');

let dayOfWeek = 0;
while(dayOfWeek < 7) {
    const w = dayOfWeek == 0? "domingo" : (dayOfWeek == 6? "sábado" : (dayOfWeek + 1) + "ª feira");
    let msg = "No dia de " + w + ", ";
    if (dayOfWeek % 6 > 0) {
        msg += "os veículos de rodízio são: ";
        console.log(msg);
        console.log(rotate(dayOfWeek));
    } else {
        msg += "não há rodízio.";
        console.log(msg);
    }
    dayOfWeek++;
}
