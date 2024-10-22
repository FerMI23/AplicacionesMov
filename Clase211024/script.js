//alert("cola");

//funcion flecha
//1. *************************
function mifuncion (a,b){
    return a+b;
}

//2.***************** */
console.log (mifuncion (2,3));

//estructura de funcion flecha
let salu2 = () => {};

//3.*************************** */
let saludo = (nombre) => {
    return "Saludos " + nombre;
}
console.log (saludo ("Panchita"));

//4.************************************************** */
let saludar = nombre => "Saludos " + nombre;
console.log (saludar ("David gay"));

//5.*********pasar multiples parametros******** */
let suma = (a,b) => a+b;
console.log (suma (4,9));

//6.**************crear objeto en funcion flecha************** */
let obj =() => ({nombre: "Yael ", edad:18});

//llamamos al objeto y accedemos a la propiedad
let persona = obj().nombre + obj().edad;
console.log (persona);

//7. ****************arreglos************/
let arrfunc = () => [1,2,3,4,5];

//accediendo a todo el arreglo
console.log (arrfunc());

//accedient¿do al arreglo
console.log (arrfunc()[4]);

