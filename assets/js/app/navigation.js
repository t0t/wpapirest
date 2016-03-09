
jQuery(document).ready(function($) {

// Declaro elemento
var elBtn = document.getElementById('Id');
// La Accion
var accion = function () {
  if ( elBtn.value == 'Cerrar Menu' ) {
    elBtn.value = 'Menu';
    elBtn.className = 'hammenu';
  } else {
    elBtn.value = 'Cerrar Menu';
    elBtn.className = 'hammenu active';
  }
};
// Asigno acción al elemento
elBtn.addEventListener('click', accion);

// Ham Menu
// $('.hammenu').on('click', function () {
//   $('.nav').toggleClass('active');
//   return $('.nav-menu').toggleClass('hidden');
// });

  // Navigation
  // Select active item

  var navButton = $( '.site-nav li a' );
  // var text = $( '.site-nav li' ).text();
  var pathName = window.location.href;
  // var pathName = window.location.pathname.split('/')[1];


  for (var i = 0; i < navButton.length; i++) {
    console.log( navButton[i] );
    var hRef = navButton[i];
    if (pathName === hRef) {
      console.log('matches');
    }
  }




  console.log( pathName );



















});
