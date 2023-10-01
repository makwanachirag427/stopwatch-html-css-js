let displayTime = document.querySelector("#displayTime");
const start = document.querySelector(".start");
const reset = document.querySelector(".reset");
const stop = document.querySelector(".stop");
let [seconds, minutes, hours] = [0, 0, 0];
let timer = null;

function startWatch() {
  timer = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
      if (minutes === 0) {
        minutes = 0;
        hours++;
      }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    displayTime.textContent = `${h} : ${m} : ${s}`;
  }, 1000);
}

stop.addEventListener("click", ()=>{
    clearInterval(timer);
});

start.addEventListener("click", startWatch);

reset.addEventListener("click", ()=>{
    clearInterval(timer);
    displayTime.textContent = "00 : 00 : 00"
});
