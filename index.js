var isRecording = false;
var recordButton;

document.addEventListener("DOMContentLoaded", (event) => {
    recordButton = document.getElementById("recordButton");
});

function getPerms(){
    getMicrophoneStream();
    isRecording = true;

    recordButton.style.setProperty('--inversion', 100);
    recordButton.style.setProperty('background-color', 'red');
}

async function getMicrophoneStream() {
    try{
        const stream = await navigator.mediaDevices.getUserMedia({audio:true});
        const audioContext = new AudioContext();
        const source = audioContext.createMediaStreamSource(stream);
        const analyser = audioContext.createAnalyser();
        source.connect(analyser);

        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        // do something with thing here

        const volumeMeter = document.getElementById("volumeMeter");

        function draw() {
            requestAnimationFrame(draw);

            analyser.getByteTimeDomainData(dataArray);

            let sum = 0;
            for(let i = 0; i < bufferLength; i++){
                sum += Math.abs(dataArray[i] - 128);
            }
            const volume = sum / bufferLength;

            volumeMeter.style.height = volume * 3 + '%';
        }

        draw();
    }
    catch(error){
        alert(error);
    }
}