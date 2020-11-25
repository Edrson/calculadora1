/*import readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});

var sig : string= "";

rl.question('Ingresa signo de operacion: ', (answer) => {
    //console.log(`Hola : ${answer}`);
    sig = answer;
    console.log(sig);
    //rl.close();
});
*/
import {suma, resta, multiplicar,division} from "./operaciones";

console.log('********** Probando suma ***********');
let respuestaSuma : number;
respuestaSuma = suma(5,8);
console.log('La suma es: ' +respuestaSuma);
console.log('********** Fin suma ***********');

console.log('********** Probando Resta ***********');
let respuestaResta :number;
respuestaResta= resta(20,15);
console.log('La diferencia es: ' +respuestaResta);
console.log('********** Fin Resta ***********');

console.log('********** Probando Multiplicacion ***********');
let respuestaMult :number;
respuestaMult= multiplicar(80,7);
console.log('El producto es: ' +respuestaMult);
console.log('********** Fin Multiplicacion ***********');

console.log('********** Probando division ***********');
let respuestaDiv : number;
respuestaDiv = division(40,7);
console.log('El resultado de la division es: '+respuestaDiv.toFixed(2));
console.log('********** Fin división***********');