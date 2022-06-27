/*

	Make an object scrollable

	1. Find scrollables div's

	2. Add elements: wrapper div; left and right arrows

		<div class="o-scroll-arrows  js-scrollable">
			<div class="o-scroll-arrows__right"></div>
			<div class="o-scroll-arrows__left"></div>

			<div class="o-grid  o-grid--scroll  o-scroll  o-scroll--desktop">
				…cards…

	3. Add click event to the arrows

*/

document.addEventListener( 'DOMContentLoaded', fnScrollableLoad );

function fnScrollableLoad(  ) {

	var iGutter = 30;
	// Gutter in pixels

	if( document.body.offsetWidth > 1023 ) {
	// Only desktop

	console.log( document.body.offsetWidth );

		// 1. Find scrollables div's

		// It can be a full width list of cards (.o-scroll--desktop)
		// and a photos gallery (.o-scroll--half)

		var aScrollables = document.querySelectorAll( '.sh-scroll--wrapper, .sh-grid--scroll, .scroll' );

		Array.prototype.forEach.call( aScrollables, function( oScroll ) {

			if( oScroll.childElementCount > 0 ) {

				var iNumberCards = oScroll.querySelectorAll('img').length;

				var iCardWidth = oScroll.querySelectorAll('*:first-child')[0].offsetWidth;

				var iGridWidth = oScroll.parentNode.offsetWidth;

				var iCardsWidth = ( iNumberCards * ( iCardWidth + iGutter ) ) - iGutter;

				//console.log( iNumberCards, iCardWidth, iGridWidth, iCardsWidth );

				// Only applies if scrolled content is wider than his container

				if( iCardsWidth > iGridWidth ) {

					// 2. Add elements: wrapper div; left and right arrows

					// Wrapper div

					var oScrollable = document.createElement('div');
					oScrollable.setAttribute( 'class', 'sh-scroll-arrows  js-scrollable' );

					oScroll.parentNode.insertBefore( oScrollable, oScroll );
			    	oScrollable.appendChild( oScroll );


			    	// Arrows

					var oScrollableLeft = document.createElement('div');
					oScrollableLeft.setAttribute( 'class', 'sh-scroll-arrows__left' );
					oScrollable.insertBefore( oScrollableLeft, oScrollable.firstChild );

					var oScrollableRight = document.createElement('div');
					oScrollableRight.setAttribute( 'class', 'sh-scroll-arrows__right' );
					oScrollable.insertBefore( oScrollableRight, oScrollable.firstChild );

					oScrollable.insertAdjacentHTML( 'beforebegin', '<!-- Arrows added by scrollable.js //-->' );
					// Code comment

					oScrollableLeft.style.opacity = "0";

					// 3. Add click event to the arrows. Move cards.

					// Right

					oScrollableRight.addEventListener( 'click', function(  ) {
						var iOffset = iCardWidth + iGutter;
						//var iNumberCards = oScroll.querySelectorAll('a').length;

						oScroll.scrollLeft = oScroll.scrollLeft + iOffset;

						oScrollableLeft.style.opacity = "1";

						fnScrollableArrows( oScroll, oScrollableRight, oScrollableLeft, iGridWidth, iCardsWidth, iOffset );

					});

					// Left

					oScrollableLeft.addEventListener( 'click', function(  ) {
						var iOffset = - iCardWidth - iGutter;
						oScroll.scrollLeft = oScroll.scrollLeft + iOffset;

						oScrollableRight.style.opacity = "1";

						fnScrollableArrows( oScroll, oScrollableRight, oScrollableLeft, iGridWidth, iCardsWidth, iOffset );
					});

					// Scroll action

					oScroll.addEventListener( 'scroll', function(  ) {
						fnScrollableArrowsScroll( oScroll, oScrollableRight, oScrollableLeft, iGridWidth, iCardsWidth );
					});

				} // end if size
			} // end if not empty
		});
	} // end if body width
}

function fnScrollableArrows( oScroll, oScrollableRight, oScrollableLeft, iGridWidth, iCardsWidth, iOffset=0 ) {

	setTimeout( function() { /* Waits for the smooth scrolling */

		/* 130 is 100 (margin overflow) + 30 (gutter). */

		if( oScroll.scrollLeft + iGridWidth + 115  > iCardsWidth + oScroll.offsetLeft ) {  
			oScrollableRight.style.opacity = "0";  
		}

		if( ( oScroll.scrollLeft + iOffset ) < 0 ) {  
			oScrollableLeft.style.opacity = "0";  
		}

	}, 100 );
}


function fnScrollableArrowsScroll( oScroll, oScrollableRight, oScrollableLeft, iGridWidth, iCardsWidth ) {

		/* 130 is 100 (margin overflow) + 30 (gutter). */

		if( oScroll.scrollLeft + iGridWidth + 130  > iCardsWidth + oScroll.offsetLeft ) {  
			oScrollableRight.style.opacity = "0";  
		} else {
			oScrollableRight.style.opacity = "1";  
		}

		if( oScroll.scrollLeft === 0 ) {
			oScrollableLeft.style.opacity = "0";
		} else {
			oScrollableLeft.style.opacity = "1";
		}

}