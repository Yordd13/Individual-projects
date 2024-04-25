const currentCount = document.querySelector("#currentCount");
const decreaseBtn = document.querySelector("#decreaseBtn");
const resetBtn = document.querySelector("#resetBtn");
const increaseBtn = document.querySelector("#increaseBtn");

let currCount = 0;

decreaseBtn.addEventListener("click",() => {
    currCount--;
    changeCounter(currCount);
});

resetBtn.addEventListener("click",() => {
    currCount = 0;
    changeCounter(currCount);
});

increaseBtn.addEventListener("click",() => {
    currCount++;
    changeCounter(currCount);
});

function changeCounter(counter){
    currentCount.textContent = currCount;

    let color = "black";

    if(counter > 0){
        color = "green";
    }
    else if(counter < 0){
        color = "red";
    }

    document.getElementById("currentCount").style.color = color;
}