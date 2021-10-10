
// Set the date we're counting down to
var countDownDate = new Date("Nov 5, 2021 18:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("countdown").innerHTML = "Begin to hack in: " + days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  document.getElementById("countdown-bottom").innerHTML = "Begin to hack in: " + days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // Hide the blinking circle thingy until we start
 // document.getElementsByClassName("blinking").style.display = "none";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "LIVE";
    document.getElementById("countdown-bottom").innerHTML = "LIVE";
    document.getElementsByClassName("blinking").style.display = "inline-block";
  }
}, 1000);