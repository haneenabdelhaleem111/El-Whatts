function setActiveButton(active) {
  const yearBtn = document.getElementById("year-btn");
  const monthBtn = document.getElementById("month-btn");

  if (active === "year") {
    yearBtn.style.backgroundColor = "rgb(0, 102, 255)";
    yearBtn.style.color = "white";

    monthBtn.style.backgroundColor = "#e0e0e0";
    monthBtn.style.color = "#666";
  } else {
    monthBtn.style.backgroundColor = "rgb(0, 102, 255)";
    monthBtn.style.color = "white";

    yearBtn.style.backgroundColor = "#e0e0e0";
    yearBtn.style.color = "#666";
  }
}

function change() {
  setActiveButton("year");

  document.getElementById("pb1").innerHTML = "$60";
  document.getElementById("ps1").innerHTML = "في السنة";

  document.getElementById("pb2").innerHTML = "$104";
  document.getElementById("ps2").innerHTML = "في السنة";

  document.getElementById("pb3").innerHTML = "$209";
  document.getElementById("ps3").innerHTML = "في السنة";
}

function remain() {
  setActiveButton("month");

  document.getElementById("pb1").innerHTML = "$5.5";
  document.getElementById("ps1").innerHTML = "في الشهر";

  document.getElementById("pb2").innerHTML = "$9.5";
  document.getElementById("ps2").innerHTML = "في الشهر";

  document.getElementById("pb3").innerHTML = "$19";
  document.getElementById("ps3").innerHTML = "في الشهر";
}

/* Default state on page load */
window.onload = function () {
  setActiveButton("month");
};
