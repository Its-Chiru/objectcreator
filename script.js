document.getElementById("creator").style.display = "flex";
document.getElementById("final").style.display = "none";

function submitted() {
  var name = document.getElementById("name").value;
  var desc = document.getElementById("desc").value;
  var price = document.getElementById("price").value;

  var finalName = document.getElementById("finalName");
  var finalDesc = document.getElementById("finalDesc");
  var finalPrice = document.getElementById("finalPrice");

  finalName.textContent = "Name: " + name;
  finalDesc.textContent = "Description: " + desc;
  finalPrice.textContent ="Price: $" + price;

  document.getElementById("creator").style.display = "none";
  document.getElementById("final").style.display = "flex";
}

function goBack() {
  document.getElementById("creator").style.display = "flex";
  document.getElementById("final").style.display = "none";
}
