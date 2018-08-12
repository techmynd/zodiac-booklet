$(document).bind("mobileinit", function(){
  // console.log("loaded");
  $.mobile.allowCrossDomainPages = true;

  $('a[rel=external], .external').click(function(e){
		e.preventDefault();
	    var elem = $(this);
	    var url = elem.attr('href');
	    //if (url.indexOf('http://') !== -1 || url.indexOf('https://') !== -1) {
        window.open(url, '_system');
	    //}
  	});
  
});

$(document).on("mobileinit", function () {
  
});

$(document).on("pageinit", function() {
	
	if( $('#detail-4').hasClass('ui-page-active') ){
		$('.comp-results .fa').hide();
	}

});

$(document).on('pageinit','[data-role=page]',function(){

	setTimeout(function(){ 
        $('.app-splash').fadeOut(500);
    }, 2000);

    setTimeout(function(){ 
        $('.app-splash').remove();
    }, 3000);

    $('.app-splash').click(function(){
    	$('.app-splash').fadeOut(500);
    });

	// place code here to run on pageinit

    $('a[rel=external], .external').click(function(e){
		e.preventDefault();
	    var elem = $(this);
	    var url = elem.attr('href');
	    //if (url.indexOf('http://') !== -1 || url.indexOf('https://') !== -1) {
        window.open(url, '_system');
	    //}
  	});

});

