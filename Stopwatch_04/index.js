const timeDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hours = 0;
let mins = 0;
let secs = 0;

startBtn.addEventListener("click", () => {
    if(paused){
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime,75);
    }
});
pauseBtn.addEventListener("click", () => {
    if(!paused){
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalId);
    }
});
resetBtn.addEventListener("click", () => {
    paused = true;
    hours = 0;
    mins = 0;
    secs = 0;
    startTime = 0;
    elapsedTime = 0;
    currentTime = 0;
    clearInterval(intervalId);
    timeDisplay.textContent = "00:00:00";
});

function updateTime(){
    elapsedTime = Date.now() - startTime;

    secs = Math.floor(elapsedTime / 1000 % 60);
    mins = Math.floor(elapsedTime / (1000 * 60) % 60);
    hours = Math.floor(elapsedTime / (1000 * 60 * 60) % 60);

    secs = pad(secs);
    mins = pad(mins);
    hours = pad(hours);

    timeDisplay.textContent = `${hours}:${mins}:${secs}`;

    function pad(unit){
        return (("0") + unit).length > 2 ? unit : "0" + unit;
    }
}