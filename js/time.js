$(function() {
    var d = new Date();
	var day = d.getDate();
	var month = d.getMonth();
	var i = 1;

	// Since the campaign is already over
	// and we are showing all pictures:
	while( i < (25) ){
		var boxNumber = "#box" + i + " .content";
		$(boxNumber).removeClass("hideme");
		i++;
	}


	The following snippet was only valid for December

	if(month == 11){
		while( i < (day+1) ){
			var boxNumber = "#box" + i + " .content";
			$(boxNumber).removeClass("hideme");
			i++;
		}
	}

});
