function appendToDisplay (value) {// funcion para agregar un valor al display 
    document.getElementById('display').value += value;//obtener el valor del display

}

function clearDisplay(){// agregar el valor de crear al display
    document.getElementById('display'). value = '';//
}
function deleteLast(){// funcion para eliminar el ultimo caracter del display
    let displayValue = document.getElementById('display').value;// obtener el valor actual del dislay
    document.getElementById('display').value = displayValue.slice(0, -1);// actualiza el valor del display
}
function calculateResult(){// funcion para calcular el resultado deñl display
    try{
        let result = eval(document.getElementById('display').value);// actualiza el valor del display
        document.getElementById('display').value = result;// da resultado de lo calculado
    } catch (error){;
        alert('Expresión inválida');//
}
}