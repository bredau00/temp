function fahtocelc() {
  let celc = Number(prompt("Type Your Fah... number"));
  let converted = ((celc - 32) * 5) / 9;
  if (celc == Number(celc)) {
    document.getElementById("celcbox").innerHTML = converted + " C";
  } else {
    document.getElementById("celcbox").innerHTML = "Enter Numbers only";
  }
}
function celctofah() {
  let fah = Number(prompt("Type Your Celcius... number"));
  let converted = fah * 1.8 + 32;
  if (fah == Number(fah)) {
    document.getElementById("fahrbox").innerHTML = converted + " F";
  } else {
    document.getElementById("fahrbox").innerHTML = "Enter Numbers only";
  }
}
