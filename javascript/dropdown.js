function showDay(element) {
  document.getElementById("classes").style.display =
    element.value == 0 ? "block" : "none";
  document.getElementById("holiday1").style.display =
    element.value == 1 ? "block" : "none";
  document.getElementById("holiday2").style.display =
    element.value == 2 ? "block" : "none";
  document.getElementById("holiday3").style.display =
    element.value == 3 ? "block" : "none";
}

function showTimeslot(element) {
  document.getElementById("weekdays").style.display =
    element.value == 0 ? "block" : "none";
  document.getElementById("weekends").style.display =
    element.value == 1 ? "block" : "none";
  document.getElementById("freetrial").style.display =
    element.value == 2 ? "block" : "none";
}
