
var numberOfDrums = document.querySelectorAll(".drum").length;

// for (var i = 0 ; i < numberOfDrums; i++ ) {

//     document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
//     document.addEventListener("keypress",handleKeyPress);
// }

//Using jQuery

$(".drum").on("click",handleClick);
$(document).on("keypress",handleKeyPress);
//Detecting Clicks for Sound *******************************


function handleClick() {
// Adding what to do when the click detected ***************  
    var buttonClick = this.innerHTML;
    makeSound(buttonClick);
    buttonAnimation(buttonClick);
}
// Detecting Key Presses for Sound *************************

function handleKeyPress(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
}
// Sound switches ******************************************
function makeSound(key) {
    
    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        default:
            console.log(inner.HTML);
            break;
    }
}
// function bass(){
//     var kickb = new Audio('sounds/kick-bass.mp3');
//     kickb.play();
    
// }
// function bass_func() {
//     setInterval(bass, 200);
// }
// bass_func();
// Adding Animations to the buttons ***********************

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    },100);
    
}
// var sound = new Audio('sounds/tom-1.mp3');
// sound.play();