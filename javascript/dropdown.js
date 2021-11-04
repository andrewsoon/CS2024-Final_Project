function showDiv(element) {
  document.getElementById("below12").style.display =
    element.value == 0 ? "block" : "none";
  document.getElementById("above12").style.display =
    element.value == 1 ? "block" : "none";
  document.getElementById("holiday").style.display =
    element.value == 2 ? "block" : "none";
  document.getElementById("freetrial").style.display =
    element.value == 3 ? "block" : "none";
}
