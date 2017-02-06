clockSpan = document.getElementById("clock");


var myClock = function() {
    var date = new Date();
    var hour = date.getHours().toString(16);
    var min = date.getMinutes().toString(16);
    var sec = date.getSeconds().toString(16);
    var currentClock = ("0" + hour).slice(-2) + ("0" + min).slice(-2) + ("0" + sec).slice(-2);
    clockSpan.innerHTML = "#" + currentClock.toUpperCase();
    document.body.style.background = "#" + currentClock;
};
setInterval(myClock, 1000);
