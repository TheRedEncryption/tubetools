var isRecording = false;
var recordButton;

document.addEventListener("DOMContentLoaded", (event) => {
    recordButton = document.getElementById("recordButton");
});

function getPerms(){
    navigator.mediaDevices.getUserMedia({audio:true});
    isRecording = true;

    recordButton.style.setProperty('--inversion', 100);
    recordButton.style.setProperty('background-color', 'red');
}