//Simulador de costos de productos comprados 
//primero se establece que productos se van a comprar 
//luego se establece el metodo de pago.tenemos 2 opciones
//1-contado
//2-cuotas(hasta 12 cuotas).hasta 3 cuotas son sin interes
//desde la 4 es un 8% de interes por cuota agregada
//quedando en 6 cuotas 48% de interes y en 12 cuotas 96%de interes.


//definicion de variables
const PrecioProd1=20000;
const PrecioProd2=30000;
const PrecioProd3=35000;
const PrecioProd4=40000;
const PrecioProd5=45000;
let seleccion=3;
let PagoContado=0;

//funcion simulacion de costos de todos los productos comprados
//de acuerdo al metodo depago...
function MetodoPago(CostoContado){
    let indicador=0;
    let NumCuotas=2;
    let PrecioFinal=0;
    let CuotaMensual=0;
    console.log("COMO PAGARAS:");
    console.log("1-Contado");
    console.log("2-Credito");
    indicador=prompt("Seleccionar:");
    if(indicador==1){
        console.log("DEBERAS PAGAR:",CostoContado,"AL CONTADO");
    }else if(indicador==2){
        console.log("Cuantas Cuotas:(2-12)");      //8% de interes por cuota...
        NumCuotas=prompt();
        if(NumCuotas<=3){
//La cuota aca seria sin interes...            
            CuotaMensual=CostoContado/NumCuotas;
            console.log("LA CUOTA MENSUAL SERIA:" + CuotaMensual);
        }else{
//las cuotas tendran un 8% de interes...
            CuotaMensual=((8/100*NumCuotas*CostoContado)+CostoContado)/NumCuotas;
            console.log("LA CUOTA MENSUAL SERIA:" + CuotaMensual);
            console.log("CON UN INTERES DE %" + 8*NumCuotas);
        }
    }
    return;
}


//funcion seleccion de productos a comprar...
//en esta funcion se calcula el precio al contado total a pagar
function productos(){
    let indicador=6;
    let calculo=0;
   

    while(indicador!=0){
        console.log("QUE PRODUCTOS COMPRARAS(1-5):");
        console.log("0-salir");
        console.log("1-producto1($20.000)");
        console.log("2-producto2($30.000)");
        console.log("3-producto3($35.000)");
        console.log("4-producto4($40.000)");
        console.log("5-producto5($45.000)");
        indicador=prompt("seleccionar:");
        
        if(indicador>0&&indicador<=5){
           
            switch(indicador){
                case "1":
                    calculo+=PrecioProd1;
                    break;
                case "2":
                    calculo+=PrecioProd2;
                    break;
                case "3":
                    calculo+=PrecioProd3;
                    break;
                case "4":
                    calculo+=PrecioProd4;
                    break;
                case "5":
                    calculo+=PrecioProd5;
                    break;
            }
        }
    }
    return calculo;
}

//programa principal
do{
    console.log("QUE DESEAS REALIZAR:");
    console.log("0-finalizar");
    console.log("1-escoger productos a comprar");
    console.log("2-calcular costo");
    seleccion=prompt();
    if(seleccion==1){
        PagoContado=productos();
    }
    else if(seleccion==2){
        MetodoPago(PagoContado);
    }
    
}while(seleccion!=0)
