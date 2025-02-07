window.addEventListener("load", function () {
  const queryString = window.location.search;

  //console.log(queryString);

  const urlParams = new URLSearchParams(queryString);

  console.log(urlParams);

  const book = urlParams.get("b");
  const author = urlParams.get("a");
  const cost = urlParams.get("c");
  const image = urlParams.get("img");

  console.log(image);

  var elem = document.createElement("img");
  elem.src = "assets/images/" + image;
  
  this.document.getElementById("bookimg").appendChild(elem);

  this.document.getElementById("booktitle").innerHTML = "<h3>" + book + "</h3>";
  this.document.getElementById("bookauthor").innerHTML =
    "<p>" + author + "</p>";
  this.document.getElementById("bookcost").innerHTML = "<p>" + cost + "</p>";
  this.document.getElementById("authortxt").value "ABC123" ;
  this.document.getElementById("costtxt").value "ABC123";
});
