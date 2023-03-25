for(var i=0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
       switch (this.innerHTML){
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
            console.log(this.innerHTML)
       }
    buttonClicked = this.innerHTML;
    document.querySelector("." + buttonClicked).classList.add("pressed")
    setTimeout(function (){
        document.querySelector("." + buttonClicked).classList.remove("pressed");
       }, 100);
    })
}

//Responds to Keyboard press
document.addEventListener("keydown", function (event){
    switch (event.key){
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
            console.log(event.key)
       }
       document.querySelector("."+ event.key).classList.add("pressed");
       setTimeout(function (){
        document.querySelector("."+ event.key).classList.remove("pressed");
       }, 100);
})