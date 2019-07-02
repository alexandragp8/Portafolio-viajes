$(document).ready(function(){

    let lastView;

$( 'ul a' ).on( 'click', function () {
    $( 'ul' ).find( 'li.active' ).removeClass( 'active' );
    let name = $( this ).attr('name');
    name = '#'+name;
    console.log(name);
    if(lastView==""){
        lastView = $( 'ul' ).find( 'li.active' ).children().attr('name');
    } 
    $(lastView).hide();
    $(name).show();
    lastView = name;
	$( this ).parent( 'li' ).addClass( 'active' );
});

});