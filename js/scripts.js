//Loading Animation Timer
var loadingTimer;

isLoading = false;
isNoMore = false;	// for navi-iconnstrate no more items to load only

$(function() {
	
	//show top menu
	$(".js-show-site-list").hover(function(){
		$(this).addClass("show-sites");
	},function(){
		$(this).removeClass("show-sites");
	});
	
	var ieVersion = 10;
	if ($.browser.msie){
		ieVersion = parseInt(($.browser.version), 10)
	}
	if( ieVersion < 10){
		$("body").addClass("no-csstransitions");
		
		/*games*/
		$(".l-navigationHeader .games .navi-icon").mouseenter(function(){
			$("b", $(this)).fadeIn();
			$("i", $(this)).stop()
			.css({"background-position": "0 -182px"})
			.animate(
				{backgroundPosition: '0 -148px'}, 
				{duration: 500}
			);
		});
		$(".l-navigationHeader .games .navi-icon").mouseleave(function(){
			$("b", $(this)).fadeOut();
			$("i", $(this)).stop().css({"backgroundPosition": "0px -182px"});
		});
		
		/*achievements*/
		$(".l-navigationHeader .achievements .navi-icon").mouseenter(function(){
			$("b", $(this)).fadeIn();
			$("i", $(this)).stop()
			.css({"background-position": "0 -255px"})
			.animate(
				{backgroundPosition: '0 -216px'}, 
				{duration: 500}
			);
		});
		$(".l-navigationHeader .achievements .navi-icon").mouseleave(function(){
			$("b", $(this)).fadeOut();
			$("i", $(this)).stop().css({"backgroundPosition": "0px -255px"});
		});
		
		/*competitions*/
		$(".l-navigationHeader .competitions .navi-icon").mouseenter(function(){
			$("b", $(this)).fadeIn();
			$("i", $(this)).stop()
			.css({"background-position": "0 -324px"})
			.animate(
				{backgroundPosition: '0 -294px'}, 
				{duration: 500}
			);
		});
		$(".l-navigationHeader .competitions .navi-icon").mouseleave(function(){
			$("b", $(this)).fadeOut();
			$("i", $(this)).stop().css({"backgroundPosition": "0px -324px"});
		});
		
		/*blog*/
		$(".l-navigationHeader .blog .navi-icon").mouseenter(function(){
			$("b", $(this)).fadeIn();
			$("i", $(this)).stop()
			.css({"background-position": "0 -384px"})
			.animate(
				{backgroundPosition: '0 -354px'}, 
				{duration: 500}
			);
		});
		$(".l-navigationHeader .blog .navi-icon").mouseleave(function(){
			$("b", $(this)).fadeOut();
			$("i", $(this)).stop().css({"backgroundPosition": "0px -384px"});
		});
		
		/*forum*/
		$(".l-navigationHeader .forum .navi-icon").mouseenter(function(){
			$("b", $(this)).fadeIn();
			$("i", $(this)).stop()
			.css({"background-position": "0 -446px"})
			.animate(
				{backgroundPosition: '0 -414px'}, 
				{duration: 500}
			);
		});
		$(".l-navigationHeader .forum .navi-icon").mouseleave(function(){
			$("b", $(this)).fadeOut();
			$("i", $(this)).stop().css({"backgroundPosition": "0px -446px"});
		});
		/*wiki*/
		$(".l-navigationHeader .wiki .navi-icon").mouseenter(function(){
			$("b", $(this)).fadeIn();
			$("i", $(this)).stop()
			.css({"background-position": "0 -513px"})
			.animate(
				{backgroundPosition: '0 -478px'}, 
				{duration: 500}
			);
		});
		$(".l-navigationHeader .wiki .navi-icon").mouseleave(function(){
			$("b", $(this)).fadeOut();
			$("i", $(this)).stop().css({"backgroundPosition": "0px -513px"});
		});
		/*news*/
		$(".l-navigationHeader .news .navi-icon").mouseenter(function(){
			$("b", $(this)).fadeIn();
			$("i", $(this)).stop()
			.css({"background-position": "0 -583px"})
			.animate(
				{backgroundPosition: '0 -548px'}, 
				{duration: 500}
			);
		});
		$(".l-navigationHeader .news .navi-icon").mouseleave(function(){
			$("b", $(this)).fadeOut();
			$("i", $(this)).stop().css({"backgroundPosition": "0px -583px"});
		});
		/*help*/
		$(".l-navigationHeader .help .navi-icon").mouseenter(function(){
			$("b", $(this)).fadeIn();
			$("i", $(this)).stop()
			.css({"background-position": "0 -656px"})
			.animate(
				{backgroundPosition: '0 -618px'}, 
				{duration: 500}
			);
		});
		$(".l-navigationHeader .help .navi-icon").mouseleave(function(){
			$("b", $(this)).fadeOut();
			$("i", $(this)).stop().css({"backgroundPosition": "0px -656px"});
		});
	}
	/**
	 * enable textbox with placeholder functionality
	 * selector - the jQuery selector of the textbox
	 * text - the placeholder text
	 */
	var initPlaceHolder = function(selector, text) {
		$(selector).live('focus', function() {
			$(this).live('blur', function() {
				$(this).unbind('blur', arguments.callee);
				if ($(this).val() == '') {
					$(this).val(text);
				}
			});
			if ($(this).val() == text) {
				$(this).val('');
			}
		});
	};
	initPlaceHolder('.search-friend input', 'Search');
	initPlaceHolder('.search-box input', 'Search Members');
	initPlaceHolder('.js-post-comment', 'post comment here');
	initPlaceHolder('.login input[type="text"]', 'Username here');
	initPlaceHolder('.friend-user__search-input', 'Search');
	initPlaceHolder('.reply-area', 'Write a reply...');
	initPlaceHolder('.recovery #username', 'Username here');
	initPlaceHolder('.recovery .value-text', 'email');
	initPlaceHolder('.recovery #email', 'email');
	initPlaceHolder('.recovery #email2', 'email');
	initPlaceHolder('.profile-message__breadcrumb .text', 'Search another..');
	initPlaceHolder('.box__title--filter .input-wrapper input', 'type keyword');
	
	/*Start Forum Pages*/
	initPlaceHolder('.forumHeader .search-text', 'Искать в форуме...');
	initPlaceHolder('.forum-adv-search-form__username-input', 'username');
	/*End Forum Pages*/
	
	/*Start Wiki Pages*/
	initPlaceHolder('.search-wiki input.search-text', 'Поиск...');
	initPlaceHolder('.js-tag-input', 'Tag Keyword');
	initPlaceHolder('.wiki-create-block--title', 'Enter Wiki Page Title');
	
	/*End Wiki Pages*/
	
	
	var mockInputText = ['Angel', 'Anggie', 'Angle', 'Angora', 'Angella', 'Uncle'];
	$('.search-box').delegate('.auto-complete li', 'click', function() {
		if ($(this).hasClass('last-li')) {
			return;
		}
		var text = $(this).text();
		$('.search-box input').val(text);
	});
	$('.js-wiki-preview').click(function(){
		$('.hide-preview').removeClass('hide-preview')
	});
	$('.js-hide').click(function(){
		$('.is-register-error').addClass('hide')
	});
	$('.js-toggle-button').live('click',function(){
        $('.js-toggle-button').removeClass('is-tab-selected');
        $(this).addClass('is-tab-selected');
    });
	function onInputChange(input) {
		var value = input.val();
		var parent = input.parent();
		if (!value || value.length < 3) {
			// Remove the auto complete.
			$('.auto-complete', parent).hide();
		} else {
			var list = $('.auto-complete', parent);
			if (list.length < 1) {
				list = $('<ul class="auto-complete"></ul>');
				parent.append(list);
			}
			list.empty();
			var reg = new RegExp(value, 'ig');
			// <li class="last-li">See more results for <strong></strong></li>
			for (var i = 0; i < mockInputText.length; i++) {
				var user = mockInputText[i];
				var result = reg.exec(user);
				
				if (result) {
					var found = result[0];
					var index = result['index'];
					var source = result['input'];
					
					var len1 = found.length;
					source = '<li><img src="./i/user-photo-small.png" alt="" /><a href="#" class="link-user">' + source.substring(0, index - 1) + '<strong>' + found + '</strong>' + source.substring(index + len1) + '</a></li>';
					list.append(source);
				}
			}
			
			if (list.find('li').length > 0) {
				list.append('<li class="last-li"><a href="Member_Search.html" class="go-searchs">See more results for <strong>' + value + '</strong></a></li>');
				list.show();
			} else {
				list.hide();
			}
		}
	}

	$('.js-check-prize-table tr').each(function() {
		$(this).find('td:last, th:last').css({
			paddingRight: 10,
			paddingLeft: 0
		});
	});
	
	$('.search-box input').keyup(function(e) {
		onInputChange($(this));
	}).mouseup(function(e) {
		onInputChange($(this));
	}).blur(function(e) {
		var that = $(this);
		window.setTimeout(function() {
			that.parent().find('.auto-complete').hide();
		}, 200);
	});
	var lastText = '';
	function onFilterChange(input) {
		var parent = input.parent().parent();
		parent.find('.is-lazy-load').remove();
		var friendItem = parent.find('.js-friend-list-item');
		parent.find('.friend-user__list').scrollTop(0);
		var text = input.val();
		text = text.toLowerCase();
		friendItem.each(function() {
			var value = $(this).find('.friend-user__list-item__user').text();
			value = value.toLowerCase();
			if (value.indexOf(text) >= 0) {
				$(this).show();
			} else {
				$(this).hide();
			}
		});
		if (parent.find('.js-friend-list-item:visible').length < 12) {
			parent.find('.js-msg-load-more').attr('disabled', 'disabled').hide();
		} else {
			parent.find('.js-msg-load-more').removeAttr('disabled').show();
		}
		var activeRow = parent.find('.is-selected:visible');
		if (activeRow.length > 0) {
		} else {
			parent.find('.is-selected').removeClass('is-selected');
			$('.message__list').addClass('is-hidden');
			$('.message__reply-msg-bar').addClass('is-hidden');
		}
		handleScrollLoading(parent);
	}
	
	$('.friend-user__search-input').focus(function() {
		var $input = $(this);
		window.filterTicks = window.setInterval(function() {
			var text = $input.val();
			if (lastText != text) {
				lastText = text;
				onFilterChange($input);
			}
		}, 100);
	}).blur(function() {
		if (window.filterTicks) {
			window.clearInterval(window.filterTicks);
		}
	});
	
	$('.js-msg-load-more').each(function() {
		var parent = $(this).parent();
		handleScrollLoading(parent);
	});
	
	var testMac = /Mac OS X/;
	var userAgent = navigator.userAgent;
	var isIE = $.browser.msie;
	var IEVersion = $.browser.version;
	if (testMac.test(userAgent) || (isIE && IEVersion == '9.0')) {
		$('.box__title ul li a').addClass('mac-fix');
	}
	var searchText = ['games feature', 'games category', 'games of the month', 'gaming site', 'how to get started', 'How to play games'];

	function onSearchUpdate() {
		var val = $('.search-area input').val();
		var list = $('.search-area ul');
		list.html('');
		if (val && val.length > 0) {
			$('.search-area').addClass('show-tips');
			var reg = new RegExp(val, 'i');
			var list = $('.search-area ul');
			list.html('');
			for (var i = 0; i < searchText.length; i++) {
				var key = searchText[i];
				var result = reg.exec(key);
				
				if (result) {
					var found = result[0];
					var index = result['index'];
					var source = result['input'];
					
					var len1 = found.length;
					source = '<li><a href="javascript:;" class="filter-reslut">' + source.substring(0, index) + '<strong>' + found + '</strong>' + source.substring(index + len1) + '</a></li>';
					list.append(source);
				}
			}
			if (list.find('li').length > 0) {
				list.show();
			} else {
				list.hide();
			}
		} else {
			$('.search-area').removeClass('show-tips');
			list.hide();
		}
	}
	$('.search-area').each(function() {
		$(this).find('input').keyup(function() {
			onSearchUpdate();
		}).blur(function() {
			window.setTimeout(function() {
				$('.search-area ul').hide();
			}, 200);
		});
	});
	$('.search-area').delegate('li a', 'click', function() {
		$('.search-area input').val($(this).text());
	});
	$('.remove-input-icon').click(function() {
		$('.search-area input').val('');
		$('.search-area').removeClass('show-tips');
		$('.search-area ul').hide();
	});


	$('.carousel-wrapper').attr('index', 1);
	var lock = false;
	$('.js-prev-page').click(function() {
		if (lock) {
			return;
		}
		var index = parseInt($('.carousel-wrapper').attr('index'), 10);
		if (index == 0) {
			$(this).hide();
			return;
		}
		lock = true;

		index = index - 1;
		$('.carousel-wrapper').animate({
			left: -index * 832
		}, 500, function() {
			if (index == 0) {
				$('.js-prev-page').hide();
			}
			$('.carousel-wrapper').attr('index', index);
			$('.js-next-page').show();
			lock = false;
		});
	});
	$('.js-next-page').click(function() {
		if (lock) {
			return;
		}
		var index = parseInt($('.carousel-wrapper').attr('index'), 10);
		if (index == 2) {
			$(this).hide();
			return;
		}
		lock = true;

		index = index + 1;
		$('.carousel-wrapper').animate({
			left: -index * 832
		}, 500, function() {
			if (index == 2) {
				$('.js-next-page').hide();
			}
			$('.carousel-wrapper').attr('index', index);
			$('.js-prev-page').show();
			lock = false;
		})
	});

	$('.root-menu >a').click(function() {
		$(this).parent().siblings('.expand').removeClass('expand');
		$(this).parent().toggleClass('expand');
	});
	$('.subtitle li>a').click(function(e){
		e.preventDefault();
	    $(this).parent().siblings('.selected').removeClass('selected');
		$(this).parent().toggleClass('selected');
	});
	window.setTimeout(function() {
		$('.js-equal').each(function() {
			var child = $(this).children();
			var max = 0;
			for (var i = 0; i < child.length; i++) {
				var ch = child.eq(i);
				if (max < ch.outerHeight()) {
					max = ch.outerHeight();
				}
			}
			child.each(function() {
				var h = $(this).height();
				var hh = $(this).outerHeight();
				var gap = max - hh;
				$(this).height(h + gap);
			});
		});
	}, 200);

	// load more
	if ($('.load-more:visible').length > 0) {
		isLoading = false;
		isNoMore = false;	// for demonstrate no more items to load only
		$(window).bind('scroll', onScrollLoading);
	}
	
	$('.my-tournamments .box__title span').click(function() {
		var parent = $(this).parent().parent().toggleClass('hide-detail');
	});


	$('.box__title--filter select').each(function() {
		this.onchange = (function() {
			var value = $(this).val();
			$(this).parents('.js-tournamments').eq(0).removeClass('tournamments-show-active').removeClass('tournamments-show-completed').addClass('tournamments-show-' + value);
		});
	});

	$('.js-sortable').click(function() {

		$(this).parent().siblings('th').each(function() {
			$(this).find('a.sortable').removeClass('sortableDesc').removeClass('sortableAsc');
		});
		var isTable = $(this).parents('.js-data-render').length > 0;
		if ($(this).hasClass('sortableDesc')) {
			$(this).removeClass('sortableDesc');
			$(this).addClass('sortableAsc');
			if (isTable) {
				sortData($(this).text(), 1);
			} else {
				tableSort($(this), 1);
			}
		} else {
			$(this).addClass('sortableDesc');
			$(this).removeClass('sortableAsc');
			if (isTable) {
				sortData($(this).text(), -1);
			} else {
				tableSort($(this), -1);
			}
		}
	})
	$('.js-pagnation').each(function() {
		this.onchange = function() {
			var count = $(this).val();
			renderTutorials(count);
		}
	});
	renderTutorials(16);



	$('.badge-element .badge-wp').hover(
		function() {
			$(this).parent().addClass('badge-element-active');
		},
		function() {
			$(this).parent().removeClass('badge-element-active');
		}
	);

	$('.js-filter-status1').each(function() {
		this.onchange = function() {
			filterStatus($(this).val());
		}
	});

	// use jqtransform to style all form elements
	if ($('.js-jqtransform').length > 0) {
		$('.js-jqtransform').jqTransform();
	}
	
	$('.is-filter-show').removeClass('is-filter-show');
	var fixes = $('.js-z-index-fix');
	fixes.each(function(index) {
		var idx = fixes.length - index + 1;
		$(this).css({
			position: 'relative',
			zIndex: idx
		})
	});


	$(document).delegate('.js-send-user-msg', 'click', function() {
		showPopup('.popup--send-message');
	});
	
	$('.js-chk').click(function() {
		$(this).toggleClass('is-checked');
		if ($(this).hasClass('js-chk-all')) {
			var id = $(this).attr('id').replace('-alt', '');
			if ($(this).hasClass('is-checked')) {
				$('.' + id + ':visible').addClass('is-checked');
			} else {
				$('.' + id + ':visible').removeClass('is-checked');
			}	
		}
	});
	$('.js-radio').click(function() {
		if ($(this).hasClass('is-checked')) {
			return;
		}
		$(this).parent().find('.is-checked').removeClass('is-checked');
		$(this).addClass('is-checked');
	});
	function appendShadow(inst) {
		var dpDiv = inst.dpDiv;
		if (dpDiv.length > 0) {
			// Check if it is hacked.
			var shadow = dpDiv.find('.shadow');
			if (shadow.length <= 0) {
				var shadowStr = 	'<div class="dp-shadow">'
								+		'<div class="shadow-top-left"></div>'
								+		'<div class="shadow-top-right"></div>'
								+		'<div class="shadow-top"></div>'
								+		'<div class="shadow-left"></div>'
								+		'<div class="shadow-right"></div>'
								+		'<div class="shadow-bottom-left"></div>'
								+		'<div class="shadow-bottom"></div>'
								+		'<div class="shadow-bottom-right"></div>'
								+	'</div>';
				shadow = $(shadowStr);
				dpDiv.find('.ui-datepicker-header').append('<div class="datepicker-triangle"></div>');
				dpDiv.append(shadow);
				if ($.browser.msie) {
					dpDiv.css('height', 'auto');
					dpDiv.height(dpDiv.height());
				}
			}
		}
	}
	$('.js-calendar').each(function() {
		$(this).datepicker({
			showOn: 'both',
            buttonImage: './i/calendar.png',
            buttonImageOnly: true,
			onShow: appendShadow,
			positionAdjust: true,
			dateFormat: 'mm/dd/y',
			defaultDate: '02/21/88'
		});
	});
	$('.js-calendars').each(function() {
		$(this).datepicker({
			onShow: appendShadow,
			positionAdjust: true,
			dateFormat: 'mm/dd/yy'
		});
	});
	$('.js-date-icon').click(function() {
		$(this).siblings('.js-calendars').trigger('focus');
	});
	
	
	if ($.browser.mozilla) {
		$('.item-birth img').addClass('fix-ff');
		$('.user-profile-description').css('padding-bottom', '19px');
		$('.do-search').addClass('do-search-ff');
	}
	
	// own profile navigation
	$('.js-navi-wall').bind('click', function() {
		$('.box__title-navi .is-active').removeClass('is-active');
		$(this).addClass('is-active');
		$('.js-profile-subpanel').addClass('is-hidden');
		$('.js-profile-wall').removeClass('is-hidden');
	});
	$('.js-navi-friends').bind('click', function() {
		$('.box__title-navi .is-active').removeClass('is-active');
		$(this).addClass('is-active');
		$('.js-profile-subpanel').addClass('is-hidden');
		$('.js-profile-friends').removeClass('is-hidden');
	});
	$('.js-navi-messages').click(function() {
		$('.box__title-navi .is-active').removeClass('is-active');
		$(this).addClass('is-active');
		$('.js-profile-subpanel').addClass('is-hidden');
		$('.js-profile-messages').removeClass('is-hidden');
	});
	$('.js-tab').click(function() {
		var p = $(this).parent().parent().find('.is-active');
		p.removeClass('is-active');
		$(this).addClass('is-active');
		var text = $(this).text();
		var subpane = null;
		switch (text) {
			case 'PERSONAL WALL':
				subpane = $('.js-wall');
				break;
			case 'USER PROFILE':
				subpane = $('.js-user-profile');
				break;
		}
		if (subpane) {
			subpane.siblings('.js-subpane').addClass('is-hidden');
			subpane.removeClass('is-hidden');
		}
	});
	$('.js-navi').click(function() {
		var active = $(this).parent().parent().find('.is-active');
		var activeId = active.attr('id');
		var tid = $(this).attr('id');
		if (activeId == tid) {
			return;
		}
		active.removeClass('is-active');
		$(this).addClass('is-active');
		var pid = tid.replace('js-navi-', '');
		$('.private-profile-subpanel').addClass('is-hidden');
		$('.private-profile-subpanel.js-private-profile-' + pid).removeClass('is-hidden');
		
	});
	$('.js-share-filter').click(function() {
		$(this).parent().find('.is-active').removeClass('is-active');
		$(this).addClass('is-active');
		var text = $(this).text().replace('Share User ', '').replace('Share ', '');
		var parent = $(this).parents('.js-private-profile-sharing').eq(0);
		var title = parent.find('th.table-col-first div');
		title.text(text + ' Name');
		
		if (text == 'Profile') {
			$('.js-filter-profile').show();
			$('.js-filter-profile td').show();
			$('.js-filter-activity').hide();
			$('.js-filter-activity td').hide();
			$('.profile-tr').show();
			$('.act-tr').hide();
		} else {
			$('.js-filter-profile').hide();
			$('.js-filter-profile td').hide();
			$('.js-filter-activity').show();
			$('.js-filter-activity td').show();
			$('.profile-tr').hide();
			$('.act-tr').show();
		}
	});
	
	$('.js-filter-button').click(function() {
		var parent = $(this).parents('.js-tournamments').eq(0);
		if (parent.length < 1) {
			parent = $(this).parent().parent();
		}
		parent.toggleClass('is-filter-show');
		highlightMe();
	});
	
	$('.js-btn-unregister').click(function() {
		showPopup('.popup__unregister-profile');
	});
	
	$('.js-new-message').click(function() {
		showPopup('.popup--send-message');
	});
	
	$(document).delegate('.js-friend-list-item', 'click', function() {
		if ($(this).hasClass('is-selected')) {
			return;
		}
		$(this).addClass('is-selected');
		$(this).siblings('.is-selected').removeClass('is-selected');
		$('.message__list').removeClass('is-hidden');
		$('.message__list').find('.js-mock-new').remove();
		$('.message__reply-msg-bar').removeClass('is-hidden');
		$('.message__reply-msg-bar .reply-area').val('Write a reply...');
		$('.message__list .is-lazy-load').remove();
		handleScrollLoading($('.message__list'));
	});
	$('.js-friend-list-item').hover(
		function() {
			$(this).addClass('is-hover');
		},
		function() {
			$(this).removeClass('is-hover');
		}
	);
	$('.link-private-profile__title').click(function() {
		
		var parent = $(this).parent().parent();
		parent.addClass('is-edit-mode');
		parent.find('.is-symbol-checked').each(function() {
			if ($(this).hasClass('is-symbol-unchecked')) {
				$(this).next().removeClass('is-checked');
			} else {	
				$(this).next().addClass('is-checked');
			}
		});
		parent.find('.email-format').each(function() {
			var text = $(this).text();
			$(this).next().find('a').each(function() {
				if ($(this).text() == text) {
					$(this).addClass('is-checked');
				} else {
					$(this).removeClass('is-checked');
				}
			});
		});
		
		var target = parent.find('.private-profile__content-edit');
		parent.find('.private-profile__content dd').each(function() {
			var p = $(this);
			var labels = p.attr('class')
			if (!labels) {
				return;
			}
			labels = labels.split(' ');
			var key = '';
			for (var i = 0; i < labels.length; i++) {
				var label = labels[i];
				if (label.indexOf('js-item-') >= 0) {
					key = label;
					break;
				}
			}
			if (key.length > 0) {
				var targetwrapper = target.find('.' + key);
				var control = targetwrapper.find('textarea, input');
				
				if (control.hasClass('js-calendar')) {
					var value = $(this).text();
					var date = $.datepicker.parseDate('MM dd, yy', value);
					control.datepicker('setDate', date);
				} else {
					if (control.hasClass('textarea-bio')) {
						var text = $.trim($(this).html());
						text = text.replace(/[<]br[/][>]/gi, '\n');
						text = text.replace(/\<br\>/gi, '\n');
						control.val(text);
					} else {
						control.val($(this).text());
					}
				}
			}
		});
	});
	
	$('.js-reply-message').click(function() {
		var content = $(this).siblings('textarea').val();
		if (content == '' || content == 'Write a reply...') {
			return;
		}
		
		var list = $(this).parent().siblings('.message__list');
		var items = $('<div class="message__list__item-sent js-mock-new js-cache-load"><img src="i/user-photo-small.png" alt="Photo"><div class="message__list__item-area"><a href="UserProfile-user\'sownprofilepage.html" class="link-user">MyName</a><p>' + content + '</p><div class="message__list__item-timestamp">12/12/12 03:23 AM</div></div></div>');
		list.prepend(items);
	});
	
	$('.private-profile__content-edit__button-bar a.js-button-save').click(function() {
		
		var parent = $(this).parent().parent().parent();
		parent.find('.is-symbol-checked').each(function() {
			var next = $(this).next();
			if (next.hasClass('is-checked')) {
				$(this).removeClass('is-symbol-unchecked');
			} else {
				$(this).addClass('is-symbol-unchecked');
			}
		});
		parent.find('.email-format').each(function() {
			$(this).text($(this).next().find('a.is-checked').text());
		});
		
		var target = parent.find('.private-profile__content');
		
		parent.find('input, textarea').each(function() {
			var p = $(this).parent();
			var labels = p.attr('class')
			if (!labels) {
				return;
			}
			labels = labels.split(' ');
			var key = '';
			for (var i = 0; i < labels.length; i++) {
				var label = labels[i];
				if (label.indexOf('js-item-') >= 0) {
					key = label;
					break;
				}
			}
			if (key.length > 0) {
				var itemwrapper = target.find('.' + key);
				var a = itemwrapper.find('a');
				if (a.length > 0) {
					a.attr('href', 'mailto:' + $(this).val());
					a.text($(this).val());
				} else {
					if ($(this).hasClass('js-calendar')) {
						var date = $(this).datepicker('getDate');
						var str = $.datepicker.formatDate('MM dd, yy', date);
						itemwrapper.text(str);
					} else {
						if ($(this).hasClass('textarea-bio')) {
							var str = $(this).val().replace(/\n/g, '<br>');
							itemwrapper.html(str);
						} else {
							itemwrapper.text($(this).val());
						}
					}
				}
			}
		});
		parent.removeClass('is-edit-mode');
	});
	$('.private-profile__content-edit__button-bar a.js-button-cancel').click(function() {
		var parent = $(this).parent().parent().parent();
		parent.removeClass('is-edit-mode');
	});
	
	// hide header popup by clicking outside of it
	var hideHeaderPopup = function(e) {
		if ($('.header-popup:visible').length > 0 && !$(e.target).hasClass('header-popup') && $(e.target).parents('.header-popup').length < 1) {
			$(window).unbind('click', hideHeaderPopup);
			$('.header-popup').css('display', 'none');
		}
	};
	// header popup
	$('.l-header .logged-in .icon').bind('click', function(e) {
		e.stopImmediatePropagation();
		var popup = $(this).siblings('.header-popup');
		$(window).unbind('click', hideHeaderPopup);
		$(this).parent().siblings().children('.header-popup').css('display', 'none');
		if (popup.css('display') == 'none') {
			popup.css('display', 'block');
			$(window).bind('click', hideHeaderPopup);
		} else {
			popup.css('display', 'none');
			$(window).unbind('click', hideHeaderPopup);
		}
	});
	
	// popup
	/**
	 * show popup
	 * selector - the jQuery selector of the popup
	 */
	var showPopup = function(selector) {
		var body = $('body');
		$('.alpha').width(body.width()).height(body.height()).css('display', 'block');
		var popup = $(selector);
		popup.css('display', 'block').css('margin', -popup.height() / 2 + 'px 0 0 ' + (-popup.width() / 2) + 'px');
	};
	$('.popup .close-btn, .popup--add-friend .button, .popup--send-message .button, .js-no, .popup__remove-friend .js-yes').bind('click', function() {
		$('.alpha').css('display', 'none');
		$(this).parents('.popup').css('display', 'none');
	});
	$(document).delegate('.js-remove-friend', 'click', function() {
		showPopup('.popup__remove-friend');
	});
	$('.js-sign-in').bind('click', function(){
		showPopup('.popup--login');
	});
	$('.js-send-message').bind('click', function() {
		showPopup('.popup--send-message');
	});
	
	$(document).delegate('.js-add-friend', 'click', function() {
		showPopup('.popup--add-friend');
	});
	$('.popup__unregister-profile .js-yes').bind('click', function() {
		$('.alpha').css('display', 'none');
		$('.popup__unregister-profile').css('display', 'none');
		showPopup('.popup__unregister-confirm');
	});
	
	// home carousel
	var changeContent = function (index) {
		var index = $.jcarousel.intval($('.carousel .is-current').attr('jcarouselindex'));
		index = (index - 1) % 5;
		index = index < 0 ? 5 + index : index;
		$('.home-carousel .content:visible').fadeOut('fast', function() {
			$('.home-carousel .content:eq(' + index + ')').fadeIn('fast');
		});
	};
	if ($('.carousel').length > 0) {
		var isFinished = true; // is used to ensure the animation has finished before doing anything else
		$('.carousel ul').jcarousel({
			vertical: true,
			scroll: 1,
			wrap: 'circular',
			setupCallback: function() {
				// add current style
				$('.carousel ul li:eq(2)').addClass('is-current');
				$('.jcarousel-list-vertical').css('overflow','auto');
				$('.jcarousel-list-vertical').css('overflow-y','hidden');
				$('.jcarousel-list-vertical').css('padding','0 18px 0 35px');
				// ride the carousel
				$('.jcarousel-prev-vertical').live('click', function() {
					if (isFinished) {
						isFinished = false;
						$('.carousel ul li.is-current').prev().addClass('is-current');
						$('.carousel ul li.is-current:eq(1)').removeClass('is-current');
						changeContent();
					}
				});
				$('.jcarousel-next-vertical').live('click', function() {
					if (isFinished) {
						isFinished = false;
						$('.carousel ul li.is-current').next().addClass('is-current');  
						$('.carousel ul li.is-current:eq(0)').removeClass('is-current');
						changeContent();
					}
				});

			},
			itemFirstInCallback: function() {
				isFinished = true;
			},
			initCallback: function(carousel){
				// click on the item
				$('.carousel ul li').bind('click', function() {
					var index = $.jcarousel.intval($(this).attr('jcarouselindex'));
					$(this).addClass('is-current');

					$(this).siblings().removeClass('is-current');				
					carousel.scroll($.jcarousel.intval($(this).attr('jcarouselindex') - 2));
					changeContent();
				});
				homeCaruselTime=5000;
				homeCarusel=setInterval(function(){
					if (!$('.carousel ul li.is-current').next().is("li")){
						var index = $.jcarousel.intval($('.carousel ul li:eq(0)').attr('jcarouselindex'));
						$('.carousel ul li.is-current').removeClass('is-current');
						$('.carousel ul li:eq(0)').addClass('is-current');  
						carousel.scroll($.jcarousel.intval($('.carousel ul li.is-current').attr('jcarouselindex')-2 ));
						changeContent();
						
					}
					var index = $.jcarousel.intval($('.carousel ul li.is-current').next().attr('jcarouselindex'));
					$('.carousel ul li.is-current').removeClass('is-current').next().addClass('is-current');  
					carousel.scroll($.jcarousel.intval($('.carousel ul li.is-current').attr('jcarouselindex')-2 ));
					changeContent();
				},homeCaruselTime);
				$(".home-carousel").hover(function(){
					clearInterval(homeCarusel);
				},function(){
					homeCarusel=setInterval(function(){
						if (!$('.carousel ul li.is-current').next().is("li")){
							var index = $.jcarousel.intval($('.carousel ul li:eq(0)').attr('jcarouselindex'));
							$('.carousel ul li.is-current').removeClass('is-current');
							$('.carousel ul li:eq(0)').addClass('is-current');  
							carousel.scroll($.jcarousel.intval($('.carousel ul li.is-current').attr('jcarouselindex')-2 ));
							changeContent();
						
						}
						var index = $.jcarousel.intval($('.carousel ul li.is-current').next().attr('jcarouselindex'));
						$('.carousel ul li.is-current').removeClass('is-current').next().addClass('is-current');  
						carousel.scroll($.jcarousel.intval($('.carousel ul li.is-current').attr('jcarouselindex')-2 ));
						changeContent();
					},homeCaruselTime);

				});

			}
		});
	}
	
	// post new feed
	$('.js-post-feed, .js-post-feed-home').bind('click', function() {
		var isHomeFeed = $(this).hasClass('js-post-feed-home');
		$(this).parents('.post-area').after('<div class="feeds"><img src="i/feed-photo.png" alt="Handle name" class="feeds__photo float-left" /><div class="feeds__content clearfix"><p class="action"><span class="time float-right">23 Hours</span><a href="UserProfile-nonfriendprofilepage.html" class="link">Handle name</a> comment on <a href="javascript:;" class="link">Game Name</a></p><p><textarea cols="" rows="" class="textarea self-comment' + (isHomeFeed ? ' self-comment--home' : '') + '" disabled="disabled">' + $(this).parent().siblings('.textarea').val() + '</textarea></p><div class="edit"><a href="javascript:;" class="js-edit-comment">Edit</a> | <a href="javascript:;" class="js-remove-comment">Remove</a></div><div class="buttons buttons--self-comment"><a href="javascript:;" class="comment js-show-comment">252</a> <a href="javascript:;" class="like">252</a> <a href="javascript:;" class="tweet">252</a></div></div></div><ul class="feed-comment' + (isHomeFeed ? ' feed-comment--home' : '') + ' is-hidden"><li class="clearfix"><img src="i/comment-photo.png" alt="" /><a href="UserProfile-nonfriendprofilepage.html">Handle name</a><p>That was great</p></li><li class="clearfix"><img src="i/comment-photo.png" alt="" /><textarea cols="" rows="" class="textarea js-post-comment">post comment here</textarea></li></ul>');
		disableTextareaResize();
	});
	
	// show/hide comment
	$('.buttons .js-show-comment').live('click', function() {
		var self = $(this);
		if (!self.hasClass('active')) {
			self.addClass('active');
			self.parents().next('.feed-comment').removeClass('is-hidden');
		} else {
			self.removeClass('active');
			self.parents().next('.feed-comment').addClass('is-hidden');
		}
	});
	
	// post new feed comment
	$('.js-post-comment').live('keydown', function(e) {
		if (e.keyCode == 13) {
			e.preventDefault();
			$(this).parent().before('<li class="clearfix"><img src="i/comment_photo.png" alt="" /><a href="UserProfile-nonfriendprofilepage.html">Имя Фамилия </a><p>' + $(this).val() + '</p></li>');
			$(this).val('оставляйте комментарии здесь').trigger('blur');
			disableTextareaResize();
		}
	});
	
	// post new news comment
	$('.js-post-news-comment').bind('click', function() {
		$(this).parents('.post-area').after('<div class="news-comment"><img src="i/user-icon.png" alt="Пользователь" class="float-left" /><div class="content"><div class="meta"><span class="float-right"></span><a href="UserProfile-nonfriendprofilepage.html">Пользователь</a></div><p>' + $(this).parent().siblings('.textarea').val() + '</p><div class="button-holder"><a href="javascript:;" class="reply">Ответить</a><a href="javascript:;" class="like">24</a></div></div></div>');
		disableTextareaResize();
	});
	
	// edit/remove feed comment
	$('.js-edit-comment').live('click', function() {
		if ($(this).text() == 'Edit') {
			$(this).text('Done');
			$(this).parent().prev().children().attr('disabled', false);
		} else {
			$(this).text('Edit');
			$(this).parent().prev().children().attr('disabled', true);
		}
	});
	$('.js-remove-comment').live('click', function() {
		$(this).parents('.feeds').next().remove();
		$(this).parents('.feeds').remove();
	});
	
	// edit status in own profile
	$('.js-edit-status').bind('click', function() {
		$(this).parent().addClass('is-edit-mode');
		$(this).siblings('.js-edit-save').removeClass('is-hidden');
		$(this).siblings('.js-edit-cancel').removeClass('is-hidden');
		$(this).siblings('textarea').val($(this).siblings('.textarea-holder__text').text());
	});
	// edit status in own profile
	$('.js-edit-cancel').bind('click', function() {
		$(this).parent().removeClass('is-edit-mode');
		$(this).siblings('.js-edit-save').addClass('is-hidden');
		$(this).addClass('is-hidden');
	});
	// edit status in own profile
	$('.js-edit-save').bind('click', function() {
		$(this).parent().removeClass('is-edit-mode');
		$(this).addClass('is-hidden');
		$(this).siblings('.js-edit-cancel').addClass('is-hidden');
		$(this).siblings('.textarea-holder__text').text($(this).siblings('textarea').val());
	});
	
	// file uploader.
	$('.file-upload').css('opacity', '0').change(function() {
		$(this).siblings('input:text').val($(this).val());
	});
	$('.js-browse').click(function() {
		$(this).siblings('input.file-upload').trigger('click');
	});
	$('.js-remove').click(function() {
		$(this).siblings('input').val('');
	});
	$('.file-upload-placeholder').focus(function() {
		$(this).blur();
	});

	$('.js-my-score .achievements__my-score').delegate('.skill-name img', 'mouseover', function() {
		if ($(this).parent().hasClass('my-score')) {
			return;
		}
		console.log('in');
		var popup = $('.firend-request__info:first');
		popup.show();
		isFriendMode(true);

		var offset = $(this).offset();
		var offset2 = $('.achievements__my-score').offset();

		var step_l = 150;
		var step_t = 10;
		popup.css({
			left: offset.left + step_l,
			top: offset2.top + step_t
		});
		if (window.timer) {
			window.clearTimeout(window.timer);
		}

	});
	$('.js-my-score .achievements__my-score').delegate('.skill-name img', 'mouseout', function() {
		var popup = $('.firend-request__info');
		window.timer = window.setTimeout(function() {
			popup.hide();
		}, 500);
	});
	
	$('.js-profile-friends').delegate('.image-wrapper, .friend-request__photo, .username', 'mouseover', function() {
		if ($(this).hasClass('score-wrapper')) {
			return;
		}
		var popup = $('.firend-request__info:first');
		popup.show();
		
		
		var parent = $(this).parents('.js-friend-request').eq(0);
		var offset = parent.offset();
		
		if (parent.hasClass('current-user')) {
			popup.addClass('firend-request__info--self');
		} else {
			popup.removeClass('firend-request__info--self');
		}

		if (parent.parent().parent().hasClass('is-me')) {
			isFriendMode(true);
		} else {
			isFriendMode(false);
		}
		$('.is-tor-hover').removeClass('is-tor-hover');
		var tr = $(this).parents('tr').eq(0);
		if (tr.hasClass('is-completed')) {
			tr.addClass('is-tor-hover');
			isFriendMode(true);
		} else if (tr.hasClass('is-running')) {
			isFriendMode(false);
			tr.addClass('is-tor-hover');
		}

		
		var step_l = 200;
		var step_t = 26;
		
		if (parent.hasClass('alt')) {
			step_l -= 28;
			step_t -= 26;
		}
		if (parent.hasClass('filter-badge')) {
			step_t -= 22;
			step_l -= 41;
		}
		if (parent.hasClass('user-set')) {
			step_t -= 30;
			step_l -= 71;
		}
		
		if (parent.hasClass('is-td-col')) {
			step_t -= 20;
		}
		popup.css({
			left: offset.left + step_l,
			top: offset.top + step_t
		});
		if (window.timer) {
			window.clearTimeout(window.timer);
		}
	});
	$('.js-profile-friends').delegate('.image-wrapper, .friend-request__photo, .username', 'mouseout', function() {
		var popup = $('.firend-request__info');
		console.log('out');
		
		if (window.timer) {
			window.clearTimeout(window.timer);
		}
		window.timer = window.setTimeout(function() {
			popup.hide();
			$('.is-tor-hover').removeClass('is-tor-hover');
		}, 500);
	});

	
	$(document).delegate('.firend-request__info', 'mouseover', function() {
		window.clearTimeout(window.timer);
	});
	$(document).delegate('.firend-request__info', 'mouseout', function() {
		var popup = $('.firend-request__info');
		
		if (window.timer) {
			window.clearTimeout(window.timer);
		}
		window.timer = window.setTimeout(function() {
			popup.hide();
			$('.is-tor-hover').removeClass('is-tor-hover');
		}, 500);
	});
	
	if ($.browser.msie && $.browser.version == '7.0') {		
		$('.js-contest-table').each(function() {
			$(this).find('col:eq(2), col:eq(3)').each(function() {
				var width = $(this).attr('width');
				width = parseInt(width, 10) - 20;
				$(this).attr('width', width);
			});
		});
		
		$('.js-score-up-table').each(function() {
			$(this).find('col:eq(3), col:eq(2), col:eq(1)').each(function() {
				var width = $(this).attr('width');
				width = parseInt(width, 10) - 45;
				$(this).attr('width', width);
			});
		});
	}
	
	// footer social buttons hover
	$('.footer-bottom .social-links li').hover(
		function() {
			$(this).css('background-image', 'url(i/circle-hover.png)');
		},
		function() {
			$(this).css('background-image', 'url(i/circle.png)');
		}
	);
	
	// disable textarea resize in modern browsers
	var disableTextareaResize = function() {
		$('textarea').css('resize', 'none');
	};
	disableTextareaResize();
	
	// fix ie8 fadeIn/fadeOut
	if ($.browser.msie && $.browser.version == 8) {
		$('.home-carousel .content').children().css('filter', 'inherit');
	}
	
	// resize alpha
	$(window).bind('resize', function() {
		var body = $('body');
		$('.alpha').width(body.width()).height(body.height());
		$('.firend-request__info').hide();
	});
	$('.private-profile__table-content table th span').click(function() {
		var checkbox = $(this).siblings('.js-chk:visible');
		checkbox.trigger('click');
	});

	$('.js-join').click(function() {
		$(this).parent().addClass('is-div-joined');
	});

	$('.js-filter-ach').click(function() {
		if ($(this).hasClass('is-tab-selected')) {
			return;
		}

		$(this).siblings('.is-tab-selected').removeClass('is-tab-selected');
		$(this).addClass('is-tab-selected');

		mockFilter();
	});



	
	updateFilterBadge();
	highlightMe();


	/* sort and render */
	generateData();
	renderData();

	$('.icon-search').click(function() {
		doSearch($(this).siblings('input').val());
	});

	$('.js-reset-button').click(function() {
		$('.filter-pane').find('input').each(function() {
			$(this).val('');
		});
	});

	//$('.js-filter-button').trigger('click');
	$('.js-view-button').click(function() {
		var badgeBar = $(this).parents('.filter-badge-bar');
		if (badgeBar.length > 0) {
			mockFilter();

			return;
		}
		var date = $('.filter-pane').find('input.date');
		var first = date.eq(0);
		var next = date.eq(1);
		var option = [];
		var dateFirst = first.datepicker('getDate');
		if (dateFirst) {
			option.push({
				field: "Start Date",
				eq: 'more',
				value: dateFirst.getTime()
			});
		}
		var dateNext = next.datepicker('getDate');
		if (dateNext) {
			option.push({
				field: "End Date",
				eq: 'less',
				value: dateNext.getTime()
			});
		}

		doFilter(option);
	});

	$('.js-data-render').delegate('.js-join-button', 'click', function() {
		if ($(this).hasClass('is-joined')) {
			return;
		}
		$(this).addClass('is-joined').text('JOINED');

		var index = $(this).parents('tr').attr('index');
		index = parseInt(index, 10);
		try {
			var obj = tableData[index];
			obj.join = true;
		} catch (e) {

		}
	});
	$(".js-is-login").click(function(){
		  $(".error-message").hide();
		  $(this).parent().parent().parent().find("#password").css({"border":"1px solid #e7e7e7"});
		  $(this).parent().parent().parent().find("#username").css({"border":"1px solid #e7e7e7"});
 	  if ($(this).parent().parent().parent().find("#password").val()==""|| $(this).parent().parent().parent().find("#password").val()=="Password"){
		  $(this).parent().parent().parent().find("#password").css({"border":"1px solid red"});
		  $(".error-message").show();
	  }
 	  if ($(this).parent().parent().parent().find("#username").val()==""|| $(this).parent().parent().parent().find("#username").val()=="Username here"){
		  $(this).parent().parent().parent().find("#username").css({"border":"1px solid red"});
		  $(".error-message").show();
	  }
	  if (!$(".error-message:visible").length!=0){
		  window.location="Homepage-loggedin.html";}
  });
	
	// carousel functions
  (function(wrapper){
      if(wrapper.length>0){
        // Top Carousel
        carSlider =  wrapper.find('.car').bxSlider({
          pager:false,
          minSlides: 5,
          maxSlides: 5,
          moveSlides:1,
          slideWidth: 184,
          slideMargin: 0,
          speed:200, 
          sflag:true,
          onSlideAfter:function($slideElement, oldIndex, newIndex){
            $slideElement.parent().find(".game-icon").removeClass("current");
            var mid = $slideElement.next().next();
            mid.addClass("current");
            wrapper.find(".inner .description").hide();
            wrapper.find(".inner .right ." + mid.data("game")).show();
			wrapper.find(".slayder li").hide().eq( mid.data("index") ).show();
          },
		  onSliderLoad:function(currentIndex){
            var mid = wrapper.find("li.game-icon.current")
            wrapper.find(".inner .description").hide();
            wrapper.find(".inner .right ." + mid.data("game")).show();
			wrapper.find(".slayder li").hide().eq( mid.data("index") ).show();
          }
        });

        wrapper.find('.game-icon').on("click",function(){
          var index = $(this).data("index")-2,
               len = carSlider.getSlideCount();
           if(index<0){
              index = index+len;
           } 
          var current = (carSlider.getCurrentSlide() +2)%len,
              dataIndex = $(this).data("index"),
              direction = "next"; 

          if(current-dataIndex>0 && current-dataIndex<3  || current-dataIndex<0 && current-dataIndex<-5){
            direction = "prev";   
          }
          carSlider.goToSlide(index,direction);
        });
        
 

      }
  })($("#js-games-carousel"));
	
	/*Start Forum Pages*/
	$('.js-submit-forum-adv-search').click(function() {
		$(".box--forum-adv-search__results").show();
	});
	$('.js-reset-forum-adv-search').click(function() {
		$("#forum-adv-search-form")[0].reset();
		var formObj = $("#forum-adv-search-form");
		$("a[index='0']", formObj).trigger("click");
		$(".jqTransformRadio:eq(1)", formObj).trigger("click");
				
	});
	$('.js-mark-all-read').click(function() {
		$(".forum-list-link").removeClass("has-new-post");
	});
	$('.forum-pagination__prev').click(function() {
		var wrapper = $(this).parent();
		if ((!$(this).hasClass("is-disable-prev")) && ($('.forum-pagination__page', wrapper).length > 1)){
			var prevItem = $('.is-current', wrapper).prev(".forum-pagination__page");
			$('.forum-pagination__page', wrapper).removeClass("is-current");
			prevItem.addClass("is-current");
			$('.forum-pagination__next', wrapper).removeClass("is-disable-next");
			var currentIdx = parseInt(prevItem.text(), 10);
			if (currentIdx == 1){
				$('.forum-pagination__prev', wrapper).addClass("is-disable-prev");
			}
		}
	});
	$('.forum-pagination__next').click(function() {
		var wrapper = $(this).parent();
		if ((!$(this).hasClass("is-disable-next")) && ($('.forum-pagination__page', wrapper).length > 1)){
			var nextItem = $('.is-current', wrapper).next(".forum-pagination__page");
			$('.forum-pagination__page', wrapper).removeClass("is-current");
			nextItem.addClass("is-current");
			$('.forum-pagination__prev', wrapper).removeClass("is-disable-prev");
			var currentIdx = parseInt(nextItem.text(), 10);
			var totalIdx =  parseInt($('.forum-pagination__page', wrapper).length, 10);

			if (currentIdx == totalIdx ){
				$('.forum-pagination__next', wrapper).addClass("is-disable-next");
			}
		}
	});
	
	$('.forum-pagination__page').click(function() {
		var wrapper = $(this).parent();
		if ((!$(this).hasClass("is-current")) && ($('.forum-pagination__page', wrapper).length > 1)){
			$('.forum-pagination__page', wrapper).removeClass("is-current");
			$(this).addClass("is-current");
			$('.forum-pagination__next', wrapper).removeClass("is-disable-next");
			$('.forum-pagination__prev', wrapper).removeClass("is-disable-prev");
			var currentIdx = parseInt($(this).text(), 10);
			var totalIdx =  parseInt($('.forum-pagination__page', wrapper).length, 10);
			if (currentIdx == 1){
				$('.forum-pagination__prev', wrapper).addClass("is-disable-prev");
			}
			if (currentIdx == totalIdx ){
				$('.forum-pagination__next', wrapper).addClass("is-disable-next");
			}
		}
	});
	
	/* File Uploader */	
	if ($.browser.mozilla){
		var ver = jQuery.browser.version;
		var firstIndex = ver.indexOf('.');
		window.ffVerNum = parseInt(ver.substring(0, (firstIndex)), 10);
		if (window.ffVerNum < 2){
			$('.box--forum-thread__attachment-item').addClass('box--attach-item__ff-fix');
			$('.box--forum-thread__attachment-item').append('<span></span>');
		}
	}
	
	window.newForumAttachmentLine = "<div class='box--forum-thread__attachment-item clearfix'><p class='box--forum-thread__attachment-filename float-left'>No file chosen</p><a href='javascript:;' class='button float-right js-forum-choose-file'>CHOOSE FILE</a><a href='javascript:;' class='button float-right forum-delete-file js-forum-delete-file'>DELETE</a><input type='file' value='' class='attachment-upload' size='1' onchange='uploadForumFileTrigger(this)'/></div>";
	$('.js-forum-add-more-attachment').click(function(){
		$(".forum-thread__attachments").append(window.newForumAttachmentLine);
		$('.attachment-upload').css('opacity', 0);
	});
	$('.attachment-upload').css('opacity', 0);
	window.ffVerNum = 100;
	$('.forum-thread__attachments').delegate('.js-forum-choose-file', 'click', function() {
		var fileUploaderWrapper = $(this).parent();
		$('.attachment-upload', fileUploaderWrapper).trigger('click');
	});
	
	$('.forum-thread__attachments').delegate('.forum-delete-file', 'click', function() {
		$(this).parent().remove();
	});
	
	
	$('.js-forum-upload-attachments').bind('click', function(){
		if ( $(".is-file-selected").length > 0){
			showPopup('.popup--uploading-forum-attachment');
			if (window.uploadingTimer) {
				window.clearTimeout(window.uploadingTimer);
			}
			window.uploadingPercent = 0;	
			uploadingAnimation();
		}else{
			$(".box--forum-thread__attachment-filename").each(function() {
				if (!($(this).parent().hasClass("is-forum-file-uploaded"))){
					$(this).html("<span class='error-msg'>Please choose a File to Upload</span");
				}
			});
		}
	});
	$('.js-forum-watch-thread-btn').find('span.btn_text').text("WATCH");
	$('.is-thread-watch').find('span.btn_text').text("WATCHED");
	$('.js-forum-watch-thread-btn').click(function() {
		$(this).toggleClass("is-thread-watch");
		if ($(this).hasClass("is-thread-watch")){
			$(this).find('span.btn_text').text("WATCHED");
		}else{
			$(this).find('span.btn_text').text("WATCH");
		}
	});
	$('.js-forum-watch-forum-btn').text("WATCH FORUM");
	$('.is-forum-watch').text("WATCHED FORUM");
	$('.js-forum-watch-forum-btn').click(function() {
		$(this).toggleClass("is-forum-watch");
		if ($(this).hasClass("is-forum-watch")){
			$(this).text("WATCHED FORUM");
		}else{
			$(this).text("WATCH FORUM");
		}
	});
	$('.js-forum-delete-post-btn').click(function() {
		var postStatusLine = $(this).parent();
		var postLine = postStatusLine.next();
		postLine.remove();
		postStatusLine.remove();
	});
	$('.js-cancel-to-prev-page, .js-history-back').click(function() {
		window.history.back(-1);
	});

	$(".box--forum-page__watch tr, .box--forum-page__editable tr").mouseenter(function() {
		$(this).addClass("is-hovered-forum-row");
	}).mouseleave(function() {
		$(this).removeClass("is-hovered-forum-row");
	});
	
	$(".js-forum-remove-hovered-row").click(function() {
		var tblObj = $(this).parents("table")
		$(this).parents("tr").remove();
		if ($("tr", tblObj).length < 2){
			var filterObj = tblObj.prev();
			filterObj.remove();
			tblObj.remove();
		}
		if ($(".listing-tbl").length < 1){
			$(".forum-watch-empty").show();
			$(".js-forum-remove-selected-rows").hide();
		}
	});
	$(".js-forum-remove-selected-rows").click(function() {
		$(".is-checked").each(function() {
			var trRow = $(this).parents("tr");
			$(".js-forum-remove-hovered-row", trRow).trigger("click");
        });
	});
	$(".js-forum-admin-lock-cat").click(function() {
		$(this).toggleClass("is-forum-lock-by-admin");
		var trObj = $(this).parents("tr");
		var titleCell = $("td:eq(1)", trObj);
		if ($(".is-private-forum", trObj).length > 0){
			var titleHTML = $(".is-private-forum", trObj).html();
		}else{
			var titleHTML = titleCell.html();	
		}
		if ($(this).hasClass("is-forum-lock-by-admin")){
			titleCell.html("<div class='is-private-forum'>"+ titleHTML + "</div>");
		}else{
			titleCell.html(titleHTML);
		}
	});
	$(".js-forum-admin-lock-thread").click(function() {
		$(this).toggleClass("is-forum-lock-by-admin");
		var trObj = $(this).parents("tr");
		
		if ($(this).hasClass("is-forum-lock-by-admin")){
			$(".forum-list-link", trObj).addClass("is-private-thread");
		}else{
			$(".forum-list-link", trObj).removeClass("is-private-thread");
		}

	});
	$(".js-forum-admin-lock-selected-thread").click(function() {
		$(this).toggleClass("is-forum-lock-by-admin");
		if ($(this).hasClass("is-forum-lock-by-admin")){
			$(".is-checked").each(function() {
				var trRow = $(this).parents("tr");
				if ($(".is-private-thread", trRow).length<1){
					$(".js-forum-admin-lock-thread", trRow).trigger("click");
				}
			});
		}else{
			$(".is-checked").each(function() {
				var trRow = $(this).parents("tr");
				if ($(".is-private-thread", trRow).length>0){
					$(".js-forum-admin-lock-thread", trRow).trigger("click");
				}
			});
		}
	});
	$(".js-forum-admin-lock-selected-forum").click(function() {
		$(this).toggleClass("is-forum-lock-by-admin");
		if ($(this).hasClass("is-forum-lock-by-admin")){
			$(".is-checked").each(function() {
				var trRow = $(this).parents("tr");
				if ($(".is-private-forum", trRow).length<1){
					$(".js-forum-admin-lock-cat", trRow).trigger("click");
				}
			});
		}else{
			$(".is-checked").each(function() {
				var trRow = $(this).parents("tr");
				if ($(".is-private-forum", trRow).length>0){
					$(".js-forum-admin-lock-cat", trRow).trigger("click");
				}
			});
		}
	});
	
	$(".js-show-forum-error-popup").click(function() {
		showPopup('.popup--forum-error');
	});

	$(".js-admin-config-cat-forum").click(function() {
		if(($('.forum-thread-post-row__title').val() == "") || ($('.forum-thread-post-row__message').val() == "")){
			$('.forum-validation-error').show();
			if( $('.forum-thread-post-row__title').val() == ""){
				$('.forum-thread-post-row__title').addClass("forum-thread-post-row__title--error");
			}else{
				$('.forum-thread-post-row__title').removeClass("forum-thread-post-row__title--error");
			}
			if( $('.forum-thread-post-row__message').val() == ""){
				$('.forum-thread-post-row__message').addClass("forum-thread-post-row__message--error");
			}else{
				$('.forum-thread-post-row__message').removeClass("forum-thread-post-row__message--error");
			}
		}else{
			$('.forum-validation-error').hide();
			$('.forum-thread-post-row__title').removeClass("forum-thread-post-row__title--error");
			$('.forum-thread-post-row__message').removeClass("forum-thread-post-row__message--error");
			window.history.back(-1);
		}
	});
	$(".js-forum-new-thread").click(function() {
		if(($('.forum-thread-post-row__title').val() == "") || ($('.forum-thread-post-row__message').val() == "")){
			$('.forum-validation-error').show();
			if( $('.forum-thread-post-row__title').val() == ""){
				$('.forum-thread-post-row__title').addClass("forum-thread-post-row__title--error");
			}else{
				$('.forum-thread-post-row__title').removeClass("forum-thread-post-row__title--error");
			}
			if( $('.forum-thread-post-row__message').val() == ""){
				$('.forum-thread-post-row__message').addClass("forum-thread-post-row__message--error");
			}else{
				$('.forum-thread-post-row__message').removeClass("forum-thread-post-row__message--error");
			}
		}else{
			window.location = "forums-new-thread-post.html";
		}
	});
	$(".js-forum-post").click(function() {
		if(($('.forum-thread-post-row__title').val() == "") || ($('.forum-thread-post-row__message').val() == "")){
			$('.forum-validation-error').show();
			if( $('.forum-thread-post-row__title').val() == ""){
				$('.forum-thread-post-row__title').addClass("forum-thread-post-row__title--error");
			}else{
				$('.forum-thread-post-row__title').removeClass("forum-thread-post-row__title--error");
			}
			if( $('.forum-thread-post-row__message').val() == ""){
				$('.forum-thread-post-row__message').addClass("forum-thread-post-row__message--error");
			}else{
				$('.forum-thread-post-row__message').removeClass("forum-thread-post-row__message--error");
			}
		}else{
			window.location = "forums-thread.html";
		}
	});
	$(".js-forum-admin-new-thread").click(function() {
		if(($('.forum-thread-post-row__title').val() == "") || ($('.forum-thread-post-row__message').val() == "")){
			$('.forum-validation-error').show();
			if( $('.forum-thread-post-row__title').val() == ""){
				$('.forum-thread-post-row__title').addClass("forum-thread-post-row__title--error");
			}else{
				$('.forum-thread-post-row__title').removeClass("forum-thread-post-row__title--error");
			}
			if( $('.forum-thread-post-row__message').val() == ""){
				$('.forum-thread-post-row__message').addClass("forum-thread-post-row__message--error");
			}else{
				$('.forum-thread-post-row__message').removeClass("forum-thread-post-row__message--error");
			}
		}else{
			$('.forum-thread-post-row__title').removeClass("forum-thread-post-row__title--error");
			$('.forum-thread-post-row__message').removeClass("forum-thread-post-row__message--error");
			$('.forum-validation-error').hide();
		}
	});
	$(".js-forum-admin-post").click(function() {
		if(($('.forum-thread-post-row__title').val() == "") || ($('.forum-thread-post-row__message').val() == "")){
			$('.forum-validation-error').show();
			if( $('.forum-thread-post-row__title').val() == ""){
				$('.forum-thread-post-row__title').addClass("forum-thread-post-row__title--error");
			}else{
				$('.forum-thread-post-row__title').removeClass("forum-thread-post-row__title--error");
			}
			if( $('.forum-thread-post-row__message').val() == ""){
				$('.forum-thread-post-row__message').addClass("forum-thread-post-row__message--error");
			}else{
				$('.forum-thread-post-row__message').removeClass("forum-thread-post-row__message--error");
			}
		}else{
			window.location = "forums-admin-thread.html";
		}
	});
	/*End Forum Pages*/
	
	/*Start Wiki Pages*/
	$('.js-wiki-details-tab').click(function() {
		$('.js-wiki-details-tab').removeClass('is-tab-selected');
		$(this).addClass('is-tab-selected');
		var text = $(this).text();
		text = text.toLowerCase();
		$(".wiki-details-subpanel, .box--wiki-details .box__title strong").addClass('is-hidden');
		$(".js-wiki-details-" + text + ", .box--wiki-details .box__title .breadcrumb-" + text).removeClass('is-hidden');
	});
	$('.js-go-default-tab').click(function() {
		$('.js-wiki-details-tab').removeClass('is-tab-selected');
		$('.js-wiki-details-tab:eq(0)').addClass('is-tab-selected');
		$(".wiki-details-subpanel, .box--wiki-details .box__title strong").addClass('is-hidden');
		$(".wiki-details-subpanel:eq(0), .box--wiki-details .box__title strong:eq(0)").removeClass('is-hidden');
	});
	
	$('.js-wiki-publish').bind('click', function(){
		var titleVal = $(".wiki-create-block--title").val();
		if (titleVal && ( titleVal!="" ) && ( titleVal!="Enter Wiki Page Title" )){
			showPopup('.popup--wiki-publish-success');
		}else{
			showPopup('.popup--wiki-publish-error');
		}
	});
	$('.js-history-back').bind('click', function(){
		window.history.back(-1);
	});	
	var wikiSearchText = ['Lorem Ipsum', 'Lorem Ipsum Dolor', 'Lorem Ipsum Dolor Sit', 'Lorem Ipsum Dolor Sit Amet', 'Lorem Ipsum Dolor Sit Amet Con'];
	$('.search-wiki .search-text').val('Поиск...');
	
	$('.search-wiki .search-text').keypress(function (e) {
		  if (e.which == 13) {
			window.location.href = $('.search-wiki a').attr('href');
		  }
	});
	
	
	function onWikiSearchUpdate() {
		var val = $('.search-wiki input').val();
		var list = $('.search-wiki ul');
		list.html('');
		var targetUrl = $('.search-wiki .icon-wiki-search').attr("href");
		
		if (val && val.length > 0) {
			$('.search-wiki').addClass('show-tips');
			var reg = new RegExp(val, 'i');
			var list = $('.search-wiki ul');
			list.html('');
			for (var i = 0; i < wikiSearchText.length; i++) {
				var key = wikiSearchText[i];
				var result = reg.exec(key);
				
				if (result) {
					var found = result[0];
					var index = result['index'];
					var source = result['input'];
					
					var len1 = found.length;
					source = '<li class="search-wiki-item"><a href="javascript:;" class="filter-reslut">' + source.substring(0, index) + '<strong>' + found + '</strong>' + source.substring(index + len1) + '</a></li>';
					list.append(source);
				}
				
			}
			if (list.find('li').length > 0) {
				list.append('<li class="more-wrapper"><a href="' + targetUrl + '" class="more-filter-result">See more results for '+ '<strong>' + found + '</strong>' +'</a></li>');
				list.show();
			} else {
				list.hide();
			}
		} else {
			$('.search-wiki').removeClass('show-tips');
			list.hide();
		}
	}
	$('.search-wiki').each(function() {
		$(this).find('input').keyup(function() {
			onWikiSearchUpdate();
			
		}).blur(function() {
			window.setTimeout(function() {
				$('.search-wiki ul').hide();
			}, 200);
		}).focus(function() {
			var val = $('.search-wiki input').val();
			if (val && val.length > 0) {
				$('.search-wiki').addClass('show-tips');
				$('.search-wiki ul').show();
			}
		});
	});
	$('.search-wiki').delegate('li.search-wiki-item a', 'click', function() {
		$('.search-wiki input').val($(this).text());
	});
	
	$('.js-wiki-pagination__prev').click(function() {
		if ((!$(this).hasClass("is-disable-prev")) && ($('.wiki-pagination__page').length > 1)){
			var prevItem = $('.wiki-pagination .is-current').prev(".wiki-pagination__page");
			$('.wiki-pagination__page').removeClass("is-current");
			prevItem.addClass("is-current");
			$('.wiki-pagination__next').removeClass("is-disable-next");
			var currentIdx = parseInt(prevItem.text(), 10);
			if (currentIdx == 1){
				$('.wiki-pagination__prev').addClass("is-disable-prev");
			}
		}
	});
	$('.js-wiki-pagination__next').click(function() {
		if ((!$(this).hasClass("is-disable-next")) && ($('.wiki-pagination__page').length > 1)){
			var nextItem = $('.wiki-pagination .is-current').next(".wiki-pagination__page");
			$('.wiki-pagination__page').removeClass("is-current");
			nextItem.addClass("is-current");
			$('.wiki-pagination__prev').removeClass("is-disable-prev");
			var currentIdx = parseInt(nextItem.text(), 10);
			var totalIdx =  parseInt($('.wiki-pagination__page').length, 10);

			if (currentIdx == totalIdx ){
				$('.wiki-pagination__next').addClass("is-disable-next");
			}
		}
	});
	
	$('.wiki-pagination__page').click(function() {
		if ((!$(this).hasClass("is-current")) && ($('.wiki-pagination__page').length > 1)){
			$('.wiki-pagination__page').removeClass("is-current");
			$(this).addClass("is-current");
			$('.wiki-pagination__next').removeClass("is-disable-next");
			$('.wiki-pagination__prev').removeClass("is-disable-prev");
			var currentIdx = parseInt($(this).text(), 10);
			var totalIdx =  parseInt($('.wiki-pagination__page').length, 10);
			if (currentIdx == 1){
				$('.wiki-pagination__prev').addClass("is-disable-prev");
			}
			if (currentIdx == totalIdx ){
				$('.wiki-pagination__next').addClass("is-disable-next");
			}
		}
	});
	$('.js-toggle-favorite').click(function() {
		$(this).toggleClass("is-favorite");
	});
	$('.wiki-details-attachments__list').delegate('.js-remove-attachment', 'click', function() {
		$(this).parent().remove();
		if ($('.js-remove-attachment').length < 1){
			$('.wiki-details-attachments__btn-container').hide();
		}
	});
	
	/* File Uploader */	
	if ($.browser.mozilla){
		var ver = jQuery.browser.version;
		var firstIndex = ver.indexOf('.');
		window.ffVerNum = parseInt(ver.substring(0, (firstIndex)), 10);
		if (window.ffVerNum < 2){
			$('.box--attach-item').addClass('box--attach-item__ff-fix');
			$('.box--attach-item').append('<span></span>');
		}
	}
	
	window.newAttachmentLine = $('.box--attach-list').html();
	$('.js-attach-more-files').click(function(){
		$(".box--attach-list").append(window.newAttachmentLine);
		$('.attachment-upload').css('opacity', 0);
	});
	$('.attachment-upload').css('opacity', 0);
	window.ffVerNum = 100;
	$('.box--attach-list').delegate('.js-choose-file', 'click', function() {
		var fileUploaderWrapper = $(this).parent();
		$('.attachment-upload', fileUploaderWrapper).trigger('click');
	});
	$('.js-upload-attachments').bind('click', function(){
		if ( $(".is-file-selected").length > 0){
			showPopup('.popup--uploading');
			if (window.uploadingTimer) {
				window.clearTimeout(window.uploadingTimer);
			}
			window.uploadingPercent = 0;	
			uploadingAnimation();
		}else{
			$(".box--attach-filename").html("<span class='error-msg'>Please choose a File to Upload</span");
		}
	});
	$('.js-wiki-permission-type').each(function() {
		var value = $(this).val();
		if (value == "private"){
			$('.wiki-details--access').removeClass("is-hidden");
		}else{
			$('.wiki-details--access').addClass("is-hidden");
		}
		this.onchange = (function() {
			var value = $(this).val();
			if (value == "private"){
				$('.wiki-details--access').removeClass("is-hidden");
			}else{
				$('.wiki-details--access').addClass("is-hidden");
			}
		});
	});
	$('.wiki-details--access-list').delegate('.js-remove-access', 'click', function() {
		$(this).parent().remove();
	});
	$('.js-add-user').click(function() {
		var uName = $(".js-access-user-input").val();
		if ( (uName!= "") && uName){
			$('.wiki-details--access-list').append("<div class='wiki-details--access-account clearfix'><a href='javascript:;' class='float-left'>" + uName + "</a><a href='javascript:;' class='remove-access-icon float-right js-remove-access'></a></div>");
			$(".js-access-user-input").val("");
		}
	});
	if ($('.box--wiki-tags__item').length < 1){
		$('.box--wiki-tags__list').hide();
	}
	$('.box--wiki-tags__list').delegate('.js-remove-tag', 'click', function() {
		$(this).parent().remove();
		if ($('.box--wiki-tags__item').length < 1){
			$('.box--wiki-tags__list').hide();
		}
	});
	
	//BLOG
	var blogSearchText = ['Lorem Ipsum', 'Lorem Ipsum Dolor', 'Lorem Ipsum Dolor Sit', 'Lorem Ipsum Dolor Sit Amet', 'Lorem Ipsum Dolor Sit Amet Con'];
	initPlaceHolder('.blog-search input.search-text', 'Search in blog');
	$('.blog-search .search-text').val('Искать в блоге');
	function onWikiSearchUpdate() {
		var val = $('.blog-search input').val();
		var list = $('.blog-search ul');
		list.html('');
		var targetUrl = $('.blog-search .blog-search__icon').attr("href");
		
		if (val && val.length > 0) {
			$('.blog-search').addClass('show-tips');
			var reg = new RegExp(val, 'i');
			var list = $('.blog-search ul');
			list.html('');
			for (var i = 0; i < blogSearchText.length; i++) {
				var key = blogSearchText[i];
				var result = reg.exec(key);
				
				if (result) {
					var found = result[0];
					var index = result['index'];
					var source = result['input'];
					
					var len1 = found.length;
					source = '<li class="search-blog-item"><a href="javascript:;" class="filter-reslut">' + source.substring(0, index) + '<strong>' + found + '</strong>' + source.substring(index + len1) + '</a></li>';
					list.append(source);
				}
				
			}
			if (list.find('li').length > 0) {
				if (list.find('li').length > 4) {
					list.append('<li class="more-wrapper"><a href="' + targetUrl + '" class="more-filter-result">See more results for '+ '<strong>' + found + '</strong>' +'</a></li>');
				}
				list.show();
			} else {
				list.hide();
			}
		} else {
			$('.blog-search').removeClass('show-tips');
			list.hide();
		}
	}
	$('.blog-search').each(function() {
		$(this).find('input').keyup(function() {
			onWikiSearchUpdate();
			
		}).blur(function() {
			window.setTimeout(function() {
				$('.blog-search ul').hide();
			}, 200);
		}).focus(function() {
			var val = $('.blog-search input').val();
			if (val && val.length > 0) {
				$('.blog-search').addClass('show-tips');
				$('.blog-search ul').show();
			}
		});
	});
	$('.blog-search').delegate('li.search-blog-item a', 'click', function() {
		$('.blog-search input').val($(this).text());
	});
	
	//Top
	$('.js-to-top').live('click',function(){
		$('html,body').animate({scrollTop: '0px'});
	});
	
	//Pagination
	$('.js-pagination a').live('click',function(){
		$parents = $(this).parents('.js-pagination');
		var currentPage = $parents.find('a.active').text();
		$parents.find('.pagination-number__prev').addClass('disable');
		$parents.find('.pagination-number__next').addClass('disable');
		if($(this).hasClass('pagination-number__prev') || $(this).hasClass('pagination-number__next')){
			if($(this).hasClass('pagination-number__prev')){
				if(currentPage>1){
					currentPage--;	
				}	
			}else{
				if(currentPage<3){
					currentPage++;	
				}	
			}
			$parents.find('a').removeClass('active');	
			$parents.find('a:contains("'+currentPage+'")').addClass('active');	
		}else{
			var iNum = $(this).text();
			$parents.find('a').removeClass('active');	
			$parents.find('a:contains("'+iNum+'")').addClass('active');	
			currentPage = $(this).text();
		}
		if(currentPage>1){
			$parents.find('.pagination-number__prev').removeClass('disable');
		}
		if(currentPage<3){
			$parents.find('.pagination-number__next').removeClass('disable');
		}
	});
	
	$('.js-series-pagination a').live('click',function(){
		var currentPage = $('.js-series-pagination a.active:first').text();
		$('.js-series-pagination').find('.pagination-number__prev').addClass('disable');
		$('.js-series-pagination').find('.pagination-number__next').addClass('disable');
		if($(this).hasClass('pagination-number__prev') || $(this).hasClass('pagination-number__next')){
			if($(this).hasClass('pagination-number__prev')){
				if(currentPage>1){
					currentPage--;	
				}	
			}else{
				if(currentPage<3){
					currentPage++;	
				}	
			}
			$('.js-series-pagination a').removeClass('active');	
			$('.js-series-pagination').find('a:contains("'+currentPage+'")').addClass('active');	
		}else{
			var iNum = $(this).text();
			$('.js-series-pagination a').removeClass('active');	
			$('.js-series-pagination').find('a:contains("'+iNum+'")').addClass('active');	
			currentPage = $(this).text();
		}
		if(currentPage>1){
			$('.js-series-pagination').find('.pagination-number__prev').removeClass('disable');
		}
		if(currentPage<3){
			$('.js-series-pagination').find('.pagination-number__next').removeClass('disable');
		}
	});
	
	$('.js-series-select .jqTransformSelectWrapper li a').click(function(){
		$('.js-series-select .jqTransformSelectWrapper>div>span').text($(this).text());
		$('.js-series-select .jqTransformSelectWrapper>ul>li>a').removeClass('selected');
		$('.js-series-select .jqTransformSelectWrapper>ul>li>a:contains("'+$(this).text()+'")').addClass('selected');
	});
	
	//Toggle Button
	$('.js-toggle-button').live('click',function(){
		$('.js-toggle-button').removeClass('is--active');
		$(this).addClass('is--active');
	});
	
	//Advanced Search
	$('.box-blog-article__result').hide();
	$('.js-view').live('click',function(){
		$('.box-blog-article').show();
	});
	
	$('.box__advanced-search .js-reset').live('click',function(){
		$('.box-blog-filter input').val('');
		$('.box-blog-filter #author').addClass('is-default').val('username');
		$(".box__advanced-search div.jqTransformSelectWrapper").each(function() {
			$("div span", this).text($("ul li:first", this).text());
			$("ul li a.selected", this).removeClass("selected");
			$("ul li:first a", this).addClass("selected");
		});
	});
	
	//Watch & Unwatch
	$('.js-watch').live('click',function(){
		$('.js-watch').removeClass('is-hidden');
		$(this).addClass('is-hidden');
	});
	
	$('.js-redirect-link').live('click',function(){
		if($('.blog-details__filter .is-button--watched').is(':hidden')){
			window.location.href = 'Blogs_Article_Page.html';
		}else{
			window.location.href = 'Blogs_Article_Page_Watched.html';	
		}	
	});
	
	//Delete Upload
	$('.js-delete-upload').live('click',function(){
		$(this).parents('tr').remove();
		$('.add-article__attachments tr').removeClass('attachments__row--last');
		$('.add-article__attachments tr:last').addClass('attachments__row--last');	
	});
	
	//Add Upload
	var $attach = $('.add-article__attachments tr:last').clone(true);
	$('.js-attach-file').live('click',function(){
		$('.add-article__attachments tbody').append($attach.clone(true));
		$('.add-article__attachments tr').removeClass('attachments__row--last');
		$('.add-article__attachments tr:last').addClass('attachments__row--last');
	});
	
	//File Upload
	$('.js-choose-file').live('click',function(){
		$(this).parents('tr').find('.js-file').trigger('click');
	});
	
	$('.js-file-upload').live('click',function(){
		if($('.add-article__attachments .is-file-selected').length){
			var i = 0;
			showPopup('.popup--uploading');
			$('.uploading__process_precent').text('0%');
			$('.uploading__progress-bar .uploading__progress').css({
				width: 0	
			})
			CT = setInterval(function(){
				if(i<100){
					i++;
					$('.uploading__process_precent').text(i+'%');
					$('.uploading__progress-bar .uploading__progress').css({
						width: i+'%'
					})
				}
			},100);
			CT1 = setTimeout(function(){
				$('.alpha').hide();
				$('.popup').hide();
				clearInterval(CT);
				clearTimeout(CT1);
			},12000);
		}else{
			$('.add-article__attachments .attachments__file-chosen').addClass('is-error-upload');
			$('.add-article__attachments .attachments__file-chosen').html('Пожалуйста выберите файл.');	
		}
	});
	
	$('.popup--uploading .close-btn').live('click',function(){
		clearInterval(CT);
		clearTimeout(CT1);
	});
	
	//Submit
	$('.js-is-submit').live('click',function(){
		var flag = true;
		$('.section--error').hide();
		$('.is-require').each(function(){
			if($(this).is('textarea')){
				$(this).parents('.add-article__CKEdit').removeClass('is-error-field');	
				if(!$(this).val() || $(this).val()== '(Article Text Here)'){
					$(this).parents('.add-article__CKEdit').addClass('is-error-field');	
					flag = false;
				}
			}else if($(this).is('input')){
				if(!$(this).is(':hidden')){
					$(this).removeClass('is-error-field');	
					if(!$(this).val()){
						$(this).addClass('is-error-field');	
						flag = false;
					}else{
						if($(this).attr('id') == 'article-verification'){
							if($(this).val().toLowerCase() != 'as9123'){
								$(this).addClass('is-error-field');	
								$(this).parents('.add-article__row').find('.is-error-infor').show();
								flag = false;	
							}
						}	
					}
				}
			}else{
				$(this).parents('.jqTransformSelectWrapper').removeClass('is-error-select');
				if($(this).val() == 'Select'){
					$(this).parents('.jqTransformSelectWrapper').addClass('is-error-select');
					flag = false;
				}
			}
		});	
		if(!flag){
			$('.section--error').show();
		}else{
			var $href = $(this).attr('rel');
			window.location.href = $href;
		}
	});
	
	$('.add-article__CKEdit .add-article__textarea').live('focus',function(){
		$(this).parents('.add-article__CKEdit').removeClass('is-error-field');
		if($(this).val() == '(Article Text Here)' || $(this).val() == ''){
			$(this).val('');
			$(this).removeClass('is-default');
		}
	});
	
	$('.add-article__CKEdit .add-article__textarea').live('blur',function(){
		if(!$(this).val()){
			$(this).val('(Article Text Here)');
			$(this).addClass('is-default');
		}
	});
	
	//Remove Draft Blog
	$('.blog-draft__container .js-remove').live('click',function(){
		$(this).parents('li').remove();
		$('.blog-draft__container li').removeClass('blog-draft__row-last');
		$('.blog-draft__container li:last').addClass('blog-draft__row-last');	
	});
	
	//Remove My Watch
	$('.article-list .js-remove').live('click',function(){
		var $parents = $(this).parents('.article-list');
		var $grandParents = $(this).parents('.my-watcher');
		$(this).parents('tr').remove();
		if(!$parents.find('tbody tr').length){
			$parents.remove();
		}
		if(!$grandParents.find('.article-list').length){
			window.location.href = 'Blogs_My_Watches_Nofound.html';
		}
	});
	
	$('.my-watcher .js-remove-select').live('click',function(){
		$('.my-watcher input').not('.js-check-all').each(function(){
			if($(this).attr('checked')){
				$(this).parents('tr').remove();	
			}
		});
		/*$('.article-list').each(function(){
			if(!$(this).find('tbody tr').length){
				$(this).remove();	
			}
		});*/
		if(!$('.article-list tbody tr').length && !$('.button--display-pipeline').length){
			window.location.href = 'Blogs_My_Watches_Nofound.html';	
		}
	});
	
	//My Watch Check All
	$('.article-list .js-check-all').live('click',function(){
		var $parents = $(this).parents('.article-list');
		if($(this).attr('checked')){
			$parents.find('td input').attr('checked',false);
			$parents.find('td .jqTransformCheckbox').removeClass('jqTransformChecked');
		}else{
			$parents.find('td input').attr('checked',true);
			$parents.find('td .jqTransformCheckbox').addClass('jqTransformChecked');
		}
	});
	
	$('.article-list td input').live('click',function(){
		var flag = true;
		var $parents = $(this).parents('.article-list');
		if($(this).attr('checked')){
			$parents.find('.js-check-all').attr('checked',false);
			$parents.find('th .jqTransformCheckbox').removeClass('jqTransformChecked');
		}else{
			$parents.find('td input').not($(this)).each(function(){
				if(!$(this).attr('checked')){
					flag = false;
				}
			});
			if(flag){
				$parents.find('.js-check-all').attr('checked',true);
				$parents.find('th .jqTransformCheckbox').addClass('jqTransformChecked');
			}
		}
	});
	
	//TAG

	var articleSearchText = ['Lorem Ipsum', 'Lorem Ipsum Dolor', 'Lorem Ipsum Dolor Sit', 'Lorem Ipsum Dolor Sit Amet', 'Lorem Ipsum Dolor Sit Amet Con'];
	function onTagSearchUpdate(input) {

		var val = $(input).val();
		var list = $(input).parents('.box--wiki-tags__form').find('ul');
		list.html('');

		if (val && val.length > 0) {
			$(input).parents('.box--wiki-tags__form').addClass('show-tips');
			var reg = new RegExp(val, 'i');
			var list = $(input).parents('.box--wiki-tags__form').find('ul');
			list.html('');

			for (var i = 0; i < articleSearchText.length; i++) {
				var key = articleSearchText[i];
				var result = reg.exec(key);
				if (result) {
					var found = result[0];
					var index = result['index'];
					var source = result['input'];
					
					var len1 = found.length;
					if(i==0){
						source = '<li class="tag-item firstItem"><a href="javascript:;" class="filter-reslut">' + source.substring(0, index) + '<span class="match">' + found + '</span>' + source.substring(index + len1) + '</a>'+'</li>';
					} else {
						source = '<li class="tag-item"><a href="javascript:;" class="filter-reslut">' + source.substring(0, index) + '<span class="match">' + found + '</span>' + source.substring(index + len1) + '</a>'+'</li>';
					}					
					list.append(source);
				}
				
			}
			if (list.find('li').length > 0){
				list.show();
			} else {
				list.hide();
			}
		} else {
			$(input).parents('.box--wiki-tags__form').removeClass('show-tips');
			list.hide();
		}
	}
	
	$('#article-tag').keyup(function(event) {
		if (event.keyCode != 32) {
			onTagSearchUpdate($(this));
		}
	}).blur(function() {
		window.setTimeout(function() {
			$(this).parents('.add-article__row').find('ul').hide();
		}, 200);
	}).focus(function() {
		var val = $(this).val();
		if (val && val.length > 0) {
			$(this).parents('.add-article__row').addClass('show-tips');
			$(this).parents('.add-article__row').find('ul').show();
		}
	});

	$('.add-article__row').delegate('li.tag-item', 'mousedown', function(event) {
		var tag = '<span class="post-tag">'+$(this).text().split("¡Á")[0]+'<span class="delete-tag" title="remove this tag"></span></span>'
		$('#article-tag').before(tag);
		$('#article-tag').val('');
		$(this).parents('.add-article__row').find('ul').hide();
	});
	$('#article-tag').keypress(function(event) {
		if (event.keyCode == 32) {
			event.preventDefault();
			var val = $(this).val();
			if(val){
				var tag = '<span class="post-tag">'+val.split("¡Á")[0]+'<span class="delete-tag" title="remove this tag"></span></span>'
				$('#article-tag').before(tag);
				$('#article-tag').val('');
			}
			$(this).parents('.add-article__row').find('ul').hide();
		}
	});
	$('#article-tag').blur(function() {
		var val = $(this).val();
		if(val){
			var tag = '<span class="post-tag">'+val.split("¡Á")[0]+'<span class="delete-tag" title="remove this tag"></span></span>'
			$('#article-tag').before(tag);
			$('#article-tag').val('');
		}
		$(this).parents('.add-article__row').find('ul').hide();
	});
	$('.tag-editor .delete-tag').live('click',function(){
		$(this).parent().remove();	
	});
	
	$('.add-article__input').live('focus',function(){
		$(this).removeClass('is-error-field');
		$(this).addClass('add-article__input-hover');
		if($(this).is('#article-verification')){
			$('.is-error-infor').hide();
		}
		if(!$('.is-error-field').length && !$('.is-error-select').length){
			$('.section--error').hide();
		}
	});
	
	$('.add-article__input').live('blur',function(){
		$(this).removeClass('add-article__input-hover');	
	});
	
	$('.select-wrapper').live('click',function(){
		$(this).find('.jqTransformSelectWrapper').removeClass('is-error-select');
		if(!$('.is-error-field').length && !$('.is-error-select').length){
			$('.section--error').hide();
		}
	});
	
	$('.l-admin-add-blog .js-reset').live('click',function(){
		$('.section--error').hide();
		$('.add-article input').removeClass('is-error-field').val('');
		$('.add-article textarea').val('').parents('.add-article__CKEdit').removeClass('is-error-field');
		$(".add-article div.jqTransformSelectWrapper").each(function(){
			$("div span", this).text($("ul li:first", this).text());
			$("ul li a.selected", this).removeClass("selected");
			$("ul li:first a", this).addClass("selected");
			$(this).removeClass('is-error-select');
		});
		var trNum = $('.attachments__container tbody tr').length;
		$('.attachments__container tbody').empty();
		for(i=0;i<trNum;i++){
			$('.attachments__container tbody').append('<tr><td><span class="attachments__file-chosen">No file chosen</span></td><td><span></span></td><td><input type="file" class="js-file" onchange="getFile(this)" /><a class="button button--choose-file js-choose-file" href="javascript:;">CHOOSE FILE</a></td></tr>');
		}
		$('.attachments__container tbody tr:last').addClass('attachments__row--last');
	});
	
	//Error Popup
	if($('.popup--error').length){
		showPopup('.popup--error');
	}
	$('.popup--error .js-close-popup').live('click',function(){
		$('.alpha').hide();
		$('.popup').hide();	
	});
	
	//Default
	$('#author').live('focus',function(){
		if($(this).hasClass('is-default')){
			$(this).val('');
			$(this).removeClass('is-default');	
		}
	});
	
	$('#author').live('blur',function(){
		if(!$(this).val()){
			$(this).val('username');
			$(this).addClass('is-default');	
		}
	});
	
	//My Post
	$('.blog-details__filter div.jqTransformSelectWrapper li a').click(function(){
		if($(this).text() == 'My Posts' && !$('.box--blog-admin').length){
			window.location.href = 'Blogs_Personal_Blog.html';	
		}
		return false;
	});
	
	$('.blog-details__pagination .pagination-total .jqTransformSelectWrapper').css('z-index','1');

	$('.js-tag-input').keyup(function(event) {
		if (event.keyCode != 32) {
			onTagSearchUpdate($(this));
		}
	}).blur(function() {
		window.setTimeout(function() {
			$(this).parents('.box--wiki-tags__form').find('ul').hide();
		}, 200);
	}).focus(function() {
		var val = $(this).val();
		if (val && val.length > 0) {
			$(this).parents('.box--wiki-tags__form').addClass('show-tips');
			$(this).parents('.box--wiki-tags__form').find('ul').show();
		}
	});

	$('.box--wiki-tags__form').delegate('li.tag-item', 'mousedown', function(event) {		
		addTag($(this).text().split("¡Á")[0]);
		$(this).parents('.box--wiki-tags__form').find('ul').hide();
	});
	$('.js-tag-input').keypress(function(event) {
		if (event.keyCode == 32) {
			event.preventDefault();
			var val = $(this).val();
			if(val){
				addTag(val);
			}
			$(this).parents('.box--wiki-tags__form').find('ul').hide();
		}
	});
	$('.js-tag-input').blur(function() {
		var val = $(this).val();
		if(val){
			addTag(val);
		}
		$(this).parents('.box--wiki-tags__form').find('ul').hide();
	});
	
	$('.js-add-tag').click(function() {
		addTag($(".js-tag-input").val());
	});
	$('.js-check-public').click(function() {
		$(".wiki-details--access").toggleClass("is-hidden");
	});
	$('.box--wiki-publish-functions .chkbox-holder label').click(function() {
		$(this).prev().trigger("click");
	});
	$('.js-wiki-publish-success, .js-wiki-publish-error').bind('click', function() {
		$('.alpha').css('display', 'none');
		$(this).parents('.popup').css('display', 'none');
	});
	$('.js-wiki-print').bind('click', function() {
		if ($(this).hasClass("is-admin")){
			window.open ("wiki-admin-print.html","Print","menubar=0,resizable=1,width=900,height=500,scrollbars=1");
		}else{
			window.open ("wiki-print-logged-in.html","Print","menubar=0,resizable=1,width=900,height=500,scrollbars=1");
		}
	});
	$('.js-wiki-admin-remove-all-btn').click(function() {
		$(".js-check-pending-wiki").each(function() {
			if ($(this).hasClass("is-checked")) {
				$(this).parent().remove();
			}
		});
	});
	$('.js-wiki-admin-remove-link').click(function() {
		$(this).parent().remove();
	});
	/*End Wiki Pages*/

});

