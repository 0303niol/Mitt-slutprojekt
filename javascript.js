window.addEventListener("scroll", function(){
    var navbar = document.querySelector("nav")
    navbar.classList.toggle("nav-bar-scroll", window.scrollY > 0);
})

var main = new Splide( '#main-slider', {
    type       : 'fade',
    heightRatio: 0.5,
    pagination : false,
    arrows     : false,
    cover      : true,
  } );
  
  var splide = new Splide( '.splide', {
    perPage    : 3,
    height     : '10rem',
    cover      : true,
    breakpoints: {
      height: '6rem',
    },
  } );
  
  splide.mount();
