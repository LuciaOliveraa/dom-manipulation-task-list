let tasks = [
  {
    id: 0,
    owner: "Pelado Cáceres",
    name: "Wash the car",
    description: "Wash the car before crash it 💥🚗",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSynqaOG2CBeapwLA8A7W3C8kmHhNnNraWl7c2rz1eykm_dY_cjB9erHZawnIFOIo3MbcAts4L7N8W7otPrEPvFmzg9UJo7LONUpVhyPpz1gjDfbMOcetAy52k0YdDDoNaZSQ&usqp=CAc",
  },
  {
    id: 1,
    owner: "Developer #432",
    name: "Take humans out of Earth",
    description: "Looking for a new planet to destroy 🌎",
    imgUrl:
      "https://c4.wallpaperflare.com/wallpaper/1020/1/213/world-of-warcraft-battle-for-azeroth-video-games-warcraft-alliance-wallpaper-thumb.jpg",
  },
  {
    id: 2,
    owner: "Another big fish",
    name: "Testing in Production",
    description: `We don't worry about testing, we test in production 🤪`,
    imgUrl:
      "https://c4.wallpaperflare.com/wallpaper/246/739/689/digital-digital-art-artwork-illustration-abstract-hd-wallpaper-preview.jpg",
  },
  {
    id: 3,
    owner: "The return of the Pug",
    name: "Thinking about all the mankind problems",
    description: "Eat, Sleep and wear a jedi robe in order to solve it 🐶",
    imgUrl:
      "https://w0.peakpx.com/wallpaper/381/236/HD-wallpaper-pug-dog-pet-funny-sad.jpg",
  },
  {
    id: 4,
    owner: "Mark Zuckerberg",
    name: "Destroy the entire planet earth",
    description: "Encourage people to live in a metaverse🌈",
    imgUrl: "https://pbs.twimg.com/media/Ew2_PGEWgAE3V5-.jpg",
  },
];

let currentIdNumber = tasks.length;

// 0 - Bajar repo, todos los ejercicios seran parte
// del mismo proyecto js-dom-manipulation-essentials
// Hacer una funcion que cree dinamicamente las task
function createTaskComponent(task) {
  const template = `<div class="task" id=${task.id}>
                    <p> name: ${task.name} </p>
                    <p> description: ${task.description} </p>
                    <img src="${task.imgUrl}" > </div>`

  showTask(template);
  /* crea partecita de html que carga los datos de la task, despues llama a una funcion que carga la task en el ul */
}

function showTask(template) {
  let ulHTML = document.getElementsByTagName("ul");
  let ul = ulHTML[0];

  const li = document.createElement("li");
  //ul.insertAdjacentHTML("beforeend", template);
  li.innerHTML = template;
  ul.appendChild(li);

  // Añade manejador de eventos para eliminar la task al hacer click
  //li.addEventListener("click", removeTask);
}

function loadTasks() {
  tasks.forEach(task => {
    createTaskComponent(task);
  });
}

// 1 - Funcion
// Mostrar en un mensaje de alerta los valores del form
function addTaskAlert(newTask) {}

// 2 - Funcion
//Agregar elemento en la lista al llenar el formulario
document.addEventListener("DOMContentLoaded", () => {
  addTask();
  addClearButtonHandler();
});

function addTask() {
  const addTaskButtons = document.getElementsByClassName("submit-button");
  const addTaskButton = addTaskButtons[0];

  addTaskButton.addEventListener("click", addTaskHandler);
}

function addTaskHandler(event) {
  event.preventDefault();

  const name = document.getElementById("nameInput");
  const owner = document.getElementById("ownerInput");
  const description = document.getElementById("descriptionInput");
  const imgUrl = document.getElementById("imgUrlInput");

  // aca se agrega la task a la lista de tasks
  const newTask = {
    id: currentIdNumber +1,
    owner: owner.value,
    name: name.value,
    description: description.value,
    imgUrl: imgUrl.value,
  }

  tasks.push(newTask);

  currentIdNumber += 1;

  // Limpiar el formulario
  name.value = "";
  owner.value = "";
  description.value = "";
  imgUrl.value = "";
  
  loadTasks();
}

// 3 - Funcion
// Eliminar elemento en la lista al hacer click sobre el elemento
// document.addEventListener("DOMContentLoaded", () => {
//   deleteTaskHandler();
// });
function deleteTaskHandler(/*taskElement*/event) {
  //const tasks = document.getElementsByClassName("task");
  event.preventDefault();
  const li = event.currentTarget;
  
  // Obtener el ID de la tarea a eliminar desde el atributo data-id
  const taskId = parseInt(li.querySelector('.task-item').dataset.id, 10);

  // Eliminar la tarea de la lista tasks
  tasks = tasks.filter(task => task.id !== taskId);

  // Eliminar el elemento <li> del DOM
  li.remove();
}

// 4 - Funcion
// Crear un boton para vaciar/eliminar todas las tareas
function deleteAllTaskHandler() {
  tasks = [];

  const ulHTML = document.getElementsByClassName("ul");
  const ul = ulHTML[0];
  ul.innerHTML = "";
}

function addClearButtonHandler() {
  const clearButtonHTML = document.getElementsByClassName("clear-button");
  const clearButton = clearButtonHTML[0];

  clearButton.addEventListener("click", (event) => {
    event.preventDefault(); // evita que se recargue la página
    deleteAllTaskHandler();
  });
}

// 5 - Funcion
// Si ya no quedan tareas navegar programaticamente
// a www.youtube.com
function redirectWhenNoTask() {
  if (tasks.length === 0) {
    window.location.href = "https://www.youtube.com";
  }
}

loadTasks();