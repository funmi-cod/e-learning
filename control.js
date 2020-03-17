
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").onclick =
      this.responseText;
    }
  };
  xhttp.open("GET", "readme.txt", true);
  xhttp.send();
}
