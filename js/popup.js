var jbtnAbrirPopup = document.getElementById('jbtn-abrir-popup'),
	joverlay = document.getElementById('joverlay'),
	jpopup = document.getElementById('jpopup'),
	jbtnCerrarPopup = document.getElementById('jbtn-cerrar-popup');
	
jbtnAbrirPopup.addEventListener('click', function(){
	joverlay.classList.add('active');
	jpopup.classList.add('active');
});

jbtnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	joverlay.classList.remove('active');
	jpopup.classList.remove('active');
});

var btnAbrirPopup = document.getElementById('ebtn-abrir-popup'),
	overlay = document.getElementById('eoverlay'),
	popup = document.getElementById('epopup'),
	btnCerrarPopup = document.getElementById('ebtn-cerrar-popup');

btnAbrirPopup.addEventListener('click', function(){
	overlay.classList.add('active');
	popup.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	overlay.classList.remove('active');
	popup.classList.remove('active');
});

var kbtnAbrirPopup = document.getElementById('kbtn-abrir-popup'),
	koverlay = document.getElementById('koverlay'),
	kpopup = document.getElementById('kpopup'),
	kbtnCerrarPopup = document.getElementById('kbtn-cerrar-popup');

kbtnAbrirPopup.addEventListener('click', function(){
	koverlay.classList.add('active');
	kpopup.classList.add('active');
});

kbtnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	koverlay.classList.remove('active');
	kpopup.classList.remove('active');
});

var bcbtnAbrirPopup = document.getElementById('bcbtn-abrir-popup'),
	bcoverlay = document.getElementById('bcoverlay'),
	bcpopup = document.getElementById('bcpopup'),
	bcbtnCerrarPopup = document.getElementById('bcbtn-cerrar-popup');

bcbtnAbrirPopup.addEventListener('click', function(){
	bcoverlay.classList.add('active');
	bcpopup.classList.add('active');
});

bcbtnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	bcoverlay.classList.remove('active');
	bcpopup.classList.remove('active');
});

var cabtnAbrirPopup = document.getElementById('cabtn-abrir-popup'),
	caoverlay = document.getElementById('caoverlay'),
	capopup = document.getElementById('capopup'),
	cabtnCerrarPopup = document.getElementById('cabtn-cerrar-popup');

cabtnAbrirPopup.addEventListener('click', function(){
	caoverlay.classList.add('active');
	capopup.classList.add('active');
});

cabtnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	caoverlay.classList.remove('active');
	capopup.classList.remove('active');
});
