

function playAlarm () {
    const audio = new Audio("sounds/thats-amore.mp3");
    // audio.setAttribute("src", "sounds/thats-amore.mp3");
    audio.play();
}

const button = document.getElementById("theButton");
button.onclick = playAlarm();

// setTimeout should invoke the playAlarm function after 25 minutes
