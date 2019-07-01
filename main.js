$(document).ready(function(){

    let lastView;

$( 'ul a' ).on( 'click', function () {
    $( 'ul' ).find( 'li.active' ).removeClass( 'active' );
    let name = $( this ).attr('href');
    console.log(name.replace('#',''));
    $(lastView).hide();
    $(name).show();
    lastView = name;
	$( this ).parent( 'li' ).addClass( 'active' );
});

});