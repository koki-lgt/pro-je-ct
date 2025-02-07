window.addEventListener("load", function () {
  const queryString = window.location.search;

  //console.log(queryString);

  const urlParams = new URLSearchParams(queryString);

  if (urlParams.get("b") != null) {
    const book = urlParams.get("b");
    const author = urlParams.get("a");
    const cost = urlParams.get("c");
    const image = urlParams.get("img");

    var elem = document.createElement("img");
    elem.src = "assets/images/" + image;

    this.document.getElementById("bookimg").appendChild(elem);

    this.document.getElementById("booktitle").innerHTML =
      "<h3>" + book + "</h3>";
    this.document.getElementById("bookauthor").innerHTML =
      "<p>" + author + "</p>";
    this.document.getElementById("bookcost").innerHTML = "<p>" + cost + "</p>";
    this.document.getElementById("authortxt").value = author;
    this.document.getElementById("costtxt").value = cost;

    this.document.getElementById("error").style.display = "none";
  } else {
    this.document.getElementById("error").style.display = "block";
    this.document.getElementById("error").innerHTML =
      "<p>No book has been selected. Please select to finish your order!</p>";

    this.document.getElementById("flexdiv").style.display = "none";
  }
});
