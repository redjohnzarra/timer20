<!doctype html>
<html>
<head>
<meta charset="ISO-8859-1" />
<title>Example of How to Play a Sound on Click or on MouseOver</title>
<script language="javascript" type="text/javascript">
function playSound(soundfile) {
  document.getElementById("dummy").innerHTML=
    "<embed src=\""+soundfile+"\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
}
</script>
</head>

<body>
<!-- <span id="dummy"></span>
<p><a href="#" onclick="playSound('includes/alarm.mp3');">Click here to hear a bird sing</a></p> -->
<embed src="includes/alarm.mp3" hidden="true" autostart="true" loop="false" />
<!-- <p onmouseover="playSound('includes/alarm.mp3');">Or you can put your mouse over this paragraph to hear the same bird sound.</p> -->

</body>
</html>
