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
    document.getElementById("logo2").style.display = "none";
    document.getElementById("logo").style.display = "block";
  } else {
    document.getElementById("headerID").className = "header-transparent";
    document.getElementById("header-link").className = "header-nav";
    document.getElementById("header-link2").className = "header-nav";
    document.getElementById("header-link3").className = "header-nav";
    document.getElementById("header-link4").className = "header-nav";
    document.getElementById("logo2").style.display = "block";
    document.getElementById("logo").style.display = "none";
  }
}
