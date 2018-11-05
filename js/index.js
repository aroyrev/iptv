var menu = document.querySelector('.nav__list');
var burger = document.querySelector('.burger');
var doc = $(document);
var l = $('.scrolly');
var panel = $('.panel');
var vh = $(window).height();

var openMenu = function() {
  burger.classList.toggle('burger--active');
  menu.classList.toggle('nav__list--active');
};

// reveal content of first panel by default
panel.eq(0).find('.panel__content').addClass('panel__content--active');

var scrollFx = function() {
  var ds = doc.scrollTop();
  var of = vh / 4;
  
  // if the panel is in the viewport, reveal the content, if not, hide it.
  for (var i = 0; i < panel.length; i++) {
    if (panel.eq(i).offset().top < ds+of) {
     panel
       .eq(i)
       .find('.panel__content')
       .addClass('panel__content--active');
    } else {
      panel
        .eq(i)
        .find('.panel__content')
        .removeClass('panel__content--active')
    }
  }
};

var scrolly = function(e) {
  e.preventDefault();
  var target = this.hash;
  var $target = $(target);

  $('html, body').stop().animate({
      'scrollTop': $target.offset().top
  }, 300, 'swing', function () {
      window.location.hash = target;
  });
}

var init = function() {
  burger.addEventListener('click', openMenu, false);
  window.addEventListener('scroll', scrollFx, false);
  window.addEventListener('load', scrollFx, false);
  $('a[href^="#"]').on('click',scrolly);
};

doc.on('ready', init);

//Dodaj nedeljnik
const placeholderNedeljnik = document.getElementsByClassName('placeholder-nedeljnik')[0]
const nedeljnici = document.getElementsByClassName('nedeljnik')

for (let i = 0; i <nedeljnici.length; i++) {
    nedeljnici[i].addEventListener("click", function(){
        const selected = this.getAttribute('src')
        console.log(selected);
        placeholderNedeljnik.setAttribute('src', selected)
        
     });
}
placeholderNedeljnik

//Dodaj novine
const placeholderNovine = document.getElementsByClassName('placeholder-novine')
const novine = document.getElementsByClassName('novine')
var novineLista = []


for (let i = 0; i < novine.length; i++) {
    novine[i].addEventListener("click", function(){
        const selectedNovine = this.getAttribute('src')
        console.log(selectedNovine);
       if(novineLista.length>3){
           novineLista.shift()
        }
        novineLista.push(selectedNovine)
        
        console.log(novineLista);
        
        for( let j=0; j<novineLista.length; j++){
              console.log(novineLista);
                placeholderNovine[j].setAttribute('src', novineLista[j])
            
        }
        
        
    });
}






