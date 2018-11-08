$(function(){
	'use strict';
	var navH   = $('.navbar').innerHeight(),
	    upperH = $('.upper-side').innerHeight(),
	    winH   = $(window).height();


	    $('.carousel, .carousel-inner').height(winH - ( navH + upperH ));

 $('.our_work ul li').on('click', function()
  {
	'use strict';

	$(this).addClass('active').siblings().removeClass('active');
	
	// console.log($(this).data('class'));

	if($(this).data('class')==='.All')
	   {
	   	document.getElementById('show_all').style.display='block';
	   	document.getElementById('show_pants').style.display='none';
      // $('.our_work .row .Blouses').show();
      // $('.our_work .row .Accessrices').show();
      // $('.our_work .row .Jackets').show();
      // $('.our_work .row .Pants').show();
	   }
		// if($(this).data('class')!=='.All')
		// {
		// $('.our_work .row .col-sm-3').show();
	 //    }
	if($(this).data('class')==='.Pants')
	   {
      // $('.our_work .row .Blouses').hide();
      // $('.our_work .row .Accessrices').hide();
      // $('.our_work .row .Jackets').hide();
      // $('.our_work .row .Pants').show();

      document.getElementById('show_pants').style.display='block';
      document.getElementById('show_all').style.display='none';
       document.getElementById('show_jackets').style.display='none';
      document.getElementById('show_accessories').style.display='none';
      document.getElementById('show_blouses').style.display='none';
      // $('.our_work .row .col-sm-3').addClass('col-sm-6');
       }

       	if($(this).data('class')==='.Blouses')
	   {
      // $('.our_work .row .Pants').hide();
      // $('.our_work .row .Accessrices').hide();
      // $('.our_work .row .Jackets').hide();
      // $('.our_work .row .Blouses').show();
      
      document.getElementById('show_pants').style.display='none';
      document.getElementById('show_all').style.display='none';
      document.getElementById('show_jackets').style.display='none';
      document.getElementById('show_accessories').style.display='none';
      document.getElementById('show_blouses').style.display='block';
     
       }
       if($(this).data('class')==='.Jackets')
	   {
      // $('.our_work .row .Pants').hide();
      // $('.our_work .row .Accessrices').hide();
      // $('.our_work .row .Jackets').hide();
      // $('.our_work .row .Blouses').show();
      
      document.getElementById('show_pants').style.display='none';
      document.getElementById('show_all').style.display='none';
      document.getElementById('show_jackets').style.display='block';
      document.getElementById('show_accessories').style.display='none';
      document.getElementById('show_blouses').style.display='none';
     
       }
       if($(this).data('class')==='.Accessories')
	   {
      // $('.our_work .row .Pants').hide();
      // $('.our_work .row .Accessrices').hide();
      // $('.our_work .row .Jackets').hide();
      // $('.our_work .row .Blouses').show();
      
      document.getElementById('show_pants').style.display='none';
      document.getElementById('show_all').style.display='none';
      document.getElementById('show_jackets').style.display='none';
      document.getElementById('show_accessories').style.display='block';
      document.getElementById('show_blouses').style.display='none';
     
       }
   });

});
