$(document).ready(function() {

  $(window).scroll(function() {
      var x = document.getElementById("navheader");
      if($(this).scrollTop() > 550) {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
  });

  $(".navbar-brand").click(function(e) {
    e.preventDefault();
    $.scrollTo(0, 1000);
  });

  $("#scrollIconHome").click(function(e) {
    e.preventDefault();
    $.scrollTo($("#about"), 1000);
  });

  $("#scrollIconAbout").click(function(e) {
    e.preventDefault();
    $.scrollTo($("#experience"), 1000);
  });

  $("#nav-about").click(function(e) {
    e.preventDefault();
    $.scrollTo($("#contact"), 1000);
  });

  $("#nav-experience").click(function(e) {
    e.preventDefault();
    $.scrollTo($("#experience"), 1000);
  });

  $("#nav-projects").click(function(e) {
    e.preventDefault();
    $.scrollTo($("#projects"), 1000);
  });

  $("#nav-contact").click(function(e) {
    e.preventDefault();
    $.scrollTo($("#contact"), 1000);
  });

  $("#nav-resume").click(function(e) {
    window.open('https://drive.google.com/file/d/1xt2S5RkTozb8k-mJKbQZ696L9HjYplIr/view?usp=sharing', '_blank');
  });

  $("#linkedin").click(function(e) {
    window.open('https://www.linkedin.com/in/pavithra-reddy', '_blank');
  });

  $("#github").click(function(e) {
    window.open('https://github.com/pavithra-reddy', '_blank');
  });

  $("#hackerrank").click(function(e) {
    window.open('https://www.hackerrank.com/pavithra_reddy', '_blank');
  });

  $("#freecodecamp").click(function(e) {
    window.open('https://www.freecodecamp.org/pavithra_reddy', '_blank');
  });

});
