let clock= document.getElementById('clock');
let button1 = document.getElementById('btn-stop');
let button2 = document.getElementById('btn-start')

var liveTime = setInterval(displayTime, 1000);

function displayTime(){
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    let time = hours + ': ' + minutes + ': ' + seconds;
    clock.textContent = time; 
}

    button1.addEventListener('click', function(){
    clearInterval(liveTime);
    })

    button2.addEventListener('click', function(){
        liveTime = setInterval(displayTime, 1000);
    })
