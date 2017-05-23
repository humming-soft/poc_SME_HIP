$(document).ready(function(){
	
	// 
	// time
	// 
	
	var d = new Date();

	var month = d.getMonth()+1;
	var day = d.getDate();
	
	date_year = d.getFullYear();
	date_month_raw = ((''+month).length<2 ? '0' : '') + month;
	if (date_month_raw == '01') {
		date_month = 'Jan';
	} else if (date_month_raw == '02') {
		date_month = 'Feb';
	} else if (date_month_raw == '03') {
		date_month = 'Mar';
	} else if (date_month_raw == '04') {
		date_month = 'Apr';
	} else if (date_month_raw == '05') {
		date_month = 'May';
	} else if (date_month_raw == '06') {
		date_month = 'Jun';
	} else if (date_month_raw == '07') {
		date_month = 'Jul';
	} else if (date_month_raw == '08') {
		date_month = 'Aug';
	} else if (date_month_raw == '09') {
		date_month = 'Sep';
	} else if (date_month_raw == '10') {
		date_month = 'Oct';
	} else if (date_month_raw == '11') {
		date_month = 'Nov';
	} else if (date_month_raw == '12') {
		date_month = 'Dec';
	};
	date_day = ((''+day).length<2 ? '0' : '') + day;
	
	var output = date_day+' '+date_month+' '+date_year
	
	$('#current_date').text(output)
	
});

