var myClock = function() {
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var currentClock = "#" + ("0" + hour).slice(-2) + ":" + min + ":" + ("0" + sec).slice(-2);
    setInterval(myClock, 1000);
    clockSpan = document.getElementById("clock");
    clockSpan.innerHTML = currentClock;
};

myClock();
