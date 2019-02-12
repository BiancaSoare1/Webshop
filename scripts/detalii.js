
// Get the id of the specific object from database and use it as html id
var idx = window.location.search.substring(4);

// Function to get the specific object from database
function getDetails() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      produse = JSON.parse(this.responseText);
      drawDetails();
    }
  };
  xhttp.open("GET", `https://shop-lounge.firebaseio.com/${idx}.json`, true)
  xhttp.send();
}

// Function to display the specific object properties from database
function drawDetails() {

  document.querySelector("#productDetails").insertAdjacentHTML(
    'afterbegin',
    `<div id="prodImg">
      <img src="${produse.imagine}" alt="" class="imgDetails">
    </div>
    <div id="prodDetails">
      <h4>${produse.nume}</h4>
      <p>${produse.descriere}</p>
      <p id="prodPrice">${produse.pret} <i class="fas fa-euro-sign"></i></p>
      <hr>
      <p>In stoc: ${produse.cantitate} bucati</p>
      <div id="quantityDiv">
        <p>Cantitate</p><input type="number" min="0" placeholder="1" id="quantitySelect"><br>
      </div>
      <button id="addToCartBtn" onclick="addToCart();"><i class="fas fa-shopping-cart" style="margin-right:5px;"></i>Adauga in cos</button>
    </div>`
  )
}

let cart = [];
//var storage = localStorage.getItem("cart");
//console.log(storage);

function addToCart() {
  // Store

  let name = produse.nume;
  let price = produse.pret;
  let qty = document.querySelector('#quantitySelect').value;

    item = {
      "nume": name,
      "pret": price,
      "cantitate": qty
    };

    cart.push(item);
    localStorage.setItem(`cart${idx}`, JSON.stringify(item));
  }

function saveCart() {
          if (window.localStorage)
        {
          localStorage.setItem("cart", item);
    }
}
