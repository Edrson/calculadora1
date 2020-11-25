"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('############## TRABAJANDO CON INTERFACES #####################');
//Implementando interfaz a travez de una variable
var unCarro = { Imarca: 'nissan', IColor: 'rojo', IArrancar: function () {
        console.log('Esta onda ya arranco...');
    } };
console.log(unCarro.Imarca);
unCarro.IArrancar();
//Creando clase con implementación de dos interfaces.
var Carro = /** @class */ (function () {
    function Carro(color, marca) {
        this.IColor = color;
        this.Imarca = marca;
    }
    Carro.prototype.IArrancar = function () {
        var va1 = 'El carro ' + this.IColor + ' de marca ' + this.Imarca + ' esta arrancando desde clase...';
        console.log(va1);
        this.IRodar();
    };
    Carro.prototype.IRodar = function () {
        console.log('La llanta del ' + this.Imarca + ' empezo  a rodar');
    };
    return Carro;
}());
//Instanciar carro y ver el funcionamiento de las clases e interfaces.
var miCarro = new Carro('Amarillo', 'Mitsubishi');
miCarro.IArrancar();
//Crear clase lancha implementando una interfaz.
var Lancha = /** @class */ (function () {
    function Lancha(color, marca) {
        this.IColor = color;
        this.Imarca = marca;
    }
    Lancha.prototype.IArrancar = function () {
        console.log('La lancha arranco');
    };
    return Lancha;
}());
//Instanciar lancha y ver el funcionamiento.
var miLancha = new Lancha('blanco', 'lap');
miLancha.IArrancar();
//# sourceMappingURL=main2.js.map