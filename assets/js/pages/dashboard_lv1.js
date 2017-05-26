$(document).ready(function(){
	
	
	// 
	// block number
	// 
	
	
	$('.portlet_block_number_count1 .portlet_title').append('Applicant Count - Business')
	$('.portlet_block_number_count1 span.number').text('10')
	$('.portlet_block_number_count1 span.title').text('Applicant')
	
	$('.portlet_block_number_count2 .portlet_title').append('Applicant Count - License')
	$('.portlet_block_number_count2 span.number').text('13')
	$('.portlet_block_number_count2 span.title').text('Applicant')
	
	
	
	// 
	// portlet_bar_chart_applicant_business
	// 
	
	Highcharts.chart('portlet_bar_chart_applicant_business', {
		chart: {
			type: 'bar'
		},
		title: {
			text: ''
		},
		xAxis: {
			categories: [' ']
		},
		yAxis: {
			min: 0,
			title: {
				text: 'Count'
			},
			allowDecimals: false
		},
		legend: {
			align: 'right',
			x: -30,
			verticalAlign: 'top',
			y: 5,
			floating: true,
			backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
			borderColor: '#CCC',
			borderWidth: 1,
			shadow: false
		},
		plotOptions: {
			series: {
				stacking: 'normal',
				dataLabels: {
					enabled: true,
					style:{"color": "contrast", "fontSize": "21px", "fontWeight": "bold", "textOutline": "0px contrast" }
				}
			}
		},
		series: [ {
				color:'#0c5',
			name: 'Approved',
			data: [3]
		},{
				color:'#f75',
			name: 'Rejected',
			data: [2]
		},{
				color:'#aaa',
			name: 'Pending',
			data: [5]
		}]
	});
	
	
	// 
	// portlet_bar_chart_applicant_license
	// 
	
	Highcharts.chart('portlet_bar_chart_applicant_license', {
		chart: {
			type: 'bar'
		},
		title: {
			text: ''
		},
		xAxis: {
			categories: [' ']
		},
		yAxis: {
			min: 0,
			title: {
				text: 'Count'
			},
			allowDecimals: false
		},
		legend: {
			align: 'right',
			x: -30,
			verticalAlign: 'top',
			y: 5,
			floating: true,
			backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
			borderColor: '#CCC',
			borderWidth: 1,
			shadow: false
		},
		plotOptions: {
			series: {
				stacking: 'normal',
				dataLabels: {
					enabled: true,
					style:{"color": "contrast", "fontSize": "21px", "fontWeight": "bold", "textOutline": "0px contrast" }
				}
			}
		},
		series: [ {
				color:'#0c5',
			name: 'Approved',
			data: [3]
		},{
				color:'#f75',
			name: 'Rejected',
			data: [2]
		},{
				color:'#aaa',
			name: 'Pending',
			data: [8]
		}]
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});

