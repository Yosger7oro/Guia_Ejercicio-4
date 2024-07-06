/*
Se tienen N sobres con dinero, cada uno con billetes del mismo valor. De cada sobre se conoce el valor del billete y 
la cantidad. Se requiere determinar el total de dinero: a. en cada sobre, b. entre todos los sobres. 
Se procesaron para este ejemplo 4 sobres: a) 5 billetes de $10, b) 2 de $20, c) 4 de $100 y d) 3 de $50 
El cliente entrega el siguiente formato para la presentación de la salida
El sobre Nº1 tiene $50 
El sobre Nº2 tiene $40 
El sobre Nº3 tiene $400 
El sobre Nº4 tiene $150  
El total entre todos los sobres es de $640 
*/

import CL_Sobre from "./CL_Sobre.js";
import CL_Sobres from "./CL_Sobres.js";

let sobre1= new CL_Sobre(5,10)
let sobre2= new CL_Sobre(2,20)
let sobre3= new CL_Sobre(4,100)
let sobre4= new CL_Sobre(3,50)

let sobres= new CL_Sobres()

sobres.procesarsobre(sobre1)
sobres.procesarsobre(sobre2)
sobres.procesarsobre(sobre3)
sobres.procesarsobre(sobre4)

let salida=document.getElementById("salida")

salida.innerHTML="resuldado"
salida.innerHTML+="<br>Dinero del sobre 1: "+sobre1.dinero();
salida.innerHTML+="<br>Dinero del sobre 2: "+sobre2.dinero();
salida.innerHTML+="<br>Dinero del sobre 3: "+sobre3.dinero();
salida.innerHTML+="<br>Dinero del sobre 4: "+sobre4.dinero();
salida.innerHTML+="<br>Dinero entre todos los sobre: "+sobres.acumdinero;