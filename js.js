const getTime = () => {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getUTCSeconds();
    let am = "AM";
    if (hours > 12) {
        hours = hours - 12;
        am = "PM";
    }
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    document.getElementById("time").innerHTML = `${hours}:${minutes}:${seconds} ${am}`;



}
setInterval(getTime, 1000);