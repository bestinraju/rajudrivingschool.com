var track=0;
jQuery(document).ready(function ($) {
		function clearColor(){
			$('body').removeClass('color-green color-blue color-violet color-red color-orange color-turquoise color-yellow')
		}
		$('body').prepend('<div class="tt-colorswatch"><div class="tt-colorswatch-options"><a href="#" data-color="" class="colorswatch1 active js-swatch-color"></a><a href="#" class="colorswatch2 js-swatch-color" data-color="yellow"></a><a href="#" class="colorswatch3 js-swatch-color" data-color="gold"></a><a href="#" class="colorswatch4 js-swatch-color" data-color="blue"></a><a href="#" class="colorswatch5 js-swatch-color" data-color="orange"></a><a href="#" class="colorswatch6 js-swatch-color" data-color="green"></a><a href="#" class="colorswatch7 js-swatch-color" data-color="pink"></a></div><div class="tt-colorswatch-btn js-colorswatch"><img src="'+colorswatch_object.colorswatchimg+'" alt=""></div></div>')
		var $cookievar=readCookie('template');
		if(typeof($cookievar)!='undefined' && $cookievar!='' ){
			$('body').addClass($cookievar)
		}
		$(document).on('click','.tt-colorswatch-btn', function(e){
			$(this).closest('.tt-colorswatch').toggleClass('tt-open-swatch');
			return false;
		});
		$(document).on('click','.js-swatch-color', function(e){
			e.preventDefault()
			$('.js-swatch-color').removeClass('active')
			$(this).addClass('active')
			if(track>0)
				setTimeout(function(){ $("#stylesheetclass").first().remove(); }, 500);
			if($(this).data('color')!=''){
				var head  = document.getElementsByTagName('head')[0];
				var link  = document.createElement('link');
				link.rel  = 'stylesheet';
				link.id  = 'stylesheetclass';
				link.type = 'text/css';
				link.href = colorswatch_object.color_url+$(this).data('color')+'.css' ;
				link.media = 'all';
				head.appendChild(link);
				track=track+1;
			}else{
				track=0;
				$("#stylesheetclass").remove();
			}
			
		})
	})
	
	
	
	function createCookie(name,value,days) {
		var expires = "";
		if (days) {
			var date = new Date();
			date.setTime(date.getTime() + (days*24*60*60*1000));
			expires = "; expires=" + date.toUTCString();
		}
		document.cookie = name + "=" + value + expires + "; path=/";
	}
	
	function readCookie(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return null;
	}
	
	function eraseCookie(name) {
		createCookie(name,"",-1);
	}
