$(document).ready(function(){
	
	
	// 
	// block number
	// 
	
	
	$('.portlet_block_number_count1 .portlet_title').append('Applicant Count - Business')
	$('.portlet_block_number_count1 span.number').text('847')
	$('.portlet_block_number_count1 span.title').text('Applicant')
	
	$('.portlet_block_number_count2 .portlet_title').append('Applicant Count - License')
	$('.portlet_block_number_count2 span.number').text('1,244')
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
			data: [332]
		},{
				color:'#f75',
			name: 'Rejected',
			data: [99]
		},{
				color:'#aaa',
			name: 'Pending',
			data: [531]
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
			data: [541]
		},{
				color:'#f75',
			name: 'Rejected',
			data: [112]
		},{
				color:'#aaa',
			name: 'Pending',
			data: [669]
		}]
	});
	
	
	// 
	// portlet_bar_chart_sector
	// 
	
	Highcharts.chart('portlet_bar_chart_sector', {
		chart: {
			type: 'column'
		},
		title: {
			text: ''
		},
		subtitle: {
			text: ''
		},
		xAxis: {
			categories: [
				'Tourism',
				'Industrial',
				'Publication',
				'Agriculture',
				'Restaurant',
				'Electrical',
				'IT',
				'Security'
			],
			crosshair: true
		},
		yAxis: {
			min: 0,
			title: {
				text: 'Count'
			}
		},
		tooltip: {
			headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
			pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
				'<td style="padding:0"><b>{point.y}</b></td></tr>',
			footerFormat: '</table>',
			shared: true,
			useHTML: true
		},
		plotOptions: {
			column: {
				pointPadding: 0.2,
				borderWidth: 0
			}
		},
		series: [{
			name: 'Application count',
			color:'#a5f',
			data: [144,156,284,119,631,456,465,93]

		}]
	});
	
	
	// 
	// portlet_bar_chart_business_type
	// 
	
	Highcharts.chart('portlet_bar_chart_business_type', {
		chart: {
			type: 'column'
		},
		title: {
			text: ''
		},
		subtitle: {
			text: ''
		},
		xAxis: {
			categories: [
				'Company',
				'Partnership',
				'Limited Liability'
			],
			crosshair: true
		},
		yAxis: {
			min: 0,
			title: {
				text: 'Business Count'
			}
		},
		tooltip: {
			headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
			pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
				'<td style="padding:0"><b>{point.y}</b></td></tr>',
			footerFormat: '</table>',
			shared: true,
			useHTML: true
		},
		plotOptions: {
			column: {
				pointPadding: 0.2,
				borderWidth: 0
			}
		},
		series: [{
			name: 'Business Count',
			color:'#f70',
			data: [1174,753,421]

		}]
	});
	
	
	
	// 
	// portlet_bar_chart_service_type
	// 
	
	Highcharts.chart('portlet_bar_chart_service_type', {
		chart: {
			type: 'column'
		},
		title: {
			text: ''
		},
		subtitle: {
			text: ''
		},
		xAxis: {
			categories: [
				'New',
				'Renewal',
				'Update',
				'Cease'
			],
			crosshair: true
		},
		yAxis: {
			min: 0,
			title: {
				text: 'Application Count'
			}
		},
		tooltip: {
			headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
			pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
				'<td style="padding:0"><b>{point.y}</b></td></tr>',
			footerFormat: '</table>',
			shared: true,
			useHTML: true
		},
		plotOptions: {
			column: {
				pointPadding: 0.2,
				borderWidth: 0
			}
		},
		series: [{
			name: 'Application Count',
			color:'#09f',
			data: [1174,453,300,421]

		}]
	});
	
	
	// 
	// portlet_bar_chart_response_time
	// 
	
	Highcharts.chart('portlet_bar_chart_response_time', {
		chart: {
			type: 'column'
		},
		title: {
			text: ''
		},
		xAxis: {
			categories: [
				' '
			]
		},
		yAxis: [{
			min: 0,
			title: {
				text: 'Days'
			}
		}],
		legend: {
			shadow: false
		},
		tooltip: {
			shared: true
		},
		plotOptions: {
			column: {
				grouping: false,
				shadow: false,
				borderWidth: 0
			}
		},
		series: [{
			name: 'Max Allowed Response time',
			color: '#fa0',
			data: [3],
			pointPadding: 0,
			pointPlacement: 0
		}, {
			name: 'Actual',
			color: '#44a',
			data: [1.7],
			pointPadding: 0.2,
			pointPlacement: 0
		}]
	});
	
	
	
	
	
	
	
});

