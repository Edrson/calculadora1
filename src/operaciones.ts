export function suma(a:number,b:number) :number{
    try{
        return a + b;
    }catch (error){
        console.log(error);
    }
}
export  function  resta(a:number,b:number):number{
    try{
        return a-b;
    }catch (error){
        console.log(error);
    }
}
export  function  multiplicar(a:number,b:number):number{
    try{
        return a*b;
    }catch (error){
        console.log(error)
    }
}
export function  division(a:number,b:number) :number {
    try{
        return a/b;
    }catch (error){
        console.log(error);
    }
}

