//the moving text

window.onload = function () {
  lax.setup(); // init

  const updateLax = () => {
    lax.update(window.scrollY);
    window.requestAnimationFrame(updateLax);
  };

  window.requestAnimationFrame(updateLax);
};

//when the user go down 200 px show the nav bar and up btn 

var nav = document.getElementById("nav");
var logo = document.getElementById("a");
var list = document.getElementById("ul");
var btn = document.getElementById("btn");

window.onscroll = function () {
  scrollfunction();
};

function scrollfunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    nav.style.background = "black";
    nav.style.transition = "all .4s";
    btn.style.display = "block";
    btn.style.transition = "all .4s";
  } else {
    nav.style.background = "none";
    btn.style.display = "none";
  }
}

//fade animtaion 

