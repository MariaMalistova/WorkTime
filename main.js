let duration = 9;
let start = 8;

$(function() {
    console.log( "ready!" );
    let timer = setInterval(() => {
        let now = new Date();
        let hoursNow = now.getHours();
        let nowInt = now.getTime();
        //let nowInt = now.setHours(11, 21, 45);
        let startDate = new Date().setHours(start, 0, 0);
        let endDate = new Date().setHours(start + duration, 0, 0);
        $('#countdown').text(loadTime(hoursNow, nowInt, endDate));
        progressBar(startDate, start, hoursNow, nowInt, endDate);
    }, "1000");
});

function loadTime(hoursNow, nowInt, endDate) {
    if (hoursNow >= (start + duration) || hoursNow < start) {
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
}

function progressBar(startDate, start, hoursNow, nowInt, endDate) {
    if (hoursNow >= (start + duration) || hoursNow < start) {
        elem.style.width = "100%";
        elem.innerHTML = "100%";
    } else {
        let width = ((nowInt - startDate) / (endDate - startDate) * 100).toFixed(2);
        var elem = document.getElementById("progressBar");
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
    }
}
