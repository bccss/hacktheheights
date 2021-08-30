function updateHapNow() {
  const hapNow = document.getElementById("hapnow");
  hapNow.innerHTML = "Counting down the days until Hack the Heights!";
}

function loadAnnouncements() {
  let websiteData =
    "https://spreadsheets.google.com/feeds/cells/18nBSXeKWQJMeaQ6TlUxtGQHrhtY-KwKrWTRuhaHSWy0/1/public/full?alt=json";
  fetch(websiteData)
    .then(response => {
      return response.json();
    })
    .then(myJson => {
      let cells = myJson.feed.entry;

      let announcements = cells.filter(function(cell) {
        return cell.gs$cell.col === "1";
      });
      let announcementsRev = announcements.reverse();

      let scheduleSat = cells.filter(function(cell) {
        return cell.gs$cell.col === "2";
      });

      let scheduleSun = cells.filter(function(cell) {
        return cell.gs$cell.col === "3";
      });

      let happeningNow = cells.filter(function(cell) {
        return cell.gs$cell.col === "4";
      });
      //   console.log(announcementsRev);
      //   console.log(scheduleSat);
      //   console.log(scheduleSun);
      //   console.log(happeningNow);

      let an = document.getElementById("announcements");
      let scSat = document.getElementById("scheduleSat");
      let scSun = document.getElementById("scheduleSun");
      let hap = document.getElementById("hapNow");

      announcementsRev.forEach(function(message) {
        let contents = message.content.$t.split(";");
        let li = document.createElement("li");
        li.innerHTML = "[" + contents[0] + "] ";
        li.innerHTML += contents[1];
        an.appendChild(li);
      });

      scheduleSat.forEach(function(cell) {
        let contents = cell.content.$t.split(";");
        let event = document.createRange().createContextualFragment(
          `
            <div class="event">
                <span class="time">` +
            contents[0] +
            `</span>
                <span class="eventName">` +
            contents[1] +
            `</span>
            </div>
         `
        );
        scSat.appendChild(event);
      });

      scheduleSun.forEach(function(cell) {
        let contents = cell.content.$t.split(";");
        let event = document.createRange().createContextualFragment(
          `
            <div class="event">
                <span class="time">` +
            contents[0] +
            `</span>
                <span class="eventName">` +
            contents[1] +
            `</span>
            </div>
         `
        );
        scSun.appendChild(event);
      });
    });
}

$(window).on("load", function() {
  loadAnnouncements();
  updateHapNow();

  setInterval(function() {
    updateHapNow();
  }, 5 * 1000);
});
