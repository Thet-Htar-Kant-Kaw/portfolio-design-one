window.onscroll = function () { myfunc() }

var navbar = document.getElementById('navbar');
var topPx = navbar.offsetTop;
// alert(topPx)

function myfunc() {
    if(window.scrollY >= topPx) {
        navbar.classList.add('navbar-fixed');
    }else{
        navbar.classList.remove('navbar-fixed');
    }
}