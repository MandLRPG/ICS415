/**
 * Created by uninstall on 9/21/15.
 */

document.getElementById("formsButton").onclick = function () {
  location.href = "forms.html";
};

document.getElementById("tab1Text").onclick = displayDate;

function displayDate(id) {
  id.innerHTML = new Date();
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