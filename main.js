let timer;
let startTime = 25;
let endTime = 0;
let remainingMinutes = 26;
let remainingSeconds = 0;

// setTimeout should invoke the playAlarm function after 25 minutes

let myAudio = document.getElementById('audio');
let playButton = document.getElementById('theButton');
let countdownMinutes = document.getElementById('countdownMinutes');
let countdownSeconds = document.getElementById('countdownSeconds');

function player() { 
    myAudio.play();
};  

function startTimer(durationInMinutes) {
    clearTimeout(timer); // Clear any existing timers 
    timer = setTimeout(player, durationInMinutes * 60 * 100); 
}

function countdownSecondsFunc () {
    console.log('one second')
    console.log('remainingSeconds', remainingSeconds);
    if (remainingSeconds === 0) {
        remainingSeconds = 59;
    }
    remainingSeconds -= 1;
    
    countdownSeconds.innerText = `seconds ${remainingSeconds}`;
}   

function countdownMinutesFunc () {
    console.log('one minute')
    console.log('remaining minutes', remainingMinutes);
    if (remainingMinutes === 0) {
        console.log('done');
    }
    remainingMinutes -= 1;
    countdownMinutes.innerText = `minutes ${remainingMinutes}`;
}   

setInterval(countdownSecondsFunc, 1000)
countdownMinutesFunc();
setInterval(countdownMinutesFunc, 60000)

playButton.addEventListener("click", function(){ startTimer(.5)})


