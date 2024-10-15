// 01 FUNCIONES
/*function hola(){
    console.log('Hola Js');
    console.log('Hola HTML');
    console.log('Hola CSS');

}

hola();*/

//02 retorno mde una funcion

/*function hola(){
    return "hola js";
}

const result = hola();
console.log(result);*/
//hola();

//03 retorna objeto vacio
/*function hola(){
    return {};
}

console.log(result);*/

// 04 retorna valor del objeto
/*function hola(){
    return {
        nombre:'Ferchis'
    }
}
console.log(hola());*/

//05 funcion que retorna otra funcion
/*function hola(){
    return function (){
        return "hola js"
    }
}
console.log(hola()());*/

//06======= USO DE PARAMETROS EN FUNCIONES =========
/*function holaconJs(name){
    return 'hola popo' + name
}
console.log('Ferchis');
console.log('Fercha');
console.log('Fercho');
console.log('Feid');*/

//07 pasar mas de un parametro a la funcion
/*function holaconJs(x,y){
    return x / y;
}
console.log(holaconJs(35,47));*/

//08 control de errores en parámetros
/*function holaconJs(x,y){
    if(y ==undefined){
        y=0;
    }
    return x * y;
}
console.log(holaconJs(35));*/
// o se puede poner de una vez y=0 en el holaconJs

//==== OJETOS =====
const user = {
    nombre : 'Ferchis',
    apeliidoM : 'Muñoz',
    edad : 17, 
    domicilio : {
        ciudad : 'CDMX',
        calle : 'Monte Alegre',
        numero : 1
    },
    amigos : ['David','Valeria','Ale','Emi','Xana'],
    activo : true,
    sendMensaje : function(){
        return 'enviando mensaje'
    }
}

//alert ciudad,calle, nunero..
alert(user.domicilio.ciudad, user.domicilio.calle, user.domicilio.numero);
//consola. los maigos
console.log(user.amigos, user.nombre, user.apeliidoM);
//alert (activo o dado de baja)
//consola nombre, apellidos, estado civil..
//alert (estado del mensaje)
alert(user.sendMensaje(), user.activo);