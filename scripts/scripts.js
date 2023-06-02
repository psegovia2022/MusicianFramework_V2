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

// ************* MUSIC PLAYER  TO-DO LIST*************
//******************************************************
let todos = [];

function addTodo() {
  const todoInput = document.querySelector(".todo-input");
  const todo = todoInput.value.trim();
  if (todo === "") {
    alert("Please enter song name for adding");

    todoInput.focus(); // Set focus on the input text
  } else {
    if (todo) {
      todos.push(todo);
      updateTodoList();
      todoInput.value = "";
    }
  }
}

function editTodo() {
  const selectedTodo = document.querySelector(
    ".todo-list input[type='radio']:checked"
  );

  if (selectedTodo) {
    const index = selectedTodo.value;
    const updatedTodo = prompt(
      "Enter the updated to-do item:",
      todos[index]
    );

    if (updatedTodo) {
      todos[index] = updatedTodo;
      updateTodoList();
    }
  } else {
    alert("Please select song name  to edit.");
  }
}

function deleteTodo() {
  const selectedTodo = document.querySelector(
    ".todo-list input[type='radio']:checked"
  );

  if (selectedTodo) {
    const index = selectedTodo.value;
    todos.splice(index, 1);
    updateTodoList();
  } else {
    alert("Please select song name to delete.");
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
    //for selecting one song at a time we use radio button
    checkbox.type = "radio";
    checkbox.name = "selectedSong";
    checkbox.value = i;

    const text = document.createElement("span");
    text.className = "text";
    text.innerText = todo;

    todoItem.appendChild(checkbox);
    todoItem.appendChild(text);
    todoList.appendChild(todoItem);
  }
}
function playSong() {
  const audioPlayer = document.getElementById("audioPlayer");

  const selectedSong = document.querySelector(
    "input[name='selectedSong']:checked"
  );

  if (selectedSong) {
    const index = selectedSong.value;
    const songName = todos[index];

    // Update the source of the audio element to the selected song
    audioPlayer.src = songName;
    audioPlayer.play();
  } else {
    alert("Please select a song to play.");
  }
}
var volumeInput = document.getElementById("volume");
volumeInput.addEventListener("input", function () {
  audioPlayer.volume = volumeInput.value;
});

const pauseButton = document.getElementById("pauseButton");

pauseButton.addEventListener("click", function () {
  //
  const selectedSong = document.getElementById("audioPlayer");

  if (selectedSong) {
    selectedSong.pause();
  }
});


// ************* LIGHTBOX ****************************
//******************************************************


function includepopup() {
  let html1 =
    '<div id="popup"><span id="close-button" onclick="closepopup()">&times;</span><span id="left-button">&#10094;</span><span id="right-button">&#10095;</span><img src="image/pic01.jpg" alt="mainpopupimage" id="mainpopimage"/></div>';

  let popdiv = document.createElement("div");
  popdiv.innerHTML = html1;
  
  document.body.insertBefore(popdiv, document.body.firstChild);
}
includepopup();

// function for init popup
function imagepopupinit(popup) {
  //select all image with class popup
  // includepopup();
  img = document.getElementsByClassName(popup);

  for (var i = 0; i < img.length; i++) {
    img[i].style.cursor = "pointer";
    //eventlistener
    img[i].addEventListener("click", function () {
      document.getElementById("mainpopimage").src = this.src;
      document.getElementById("popup").style.display = "block";
      document.getElementsByClassName("gallery")[0].style.opacity = "0.3";
      checkarrow()
      // document.getElementsByClassName("gallary").style.
    });
  }
}
imagepopupinit("popup");
//for closing image
function closepopup() {
  document.getElementById("mainpopimage").src = "";
  document.getElementById("popup").style.display = "none";
  document.getElementsByClassName("gallery")[0].style.opacity = "1";
  
  
}
// for getting current image
function getcurrentImage(){
for(i=0;i<img.length;i++){
if(img[i].src==document.getElementById("mainpopimage").src){
  current=i;
}
}
}
// for getting next image with the right arrow
function nextImage(){
getcurrentImage();
current++;
document.getElementById("mainpopimage").src=img[current].src;

}
//  for getting previous image by left arrow
function prevImage(){
getcurrentImage();
current--;
document.getElementById("mainpopimage").src=img[current].src;

}
// clicking right button
document.getElementById('right-button').addEventListener('click',function(){
nextImage()
checkarrow()
})
//clicking right button
document.getElementById('left-button').addEventListener('click',function(){
prevImage();
checkarrow();
})
// checking previus and last image then hiding right and left button according position of image
function checkarrow() {
  getcurrentImage();

  if (current === 0) {
    document.getElementById("left-button").style.display = "none";
  } else {
    document.getElementById("left-button").style.display = "block";
  }

  if (current === img.length - 1) {
    document.getElementById("right-button").style.display = "none";
  } else {
    document.getElementById("right-button").style.display = "block";
  }
}