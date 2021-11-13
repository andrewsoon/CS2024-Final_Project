function showDay(element) {
  document.getElementById("classes").style.display =
    element.value == 0 ? "block" : "none";
  // document.getElementById("above12-dates").style.display =
  //   element.value == 1 ? "block" : "none";
  // document.getElementById("holiday-dates").style.display =
  //   element.value == 2 ? "block" : "none";
}
