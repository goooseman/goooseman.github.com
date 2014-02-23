

$('document').ready(function () {
	// Open external links in new window
	var externalLinks = function(){
		var host = location.host;

		$('body').on('click', 'a', function(e){
			var href = this.href,
				link = href.replace(/https?:\/\/([^\/]+)(.*)/, '$1');

			if (link != '' && link != host && !$(this).hasClass('fancybox')){
				window.open(href);
				e.preventDefault();
			}
		});
	};
	externalLinks();
});

document.addEventListener('page:fetch', function() {
    
    $('#main').addClass('animated fadeOutDown');


});

document.addEventListener('page:load', function() {
    
    $('#main').addClass('animated fadeInUp');
    

    $('#main').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
        function(e) {
            $('#main').removeClass('animated');


        });



    });
       
document.addEventListener('page:restore', function () {
    $('#main').removeClass('fadeOutDown');

});

$(document).ready(function () {
    var addthis_config = {
        data_track_addressbar:true,
        ui_click:true,
        ui_language:"ru"
    };
    var script = '//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-53098676442a4d38';
    if (window.addthis){
        window.addthis = null;
        window._adr = null;
        window._atc = null;
        window._atd = null;
        window._ate = null;
        window._atr = null;
        window._atw = null;
        window.addthis_share = null;
    }
	 for (var i in window) {
	    if (/^addthis/.test(i) || /^_at/.test(i)) {
	      delete window[i];
	    }
	  }
    $.getScript(script, function () {
	    addthis.layers({
		    'theme' : 'transparent',
		    'share' : {
		      'position' : 'left',
		      'numPreferredServices' : 6
		    },  
		    'whatsnext' : {},  
		    'recommended' : {
		      'title': 'Рекомендовано Вам:'
		    }
	    
  		});	
    });


    

});