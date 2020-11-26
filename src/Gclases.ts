export class Articulo{
    origen : string;

    public constructor(origen) {
        this.origen = origen;
    }

    public  mostrarDatos() : void{
        console.log('Articulo de origen: '+this.origen);
    }

    public  escribir():void{
        console.log('El articulo esta escribiendo...');
    }
}