$(document).delegate("#detail-4", "pageinit", function() {
	
	  // zodiac compatibility functionality
	  $('.btn-compare-compatibility').click(function(){
	  	
	  	$('.comp-results .fa').hide();
	  	var zd1 = $('#select-choice-1').val();
	  	var zd2 = $('#select-choice-2').val();

	  	// Capricorn
	  	if( zd1 == 'Capricorn' && zd2 == 'Capricorn' || 
	  		zd1 == 'Capricorn' && zd2 == 'Virgo' || 
	  		zd1 == 'Capricorn' && zd2 == 'Taurus' || 
	  		zd1 == 'Capricorn' && zd2 == 'Cancer' || 
	  		zd1 == 'Capricorn' && zd2 == 'Scorpio' || 
	  		zd1 == 'Capricorn' && zd2 == 'Pisces'

	  	  ){
	  			$('.comp-results .color-red').show();
	  	   }

	  	if( zd1 == 'Capricorn' && zd2 == 'Leo' || 
	  		zd1 == 'Capricorn' && zd2 == 'Libra'
	  	  ){
	  			$('.comp-results .color-green').show();
	       }

	    if( zd1 == 'Capricorn' && zd2 == 'Aries' || 
	  		zd1 == 'Capricorn' && zd2 == 'Sagittarius' || 
	  		zd1 == 'Capricorn' && zd2 == 'Ophiuchus' || 
	  		zd1 == 'Capricorn' && zd2 == 'Gemini' || 
	  		zd1 == 'Capricorn' && zd2 == 'Aquarius'
	  	  ){
	  			$('.comp-results .color-black').show();
	       }

	  	// Aquarius
	  	if( 
	  		zd1 == 'Aquarius' && zd2 == 'Leo' || 
	  		zd1 == 'Aquarius' && zd2 == 'Aries' || 
	  		zd1 == 'Aquarius' && zd2 == 'Sagittarius' || 
	  		zd1 == 'Aquarius' && zd2 == 'Libra' ||
	  		zd1 == 'Aquarius' && zd2 == 'Gemini' || 
	  		zd1 == 'Aquarius' && zd2 == 'Aquarius' ||
	  		zd1 == 'Aquarius' && zd2 == 'Ophiuchus'
	  	  ){
	  			$('.comp-results .color-red').show();
	  	   }

	  	if( 
	  		zd1 == 'Aquarius' && zd2 == 'Scorpio' || 
	  		zd1 == 'Aquarius' && zd2 == 'Pisces'
	  	  ){
	  			$('.comp-results .color-green').show();
	       }

	    if( 
	  		zd1 == 'Aquarius' && zd2 == 'Capricorn' || 
	  		zd1 == 'Aquarius' && zd2 == 'Virgo' || 
	  		zd1 == 'Aquarius' && zd2 == 'Taurus' || 
	  		zd1 == 'Aquarius' && zd2 == 'Cancer'
	  	  ){
	  			$('.comp-results .color-black').show();
	       }

	    // Pisces
	  	if(zd1 == 'Pisces') {

	  		if(zd2 == 'Taurus' || zd2 == 'Capricorn' || zd2 == 'Cancer' || zd2 == 'Scorpio' || zd2 == 'Pisces'
	  	    ){
	  			$('.comp-results .color-red').show();
	  	    }

	  		if(zd2 == 'Virgo' || zd2 == 'Aries' || zd2 == 'Leo' || zd2 == 'Ophiuchus' || zd2 == 'Sagittarius'){
	  			$('.comp-results .color-green').show();
	        }

	    	if(zd2 == 'Aquarius' || zd2 == 'Gemini' || zd2 == 'Libra'){
	  			$('.comp-results .color-black').show();
	        }   
	    }

	    // Aries
	  	if(zd1 == 'Aries') {

	  		if(zd2 == 'Aries' || zd2 == 'Leo' || zd2 == 'Sagittarius' || zd2 == 'Ophiuchus' || zd2 == 'Gemini' || 
	  			zd2 == 'Libra' || zd2 == 'Aquarius'
	  	    ){
	  			$('.comp-results .color-red').show();
	  	    }

	  		if(zd2 == 'Virgo' || zd2 == 'Pisces'){
	  			$('.comp-results .color-green').show();
	        }

	    	if(zd2 == 'Taurus' || zd2 == 'Capricorn' || zd2 == 'Cancer' || zd2 == 'Scorpio'){
	  			$('.comp-results .color-black').show();
	        }   
	    }

	    // Taurus
	  	if(zd1 == 'Taurus') {

	  		if(zd2 == 'Taurus' || zd2 == 'Virgo' || zd2 == 'Capricorn' || zd2 == 'Cancer' || zd2 == 'Scorpio' || 
	  			zd2 == 'Pisces'
	  	    ){
	  			$('.comp-results .color-red').show();
	  	    }

	  		if(zd2 == 'Leo' || zd2 == 'Libra'){
	  			$('.comp-results .color-green').show();
	        }

	    	if(zd2 == 'Aries' || zd2 == 'Sagittarius' || zd2 == 'Gemini' || zd2 == 'Aquarius' || zd2 == 'Ophiuchus'){
	  			$('.comp-results .color-black').show();
	        }   
	    }

	    // Gemini
	  	if(zd1 == 'Gemini') {

	  		if(zd2 == 'Aries' || zd2 == 'Leo' || zd2 == 'Gemini' || zd2 == 'Libra' || zd2 == 'Aquarius'
	  	    ){
	  			$('.comp-results .color-red').show();
	  	    }

	  		if(zd2 == 'Virgo' || zd2 == 'Capricorn' || zd2 == 'Ophiuchus' || zd2 == 'Sagittarius'){
	  			$('.comp-results .color-green').show();
	        }

	    	if(zd2 == 'Taurus' || zd2 == 'Cancer' || zd2 == 'Scorpio' || zd2 == 'Pisces'){
	  			$('.comp-results .color-black').show();
	        }   
	    }

	    // Cancer
	  	if(zd1 == 'Cancer') {

	  		if(zd2 == 'Taurus' || zd2 == 'Virgo' || zd2 == 'Capricorn' || zd2 == 'Cancer' || zd2 == 'Scorpio' || 
	  			zd2 == 'Pisces'
	  	    ){
	  			$('.comp-results .color-red').show();
	  	    }

	  		if(zd2 == 'Leo' || zd2 == 'Ophiuchus' || zd2 == 'Sagittarius'){
	  			$('.comp-results .color-green').show();
	        }

	    	if(zd2 == 'Aries' || zd2 == 'Gemini' || zd2 == 'Libra' || zd2 == 'Aquarius'){
	  			$('.comp-results .color-black').show();
	        }   
	    }

	    // Leo
	  	if(zd1 == 'Leo') {
	  		if(zd2 == 'Ophiuchus' || zd2 == 'Sagittarius' || zd2 == 'Aries' || zd2 == 'Leo' || zd2 == 'Gemini' || 
	  			zd2 == 'Libra'
	  	    ){
	  			$('.comp-results .color-red').show();
	  	    }
	  		if(zd2 == 'Taurus' || zd2 == 'Aquarius' || zd2 == 'Cancer' || zd2 == 'Scorpio' || zd2 == 'Pisces'){
	  			$('.comp-results .color-green').show();
	        }
	    	if(zd2 == 'Virgo' || zd2 == 'Capricorn'){
	  			$('.comp-results .color-black').show();
	        }   
	    }

	    // Virgo
	  	if(zd1 == 'Virgo') {
	  		if(zd2 == 'Taurus' || zd2 == 'Virgo' || zd2 == 'Capricorn' || zd2 == 'Cancer' || zd2 == 'Scorpio'
	  	    ){
	  			$('.comp-results .color-red').show();
	  	    }
	  		if(zd2 == 'Leo' || zd2 == 'Aquarius'){
	  			$('.comp-results .color-green').show();
	        }
	    	if(zd2 == 'Aries' || zd2 == 'Sagittarius' || zd2 == 'Ophiuchus' || zd2 == 'Gemini' || zd2 == 'Libra'){
	  			$('.comp-results .color-black').show();
	        }   
	    }

	    // Libra
	  	if(zd1 == 'Libra') {
	  		if(zd2 == 'Leo' || zd2 == 'Sagittarius' || zd2 == 'Ophiuchus' || zd2 == 'Gemini' || zd2 == 'Libra' || 
	  			zd2 == 'Aquarius'
	  	    ){
	  			$('.comp-results .color-red').show();
	  	    }
	  		if(zd2 == 'Aries' || zd2 == 'Taurus' || zd2 == 'Pisces'){
	  			$('.comp-results .color-green').show();
	        }
	    	if(zd2 == 'Virgo' || zd2 == 'Capricorn' || zd2 == 'Cancer' || zd2 == 'Scorpio'){
	  			$('.comp-results .color-black').show();
	        }   
	    }

	    // Scorpio
	  	if(zd1 == 'Scorpio') {
	  		if(zd2 == 'Taurus' || zd2 == 'Virgo' || zd2 == 'Capricorn' || zd2 == 'Cancer' || zd2 == 'Scorpio' || 
	  			zd2 == 'Pisces'
	  	    ){
	  			$('.comp-results .color-red').show();
	  	    }
	  		if(zd2 == 'Aries' || zd2 == 'Leo'){
	  			$('.comp-results .color-green').show();
	        }
	    	if(zd2 == 'Ophiuchus' || zd2 == 'Sagittarius' || zd2 == 'Gemini' || zd2 == 'Libra' || zd2 == 'Aquarius'){
	  			$('.comp-results .color-black').show();
	        }   
	    }

	    // Ophiuchus // Sagittarius
	  	if(zd1 == 'Sagittarius' || zd1 == 'Ophiuchus') {
	  		if(zd2 == 'Sagittarius' || zd2 == 'Ophiuchus' || zd2 == 'Aries' || zd2 == 'Leo' || zd2 == 'Gemini' || 
	  			zd2 == 'Libra' || zd2 == 'Aquarius'
	  	    ){
	  			$('.comp-results .color-red').show();
	  	    }
	  		if(zd2 == 'Cancer' || zd2 == 'Scorpio' || zd2 == 'Pisces'){
	  			$('.comp-results .color-green').show();
	        }
	    	if(zd2 == 'Taurus' || zd2 == 'Virgo' || zd2 == 'Capricorn'){
	  			$('.comp-results .color-black').show();
	        }   
	    }

	 });

});  

