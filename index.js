const clock = document.querySelector('.clock');
// const clock = document.getElementsByClassName('clock')[0];

let second = 0, hr=0, minutes = 0;
let intervalId;
const startWatch = () => {
    intervalId = setInterval(() => {
        if(second < 59){
            second ++;
        }
        else if(minutes >= 59){
            hr++;
            minutes = 0;
        }
        else{
            second = 0;
            minutes++;
        }

        const se = String(second).padStart(2, "0");
        const min = String(minutes).padStart(2, '0');
        const hor = String(hr).padStart(2, '0');
        clock.innerText = `${hor}:${min}:${se}`
    }, 1000);
}

const stopWatch = () =>{
    clearInterval(intervalId);
}