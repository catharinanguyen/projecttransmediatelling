var currentPageNumber = 1;
var lastPageNumber = 1;

$( document ).ready( onLoad );

function onLoad()
{
	$.each( pageArray , function( ind , val )
	{
		try
		{
			if( $( '#'+val ).length == 0 )
			{
				alert( 'Something went wrong: you specified a page in your pageArray but the <div id="' + val + '"> does not exist.');
				return;
			}
			typeof window[ val ] == 'function' && window[ val ]( val );
		}
		catch( err )
		{
			alert( 'Something went wrong in the function '+ val +'(): ' + err + '.' );
			return;
		}
	});

	pageSetup();
	window[ 'globalFunctions' ] != undefined && globalFunctions();
}

function pageSetup()
{
	$.each( pageArray , function( ind , val )
	{
		$( '#'+val ).css( 'z-index' , 0 ).hide();
	});

	$( '#'+pageArray[ currentPageNumber - 1 ] ).css( 'z-index' , 1 ).addClass( 'active' ).show();
}

function gotoPage( pageName )
{
	var currentPage;
	var lastPage;

	if( pageName == 'next' )
	{
		lastPageNumber = currentPageNumber;
		currentPageNumber == ( pageArray.length ) ? currentPageNumber = 0 : currentPageNumber++;
		currentPage = $( '#'+pageArray[ currentPageNumber - 1 ] );
		lastPage = $( '#'+pageArray[ lastPageNumber - 1 ] );
	}
	else if( pageName == 'previous' )
	{
		lastPage = $( '#'+pageArray[ currentPageNumber - 1 ] );
		currentPageNumber = lastPageNumber;
		currentPage = $( '#'+pageArray[ currentPageNumber - 1 ] );
	}
	else if( $.inArray( pageName , pageArray ) != -1 )
	{
		if( ($.inArray( pageName, pageArray ) + 1 ) == currentPageNumber )
		{
			return
		}
		lastPageNumber = currentPageNumber;
		currentPageNumber = $.inArray( pageName, pageArray ) + 1;
		currentPage = $( '#'+pageArray[ currentPageNumber - 1 ] );
		lastPage = $( '#'+pageArray[ lastPageNumber - 1 ] );
	}
	else
	{
		alert( 'You specified that the application should go to page: \''+pageName+'\'. However this page does not exist. Either use a a correct page name, \'previous\' or \'next\' the specify to which page the application needs to go too.' );
		return;
	}

	lastPage.on( 'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd' , transitionReady );

	currentPage.show();
	lastPage.removeClass( 'active' );


	function transitionReady()
	{
		lastPage.off( 'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd' , transitionReady );
		lastPage.css( 'z-index' , '0' ).hide();

		currentPage.addClass( 'active' ).css( 'z-index' , '1' );
		currentPage.css('z-index','1');
	}
}

function openPopup( pageName )
{
	if( $.inArray( pageName , pageArray ) != -1 )
	{
		var popupPageNumber = $.inArray( pageName , pageArray );
		var popupPage = $( '#'+pageArray[ popupPageNumber ] );
	}
	else
	{
		return;
	}
	popupPage.addClass( 'popup' ).css( 'z-index' , '50' ).show(0);

	var closeImgLink = $( '<a id="closePopup" href="#"><img src="images/menu1.png" alt="close overlay" /></a>' );
	popupPage.append( closeImgLink );
	closeImgLink.click( function( e )
		{
			e.preventDefault();
			popupPage.removeClass( 'popup' ).hide(0);
			$( '#closePopup' ).remove();
		}
	);
}

function closePopup( pageName )
{
	$( '#'+pageName ).removeClass( 'popup' );
	if( $( '#closePopup' ).length != 0 )
	{
		$( '#closePopup' ).remove();
	}
}