$(document).ready(function(){

    let lastView;

$( '.navbar-nav a' ).on( 'click', function () {
    $( '.navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
    let name = $( this ).attr('href');
    console.log(name.replace('#',''));
    $(lastView).hide();
    $(name).show();
    lastView = name;
	$( this ).parent( 'li' ).addClass( 'active' );
});

});