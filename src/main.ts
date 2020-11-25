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




console.log('############## EMPIEZAN CALLBACKS TIPADO DEBIL (Javascript) #########################');
//funcion sum normal
function sum(a,b){
    return a+b;
}

//funcion operar quien recibe de parametro una funcion(f) con sus parametros, y devuelve el return de (f)
function operar(a,b,f) {
    return f(a,b);
}

//utilización del callback, en asignación a una variable
let v1 ;
//a la función operar se le envían los números de parámetro y la función a ejecutar, (v1 toma el valor de 10)
v1 = operar(2,8,sum);
console.log(v1);
//imprimiendo directamente sin utilizar variable intermediaria.
console.log(operar(2,2,sum));

console.log('############## EMPIEZAN CALLBACKS TIPADO FUERTE (Typescript) #########################');

//funcion sum normal
function  tssuma(a:number,b:number):number{
    return  a+b;
}


//funcion operar2 quien recibe de parametro dos números(a,b), una funcion(f) con sus parametros (c,d)
//esta funcion(f) returna un valor number, y operar2  devuelve el return de (f), osea number
function operar2(a:number,b:number,f:(c:number,d:number)=>number) : number {
    return f(a,b);
}

//probamos callback asignandole valor a la variable.
let v2 : number = operar2(7,5,tssuma);
//imprimir resultado:
console.log(v2);


