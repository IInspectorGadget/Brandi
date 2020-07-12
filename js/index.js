$('.features .slider').slick({
    dots: true,
    infinite: false,
    arrows: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
});

$('.team .flex-list').slick({
  dots: true,
  infinite: false,
  arrows: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1020,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
let lazy = lazyload();

wow = new WOW(
  {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       20,          // default
    mobile:       false,       // default
    live:         true        // default
  }
)
wow.init();

$('.features .slick-list').addClass('wow animate__animated animate__bounceInUp');
$('.slick-dots').addClass('wow animate__animated animate__bounceIn')

const filterBox = document.querySelectorAll('.box');
const filter_list = document.querySelectorAll('.filter li');

document.querySelector('.filter').addEventListener('click', (event) => {

  filter_list.forEach(elem => {
    elem.classList.remove('active');
  });

  event.target.classList.add('active');

  if (event.target.tagName !== 'LI') return false;
  let filterClass = event.target.dataset['f'];

  filterBox.forEach(elem => {
      elem.classList.remove('hide');
      if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
          elem.classList.add('hide');
      }
  });

});


const mobile_btn = document.querySelector('.mobile-menu__btn');
const mobile_icon = document.querySelector('.mobile-menu__icon');
const nav = document.querySelector('.right-side');

mobile_btn.onclick = ()=>{
  if (mobile_icon.classList.contains('mobile-menu__icon-active')){
    mobile_icon.classList.remove('mobile-menu__icon-active');
    nav.classList.remove("right-side-active");
    $('body').css("overflow", "unset");
  }else{
    $('body').css("overflow", "hidden");
    mobile_icon.classList.add("mobile-menu__icon-active");
    nav.classList.add("right-side-active");
  }
}


const counts = document.querySelectorAll('.counter-slider .count');
const counter = $('.counter');
var showCounter = true




$("nav").on("click","a", function (event) {
  // исключаем стандартную реакцию браузера
  event.preventDefault();

  // получем идентификатор блока из атрибута href
  var id  = $(this).attr('href');
  // находим высоту, на которой расположен блок
  var top = $(id).offset().top;
  // анимируем переход к блоку, время: 800 мс
  $('body,html').animate({scrollTop: top}, 800);
});

$(window).scroll(function(){

  var $sections = $('.section');
	$sections.each(function(i,el){
        var top  = $(el).offset().top - 60;
        var bottom = top +$(el).height();
        var scroll = $(window).scrollTop();
        var id = $(el).attr('id');
    	if( scroll > top && scroll < bottom){
          $('a.active').removeClass('active');
			    $('a[href="#'+id+'"]').addClass('active');
        }
  })


  // Появление шапки
  if($(this).scrollTop() > $('header').height()-100){
    $('nav').addClass('underHeader')
    $('.right-side').addClass('underHeader')

  } else {
    $('nav').removeClass('underHeader')
    $('.right-side').removeClass('underHeader')
  }

  // Счётчик
  if(!showCounter) return false
  if ($(this).scrollTop() > counter.offset().top - 650) {
    $('.counter-slider .count').each(function () {
      $(this).prop('Counter',0).animate({
        Counter: $(this).text()
      },{
        duration: 1500,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
      });
    });
    showCounter = false;
  }
});