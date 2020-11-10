$(".member:not(.static)").click(function () {
  $("#team-modal").show();
  let memberID = $(this).attr("member-id");
  console.log(memberID);
  switch (memberID) {
    case "1":
      $("#modal-name").html("Robert Smithers");
      $("#modal-subtitle").html(
        "Available Saturday 5 - 7 PM and Sunday 10 AM - 12 PM"
      );
      $("#modal-img").attr("src", "img/people/robert.png");
      $("#modal-text").html(
        "I have had the pleasure of partaking in many different projects in many Computer Science fields:\r\n\r\n Over the past couple of summers, I was involved in multiple cybersecurity internships studying, creating, and testing various forms of malware for some of the latest emerging technology.\r\n \r\nI have built many apps and have two released on the app store (1 as my first app from high school, and the other as an impromptu utility for managing data securely in one of my extracurricular involvements)\r\n \r\nHave been to about 8 or so hackathons and have constructed some cool projects ranging from a social media manager app with QR Codes and other nitbits to an online service providing users with a buy/sell opportunity for local items nearby (ex: a charger in an airport) with Python Flask, CSS, HTML, and Javascript.\r\n \r\nHigh School Robotics competitions, building and coding devices from scratch to detect and handle various competition-specific tasks.\r\n\r\nA good background of Computer Networking and Network Security through pursuit of a Cisco Certified Entry Networking Technician Certificate (now merged with the CCNA Cert.) and through personal endeavors with plenty of public software.\r\n\r\nA proud participant in many online CTF exercises. CTFs are one of my favorite hobbies that I wish I had the time to get deeper into. Varying from reverse engineering to vulnerability searching + exploitation with XSS, buffer-overflows, reverse TCP shells, you name it!"
      );
      $("#modal-email").attr("href", "mailto:smitherr@bc.edu");
      $("#modal-zoom").attr("href", "#");
      $("#modal-linkedin").attr(
        "href",
        "https://www.linkedin.com/in/robert-smithers/"
      );
      break;
    case "2":
      $("#modal-name").html("Roger Wang");
      $("#modal-subtitle").html(
        "Available Saturday 10 PM - 1 AM Sunday and Sunday 11 AM - 12 PM"
      );
      $("#modal-img").attr("src", "img/people/roger.png");
      $("#modal-text").html("Web");
      $("#modal-email").attr("href", "mailto:wangbrh@bc.edu");
      $("#modal-zoom").attr("href", "#");
      $("#modal-linkedin").attr(
        "href",
        "https://www.linkedin.com/in/rogerwangcs/"
      );
      break;
    case "3":
      $("#modal-name").html("Sean Chiang");
      $("#modal-subtitle").html("");
      $("#modal-img").attr("src", "img/people/sean.png");
      $("#modal-text").html(
        "I have some basic understanding of Java, Python, and C# with Unity. Don't have a ton of experience but have been programming since middle school so I'm sure I can help out"
      );
      $("#modal-email").attr("href", "mailto:chiangse@bc.edu");
      $("#modal-zoom").attr("href", "#");
      $("#modal-linkedin").attr(
        "href",
        "https://www.linkedin.com/in/sean-chiang2/"
      );
      break;
    case "4":
      $("#modal-name").html("Talia Kaplanian");
      $("#modal-subtitle").html(
        "Available Saturday 7 AM - Sunday 1 AM and Sunday 8 AM - 12 PM"
      );
      $("#modal-img").attr("src", "img/people/talia.png");
      $("#modal-text").html(
        "REST APIs and Flask, Python, Java, and some JavaScript and some HTML/CSS"
      );
      $("#modal-email").attr("href", "mailto:kaplania@bc.edu");
      $("#modal-zoom").attr("href", "#");
      $("#modal-linkedin").attr(
        "href",
        "https://www.linkedin.com/in/talia-kaplanian/"
      );
      break;
    case "5":
      $("#modal-name").html("Caroline Sheldon");
      $("#modal-subtitle").html(
        "Available Saturday 4 PM - 11 PM and Sunday 9 AM - 12 PM"
      );
      $("#modal-img").attr("src", "img/people/caroline.png");
      $("#modal-text").html(
        "I am a product manager at Smartsheet with a focus on customer usability, meeting customer needs, and UX design experiences. "
      );
      $("#modal-email").attr("href", "");
      $("#modal-zoom").attr("href", "#");
      $("#modal-linkedin").attr(
        "href",
        "https://www.linkedin.com/in/carolinesheldon/"
      );
      break;
    case "6":
      $("#modal-name").html("Megan Costello");
      $("#modal-subtitle").html(
        "Available Saturday 7 AM - Sunday 1 AM and Sunday 8 AM - 12 PM"
      );
      $("#modal-img").attr("src", "img/people/megan.png");
      $("#modal-text").html(
        "I took my first official coding class freshman year of high school, and I've been pursuing computer science ever since! I'm a computer science and economics major at Boston College, with multiple years of coding experience. I've attended Hack the Heights both as a participant and an organizer as well. "
      );
      $("#modal-email").attr("href", "mailto:costelmx@bc.edu");
      $("#modal-zoom").attr("href", "#");
      $("#modal-linkedin").attr(
        "href",
        "https://www.linkedin.com/in/megankcostello"
      );
      break;
    case "7":
      $("#modal-name").html("Nathan Rankin");
      $("#modal-subtitle").html("");
      $("#modal-img").attr("src", "img/people/nathan.png");
      $("#modal-text").html(
        "Object Oriented Design, Java, Full Stack Web, React, PHP"
      );
      $("#modal-email").attr("href", "mailto:rankinna@bc.edu");
      $("#modal-zoom").attr("href", "#");
      $("#modal-linkedin").attr(
        "href",
        "https://www.linkedin.com/in/nathanrankin/"
      );
      break;
    case "8":
      $("#modal-name").html("John Abreu");
      $("#modal-subtitle").html("");
      $("#modal-img").attr("src", "img/people/john.png");
      $("#modal-text").html(
        "iOS Development (Swift & Objective-C), Python, Web Development, React.js, Next.js, Ideation, Product Design, Hackathon hacking :) "
      );
      $("#modal-email").attr("href", "mailto:abreuja@bc.edu");
      $("#modal-zoom").attr("href", "#");
      $("#modal-linkedin").attr(
        "href",
        "https://www.linkedin.com/in/abbbbreu/"
      );
      break;
  }
});

$("#team-modal").click(function (event) {
  if (
    !$(event.target).closest(".modal-content").length &&
    !$(event.target).is(".modal-content")
  ) {
    $("#team-modal").hide();
  }
});

$(".close").click(function () {
  $("#team-modal").hide();
});
