"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Gclases_1 = require("./Gclases");
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
//Herencia
var Lapiz = /** @class */ (function (_super) {
    __extends(Lapiz, _super);
    function Lapiz(conBorrador, origen) {
        return _super.call(this, origen) || this;
    }
    return Lapiz;
}(Gclases_1.Articulo));
var miLapiz = new Lapiz(true, 'Desconocido');
miLapiz.mostrarDatos();
miLapiz.escribir();
var Lapicero = /** @class */ (function (_super) {
    __extends(Lapicero, _super);
    function Lapicero(origen) {
        return _super.call(this, origen) || this;
    }
    return Lapicero;
}(Gclases_1.Articulo));
var miLapicero = new Lapicero('De dudosa procedencia');
miLapicero.mostrarDatos();
miLapicero.escribir();
//# sourceMappingURL=main2.js.map