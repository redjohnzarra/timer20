<?php require_once 'header.php'; ?>
    <div class="outer">
        <div class="middle">
            <div class="inner">
                <div id="timer-cont" style="display:none; font-size: 200px"></div>
                <span id="sound-span"></span>
                <button id="start-btn" class="btn btn-success btn-lg btn-timer" onclick="startTimer()">START</button>
            </div>
        </div>
    </div>
    <div id="pause-stop-div" style="text-align:center; display:none">
        <div style="width:20%; margin:auto">
            <button id="pause-btn" class="btn btn-warning" style="width:80px; float:left" onclick="pauseTimer()">PAUSE</button>
            <button id="stop-btn" class="btn btn-danger" style="width:80px; float:right"  onclick="stopTimer()">STOP</button>
        </div>
    </div>
    <audio id="alarm-cont" preload='none' loop='true'>
        <source src='includes/alarm.mp3' type='audio/mpeg' />
    </audio>
<?php require_once 'footer.php'; ?>
