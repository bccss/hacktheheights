var lFollowX = 0,
  lFollowY = 0,
  x = 0,
  y = 0,
  friction = 1 / 30;

function moveBackground() {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;

  translate = "translate(" + x + "px, " + y + "px) scale(1.2)";

  $(".move").css({
    "-webit-transform": translate,
    "-moz-transform": translate,
    transform: translate
  });

  window.requestAnimationFrame(moveBackground);
}

$(window).on("mousemove", function(e) {
  var lMouseX = Math.max(
    -100,
    Math.min(100, $(window).width() / 2 - e.clientX)
  );
  var lMouseY = Math.max(
    -100,
    Math.min(100, $(window).height() / 2 - e.clientY)
  );
  lFollowX = (30 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
  lFollowY = (30 * lMouseY) / 100;

  moveBackground();
});

$(window).on("load", function() {
  $(window)
    .scroll(function() {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $(".fade").each(function() {
        /* Check the location of each desired element */
        var objectTop = $(this).offset().top;

        /* If the element is completely within bounds of the window, fade it in */
        if (objectTop < windowBottom) {
          //object comes into view (scrolling down)
          if ($(this).css("opacity") == 0) {
            $(this).fadeTo(100, 1);
          }
        } else {
          //object goes out of view (scrolling up)
          if ($(this).css("opacity") == 1) {
            $(this).fadeTo(500, 0);
          }
        }
      });
    })
    .scroll(); //invoke scroll-handler on page-load
});

// var circles = [];
// let numCirc = 50;

// for (let i = 0; i < numCirc; i++) {
//     let c = document.createElement("div");
//     c.classList.add("circle");
//     c.style.left = `${Math.floor(Math.random() * 100)}vw`;
//     c.style.top = `${Math.floor(Math.random() * 100)}vh`;
//     c.style.transform = `scale(${Math.random()})`;
//     c.style.width = `${Math.random()}em`;
//     c.style.height = c.style.width;

//     circles.push(c);
//     $(".play").append(c);
// }

// // Keyframes
// circles.forEach((el, i, ra) => {
//     let to = {
//         x: Math.random() * 100,
//         y: Math.random() * 100
//     };

//     let anim = el.animate(
//         [{
//                 transform: "translate(0, 0)"
//             },
//             {
//                 transform: `translate(${to.x}rem, ${to.y}rem)`
//             }
//         ], {
//             duration: (Math.random() + 1) * 10000, // random duration
//             direction: "alternate",
//             fill: "both",
//             iterations: Infinity,
//             easing: "ease-in-out"
//         }
//     );
// });
