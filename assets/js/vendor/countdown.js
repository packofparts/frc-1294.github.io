"use strict";

/*
countdown.js made by FRC team 1257
Modified slightly for our own uses.
https://github.com/team1257-website/team-website/blob/gh-pages/js/countdown.js
*/

var currentDate = new Date().getTime();
var countdown = document.getElementById('countdown');

function postEventInProgress(event) {
    countdown.innerHTML = "<span>We are currently competing at " + event.atag + "!</span>";
    countdown.parentElement.style.background = "#5aad62";
}

function addCountdown(futureDate) {
    var seconds_left = (futureDate - new Date().getTime()) / 1000;
    var days, hours, minutes, seconds;

    // do some time calculations
    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;

    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;

    minutes = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left % 60);

    countdown.innerHTML = '<span class="days"><strong>' + days + '</strong> Days</span> <span class="hours"><strong>' + hours + '</strong> Hours</span> <span class="minutes"><strong>' + minutes + '</strong> Minutes</span> <span class="seconds"><strong>' + seconds + '</strong> Seconds</span>';
}

class event {
    constructor(name, start, end, link) {
        this.name = name;
        this.start = start;
        this.end = end;
        this.link = link;
        this.atag = '<a target="_blank" href="' + link + '"><strong>' + name + '</strong></a>'
    }

    post() {
        addCountdown(this.start);
    }
}

/* Main */
var events = [];
var eventPosted = false;

events.push(new event(
    'FRC 2019: Destination Deep Space Kickoff',
    new Date('Jan 5, 2019, 6:00:00 GMT-700').getTime(),
    new Date('Jan 5, 2019, 12:00:00 GMT-700').getTime(),
    'https://www.firstinspires.org/robotics/frc/kickoff'
));

events.push(new event(
    'Stop Build Day',
    new Date('Feb 19, 2019, 23:59:00 GMT-400').getTime(),
    new Date('Feb 20, 2019, 00:00:00 GMT-400').getTime(),
    'https://www.firstinspires.org/robotics/frc/season-calendar/stop-build-day'
));

events.push(new event(
    '2019 PNW District - Auburn Mountainview District Event',
    new Date('Mar 8, 2019, 17:00:00 GMT-700').getTime(),
    new Date('Mar 10, 2019, 17:00:00 GMT-700').getTime(),
    'http://firstwa.org/Team-Resources/FIRST-Robotics-Competition-Teams-Resources/FRC-Events/2019-Week-2-Auburn-Mountainview'
));

events.push(new event(
    '2019 PNW District - Glacier Peak District Event',
    new Date('Mar 22, 2019, 17:00:00 GMT-700').getTime(),
    new Date('Mar 24, 2019, 17:00:00 GMT-700').getTime(),
    'http://firstwa.org/Team-Resources/FIRST-Robotics-Competition-Teams-Resources/FRC-Events/2019-Week-4-Glacier-Peak'
));

events.push(new event(
    '2019 PNW District - District Championship (pending qualification)',
    new Date('Apr 3, 2019, 17:00:00 GMT-700').getTime(),
    new Date('Apr 6, 2019, 18:00:00 GMT-700').getTime(),
    'http://firstwa.org/Team-Resources/FIRST-Robotics-Competition-Teams-Resources/FRC-Events/2019-FRC-PNW-District-Championship'
));

//Sort the events array based on start date
events.sort(function(a, b) {
    return a.start - b.start;
});

for (var currentEvent in events) {

    //If the currentEvent in the array hasn't occured yet,
    if (events[currentEvent].start > currentDate) {
        document.getElementById("nextevent").innerHTML = 'Next Event: <strong>' + events[currentEvent].atag + '</strong>';
        setInterval(function() {
            events[currentEvent].post();
        }, 1000);
        eventPosted = true;
        break;
    } //If this statement is true, the start of the event has passed

    //If the event is in progress, post it as such
    else if (events[currentEvent].end > currentDate) {
        postEventInProgress(events[currentEvent]);
        eventPosted = true;
        break;
    }
}

if (!eventPosted) {
    document.getElementById("nextevent").innerHTML = '<span>We have no upcoming events!</span>';
}
