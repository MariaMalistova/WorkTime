let duration = 9;
let start = 8;

$(function() {
    console.log( "ready!" );
    makeAll(start);
});

function makeAll(start) {
    setInterval(() => {
        $('#countdown').text(loadTime(start));
    }, "1000");
}

function loadTime(start) {
    let now = new Date();
    let hoursNow = now.getHours();
    let nowInt = now.getTime();
    //let nowInt = now.setHours(10, 21, 45);
    let startDate = new Date().setHours(start, 0, 0);
    let endDate = new Date().setHours(start + duration, 0, 0);
    if (hoursNow > (start + duration) && hoursNow < start) {
        return 'Конец дня!';
    } else {
        var _second = 1000;
        var _minute = _second * 60;
        var _hour = _minute * 60;

        let lasts = endDate - nowInt;
        let hours = Math.floor(lasts / _hour);
        let minutes = Math.floor((lasts % _hour) / _minute);
        return `${hours} ч ${minutes} мин`;
    }
    /*var distance = end - now;
    if (distance < 0) {

        clearInterval(timer);
        document.getElementById('countdown').innerHTML = 'EXPIRED!';

        return;
    }
    var days = Math.floor(distance / _day);
    var hours = Math.floor((distance % _day) / _hour);
    var minutes = Math.floor((distance % _hour) / _minute);
    var seconds = Math.floor((distance % _minute) / _second);

    document.getElementById('countdown').innerHTML = days + 'days ';
    document.getElementById('countdown').innerHTML += hours + 'hrs ';
    document.getElementById('countdown').innerHTML += minutes + 'mins ';
    document.getElementById('countdown').innerHTML += seconds + 'secs'*/
}
