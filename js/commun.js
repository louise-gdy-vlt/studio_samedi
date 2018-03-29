/*
*
* Gestion de l'interactivité avec jQuery
*
*/

$(document).ready(
	function(){
		
		/*
		* ----------------------------------------------------------------------
		* Le script est à insérer ci-dessous
		* ----------------------------------------------------------------------
		*/	
					

/*
* ----------------------------------------------------------------------
* ZONE MENU
* ----------------------------------------------------------------------
*/


		$('.button1').click(function(){
  		$('.filters1').toggle();
		});

		$('.button2').click(function(){
  		$('.filters2').toggle();
		});
		
		$('.button3').click(function(){
  		$('.filters3').toggle();
		});
			
			
/*
* ----------------------------------------------------------------------
* IFRAME
* ----------------------------------------------------------------------
*/

		$('.openIframe').click(function(){
  		$('.iframe').show();
		});
		
		$('.closeIframe').click(function(){
  		$('.iframe').hide();
		});
		
		$('.closeIframe').hide();	
		$('.openIframe').click(function(){
  		$('.closeIframe').show();	
		});

		$('.closeIframe').click(function(){
		$('.closeIframe').hide();
		});
			
		// ----------------------------------------------------------------------






});