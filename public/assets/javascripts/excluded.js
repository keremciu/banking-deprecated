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
	// Form Javascripts
	//

	// Input Masks -< Form Javascripts
	$('[data-toggle="phone_mask"]').each(function (e) {
		VMasker($(this)).maskPattern("(999) 999 99 99");
		$(this).attr("placeholder", "(999) 999 99 99");
	});

	$('[data-toggle="money_mask"]').each(function (e) {
		VMasker($(this)).maskMoney();
	});

	// - DatePicker -< Form Javascripts
	$('[data-toggle="datepicker"]').datetimepicker({
		locale: 'tr',
		format: 'DD/MM/YYYY',
		allowInputToggle: true
	});

	// - Linked DatePicker 'Start Point Event' -< Form Javascripts
	$('[data-time-start]').on("dp.change", function (e) {
		if (e.oldDate !== null) {
    		var picker = $(this).attr('data-time-start');
			$('#' + picker).data("DateTimePicker").minDate(e.date);
			$('#' + picker).data("DateTimePicker").toggle();
    	}
	});

	// - Linked DatePicker 'Finish Point Event' -< Form Javascripts
	$('[data-time-finish]').on("dp.change", function (e) {
		var picker = $(this).attr('data-time-finish');
		$('#' + picker).data("DateTimePicker").maxDate(e.date);
	});

	// - File input event
	$(document).on('change', '.btn-file :file', function() {
		var input = $(this),
		numFiles = input.get(0).files ? input.get(0).files.length : 1,
		label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
	  	input.trigger('fileselect', [numFiles, label]);
	});

	$('.file-group :file').on('fileselect', function(event, numFiles, label) {
	        // 
	        var input = $(this).parents('.input-group').find(':text'),
	            log = numFiles > 1 ? numFiles + ' files selected' : label;
	        
	        if( input.length ) {
	            input.val(log);
	        } else {
	            if( log ) alert(log);
	        }        
	});

// -----------------------------------------------------------------

	//
	// Global Page Actions
	//

	// Bootstrap Tag Trigger which item has data-toggle="tab"
	$('[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		e.target // newly activated tab
		e.relatedTarget // previous active tab
	});

});