function addTag(tagName){
	if ( (tagName!= "") && (tagName!= "Tag Keyword") && tagName){
		$('.box--wiki-tags__list').append("<div class='box--wiki-tags__item clearfix'><p class='float-left'>" + tagName + "</p><a href='javascript:;' class='remove-tag-icon js-remove-tag float-right'></a></div>");
		$(".js-tag-input").val("");
		$('.box--wiki-tags__form .error-msg').hide();
		$('.box--wiki-tags__list').show();
	}else {
		$('.box--wiki-tags__form .error-msg').show();
	}
}

/*Start Wiki Pages*/
function uploadingAnimation(){
	if (window.uploadingPercent == undefined){
		window.uploadingPercent = 0;	
	}
	updatedUploadingProgress(window.uploadingPercent);	
	if (window.uploadingPercent <=1){
		window.uploadingPercent +=.01;
		window.uploadingTimer = window.setTimeout('uploadingAnimation()', 40)
	}else{
		window.clearTimeout(window.uploadingPercent);
		updateAttachmentList();
		updateForumAttachmentList();
	}	
}
//Updated Loading Progress Percentage Number
function updatedUploadingProgress(percentNum){
	var pNUm = Math.round(percentNum*100);
	$('.uploading__progress-cover span').text(pNUm);
	$('.uploading__progress-number span').text(pNUm);
	$('.uploading__progress').css("width", pNUm + "%");
}
function updateAttachmentList(){
	for (var i = 0; i < $(".box--attach-filename").length; i++) {
		var fileNameObj = $(".box--attach-filename:eq(" +i + ")");
		if (fileNameObj.parent().hasClass("is-file-selected")){
			html = "<div class='wiki-details-attachments__item clearfix'><p class='wiki-details-attachments__filename float-left'><a href='javascript:;'>" + fileNameObj.text() + "</a></p><img width='29' height='27' class='float-left' alt='' src='i/feed-photo.png'><p class='wiki-details-attachments__time float-right'>Created By: <a href='javascript:;'>Username</a> <span>on Fri, Dec 21 2010 at 6:44 PM EST</span></p><a href='javascript:;' class='wiki-details-attachments__remove js-remove-attachment'></a></div>";
			$(".wiki-details-attachments__list").append(html);
			$(".wiki-details-attachments__btn-container").show();
		}
	}
	$(".box--attach-list").html(window.newAttachmentLine);
	$('.attachment-upload').css('opacity', 0);
	$('.alpha').css('display', 'none');
	$('.popup--uploading').css('display', 'none');
}
function uploadFileTrigger(obj) {
	var fileUploaderWrapper = $(obj).parent();
	var url = $(obj).val();
	var lastIndex = url.lastIndexOf('\\');
	var fileName = url.substring(lastIndex + 1);
	
	var lastIndex = url.lastIndexOf('/');
	var name2 = url.substring(lastIndex + 1);
	if (fileName.length > name2.length) {
		fileName = name2;
	}
	var fileNameLength = name2.length;
	$('.box--attach-filename', fileUploaderWrapper).html(fileName);
	fileUploaderWrapper.addClass("is-file-selected");
}
function getFile(obj){
	var fileSize = 0;
	 //for IE
	if ($.browser.msie){
		var objFSO = new ActiveXObject("Scripting.FileSystemObject"); 
		var filePath = $(obj).val();
		var objFile = objFSO.getFile(filePath);
		fileSize = objFile.size;
	}else{
		fileSize = obj.files[0].size;
	}
	if(fileSize/1024/1024<1){
		fileSize = parseInt(fileSize/1024)+1 + ' KB'	
	}else if(fileSize/1024/1024>1){
		fileSize = parseInt(fileSize/1024/1024)+1 + ' MB'		
	}else{
		fileSize = parseInt(fileSize) + ' B'	
	}
	var fileUploaderWrapper = $(obj).parents('tr');
	var url = $(obj).val();
	var lastIndex = url.lastIndexOf('\\');
	var fileName = url.substring(lastIndex + 1);
	
	var lastIndex = url.lastIndexOf('/');
	var name2 = url.substring(lastIndex + 1);
	if (fileName.length > name2.length) {
		fileName = name2;
	}
	var fileNameLength = name2.length;
	$('td:first', fileUploaderWrapper).html('<a href="javascript:;">'+fileName+'</a>');
	$('td span', fileUploaderWrapper).html('Size ' +fileSize);
	$('td:last', fileUploaderWrapper).html('<a class="button button--delete js-delete-upload" href="javascript:;">DELETE</a>');
	fileUploaderWrapper.addClass("is-file-selected");
}
/*End Wiki Pages*/
function uploadForumFileTrigger(obj) {
	var fileUploaderWrapper = $(obj).parent();
	var url = $(obj).val();
	var lastIndex = url.lastIndexOf('\\');
	var fileName = url.substring(lastIndex + 1);
	
	var lastIndex = url.lastIndexOf('/');
	var name2 = url.substring(lastIndex + 1);
	if (fileName.length > name2.length) {
		fileName = name2;
	}
	
	if (jQuery.browser.msie){
		fileSize = 987;
	}else{
		var fileSize = $(obj)[0].files[0].size;	
		fileSize = parseInt (fileSize / 1024) + 1;
	}


	var fileNameLength = name2.length;
	$('.box--forum-thread__attachment-filename', fileUploaderWrapper).html("<label class='forum-selected-filename float-left'>" + fileName + "</label><label class='forum-selected-filesize float-left'>Size " + fileSize + " KB</label>");
	fileUploaderWrapper.addClass("is-file-selected");
}
function updateForumAttachmentList(){
	for (var i = 0; i < $(".forum-selected-filename").length; i++) {
		var fileNameObj = $(".forum-selected-filename:eq(" +i + ")");
		fileNameObj.parent().prepend("<label class='forum-uploaded-filename float-left'><a href='javascript:;'>" + fileNameObj.text() +"</a></label");
		fileNameObj.parent().parent().addClass("is-forum-file-uploaded").removeClass("is-file-selected");
	}
	$(".forum-selected-filename").remove();
	$('.alpha').css('display', 'none');
	$('.popup--uploading-forum-attachment').css('display', 'none');
}
function highlightMe() {
	
	$('.is-me').each(function() {
		var td = $(this).find('td:first');
		td.append('<div class="is-me-rect__b1 is-me-rect"></div><div class="is-me-rect__b2 is-me-rect"></div><div class="is-me-rect__b3 is-me-rect"></div><div class="is-me-rect__b4 is-me-rect"></div>');
		
		td.css({
			position: 'relative'
		});
		var h = td.outerHeight();
		td.find('.is-me-rect__b1, .is-me-rect__b4').css({
			minHeight: h
		});
		
		if (h < 60) {
			td.find('.is-me-rect__b4').css({
				backgroundColor: '#8cb058'
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


function updateFilterBadge() {
	var badge = $('.filter-badge');
	if (badge.length > 0) {
		for (var i = 0; i < badge.length; i += 2) {
			var left = badge.eq(i);
			if (i == badge.length - 1) {
				continue;
			}
			var right = badge.eq(i + 1);
			var h1 = left.outerHeight();
			var h2 = right.outerHeight();
			var total = Math.max(h1, h2);
			
			if (left.hasClass('filter-badge--long')) {
				h1 = total - 11;
			} else {
				h1 = total - 20;
			}
			if (right.hasClass('filter-badge--long')) {
				h2 = total - 11;
			} else {
				h2 = total - 20;
			}
			
			left.height(h1);
			right.height(h2);
		}
	}
}
glLoadMore = null;
function onScrollLoading() {
			
	var loadmore = $('.load-more:visible');
	if (loadmore.length < 1) {
		return;
	}
	glLoadMore = loadmore;
	var callee = arguments.callee;
	if ($(window).scrollTop() + $(window).height() >= $('.load-more:visible').offset().top && !isLoading) {
		isLoading = true;
		// replace your code here and remember to set 'isLoading' to false when content has been loaded and no more items to load
		var i = 0;
		var int = setInterval(function() {
			if (i > 2) {
				clearInterval(int);
				if (isNoMore) {	// no more items
					var prev = $('.load-more:visible').prev();
					while (prev.css('display') == 'none' || prev.hasClass('feed-comment')) {
						prev = prev.prev();
					}
					prev.addClass('last-item');
					
					var loadMoreLink = $('.load-more:visible');
					var previous = loadMoreLink.siblings('.js-item-load-more');
					var len = previous.length;
					previous.eq(len - 1).addClass('is-last-1');
					previous.eq(len - 2).addClass('is-last-2');
					$('.load-more:visible').remove();
					$(window).unbind('scroll', callee);
				} else {	// append six more items
					var loadMoreLink = $('.load-more:visible');
					var previous = loadMoreLink.siblings('.js-item-load-more');
					if (previous.length > 0) {
						previous.each(function() {
							
							
							
							var more = $(this).clone().removeClass('is-me').addClass('is-clone');
							
							if(more){
								more.find('.is-me-rect').remove();
								more.insertBefore(loadMoreLink);
							}
						});
					} else {
						for (var j = 0; j < 6; j++) {
							var prevs = [];
							var prev = $('.load-more:visible').prev();
							while (prev.css('display') == 'none' || prev.hasClass('feed-comment')) {
								if (prev.hasClass('feed-comment') && j > 0) {
									prev.addClass('is-hidden');
								}
								prevs.push(prev);
								prev = prev.prev();
							}
							var content = prev.clone().removeClass('is-me').addClass('is-clone');
							content.find('.is-me-rect').remove();
							content.find('.active').removeClass('active');
							$('.load-more:visible').before(content);
							for (var k = 0; k < prevs.length; k++) {
								$('.load-more:visible').before(prevs[k].clone());
							}
						}
					}
					isNoMore = true;
				}
				isLoading = false;
				var body = $('body');
				$('.alpha').width(body.width()).height(body.height());
			} else {	// simple loading status indication
				var m = i % 3;
				var dots = '';
				for (var j = 0; j < m; j++) {
					dots += '.';
				}
				if ($('.load-more:visible').find('td').length > 0) {
					$('.load-more:visible').find('td').text('Загрузить ещё.' + dots);
				} else {
					$('.load-more:visible').html('Загрузить ещё.' + dots);
				}
				i++;
			}
		}, 500);
	}
}

/* handle the scroll loading. */
function handleBinding(e) {
	e.stopImmediatePropagation();
	e.stopPropagation();
	var pos_start = $(this).offset().top;
	var pos_end = $(this).outerHeight(false) + pos_start;
	
	var child = $(this).find('.js-msg-load-more');
	child.removeAttr('stoploading');
	var loading = child.attr('isloading');
	var pos = child.offset();
	var top = pos.top;
	
	/* handle the scroll loading. */
	function handleLoading() {
		var ticks = child.data('ticks');
		var stoploading = child.attr('stoploading');
		if (stoploading == 'true') {
			child.removeAttr('isloading');
			child.show();
			return;
		}
		if (ticks == 3) {
			child.removeAttr('isloading');
			var p = child.parent();
			p.find('.js-cache-load').each(function() {
				var obj = $(this).clone();
				obj.removeClass('is-selected');
				obj.insertBefore(child);
				obj.addClass('is-lazy-load');
			});
			return;
		} else if (ticks == 6) {
			child.removeAttr('isloading');
			child.parent().unbind('scroll');
			child.hide();
			$('.js-cache-load:last', p).addClass("is-last-record");
			return;
		}
		var text = 'Loading more';
		var value = ticks % 3 + 1;
		for (var i = 0; i < value; i++) {
			text += '.';
		}
		ticks++;
		child.data('ticks', ticks);
		child.text(text);
		window.setTimeout(handleLoading, 500);
	}
	if (top < pos_start || top > pos_end || loading == 'true') {
		return;
	}
	child.attr('isloading', 'true');
	var ticks = child.data('ticks');
	
	if (!ticks) {
		child.data('ticks', 0);
	} else {
		child.data('ticks', 4);
	}
	window.setTimeout(handleLoading, 500);
}
/* handle the scroll loading. */
function handleScrollLoading(parent) {
	parent.scrollTop(0);
	parent.unbind('scroll');
	var child = parent.find('.js-msg-load-more');
	if (child.attr('disabled') == 'disabled') {
		return;
	}
	child.data('ticks', 0);
	child.attr('stoploading', 'true');
	child.show();
	parent.bind('scroll', handleBinding);
}

function isFriendMode(me) {
	if (!me) {
		$('.firend-request__info').removeClass('is-my-score-mode');
	} else {
		$('.firend-request__info').addClass('is-my-score-mode');
	}
}

/* mock the filter action here. */
function mockFilter() {
	$('.js-mock-list .is-clone').remove();

	$(window).unbind('scroll');

	if ($('.js-mock-list .load-more').length < 1) {
		if (glLoadMore) {
			$('.js-mock-list').append(glLoadMore.clone());
		}

	}
	isLoading = false;
	isNoMore = false;

	$(window).bind('scroll', onScrollLoading);
}


/* sort the data directly in table. */
function tableSort(arrow, asc) {
	var th = arrow.parent();
	var index = th.index();
	var table = arrow.parents('table').eq(0);
	var tr = table.find('tbody tr');
	tr.removeClass('last-row');
	var tableList = [];
	for (var i = 0; i < tr.length; i++) {
		tableList.push(tr.eq(i));
		tr.eq(i).remove();
	}

	function sortFunc(a, b) {
		var data1 = $.trim(a.find('td').eq(index).text());
		var data2 = $.trim(b.find('td').eq(index).text());
		if (data1 > data2) {
			return 1 * asc;
		} 
		if (data1 < data2) {
			return -1 * asc;
		}
		return 0;
	}

	tableList.sort(sortFunc);

	for (var i = 0; i < tableList.length; i++) {
		table.find('tbody').append(tableList[i]);
		if (i == tableList.length - 1) {
			tableList[i].addClass('last-row');
		}
	}


}












var tableData = [];

/* generate mock js data */
function generateData() {
	if ($('.js-tournaments-table').length > 0) {
		generateTournamentsData();
	} else if ($('.js-contest-table').length > 0) {
		generateContestData();
	}
}

/* filter data by status */
function filterStatus(status) {
	for (var i = 0; i < tableData.length; i++) {
		var obj = tableData[i];
		if (status == 0) {
			obj.active = true;
		} else {
			obj.active = obj.status == status;
		}
	}
	$('.js-search-title').addClass('is-hidden');
	renderData();
}

function doFilter(option) {

	var count = 0;
	for (var i = 0; i < tableData.length; i++) {
		var obj = tableData[i];
		var match = true;
		for (var j = 0; j < option.length; j++) {
			var cmp = option[j];
			var value = obj[cmp.field];
			var cri = cmp.value;
			switch(cmp.eq) {
				case 'more':
					if (value < cri) {
						match = false;
					}
					break;
				case 'less':
					if (value > cri) {
						match = false;
					}
					break;
			}
			if (!match) {
				break;
			}
		}
		if (match) {
			obj.active = true;
			count++;
		} else {
			obj.active = false;
		}
	}
	$('.js-search-title').find('span').text(count);
	$('.js-search-title').removeClass('is-hidden');
	renderData();
}

/* search record */
function doSearch(key) {

	var reg = new RegExp(key, 'i');
	var count = 0;
	for (var i = 0; i < tableData.length; i++) {
		var obj = tableData[i];
		var name = obj['Name'];
		var result = reg.exec(name);
		if (result || key == 'type keyword') {
			count++;
			obj.active = true;
		} else {
			obj.active = false;
		}
	}
	$('.js-search-title').find('span').text(count);
	$('.js-search-title').removeClass('is-hidden');
	renderData();
}

/* sort data */
function sortData(field, asc) {
	function sortBy(a, b) {
		var output = 0;
		var va = a[field];
		var vb = b[field];
		if (va > vb) {
			output = 1;
		} else if (va < vb) {
			output = -1;
		} else {
			output = 0;
		}
		return output * asc;
	}

	tableData.sort(sortBy);
	renderData();
}

/* generate tournaments data */
function generateTournamentsData() {
	tableData = [];
	var now = new Date();

	var isLogin = $('.welcome').length > 0;
	var link = (isLogin)?'Tournament_Details_Logged_In':'Tournament_Details';
	for (var i = 1; i < 18; i++) {
		var random = Math.random() * 25 * 3600 * 24000;
		var start = new Date(now.getTime() - random);
		random = Math.random() * 25 * 3600 * 24000;
		var end = new Date(now.getTime() + random);
		var status = (Math.random() > 0.5)?'1':'2';
		var joined = (Math.random() > 0.5);

		var obj = {
			'Name': 'NameLorem Ipsum ' + i,
			'Participants': Math.floor(Math.random() * 50),
			'Start Date': start,
			'End Date': end,
			active: true,
			status: status,
			join: joined
		}
		obj.html = '<tr><td class="js-friend-request is-td-col"><a href="' + link + 
					'.html" class="my-tournaments-name username"><img src="./asset/asset23.png" alt="" />' + 
					obj['Name'] + '</a></td><td>' + $.format.date(start, 'dd/MM/yyyy hh:mm:ss') + 
					'</td><td>' + $.format.date(end, 'dd/MM/yyyy hh:mm:ss') + 
					'</td><td class="align-center">' + obj['Participants'] + 
					'</td><td>';
		if (isLogin) {
			obj.html += '<a href="javascript:;" class="button float-right js-join-button join-button">JOIN</a>'
		}
		obj.html += '<span class="winner">$0000</span><span class="second-place">$0000</span></td></tr>';
		tableData.push(obj);
	}
}
/* generate tournaments data */
function generateContestData() {
	tableData = [];
	var now = new Date();

	var isLogin = $('.welcome').length > 0;
	var link = (isLogin)?'Contest_Details_Login':'Contest_Details';
	for (var i = 1; i < 18; i++) {
		var random = Math.random() * 25 * 3600 * 24000;
		var start = new Date(now.getTime() - random);
		random = Math.random() * 25 * 3600 * 24000;
		var end = new Date(now.getTime() + random);
		var status = (Math.random() > 0.5)?'1':'2';
		var joined = (Math.random() > 0.5);

		var obj = {
			'Name': 'NameLorem Ipsum ' + i,
			'Participants': Math.floor(Math.random() * 50),
			'Start Date': start,
			'End Date': end,
			active: true,
			status: status,
			join: joined
		}
		obj.html = '<tr><td class="js-friend-request is-td-col"><a href="' + link + 
					'.html" class="my-tournaments-name username"><img src="./asset/asset23.png" alt="" />' + 
					obj['Name'] + '</a></td><td>' + $.format.date(start, 'dd/MM/yyyy hh:mm:ss') + 
					'</td><td>' + $.format.date(end, 'dd/MM/yyyy hh:mm:ss') + 
					'</td><td class="align-center">' + obj['Participants'] + 
					'</td><td>';
		if (isLogin) {
			obj.html += '<a href="javascript:;" class="button float-right js-join-button join-button">JOIN</a>'
		}
		obj.html += '<span class="winner">$0000</span><span class="second-place">$0000</span></td></tr>';
		tableData.push(obj);
	}
}

/* render table */
function renderData() {
	var table = $('.js-data-render');
	var tbody = table.find('tbody');
	tbody.html('');
	for (var i = 0; i < tableData.length; i++) {
		var data = tableData[i];
		if (!data.active) {
			continue;
		}
		var tr = $(data.html);
		tbody.append(tr);

		if (i == tableData.length - 1) {
			tr.addClass('last-row');
		}
		if (data.status == '1') {
			tr.addClass('is-running');
		} else {
			tr.addClass('is-completed');
		}
		tr.attr('index', i);

		if (data.join) {
			tr.find('.js-join-button').addClass('is-joined').text('JOINED');
		}
	}
}

/* render tutorials */
function renderTutorials(count) {

	var video = $('<div class="js-item-load-more video-item float-left">' +
                    '<div class="video-area">' +
                        '<a href="javascript:;" class="video-play"></a>' +
                    '</div>' +
                    '<a href="#">GameName XXXX</a>' +
                    '<p>Lorem ipsum dolor sit amet</p>' +
                '</div>');
	$('.js-display-data').find('.video-item').remove();
	var loadMore = $('.js-display-data').find('.load-more');

	if (loadMore.length <= 0) {
		$('.js-display-data').append('<div class="load-more">Loading more</div>');
	}
	loadMore = $('.js-display-data').find('.load-more');
	for (var i = 0; i < count; i++) {
		var newItem = video.clone();
		newItem.insertBefore(loadMore);

		if (i % 4 == 3) {
			newItem.append('<a class="more-video float-right">more video...</a>');
		}
	}
	isLoading = false;
	isNoMore = false;
	$(window).bind('scroll', onScrollLoading);
}





/* new js */

$(function() {
	
  /* upload photo */
$(".js-upload-photo-button").click(function() {
	  $("#js-upload").trigger('click');
	});

/* find-friends [email,text] check */
  $('.find-friends__content .input-mask .value-text').focusout(function(){
   var input=$(this);
   var type= input.attr("data-validate");
   var reg = /^\s*$/gi;
   var emailReg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    if(reg.test(input.val()))
    {
	   $(".is-email-error span").text("- Please enter the Email address");
	   input.parent().removeClass("input-mask-suc").addClass("input-mask-err");
	   $(".is-email-error").removeClass("is-hidden");
	   if($(this).parents(".find-friends__content").prev().text()=="Twitter"||$(this).parents(".find-friends__content").prev().text()=="Google +"||$(this).parents(".find-friends__content").prev().text()=="Facebook")
	   $(".is-email-error span").text("- Please enter the Account");
       return;
	}
	if(type=="email")
	 {
		if(emailReg.test(input.val()))
		{
			input.parent().removeClass("input-mask-err").addClass("input-mask-suc");
			$(".is-email-error").addClass("is-hidden");
			// setTimeout(function(){window.location.href="Add_Friends.html"},500);
		}
		else
		{
		    $(".is-email-error span").text("- Please enter the correct Email");
			input.parent().removeClass("input-mask-suc").addClass("input-mask-err");
			$(".is-email-error").removeClass("is-hidden");
		}
	 }
	 else
	 {
		 input.parent().removeClass("input-mask-err").addClass("input-mask-suc");
	     $(".is-email-error").addClass("is-hidden");
		 //setTimeout(function(){window.location.href="Add_Friends.html"},500);
	 }
   });
  $(',.find-friends-button').click(function(){
    if($(this).parents(".import__mail--row").length==1)
	 { 
	    $(".text-value,.input-mask").addClass("is-hidden");
        $(".is-expanded-import__mail--row .input-mask").removeClass("input-mask-err").removeClass("input-mask-suc");
	    $(".is-expanded-import__mail--row .input-mask .value-text").val('');
		$(".is-expanded-import__mail--row").removeClass("is-expanded-import__mail--row").addClass("import__mail--row");
        $(".is-email-error").addClass("is-hidden");
		$(this).parents(".import__mail--row").removeClass("import__mail--row").addClass("is-expanded-import__mail--row");
        $(this).siblings(".text-value,.input-mask").removeClass("is-hidden");
		return;
	 }
   if($(this).prev(".input-mask").hasClass("input-mask-suc")) {window.location.href="Add_Friends.html"; return;}
   var input=$(this).prev(".input-mask").children(":input").first();
   var type= input.attr("data-validate");
   var reg = /^\s*$/gi;
   var emailReg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
   if(reg.test(input.val()))
    {
	   $(".is-email-error span").text("- Please enter the Email address");
	   input.parent().removeClass("input-mask-suc").addClass("input-mask-err");
	   $(".is-email-error").removeClass("is-hidden");
	   if($(this).parents(".find-friends__content").prev().text()=="Twitter"||$(this).parents(".find-friends__content").prev().text()=="Google +"||$(this).parents(".find-friends__content").prev().text()=="Facebook")
		    $(".is-email-error span").text("- Please enter the Account");
       return;
	}
	if(type=="email")
	 {
		if(emailReg.test(input.val()))
		{
			window.location.href="Add_Friends.html";
		}
		else
		{
		    $(".is-email-error span").text("- Please enter the correct Email");
			input.parent().removeClass("input-mask-suc").addClass("input-mask-err");
			$(".is-email-error").removeClass("is-hidden");
		}
	  }
	  else
	  {
         window.location.href="Add_Friends.html";
	  }

  });
  
 /* box__select-all for button */
 $(".box__add_friends--botton .box__right-botton").find("a").last().click(function(){
	if($(this).attr("disabled")){ return false; }
 });
  $(".box__add_friends--botton .box__select-all .button").last().click(function(){
	 $(".add_friends__content li a").addClass("is-checked");
     $(this).prev().addClass("is-checked");
	 $(".box__add_friends--botton .box__right-botton").find("a").last().removeAttr("disabled","disabled").removeClass("disabled-btn");
  });
  
  $(".box__add_friends--botton .box__select-all .js-chk").click(function(event){
	  event.stopPropagation();

      if ($(this).hasClass("is-checked")){
		  $(".add_friends__content li a").addClass("is-checked");
		   $(".box__add_friends--botton .box__right-botton").find("a").last().removeAttr("disabled","disabled").removeClass("disabled-btn");
		}else{
			$(".add_friends__content li a").removeClass("is-checked");
			 $(".box__add_friends--botton .box__right-botton").find("a").last().attr("disabled","disabled").addClass("disabled-btn");
		}
	  if($(".add_friends__content li a").hasClass("is-checked")) $(this).addClass("is-checked");
  });

  $(".add_friends__content li a").click(function(){
	  var b=true;
     $.each($(".add_friends__content li a"),function(i,n)
	 {
		 if(!$(n).hasClass("is-checked")) { b=false; return;}
	 });
	 if(b) $(".box__add_friends--botton .box__select-all .float-left").prev().addClass("is-checked"); else $(".box__add_friends--botton .box__select-all .float-left").prev().removeClass("is-checked");
	 if(!$(".add_friends__content li a").hasClass("is-checked")) 
	  $(".box__add_friends--botton .box__right-botton").find("a").last().attr("disabled","disabled").addClass("disabled-btn");
	  else 
	  $(".box__add_friends--botton .box__right-botton").find("a").last().removeAttr("disabled","disabled").removeClass("disabled-btn");
  });
 
  /* box__contacts-invite li span for check*/
   $(".box__contacts-invite li span").click(function(){
	   var ck=$(this).eq(0);
       ck.siblings().hasClass("is-checked")?ck.siblings().removeClass("is-checked"):ck.siblings().addClass("is-checked");
	   if(!$(".box__contacts-invite li a").hasClass("is-checked"))
	    $(".box__contacts-invite-right .contacts-invite--button").find("a").last().attr("disabled","disabled").addClass("disabled-btn");
	  else 
	    $(".box__contacts-invite-right .contacts-invite--button").find("a").last().removeAttr("disabled","disabled").removeClass("disabled-btn");
   });   
   
   $(".box__contacts-invite li a").click(function(event){
	   event.stopPropagation();
	  if(!$(".box__contacts-invite li a").hasClass("is-checked"))
	   {
	    $(".box__contacts-invite-right .contacts-invite--button").find("a").last().attr("disabled","disabled").addClass("disabled-btn");
	   }
	  else 
	   {
	    $(".box__contacts-invite-right .contacts-invite--button").find("a").last().removeAttr("disabled","disabled").removeClass("disabled-btn");
	   }
   });
   
 /* box__inviteall-left for block hide or show */
$(".invite-details-def .box__inviteall-left a:eq(0)").click(function(){
    if($(".box__finish").hasClass("is-hidden")) $(".box__finish").removeClass("is-hidden");
    if(!$(".box__inviteall-left").hasClass("is-hidden")) $(".box__inviteall-left").addClass("is-hidden");
	if(!$(".box__contacts-invite-right").hasClass("is-hidden")) $(".box__contacts-invite-right").addClass("is-hidden");
  });

 /* contacts-invite--button for block hide or show */
  $(".contacts-invite--button a").last().click(function(){
	 if($(this).attr("disabled")){return false;}
	 if($(".box__inivte-more").hasClass("is-hidden")) $(".box__inivte-more").removeClass("is-hidden");
     if(!$(".box__inviteall-left").hasClass("is-hidden")) $(".box__inviteall-left").addClass("is-hidden");
	 if(!$(".box__contacts-invite-right").hasClass("is-hidden")) $(".box__contacts-invite-right").addClass("is-hidden");
   });
  
 /* invite-details .box__inivte-more-button for block hide or show */
   $(".invite-details .box__inivte-more-button a").first().click(function(){
	  if($(".box__inviteall-left").hasClass("is-hidden")) $(".box__inviteall-left").removeClass("is-hidden");
	  if($(".box__contacts-invite-right").hasClass("is-hidden")) $(".box__contacts-invite-right").removeClass("is-hidden");
	  if(!$(".box__inivte-more").hasClass("is-hidden")) $(".box__inivte-more").addClass("is-hidden");
   });
   
   /* box--people-you-may-know and dd_friends__content  for firend-request__info show */
    $('.box--people-you-may-know,.add_friends__content').delegate('img,strong a','mouseover', function() {
		if ($(this).hasClass('score-wrapper')) {
			return;
		}
		var popup = $('.firend-request__info:first');
		popup.find("span").get(0).className="firend-triangle";
		var parent = $(this).parents('.people-you-may-know-preview').length>0?$(this).parents('.people-you-may-know-preview').eq(0):$(this).parents('li').eq(0);
        var bol=true;
		var span= $(popup).find(".firend-triangle").first();
		if($(this).parents(".add_friends__content").length==0)
		{
		if($(this).parents('.people-you-may-know-preview').eq(0).find(".number-info").length>0)
		popup.find(".number-info").empty().html($(this).parents('.people-you-may-know-preview').eq(0).find(".number-info").html()).data("index",$(this).parents('.people-you-may-know-preview').index());
		if( popup.find(".number-info>a").text()=="ADD FRIEND") popup.find(".number-info>a").text("ADD AS FRIEND");
	    if($(this).parents('.people-you-may-know-preview').eq(0).find(".number-info>a").is(":hidden")) popup.find(".number-info>a").click();
		}
		else
		{
          popup.find(".number-info").empty().html("<p class=\"number-info\"><span class=\"after-confirm is-hidden\"><a class=\"button button--loading\" href=\"javascript:;\"><img alt=\"\" src=\"i/loading.gif\">PROCESSING...</a></span><a class=\"button js-add-as-friend\" href=\"javascript:;\">ADD AS FRIEND</a></p>");
		}
		if(popup.width()+parent.position().left+parent.width()>$(document.body)[0].clientWidth)
	    {
			span.addClass("firend-triangle-left").removeClass("firend-triangle");
			bol=false;
	    }
		else
	    {
           span.addClass("firend-triangle").removeClass("firend-triangle-left");
	    }
		var offset = parent.offset();
		
		if (parent.hasClass('current-user')) {
			popup.addClass('firend-request__info--self');
		} else {
			popup.removeClass('firend-request__info--self');
		}

		if (parent.parent().parent().hasClass('is-me')) {
			isFriendMode(true);
		} else {
			isFriendMode(false);
		}
		$('.is-tor-hover').removeClass('is-tor-hover');
		var tr = $(this).parents('tr').eq(0);
		if (tr.hasClass('is-completed')) {
			tr.addClass('is-tor-hover');
			isFriendMode(true);
		} else if (tr.hasClass('is-running')) {
			isFriendMode(false);
			tr.addClass('is-tor-hover');
		}
		var step_l = bol?205:(-1)*240;
		var step_t = 9;
		
		if (parent.hasClass('alt')) {
			step_l -= 28;
			step_t -= 26;
		}
		if (parent.hasClass('filter-badge')) {
			step_t -= 22;
			step_l -= 41;
		}
		if (parent.hasClass('user-set')) {
			step_t -= 30;
			step_l -= 71;
		}
		
		if (parent.hasClass('is-td-col')) {
			step_t -= 20;
		}
		popup.css({
			left: offset.left + step_l,
			top: offset.top + step_t
		});
		popup.show();
		if (window.timer) {
			window.clearTimeout(window.timer);
		}
	});
	
	 /* box--people-you-may-know and dd_friends__content  for firend-request__info hide */
	$('.box--people-you-may-know,.add_friends__content').delegate('img,strong a', 'mouseout', function() {
		var popup = $('.firend-request__info');
		if (window.timer) {
			window.clearTimeout(window.timer);
		}
		window.timer = window.setTimeout(function() {
			popup.hide();
			$('.is-tor-hover').removeClass('is-tor-hover');
		}, 500);
	});
	
	/*js-add-as-friend click*/
    $('.js-add-as-friend').live('click',function(){
		if($(this).parents(".number-info").eq(0).data("index")!=undefined) {
			var index=$(this).parents(".number-info").eq(0).data("index");
		    $(".people-you-may-know-preview").eq(index-1).find(".number-info>a").click();
		}
		$(this).hide();
		$(this).siblings('.after-confirm').show();
		var that = $(this);
		window.setTimeout(function() {
			that.siblings('.after-confirm').find('.button').removeClass('button--loading').html("VIEW  PROFILE").attr('href','UserProfile-friendprofilepage.html');
		}, 3000);
	});
	
   /* value-text addattr data-validate */
	$(".import__mail--row .input-mask .value-text").each(function(i){
			if(i<=2)
			{
				$(this).attr("data-validate","email");
			}
			else
			{
				$(this).attr("data-validate","text");
			}
		});
	$(".box__add_friends--botton .box__right-botton,.box__contacts-invite-right .contacts-invite--button").find("a").last().attr("disabled","disabled");
/*	$(".box__add_friends--botton .box__right-botton,.box__contacts-invite-right .contacts-invite--button").find("a").click(function(oEvent){
		alert($(this).attr("disabled"));
     	if($(this).attr("disabled")){
			return false;
		} 
	});*/
});
function uploadFile(obj)
{
	  if($("#js-upload").val().length>0)
      {
        $(".box--upload-photo").hide();
        if(!$(".box__uccessfully--upload").hasClass("is-hidden"))   $(".box__uccessfully--upload").addClass("is-hidden");
        if($(".box__progress--upload").hasClass("is-hidden")) { $(".box__progress--upload").removeClass("is-hidden"); $(".current__progress").css("width","0%");}
        var i=0;
         var t= setInterval(function(){
         $(".current__progress").css("width",String(i)+"%");
		 if(i<48) $(".rogress--upload-text").css("color","rgb(140,176,88)"); else  $(".rogress--upload-text").css("color","rgb(255,255,255)");
			
         $(".rogress--upload-text").html(String(i)+"%");
         i++;
         if(i>100) {
           clearTimeout(t); 
            $(".box__uccessfully--upload").removeClass("is-hidden"); 
            $(".box__progress--upload").addClass("is-hidden");   
           }
        },100);
      }
	 obj.outerHTML = obj.outerHTML.replace(/(value=").+"/i, ""); 
}