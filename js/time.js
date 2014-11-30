$(function() {
    var d = new Date("");
	var day = d.getDate();
	var month = d.getMonth();
	var i = 1;

	if(month == 11){
		while( i < (day+1) ){
			var boxNumber = "#box" + i + " .content";
			$(boxNumber).removeClass("hidden");
			i++;
		}
	}
});