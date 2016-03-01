$(document).ready(function(){
    /*var alarm = document.getElementById('alarm-cont'),
    ctrl = document.getElementById('audioControl');

    ctrl.onclick = function () {

    // Update the Button
    var pause = ctrl.innerHTML === 'pause!';
    ctrl.innerHTML = pause ? 'play!' : 'pause!';

    // Update the Audio
    var method = pause ? 'pause' : 'play';
    alarm[method]();

    // Prevent Default Action
    return false;
};*/
});

var alarm = $("#alarm-cont").get(0);
var alarmTimer;
var seconds, countDownTimer, minutes, remainingSeconds;

function startTimer(){
    $("#start-btn").hide();
    $("#pause-stop-div").show();
    seconds = 1200;
    getMinutesAndSecondsRem();
    $("#timer-cont").show().html(minutes+":"+remainingSeconds);
    countDownTimer = setInterval(secondPassed, 1000);
}

function pauseTimer(){
    if($("#pause-btn").text() == "PAUSE"){
        clearInterval(countDownTimer);
        $("#pause-btn").text("RESUME").removeClass("btn-warning").addClass("btn-info");
    }else{
        countDownTimer = setInterval(secondPassed, 1000);
        $("#pause-btn").text("PAUSE").removeClass("btn-info").addClass("btn-warning");
    }
}

function stopTimer(){
    $("#pause-stop-div").hide();
    $("#start-btn").show();
    getMinutesAndSecondsRem();
    $("#timer-cont").hide().html(minutes+":"+remainingSeconds);
    $("#pause-btn").text("PAUSE").removeClass("btn-info").addClass("btn-warning");
    var seconds = 1200;
    clearInterval(countDownTimer);
}

function secondPassed(){
    getMinutesAndSecondsRem();
    $("#timer-cont").html(minutes+":"+remainingSeconds);

    if(seconds == 0){
        clearInterval(countDownTimer);
        window.focus();
        $("#timer-cont").html("BREAK SAH!");
        alarm['play']();
        $("#pause-stop-div").hide();
        $("#timer-cont").append("<div id='skip-cont' style='text-align:center'><button id='mute-btn' class='btn btn-info btnT' onclick='muteAlarm()'>MUTE</button><button class='btn btn-primary btnT' onclick='skipAlarm()'>SKIP</button></div>");
        alarmTimer = setInterval(function(){
            skipAlarm();
        }, 20000);
    }else{
        seconds--;
    }
}

function muteAlarm(){
    if($("#mute-btn").text() == "MUTE"){
        $("#mute-btn").text("UNMUTE");
        alarm['pause']();
    }else{
        $("#mute-btn").text("MUTE");
        alarm['play']();
    }
}

function skipAlarm(){
    clearInterval(alarmTimer);
    clearInterval(countDownTimer);
    alarm['pause']();
    $("#skip-cont").remove();
    startTimer();
}

function getMinutesAndSecondsRem(){
    minutes = Math.round((seconds - 30)/60);
    remainingSeconds = seconds % 60;

    if(remainingSeconds < 10){
        remainingSeconds = "0" + remainingSeconds;
    }
}
