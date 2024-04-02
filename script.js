$(".yesb").click(function() {
  $(".two-yes").show();
  $(".taste").show();
  $(".title").hide();
  $(".firstImage").hide();
  $(".button").hide();
});

$(".nob").click(function() {
  $(".two-no").show();
  $(".title").hide();
  $(".firstImage").hide();
  $(".button").hide();
});

$(".fin").dblclick(function() {
  $(".endno").show();
  $(".two-no").hide();
});

$(".yesb2").click(function() {
  $(".endyes").show();
  $(".two-yes").hide();
});

$(".nob2").click(function() {
  $(".nofood").show();
  $(".two-yes").hide();
});

$(".restart").click(function() {
    $(".title").show();
    $(".firstImage").show();
    $(".button").show();
    $(".button").show();
    $(".endyes").hide();
    $(".nofood").hide();
    $(".endno").hide();
});
