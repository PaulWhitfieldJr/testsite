function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("home").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "hello.txt", true);
  xhttp.send();
}
