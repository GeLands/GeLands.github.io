window.addEventListener('scroll', function(){
  var header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

function toggleMenu(){
  const menuToggle = document.querySelector('.toggle');
  const menu = document.querySelector('.menu');
  menuToggle.classList.toggle('active');
  menu.classList.toggle('active');
}


var tl = gsap.timeline({defaults:{duration: .7, ease: Back.easeOut.config(2), opacity: 0}})
var tl2 = gsap.timeline({defaults:{duration: 1.5, delay:1, opacity: 0}})
var tl3 = gsap.timeline({defaults:{duration: 1.5}})

        tl2.from(".card-bg", {delay: 1, scale: 0, transformOrigin: 'center'}, "=.2")

        tl.to(".cta", {y: 10, repeat: 1, yoyo:true})
        tl3.from(".main-content", { opacity: 0, y: 40, stagger: .3})

const btn_close = document.querySelector('#close');
const cont_cookies = document.querySelector('.cookies-box');
const acep = document.querySelector('#acep');

acep.addEventListener('click',() => {
  aceptarCookies();
})


function comprobarCookies(){
  if (localStorage.cookie1 == 'true'){
    cont_cookies.style.opacity = '0';
    cont_cookies.style.display = 'none';
  }
}

comprobarCookies();

function aceptarCookies(){
  localStorage.cookie1 = 'true';
  cont_cookies.style.display = 'none';

  let expire = new Date()
  expire = new Date(expire.getTime() + 77600000);
  document.cookie1 = 'cookie1=aceptada; expire'+expire;
}

btn_close.addEventListener('click',() => {
  cont_cookies.style.display = 'none'; 
});



simplyCountdown('#cuenta', {
	year: 2021, // required
	month: 3, // required
	day: 27, // required
	hours: 21, // Default is 0 [0-23] integer
	minutes: 0, // Default is 0 [0-59] integer
	seconds: 0, // Default is 0 [0-59] integer
	words: { //words displayed into the countdown
		days: 'Día',
		hours: 'Hora',
		minutes: 'Minuto',
		seconds: 'Segundo',
		pluralLetter: 's'
	},
	plural: true, //use plurals
	inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
	inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
	// in case of inline set to false
	enableUtc: true, //Use UTC as default
	onEnd: function() {
		document.getElementById('oferta').classList.add('none');
		document.getElementById('oferta2').classList.add('none');
		document.getElementById('oferta3').classList.add('none');
		document.getElementById('limitada').classList.add('none');    
    document.getElementById('cc').style.display="none";
		document.getElementById('valor1').innerHTML="<span>AR$</span>2500";
		document.getElementById('valor2').innerHTML="<span>AR$</span>4000";
		document.getElementById('valor3').innerHTML="<span>AR$</span>7000";
		return; 
	}, //Callback on countdown end, put your own function here
	refresh: 1000, // default refresh every 1s
	sectionClass: 'simply-section', //section css class
	amountClass: 'simply-amount', // amount css class
	wordClass: 'simply-word', // word css class
	zeroPad: false,
	countUp: false
});
