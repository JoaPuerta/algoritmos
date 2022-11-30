//-------------------------------------------------------------------------------------------------------------
//------------------------------------------------1------------------------------------------------------------
//----------------------------------Algoritmo triangulo equilatero---------------------------------------------
// 1. Señale y corrija mínimo 11 errores que vea en el siguiente algoritmo./Comentar cada línea le ayuda a entender.
// Proceso sin titulo
// Leer a, b, c
// Escribir "escriba la medida del primer lado del triángulo"
// Escribir "escriba la medida del segundo lado del triángulo"
// Escribir "escriba la medida del tercer lado del triangulo
// Si a=b o b=c y a<>0 Entonces
// Escribir "si se puede formar un triángulo equilátero con los lados ingresados a b c”
// Sino
// Escribir "no se puede formar un triángulo equilátero"
// FinSi
// FinProceso

// function triangulo (){
//     let a = prompt("Ingrese el lado A");
//     let b = prompt("Ingrese el lado B");
//     let c = prompt("Ingrese el lado C");

//     if ( a==b && b==c && c==a){
//         document.write ("Es un triangulo equilatero");
//     } else {
//         document.write ("Los lados no corresponden a un triangulo equilatero")
//     }
// }
// triangulo ()

//-------------------------------------------------------------------------------------------------------------
//------------------------------------------------13-----------------------------------------------------------
//------------------------------Calculadora IMS indice grasa corporal-------------------------------------------
// Su mama, papa, novi@ tiene dudas si esta gorda o no. Elabore un algoritmo que lea el
// nombre de una persona, la estatura y el peso. La estatura está en metros y el peso en
// kilogramos. El algoritmo debe imprimir los datos leídos y el IMC - índice de masa corporal
// en los rangos de delgadez, normalidad, sobrepeso, obesidad 1,2 y mórbida. Investigar
// sobre IMC y como se calcula. Según una nutricionista
// IMC: 1 - 18 = persona delgada
// 18.5 - 24.9 = persona normal
// 25 30 sobrepeso
// 30 35 obesidad grado 1
// 35 40 obesidad grado 2
// 40 hacia arriba obesidad mórbida


// function imc (){
//     let nombre = prompt ("Ingrese su nombre");
//     let estatura = parseFloat(prompt ("Ingrese su estatura"));
//     let peso = parseFloat(prompt ("Ingrese su peso"));

//     let imc = peso / (estatura*estatura)
//         document.write (`${nombre}<br>Su IMC es de: ${imc} Kg`)

//     if (imc <18) {
//         document.write (`<br>persona delgada`);
//     } else if ( imc >= 18.5 && imc <= 24.9){
//         document.write (`<br>Persona en peso normal`);
//     } else if ( imc >= 25 && imc <=30){
//         document.write (`<br>Persona en sobrepeso`);
//     } else if ( imc >=30 && imc <=35){
//         document.write (`<br>Persona en obesidad grado 1`);
//     } else if ( imc >=35 && imc <=40){
//         document.write (`<br>Persona en obesidad grado 2`);
//     } else if ( imc >40){
//         document.write (`<br>Persona en obesidad mórbida`);
//     }
// }
// imc ()

//-------------------------------------------------------------------------------------------------------------
//------------------------------14--------------------------------------------------------------------
//-----------------------------Cajero resta------------------------------------------------------------------
// 14 Ud tiene 2millones guardados en el banco. Se dirige a un cajero que ud mismo
// programo. El cajero le pregunta cuánta plata quiere retirar. Le debe mostrar el resultado
// de la operación y cuanto saldo le queda. 


// function Cajero (){
//     let totalSaldo = 2000000;
//     let montoRetirar = parseInt (prompt("Ingrese monto a retirar"));
    
//     if (montoRetirar == 0 ) {
//         document.write ("Ingrese un monto valido")
//     } else { 
//         let resta = totalSaldo-montoRetirar
//         document.write (`Total Saldo ${totalSaldo}<br>Valor retirado ${montoRetirar}<br>Saldo actual ${resta}`)
//     }
// }
