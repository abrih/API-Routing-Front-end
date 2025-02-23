import $ from "jquery";

$(document).ready(function () {
  // Initial setup based on window size
  function adjustFooterLinks() {
    if ($(window).width() <= 768) {
      $(".footer-links-wrapper").addClass("someClass");
      $(".footer-links-wrapper ul").hide(); // Hide all lists by default
    } else {
      $(".footer-links-wrapper").removeClass("someClass");
      $(".footer-links-wrapper ul").show(); // Show all lists when not in mobile view
    }
  }

  // Call the function initially
  adjustFooterLinks();

  // Re-adjust on window resize
  $(window).on("resize", function () {
    adjustFooterLinks();
  });

  // Footer collapse functionality
  $(document).on("click", ".someClass h3", function () {
    $(this).next("ul").slideToggle();
    $(this).toggleClass("expanded");
  });
});
// if ($(window).width() <= 768) {
//   $(".footer-links-wrapper").addClass("someClass");
// } else {
//   $(".footer-links-wrapper").removeClass("someClass");
// }
// $(window).on("resize", function (event) {
//   if ($(window).width() <= 768) {
//     $(".footer-links-wrapper").addClass("someClass");
//   } else {
//     $(".footer-links-wrapper").removeClass("someClass");
//     $(".footer-links-wrapper ul").show();
//   }
// });
// // Footer collapse functionality
// $(document).on("click", ".someClass h3", function () {
//   $(this).next("ul").slideToggle();
//   $(this).toggleClass("expanded");
// });

export default jQuery
