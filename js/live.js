function updateHapNow() {
  const hapNow = document.getElementById("hapnow");
  const time = new Date();

  if (
    time.getFullYear() === 2020 &&
    time.getMonth() === 1 &&
    time.getDate() === 15
  ) {
    // SATURDAY
    if (time.getHours() >= 22) {
      //Later than 2200
      hapNow.innerHTML = "The Internship Screening<br>(Stokes S195)";
    } else if (time.getHours() === 20) {
      // Between 2000 and 2100
      hapNow.innerHTML = "Git Workshop<br>(Stokes S131)";
    } else if (time.getHours() === 19) {
      // Between 1900 and 2000
      hapNow.innerHTML = "Dinner";
    } else if (time.getHours() === 18) {
      // Between 1800 and 1900
      hapNow.innerHTML = "Sphero-lympics<br>(Chocolate Bar)";
    } else if (time.getHours() === 17) {
      // Between 1700 and 1800
      hapNow.innerHTML = "Women's Meetup<br>(Chocolate Bar)";
    } else if (
      (time.getHours() === 15 && time.getMinutes() >= 30) ||
      (time.getHours() > 15 && time.getHours() < 17)
    ) {
      // Between 1530 and 1700
      hapNow.innerHTML = "Intro to iOS<br>(Stokes S133)";
    } else if (time.getHours() >= 14 && time.getHours() < 16) {
      // Between 1400 and 1530
      hapNow.innerHTML = "Front-End Web with React<br>(Stokes S131)";
    } else if (time.getHours() === 13 && time.getMinutes() < 30) {
      // Between 1300 and 1330
      hapNow.innerHTML = "Getting Started Event<br>(Stokes S131)";
    } else if (time.getHours() === 12 && time.getMinutes() >= 30) {
      // Between 1230 and 1300
      hapNow.innerHTML = "Lunch";
    } else if (time.getHours() === 12) {
      // Between 1200 and 1230
      hapNow.innerHTML = "Welcome";
    } else if (time.getHours() === 11 && time.getMinutes() >= 30) {
      // Between 1130 and 1200
      hapNow.innerHTML = "Sign-in";
    } else if (
      (time.getHours() === 11 && time.getMinutes() >= 30) ||
      time.getHours() > 11
    ) {
      // Default during event time
      hapNow.innerHTML = "Hacking";
    } else {
      // Before event
      hapNow.innerHTML = "Counting down the days until Hack the Heights 4!";
    }
  } else if (
    time.getFullYear() === 2020 &&
    time.getMonth() === 1 &&
    time.getDate() === 16
  ) {
    //SUNDAY
    if (
      (time.getHours() >= 15 && time.getMinutes() >= 30) ||
      time.getHours() > 16
    ) {
      //After 1530
      hapNow.innerHTML = "Thank you for attending! We'll see you next year!";
    } else if (time.getHours() === 15 && time.getMinutes() <= 30) {
      // Between 1500 and 1530
      hapNow.innerHTML = "Final Ceremony";
    } else if (
      (time.getHours() === 13 && time.getMinutes() >= 30) ||
      time.getHours() > 13
    ) {
      // Between 1330 and 1500
      hapNow.innerHTML = "Demonstrations";
    } else if (time.getHours() === 8) {
      // Between 0800 and 0900
      hapNow.innerHTML = "Coffee and Donuts";
    } else if (
      (time.getHours() === 6 && time.getMinutes() >= 30) ||
      (time.getHours() === 7 && time.getMinutes() < 30)
    ) {
      // Between 0630 and 0730
      hapNow.innerHTML = "Sunrise Yoga";
    } else if (time.getHours() < 1) {
      // Between 0630 and 0730
      hapNow.innerHTML = "Midnight Snack";
    } else if (
      time.getHours() < 16 ||
      (time.getHours() === 15 && time.getMinutes() <= 30)
    ) {
      hapNow.innerHTML = "Hacking";
    }
  } else if (time.getDate() <= 15) {
    // Before event
    hapNow.innerHTML = "Counting down the days until Hack the Heights 4!";
  } else {
    // After event
    hapNow.innerHTML = "Thank you for attending! We'll see you next year!";
  }
}

function loadAnnouncements() {
  let websiteData =
    "https://spreadsheets.google.com/feeds/cells/18nBSXeKWQJMeaQ6TlUxtGQHrhtY-KwKrWTRuhaHSWy0/1/public/full?alt=json";
  fetch(websiteData)
    .then(response => {
      return response.json();
    })
    .then(myJson => {
      let announcements = myJson.feed.entry;
      let announcementsRev = announcements.reverse();

      let an = document.getElementById("announcements");
      announcementsRev.forEach(function(message) {
        // only check values in the first column
        if (message.gs$cell.col === "1") {
          let contents = message.content.$t.split(";");
          let li = document.createElement("li");
          li.innerHTML = "[" + contents[0] + "] ";
          li.innerHTML += contents[1];
          an.appendChild(li);
          // console.log(contents);
        }
      });
      console.log(announcements);
    });
}

$(window).on("load", function() {
  loadAnnouncements();
  updateHapNow();

  setInterval(function() {
    updateHapNow();
  }, 5 * 1000);
});
