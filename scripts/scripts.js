// ************* NAVIGATION HAMBURGER MENU *************
//******************************************************

const hamNav = document.querySelector(".icon");
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamNav.addEventListener("click", toggleMenu);



// VIDEO PLAYER

var videoSelection = document.getElementById('video-selection');
      var ownVideoPlayer = document.getElementById('own-video-player');
      var youtubeVideoPlayer = document.getElementById('youtube-video-player');

      videoSelection.addEventListener('change', function () {
        var selectedValue = videoSelection.value;

        if (selectedValue === 'own') {
          ownVideoPlayer.classList.add('active');
          youtubeVideoPlayer.classList.remove('active');
        } else if (selectedValue === 'youtube') {
          ownVideoPlayer.classList.remove('active');
          youtubeVideoPlayer.classList.add('active');
        }
      });

      var videoPlayers = document.querySelectorAll('.video-player');

      videoPlayers.forEach(function (videoPlayer) {
        var video = videoPlayer.querySelector('.video');
        var playPauseBtn = videoPlayer.querySelector('.play-pause');
        var volumeInput = videoPlayer.querySelector('.volume');

        playPauseBtn.addEventListener('click', function () {
          if (video.paused || video.ended) {
            video.play();
          } else {
            video.pause();
          }
        });

        volumeInput.addEventListener('input', function () {
          video.volume = volumeInput.value;
        });
      });

// ************* MUSICE PLAYER *************
//******************************************************
let todos = [];

    function addTodo() {
      const todoInput = document.querySelector(".todo-input");
      const todo = todoInput.value.trim();
   if(todo==="")
   alert("Please enter song for adding")
   else{
      if (todo) {
        todos.push(todo);
        updateTodoList();
        todoInput.value = "";
      }
    }}

    function editTodo() {
      const selectedTodo = document.querySelector(".todo-list input[type='checkbox']:checked");

      if (selectedTodo) {
        const index = selectedTodo.value;
        const updatedTodo = prompt("Enter the updated to-do item:", todos[index]);

        if (updatedTodo) {
          todos[index] = updatedTodo;
          updateTodoList();
        }
      } else {
        alert("Please select song  to edit.");
      }
    }

    function deleteTodo() {
      const selectedTodo = document.querySelector(".todo-list input[type='checkbox']:checked");

      if (selectedTodo) {
        const index = selectedTodo.value;
        todos.splice(index, 1);
        updateTodoList();
      } else {
        alert("Please select song to delete.");
      }
    }

    function updateTodoList() {
      const todoList = document.querySelector(".todo-list");
      todoList.innerHTML = "";

      for (let i = 0; i < todos.length; i++) {
        const todo = todos[i];

         const todoItem = document.createElement("div");
         todoItem.className = "todo-item";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = i;

        const text = document.createElement("span");
        text.className = "text";
        text.innerText = todo;

        todoItem.appendChild(checkbox);
        todoItem.appendChild(text);
        todoList.appendChild(todoItem);
      }
    }