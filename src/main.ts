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
import {suma} from "./operaciones";

console.log('********** Probando suma ***********');
let res = suma(5,8);
console.log('La suma es: ' +res);
console.log('********** Fin suma ***********');


