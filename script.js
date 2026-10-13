const sound = new Audio("alarm.mp3");
let alarmTime = null;

function setAlarm() {
    alarmTime = document.getElementById("time").value;

    document.getElementById("msg").textContent =
        "Alarm set for " + alarmTime;
}

setInterval(() => {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    const now = hours + ":" + minutes;

    if (now === alarmTime && alarmTime !== null) {
        sound.play();
        document.getElementById("msg").textContent =
            "Alarm ringing!";
        alarmTime = null;
    }
}, 1000);
