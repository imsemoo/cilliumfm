$(document).ready(function () {
  var navbar = $(".custom-navbar"); // تحديد العنصر
  var scrollOffset = 100; // المسافة التي يبدأ عندها إضافة الكلاس (يمكن تعديلها)

  // استمع لحدث التمرير (scroll)
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > scrollOffset) {
      navbar.addClass("fixed-navbar");
    } else {
      navbar.removeClass("fixed-navbar");
    }
  });

  //Utf Latest News Slide
  $(".utf_latest_news_slide").owlCarousel({
    loop: true,
    animateIn: "fadeInLeft",
    autoplay: false,
    autoplayHoverPause: true,
    rtl: true,
    nav: true,
    margin: 30,
    dots: false,
    mouseDrag: false,
    slideSpeed: 500,
    navText: [
      "<i class='fa fa-angle-right'></i>",
      "<i class='fa fa-angle-left'></i>",
    ],
    items: 3,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });

  /*----------------------------------------------------*/
  // player.
  /*----------------------------------------------------*/

  $(".audio1 audio").mediaelementplayer({
    features: [
      "playlistfeature",
      "prevtrack",
      "playpause",
      "nexttrack",
      "progress",
      "current",
      "volume",
    ],
  });

  $(".audio2 audio").mediaelementplayer({
    features: ["playpause", "progress"],
  });

  $(".audio1 audio").mediaelementplayer({
    features: [
      "playlistfeature",
      "prevtrack",
      "playpause",
      "nexttrack",
      "progress",
      "current",
      "volume",
    ],
    success: function (media, player) {
      // التحقق من زر "السابق"
      if ($(".mejs-prevtrack-button").length === 0) {
        console.warn('زر "السابق" غير موجود!');
      }

      // التحقق من زر "التالي"
      if ($(".mejs-nexttrack-button").length === 0) {
        console.warn('زر "التالي" غير موجود!');
      }
    },
  });
  $(".audio1 audio").mediaelementplayer({
    features: ["playlistfeature", "playpause", "progress", "current", "volume"],
    success: function (media, player) {
      var controls = player.controls;

      // إضافة زر السابق
      $(
        '<div class="mejs-button mejs-prevtrack-button mejs-cust1-button"></div>'
      )
        .appendTo(controls)
        .on("click", function () {
          console.log("تم الضغط على زر السابق!");
        });

      // إضافة زر التالي
      $(
        '<div class="mejs-button mejs-nexttrack-button mejs-cust2-button"></div>'
      )
        .appendTo(controls)
        .on("click", function () {
          console.log("تم الضغط على زر التالي!");
        });
    },
  });
});
