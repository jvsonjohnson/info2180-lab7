window.onload = function() {
  var btn = document.getElementById("lookup");
  var result = document.getElementById("result");


  btn.addEventListener("click", function() {
    let searchValue = document.getElementById("country").value;

    var http = new XMLHttpRequest();

    http.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        result.innerHTML = this.responseText;
      }
    };

    http.open("GET", "world.php?query=" + searchValue, true);
    http.send();
  });
};
