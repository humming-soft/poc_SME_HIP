$(document).ready(function(){
	
	
	// 
	// Overall Project
	// 
	
	Highcharts.chart('chart1', {

		title: {
			text: ''
		},
		subtitle: {
			text: ''
		},
		xAxis: {
			categories:[2014,2015,2016,2017]
		},
		yAxis: {
			allowDecimals: false,
			title: {
				text: 'Number of Projects'
			}
		},

		series: [{
			name: 'Projects',
			color: '#09f',
			data: [7,10,10,10]
		}]

	});
	
	
	// 
	// Resolve Issue
	// 
	
	Highcharts.chart('chart2', {
		chart: {
			type: 'column'
		},
		title: {
			text: ''
		},
		xAxis: {
			categories: [2014,2015,2016,2017]
		},
		yAxis: {
			min: 0,
			allowDecimals: false,
			title: {
				text: 'Issue'
			},
			stackLabels: {
				enabled: true,
				style: {
					fontWeight: 'bold',
					color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
				}
			}
		},
		tooltip: {
			headerFormat: '<b>{point.x}</b><br/>',
			pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
		},
		plotOptions: {
			column: {
				stacking: 'normal',
				dataLabels: {
					enabled: true,
					color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
				}
			}
		},
		series: [{
			name: 'Unsolved',
			color: '#f50',
			data: [5, 3, 4, 7, 2]
		}, {
			name: 'Solved',
			color: '#09a',
			data: [2, 2, 3, 2, 1]
		}]
	});
		
	
	// 
	// Resolve Issue
	// 
	
	Highcharts.chart('chart4', {
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
			categories: [2014,2015,2016,2017],
			crosshair: true
		},
		yAxis: {
			min: 0,
			allowDecimals: false,
			title: {
				text: 'Members'
			}
		},
		tooltip: {
			headerFormat: '<span style="font-size:10px"><br>{point.key}</span><table>',
			pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
				'<td style="padding:0"><b>{point.y} Members</b></td></tr>',
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
			name: 'Registered',
			color: '#00f',
			data: [7,10,12,10]

		}, {
			name: 'Attend',
			color: '#c0f',
			data: [6,6,10,10]

		}]
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});

