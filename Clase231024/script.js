let task = ["comprar","estudiar","limpiar la casa"]; //para agregar tareas

console.log("lista de tareas", task)//para q se vea en la consola

task.push("ir a la escuela");//agregar otra tarea

task.splice(3,1)

task.push("ir a casa");

/*******usando forEach****** */
let tasks = ["comprar","estudiar","comer","ir a la escuela"];

tasks.forEach((task,index) => {
    console.log(`Tarea ${index} ${task}`);
})