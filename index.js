var isRecording = false;


document.addEventListener("DOMContentLoaded", (event) => {

});

function getPerms(){
    navigator.mediaDevices.getUserMedia({audio:true});
    isRecording = true;
}