/* javascript function for minisite 3 */
$(function() {

	
	/*home page carousel*/
	if ($('.box--player-of-month').length > 0) {
		$('.box--player-of-month ul').jcarousel({
			 wrap: 'circular',
			 scroll: 1
		});
	}
	if ($('.box--about-game__video').length > 0) {
		$('.box--about-game__video ul').jcarousel({
			 wrap: 'circular',
			 scroll: 2
		});
	}
	if ($('.box--about-game__screenshot').length > 0) {
		$('.box--about-game__screenshot ul').jcarousel({
			 wrap: 'circular',
			 scroll: 3
		});
	}


	//tabs switch function
    if($(".box--play-game-tabs").length>0){
        $(".js-switch-tab").click(function(){
            var targetTabName = $(this).attr("name");
            var targetTab = $(".box--game-tabs-area__" + targetTabName);
            var tabWrapper = $(this).parents(".box").eq(0);
            if (targetTab.length > 0){
                $(".box--game-tabs-area__tab", tabWrapper).hide();
                targetTab.show();
                $(".js-switch-tab", tabWrapper).removeClass("is-active");
                $(this).addClass("is-active")
            }
            $(window).trigger("scroll");
        });
    }

    /* mock load-more-participants */
    var laodMoreParticipants = $(".load-more-participants");
    if(laodMoreParticipants.length>0){
        var participantsTable = $(".box--game-tabs-area__participants tbody");
        var loadingparticipants = false;
        var waiting = 10; 
        $(window).bind('scroll', function(){
           if(!loadingparticipants && laodMoreParticipants.length>0 && laodMoreParticipants.is(":visible") && $(window).scrollTop() + $(window).height() >= laodMoreParticipants.offset().top){
               loadingparticipants = true; 
               var interval = setInterval(function(){ 
                    waiting--;
                    if(waiting==0){
                        participantsTable.append(participantsTable.find("tr:lt(4)").clone().removeClass("first"));
                        laodMoreParticipants.remove();
                        clearInterval(interval);
                    }else{
                        var m = waiting % 3;
                        var dots = '';
                        for (var j = 0; j < m; j++) {
                            dots += '.';
                        }
                        laodMoreParticipants.html('Loading more.' + dots); 
                    }
                },500)
               
           } 
        });
    }

    
});

/* override the highlightMe function */
function highlightMe() {

	$('.is-me').each(function() {
        var td = $(this).find('td:first > div');
		td.append('<div class="is-me-rect__b1 is-me-rect"></div><div class="is-me-rect__b2 is-me-rect"></div><div class="is-me-rect__b3 is-me-rect"></div><div class="is-me-rect__b4 is-me-rect"></div>');
		var tdHeight = $(this).find('td:first').height();
		td.css({
			position: 'relative',
			height: tdHeight
		}); 
		var h = td.outerHeight();
		td.find('.is-me-rect__b1, .is-me-rect__b4').css({
			minHeight: h
		});

		if (h < 60) {
			td.find('.is-me-rect__b4').css({
				backgroundColor: '#5371c1'
			});
		}

		return;

		var holder = $(this).parents('.box__my-related').eq(0);
		holder.find('.b1, .b2, .b3, .b4').remove();
		holder.append('<div class="b1"></div><div class="b2"></div><div class="b3"></div><div class="b4"></div>');


		var prevItem = $(this).prevAll('.js-item-load-more');

		var pos = holder.find('table').position();

		var top = pos.top;

		var hei = prevItem.outerHeight();
		if ($('.is-my-score-page').length > 0) {
			hei = 46;
		}
		if ($('.is-my-prize').length > 0) {
			hei = 71;
		}
		if ($('.is-av-score').length > 0) {

			if ($.browser.msie) {
				if ($.browser.version == '7.0') {
					hei = 43;
				} else {
					hei = 44;
				}
			}
		}
		top += hei * prevItem.length + holder.find('thead tr').outerHeight();
		var left = -1;
		var w = $(this).width() + 1;
		var h = hei;
		holder.find('.b1').css({
			width: 1,
			left: left,
			top: top,
			height: h
		});
		holder.find('.b2').css({
			width: w,
			left: left,
			top: top,
			height: 1
		});
		holder.find('.b3').css({
			width: w,
			left: left,
			top: top + h - 1,
			height: 1
		});
		holder.find('.b4').css({
			left: left + w,
			top: top - 1,
			height: h + 1
		});

	});
}
