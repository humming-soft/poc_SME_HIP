$(document).ready(function(){
	
	
	// 
	// block number
	// 
	
	
	$('.portlet_block_number_count1 .portlet_title').append('Applicant Count - Business')
	$('.portlet_block_number_count1 span.number').text('5,538')
	$('.portlet_block_number_count1 span.title').text('Applicant')
	
	$('.portlet_block_number_count2 .portlet_title').append('Applicant Count - License')
	$('.portlet_block_number_count2 span.number').text('11,684')
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
			name: 'Business Count',
			color:'#f70',
			data: [1174,753,421]

		},{
			name: 'License Count',
			color:'#fb5',
			data: [1274,853,529]

		}]
	});
	
	
	
	// 
	// portlet_bar_chart_service_type
	// 
		
	Highcharts.chart('portlet_bar_chart_service_type_1', {
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
	// portlet_bar_chart_service_type_1
	// 
		
	Highcharts.chart('portlet_bar_chart_service_type_2', {
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
				'Renewal'
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
			color:'#099',
			data: [1357,579]

		}]
	});
	
	
	// 
	// portlet_bar_chart_response_time_1
	// 
	
	Highcharts.chart('portlet_bar_chart_response_time_1', {
		chart: {
			type: 'column'
		},
		title: {
			text: ''
		},
		xAxis: {
			categories: [
				'Suruhanjaya Syarikat Malaysia',
				'Suruhanjaya Koperasi Malaysia',
				'Lembaga Jurutera Malaysia',
				'Lembaga Juruukur Tanah Malaysia',
				'Lembaga Penilai, Pentaksir & Hartanah Malaysia',
				'Lembaga Perancang Bandar Malaysia',
				'Lembaga Arkitek Malaysia',
				'Lembaga Juruukur Bahan Malaysia',
				'Institut Akauntan Malaysia',
				'Majlis Veterinar Malaysia'
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
			data: [3,3,3,3,3,3,3,3,3,3],
			pointPadding: 0,
			pointPlacement: 0
		}, {
			name: 'Actual',
			color: '#44a',
			data: [1.7,1.2,1.5,2.7,4,2.2,1,3,2.3,4],
			pointPadding: 0.2,
			pointPlacement: 0
		}]
	});
	
	
	// 
	// portlet_bar_chart_response_time_2
	// 
	
	Highcharts.chart('portlet_bar_chart_response_time_2', {
		chart: {
			type: 'column'
		},
		title: {
			text: ''
		},
		xAxis: {
			categories: [
				'BLESS 2.0',
				'MOHR (DOSH)',
				'KETTHA (SPAN)',
				'KPKT (62 PBT)',
				'SUK Johor (16 PBT)',
				'Majlis Bandaraya Pulau Pinang (MBPP)',
				'Majlis Bandaraya Kuantan (MPK)'
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
			data: [3,3,3,3,3,3,3],
			pointPadding: 0,
			pointPlacement: 0
		}, {
			name: 'Actual',
			color: '#44a',
			data: [1.5,2.7,4,2.2,3,2.3,4],
			pointPadding: 0.2,
			pointPlacement: 0
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
			name: 'Registration Application count',
			color:'#a5f',
			data: [144,156,284,119,631,456,465,93]
		},{
			name: 'License Application count',
			color:'#558',
			data: [254,198,441,215,778,618,785,301]
		}]
	});
	
	
	
});

