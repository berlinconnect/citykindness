$(function() {
    var d = new Date();
	var day = d.getDate();
	var month = d.getMonth();
	var i = 0;

	if(month == 10){
		while( i < (day+1) ){
			var boxNumber = "#box" + i;
			$(boxNumber .content).removeClass("hidden");
			i++;
		}
	}
});