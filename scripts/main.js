
var produse = [];

function getProduse() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      produse = JSON.parse(this.responseText);
      drawCards();
    }
  };
  xhttp.open("GET", `https://shop-lounge.firebaseio.com/.json`, true)
  xhttp.send();
}

function drawCards() {

  for (var i in produse) {

    document.querySelector("#productList").insertAdjacentHTML(
      'afterbegin',
      `<div class="card-container">
        <div class="card-image">
          <img src="${produse[i].imagine}" alt="Macbook Air 13">
        </div>
        <div class="card-content">
          <p><b>${produse[i].nume}</b></p>
          <p>${produse[i].pret} <i class="fas fa-euro-sign"></i></p>
          <button class="detailsBtn" onclick="window.location='detalii.html?id=${i}'">Details  <i class="fas fa-search"></i></button>
        </div>
      </div>`
    )
  }
}
