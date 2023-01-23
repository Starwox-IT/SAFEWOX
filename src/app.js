const hamburger = document.querySelector(".ham-menu");
const navLink = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLink.classList.toggle("hide");
});

// Owlcarousel
$(document).ready(function () {
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    margin: 0,
    nav: false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        margin: 20,
      },
      600: {
        items: 2,
        nav: true,
      },
      999: {
        items: 3,
        nav: true,
      },
      1200: {
        items: 4,
        nav: true,
      },
    },
  });
  $(".play").on("click", function () {
    owl.trigger("play.owl.autoplay", [1000]);
  });
  $(".stop").on("click", function () {
    owl.trigger("stop.owl.autoplay");
  });
});
