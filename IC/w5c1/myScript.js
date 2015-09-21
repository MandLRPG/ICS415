/**
 * Created by uninstall on 9/21/15.
 */

$(document).ready(function() {
  $("#tab1Text").mouseenter(function() {
    $(this).text("Eeek!");
  });

  $("#tab1Text").mouseleave(function() {
    $(this).text("This is where the date goes!");
  });

  $("#formsButton").click(function() {
    window.location.href = "forms.html";
  });

  $("#dateButton").click(function() {
    $("#tab1Text").text(displayDate());
  });
});

function displayDate() {
  return new Date();
}

function validate() {
  var x, text;

  x = document.getElementById("helloBox").value;

  if(x == "Hello!") {
    text = "Hello to you too!";
  }
  else {
    text = "I asked for a Hello! :(";
  }
  document.getElementById("answer").innerHTML = text;
}