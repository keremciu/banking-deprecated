/**
 *
 * Project: ALJ Homebanking
 * Components Javascript Version: 0.0.1
 * Company: Asseco See
 * Kerem Sevencan <kerem.sevencan@asseco-see.com.tr>
 * Date <24 June 2015>
 * 
**/

$(document).ready(function() {

// -----------------------------------------------------------------

	//
	// Find device orientation
	//

	// // Find matches
	// var mql = window.matchMedia("(orientation: portrait)");

	// // If there are matches, we're in portrait
	// if(mql.matches) {  
	// 	// Portrait orientation
	// } else {  
	// 	// Landscape orientation
	// }

	// // Add a media query change listener
	// mql.addListener(function(m) {
	// 	if(m.matches) {
	// 		// Changed to portrait
	// 	}
	// 	else {
	// 		// Changed to landscape
	// 	}
	// });

// -----------------------------------------------------------------

	//
	// Responsive Page Actions
	//
	var x = $('<div class="mask"></div>');
	x.on('click', function(event) {
		$("body").removeClass("pushit");
		$(".nav-mobile-button").removeClass("active");
		$(".mask").remove();
	});

	$('.nav-mobile-button').on('click', function(event) {
		if (!$(this).hasClass("active")) {
			$("body").addClass("pushit");
			$(this).addClass("active");
			$("body").append(x);
		} else {
			$("body").removeClass("pushit");
			$(".nav-mobile-button").removeClass("active");
			$(".mask").remove();
		}
	});

	// Main menu - hover event trigger click function
    $('[data-toggle="dropdown"]').bootstrapDropdownHover({
		'ClickBehavior': 'default'
	});

    // submenu item
	$('.dropdown-submenu a').on('click', function(e) {
		//e.preventDefault();
		//$(this).parent().find(".dropdown-menu").show();
		$(this).parents(".dropdown.open").removeClass("open");
		$(this).parent().parent().show();
		//.children(".dropdown-menu").show();
	});

// -----------------------------------------------------------------

	//
	// Login Page Simulation in Front-end Case -- AJAX Examples
	//

	// Ajax call with Form Object
	// $('.form-action').on('submit', function (e) {

 //    	var sender = $(this).find(".btn-sender");
 //      	sender.button('loading');
 //      	e.preventDefault();

 //      	$.ajax({
	//         type: 'POST',
	//         // url router in gulpfile.js/tasks/express_server.js
	//         // you can find action attribute in login html.
	//         url: $(this).attr('action'),
	//         data: $(this).serialize(),
	//         success: function (data) {
	//         	// get request
	//         	console.log(data);
	//           	// reset state
	//           	setTimeout(function () {
	// 	            sender.button('reset');
	// 	            $("."+data).removeClass('hide').hide().slideDown("fast", function(){
	// 	            	$("#sifre").focus();
	// 	            });
	// 	        }, 1000);
	//         }
	//     });
 //    });

	// // Ajax Call with Form Submitter Button
	// $('.form-sender').on('click', function (e) {
	// 	var form = $(this).parents("form");
	// 	var sender = $(this);
	// 	sender.button('loading');
	// 	e.preventDefault();

	// 	$.ajax({
	//         type: 'POST',
	//         // url router in gulpfile.js/tasks/express_server.js
	//         // you can find action attribute in login html.
	//         url: form.attr('action'),
	//         data: form.serialize(),
	//         success: function (data) {
	//         	// get request
	//         	console.log(data);
	//           	// reset state
	//           	// timeout only created for simulation not to production.
	//           	setTimeout(function () {
	// 	            sender.button('reset');
	// 	            $("."+data).removeClass('hide').hide().slideDown("fast", function(){
	// 	            	var timer = new Tock({
	// 					  countdown: true,
	// 					  callback: function () {
	// 						var current_time = timer.msToTime(timer.lap());
	// 						$('#countdownitem').html(current_time);
	// 					  },
	// 					  complete: function() {						  	
	// 					  }
	// 					});
	// 				    timer.start("01:20");
	// 	            	$("#sifre").focus();
	// 	            });
	// 	        }, 1000)
	//         }
	//     });
	// });

});