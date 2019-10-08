let a = window.pageYOffset();

$(window).onScroll( () => {
    let b = window.pageYOffset();

    if(a > b) {
        $("nav").fadeOut()
    }
    else {
        $("nav").fadeIn()
    }
    a = b
})

var prevScrollpos = window.pageYOffset;

window.onscroll = function() {

  var currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } 
  
  else {
    document.getElementById("navbar").style.top = "-50px";
  }

  prevScrollpos = currentScrollPos;
}