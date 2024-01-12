$(document).ready(function () {
  // Animation for fading in the project description
  $(".container").fadeIn(1000);

  // Toggle functionality for folders
  $(".folder").click(function () {
    $(this).find("p").slideToggle();
  });

  // Hover effect for folders
  $(".folder").hover(
    function () {
      $(this).css("background-color", "#f9f9f9");
    },
    function () {
      $(this).css("background-color", "transparent");
    }
  );
});
