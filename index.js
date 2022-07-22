// console.log('hello');

function displayTime(){
    let date=new Date();
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();

    let hrotation=(30*hours)+(0.5*minutes);
    let mrotation=(6*minutes)+(0.1*seconds);
    let srotation=6*seconds;


    hour.style.transform=`rotate(${hrotation}deg)`
    minute.style.transform=`rotate(${mrotation}deg)`
    second.style.transform=`rotate(${srotation}deg)`
}

setInterval(displayTime,1000);