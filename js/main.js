clockSpan = document.getElementById("clock");


var myClock = function() {
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var currentClock = "#" + ("0" + hour).slice(-2) + ("0" + min).slice(-2) + ("0" + sec).slice(-2);
    clockSpan.innerHTML = currentClock;
    document.body.style.background = currentClock;
};
setInterval(myClock, 1000);
