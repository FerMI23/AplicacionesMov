const taskInput = document.getElementById('taskInput');
        const addTaskButton = document.getElementById('addTaskButton');
        const ListaTareas = document.getElementById('ListaTareas');

        let tasks = [];

        const addTask = () => {
            const taskText = taskInput.value.trim();
            if (taskText) {
                tasks.push(taskText);
                updateListaTareas(); 
                console.log(tasks); 
                taskInput.value = ''; 
            }
        };

       
        const updateListaTareas = () => {
            ListaTareas.innerHTML = '';
            tasks.forEach((task, index) => {
                const li = document.createElement('li');
                li.textContent = task;

               
                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Eliminar';
                deleteButton.onclick = () => {
                    tasks.splice(index, 1);
                    updateListaTareas();
                    console.log(tasks);
                };

                li.appendChild(deleteButton);
                ListaTareas.appendChild(li);
            });
        };

        addTaskButton.onclick = addTask;