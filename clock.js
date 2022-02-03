var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var seconds = document.getElementById("seconds");

var time = new Date();
hour.innerHTML= time.getHours();
minute.innerHTML=time.getMinutes();
seconds.innerHTML=time.getSeconds();