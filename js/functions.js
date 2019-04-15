function globalFunctions( )
{
	// this function can be used to handle global user interface interaction
}

function pageButton( ell )
{
	$( '#' + ell + ' #submit' ).click( buttonClicked );

	function buttonClicked( e ){
		gotoPage( 'next' );
		// openPopup('pageInput');
	}
}

function pageChoosePig( ell )
{
	var answer = 'a';


	$( '#' + ell + ' #submit' ).click( buttonClicked );

	function buttonClicked( e ){
		var value = $( '#' + ell + ' input[type=radio]:checked' ).val();

		if( value == answer ){
			gotoPage( 'next' );
		} 
	}
}

function pageChapter1( ell )
{
	$( '#' + ell + ' #submit' ).click( buttonClicked );

	function buttonClicked( e ){
		gotoPage( 'next' );
		// openPopup('pageInput');
	}
}

function pageChapter2( ell )
{
	$( '#' + ell + ' #submit' ).click( buttonClicked );

	function buttonClicked( e ){
		gotoPage( 'next' );
		// openPopup('pageInput');
	}
}

function pageChapter2Safe( ell )
{
	$( '#' + ell + ' #submit' ).click( buttonClicked );

	function buttonClicked( e ){
		gotoPage( 'next' );
		// openPopup('pageInput');
	}
}

function pageChapter3( ell )
{
	$( '#' + ell + ' #submit' ).click( buttonClicked );

	function buttonClicked( e ){
		gotoPage( 'next' );
		// openPopup('pageInput');
	}
}

function pageChapter3Game( ell )
{
	$( '#' + ell + ' #submit' ).click( buttonClicked );

	function buttonClicked( e ){
		gotoPage( 'next' );
		// openPopup('pageInput');
	}
}

function pageChapter3Part2( ell )
{
	$( '#' + ell + ' #submit' ).click( buttonClicked );

	function buttonClicked( e ){
		gotoPage( 'next' );
		// openPopup('pageInput');
	}
}

function pageChapter4( ell )
{
	$( '#' + ell + ' #submit' ).click( buttonClicked );

	function buttonClicked( e ){
		gotoPage( 'next' );
		// openPopup('pageInput');
	}
}

function pageChapter4Game( ell )
{
	$( '#' + ell + ' #submit' ).click( buttonClicked );

	function buttonClicked( e ){
		gotoPage( 'next' );
		// openPopup('pageInput');
	}
}

function pageChapter4Part2( ell )
{
	$( '#' + ell + ' #submit' ).click( buttonClicked );

	function buttonClicked( e ){
		gotoPage( 'next' );
		// openPopup('pageInput');
	}
}
function pageChapter5( ell )
{
	$( '#' + ell + ' #submit' ).click( buttonClicked );

	function buttonClicked( e ){
		gotoPage( 'next' );
		// openPopup('pageInput');
	}
}

function pageChapter5Game( ell )
{
	$( '#' + ell + ' #submit' ).click( buttonClicked );

	function buttonClicked( e ){
		gotoPage( 'next' );
		// openPopup('pageInput');
	}
}

function pageChapter5Part2( ell )
{
	$( '#' + ell + ' #submit' ).click( buttonClicked );

	function buttonClicked( e ){
		gotoPage( 'next' );
		// openPopup('pageInput');
	}
}
function pageChapter6( ell )
{
	$( '#' + ell + ' #submit' ).click( buttonClicked );

	function buttonClicked( e ){
		gotoPage( 'next' );
		// openPopup('pageInput');
	}
}
function pageChapter7( ell )
{
	$( '#' + ell + ' #submit' ).click( buttonClicked );

	function buttonClicked( e ){
		gotoPage( 'next' );
		// openPopup('pageInput');
	}
}

function pageChapter7Game( ell )
{
	$( '#' + ell + ' #submit' ).click( buttonClicked );

	function buttonClicked( e ){
		gotoPage( 'next' );
		// openPopup('pageInput');
	}
}

function pageChapter7Part2( ell )
{
	$( '#' + ell + ' #submit' ).click( buttonClicked );

	function buttonClicked( e ){
		gotoPage( 'next' );
		// openPopup('pageInput');
	}
}

function pageDraughtQuiz( ell )
{
	var answer = 'b';


	$( '#' + ell + ' #submit' ).click( buttonClicked );

	function buttonClicked( e ){
		var value = $( '#' + ell + ' input[type=radio]:checked' ).val();

		if( value == answer ){
			gotoPage( 'next' );
		} else {
			alert( 'Go to page Not Safe' );
		}
	}
}
function pageRadio( ell )
{
	var answer = 'a';

	$( '#' + ell + ' #submit' ).click( buttonClicked );

	function buttonClicked( e ){
		var value = $( '#' + ell + ' input[type=radio]:checked' ).val();

		if( value == answer ){
			gotoPage( 'next' );
		} else {
			alert( 'fout!' );
		}
	}
}

function pageImageSelector( ell )
{
	var answer = 'Marvin';

	$( '#' + ell + ' img').click( buttonClicked );

	function buttonClicked( e ){
		var value = $( e.target ).attr( 'alt' );

		if( value == answer ){
			gotoPage( 'next' );
		} else {
			alert( 'fout!' );
		}
	}
}

