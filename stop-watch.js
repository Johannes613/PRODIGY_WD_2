const minutes = document.querySelector('.min');
const seconds = document.querySelector('.sec');
const microSecs = document.querySelector('.micro-sec');

const stopBtn = document.querySelector('.stop');
const startBtn = document.querySelector('.start');
const resetBtn = document.querySelector('.reset');

let counting = true;
let timeInterval;
let microSecondsDisp = 0;
let minutesDisp = 0;
let secDisp = 0;

startBtn.onclick = () =>{
    counting = true;
    timeInterval = setInterval(count,10)
}
stopBtn.onclick =()=>{
    counting = false;
    clearInterval(timeInterval);
}
resetBtn.onclick = ()=>{
    minutes.innerHTML = '00:';
    seconds.innerHTML = '00:';
    microSecs.innerHTML = '00';
    microSecondsDisp = 0;
    minutesDisp = 0;
    secDisp = 0;

    clearInterval(timeInterval);

}

function count(){
    if(!counting){
        return;
    }
    microSecondsDisp++;
    if(microSecondsDisp % 100 == 0){
        secDisp++;     
        if(secDisp % 60 == 0){
            minutesDisp++;
            if(minutesDisp == 60){
                minutesDisp = 0; // max capacity is up to 60 minutes
            }
            minutes.innerHTML = (String(minutesDisp)  + ':').padStart(3,'0');
            secDisp = 0;
        }
        seconds.innerHTML = (String(secDisp)  + ':').padStart(3,'0');
        microSecondsDisp = 0;
    }
    microSecs.innerHTML = (String(microSecondsDisp)).padStart(2,'0'); 
}