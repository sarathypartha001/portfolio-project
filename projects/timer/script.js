let [hours,minutes,seconds]=[0,0,0];
let timer = document.querySelector(".timer");
let time = null;

function timerswift(){
    seconds++;
    if(seconds==60){
        seconds=0;
        minutes++;
        if(minutes == 60){
            minutes=0;
            hours++
        };
    };
    let h = hours< 10 ? "0" + hours : hours;
    let m = minutes <10 ? "0" + minutes : minutes;
    let s  = seconds < 10 ? "0" + seconds : seconds;

    timer.innerHTML = h + ":" + m + ":" + s;
 };

 function resetbtn(){
    [hours,minutes,seconds]=[0,0,0];
    timer.innerHTML = "00:00:00";
    clearInterval(time)
 };
 function stopbtn(){
      clearInterval(time)
 }


function startpausebtn(){
    if(time!==null)
        {
         clearInterval(time);
    }
    time = setInterval(timerswift,1000);
}