function pageMaps( ell )
{
	var markers = [
		[ 'position&nbsp;1' , 52.219771 , 6.884281 ], // bottom left
		[ 'position&nbsp;2' , 52.221605 , 6.887264 ]  // top right
	]

	var map;
	var lastMarker;

	$( '#'+ ell ).on( 'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd' , resizeMap );

	function resizeMap( e ){
		google.maps.event.trigger( map , 'resize');
	}

	initialize();
	google.maps.event.addListener( map , 'click' , mapClicked );

	function initialize() {
		var mapOptions = {
			zoom: 16,
			disableDoubleClickZoom: true,
			draggable: true,
			panControl: false,
			scrollwheel: true,
			zoomControl: true,
			streetViewControl: false,
			overviewMapControl: false,
			mapTypeControl: false,
			center: new google.maps.LatLng( 52.219771 , 6.884281 )
		};

		map = new google.maps.Map( document.getElementById( 'mapCanvasOne' ) , mapOptions );
	}

	function mapClicked( e ){
		lat = e.latLng.k;
		lng = e.latLng.D;

		if(lat > markers[ 0 ][ 1 ] && lat < markers[ 1 ][ 1 ] && lng > markers[ 0 ][ 2 ] && lng < markers[ 1 ][ 2 ]){
			gotoPage( 'next' );
			removeMarkers();
		}
		else{
			removeMarkers();
			var marker = [ [ 'Wrong&nbsp;location!' , lat , lng ] ]
			setMarkers( marker );
		}
	}

	function setMarkers( markers ){
		for ( i = 0 ; i < markers.length ; i++ ) {
			var pos = new google.maps.LatLng( markers[ i ][ 1 ], markers[ i ][ 2 ] );
			var marker = new google.maps.Marker({
				position: pos,
				map: map
			});

			var infowindow = new google.maps.InfoWindow({
				content: markers[ i ][ 0 ]
			});

			infowindow.open( map , marker );
			lastMarker = marker;
		}
	}

	function removeMarkers(){
		if( lastMarker !== undefined ){
			lastMarker.setMap( null );
		}
	}
}

function pageMapsGeo( ell )
{
	var markers = [
		[ 'position&nbsp;1' , 52.219068 , 6.889302 ], // bottom left
		[ 'position&nbsp;2' , 52.220013 , 6.890013 ]  // top right
	]

	var map;
	var lastMarker;
	$( '#' + ell + ' #submit' ).click( getGeoLocation );
	$( '#'+ ell ).on( 'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd' , resizeMap );

	function resizeMap( e ){
		$( '#'+ ell ).off( 'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd' , resizeMap );
		google.maps.event.trigger( map , 'resize');
	}

	initialize();

	function initialize() {
		var mapOptions = {
			zoom: 16,
			disableDoubleClickZoom: true,
			draggable: true,
			panControl: false,
			scrollwheel: true,
			zoomControl: true,
			streetViewControl: false,
			overviewMapControl: false,
			mapTypeControl: false,
			center: new google.maps.LatLng( 52.22256 , 6.890227 )
		}

		map = new google.maps.Map( document.getElementById( 'mapCanvasTwo' ) , mapOptions );
	}

	function getGeoLocation( e ){
		$( '#'+ ell ).append( '<div class="waitingBox">Loading</div>' );

		if( navigator.geolocation ) {
			navigator.geolocation.getCurrentPosition(
				function ( position )
				{

					var pos = new google.maps.LatLng( position.coords.latitude , position.coords.longitude);
					lat = position.coords.latitude;
					lng = position.coords.longitude;

					$( '#' + ell + ' .waitingBox' ).remove();

					if(lat > markers[ 0 ][ 1 ] && lat < markers[ 1 ][ 1 ] && lng > markers[ 0 ][ 2 ] && lng < markers[ 1 ][ 2 ]){
						gotoPage( 'next' );
						removeMarkers();
					}
					else
					{
						removeMarkers();
						var marker = [ [ 'Wrong&nbsp;location!' , lat , lng ] ]
						setMarkers( marker );
					}
				}
			);
		}
	}

	function setMarkers( markers ){
		for ( i = 0 ; i < markers.length ; i++ ) {
			var pos = new google.maps.LatLng( markers[ i ][ 1 ] , markers[ i ][ 2 ] );
			var marker = new google.maps.Marker({
				position: pos,
				map: map
			});

			var infowindow = new google.maps.InfoWindow({
				content: markers[ i ][ 0 ]
			});

			infowindow.open( map , marker );
			lastMarker = marker;
		}
	}

	function removeMarkers(){
		if( lastMarker !== undefined ){
			lastMarker.setMap( null );
		}
	}
}

function pagePhotoUpload( ell )
{
	$( '#' + ell + ' #submit' ).change( selectImage );

	function selectImage( e ){
		removeItems();

		var files = e.target.files;
		if ( files && files.length > 0 ) {
			var file = files[ 0 ];
		}

		var URL = window.URL || window.webkitURL;
		var imgURL = URL.createObjectURL(file);
		var img = $( '<img id="uploadedImage" src="'+imgURL+'" alt="Uploaded image">' );
		$( '#'+ ell ).append( img );


		var btn = $( '<button id="uploadedButton">Click me to upload the image</button>' );
		btn.click( buttonClicked );
		$( '#'+ ell ).append( btn );
	}

	function buttonClicked( e ){
		gotoPage( 'next' );
		$( '#'+ ell ).on( 'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd' , removeItems );
	}

	function removeItems(){
		$( '#uploadedImage' ).remove();
		$( '#uploadedButton' ).remove();
	}
}


