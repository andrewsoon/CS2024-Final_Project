window.onscroll = function () {
  headerFunction();
};

function headerFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("headerID").className = "header-white";
    document.getElementById("header-link").className = "header-nav-whiteBG";
    document.getElementById("header-link2").className = "header-nav-whiteBG";
    document.getElementById("header-link3").className = "header-nav-whiteBG";
    document.getElementById("header-link4").className = "header-nav-whiteBG";
    document.getElementById("apply-cta").className = "apply-loan-whiteBG";
    document.getElementById("logo2").style.display = "none";
    document.getElementById("logo").style.display = "block";
  } else {
    document.getElementById("headerID").className = "header-transparent";
    document.getElementById("header-link").className = "header-nav";
    document.getElementById("header-link2").className = "header-nav";
    document.getElementById("header-link3").className = "header-nav";
    document.getElementById("header-link4").className = "header-nav";
    document.getElementById("apply-cta").className = "apply-loan";
    document.getElementById("logo2").style.display = "block";
    document.getElementById("logo").style.display = "none";
  }
}

/* When the user clicks on the button,
  toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches("#header-link2")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
