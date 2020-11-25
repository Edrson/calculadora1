import {INeumatico} from "./ginterfaces";

console.log('############## TRABAJANDO CON INTERFACES #####################')
interface IMedioTransporte{
    Imarca:string;
    IColor:string;
    IArrancar():void;
}

//Implementando interfaz a travez de una variable
let unCarro:IMedioTransporte ={Imarca:'nissan',IColor:'rojo',IArrancar() {console.log('Esta onda ya arranco...')
    }};
console.log(unCarro.Imarca);
unCarro.IArrancar();

//Creando clase con implementación de dos interfaces.
class Carro implements  IMedioTransporte,INeumatico{
    IColor: string;
    Imarca: string;
    IRin: number;
    public constructor(color,marca) {
        this.IColor = color;
        this.Imarca = marca;
    }
    IArrancar(): void {
        let va1:string='El carro '+this.IColor+' de marca '+this.Imarca+' esta arrancando desde clase...';
        console.log(va1);
        this.IRodar();
    }
    IRodar(): void {
        console.log('La llanta del '+this.Imarca+' empezo  a rodar')
    }
}

//Instanciar carro y ver el funcionamiento de las clases e interfaces.
let miCarro = new Carro('Amarillo','Mitsubishi');
miCarro.IArrancar();

//Crear clase lancha implementando una interfaz.
class Lancha implements  IMedioTransporte{
    IColor: string;
    Imarca: string;
    public constructor(color,marca) {
        this.IColor = color;
        this.Imarca = marca;
    }

    IArrancar(): void {
        console.log('La lancha arranco')
    }
}

//Instanciar lancha y ver el funcionamiento.
let miLancha  = new Lancha('blanco','lap');
miLancha.IArrancar();

