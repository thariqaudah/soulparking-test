// Filter date
flatpickr('#filterDate', {
	mode: 'range',
})

// Chart
const ctxBarChart1 = document.querySelector('#barChart1')
const ctxBarChart2 = document.querySelector('#barChart2')
const ctxBarChart3 = document.querySelector('#barChart3')
const ctxPieChart1 = document.querySelector('#pieChart1')
const months = [
	'JAN',
	'FEB',
	'MAR',
	'APR',
	'MEI',
	'JUN',
	'JUL',
	'AGU',
	'SEP',
	'OKT',
	'NOV',
	'DES',
]

const barChart1 = new Chart(ctxBarChart1, {
	type: 'bar',
	data: {
		labels: months,
		datasets: [
			{
				data: [300, 600, 500, 900, 600, 700, 800, 700, 600, 700, 900, 1000],
				backgroundColor: 'rgba(29, 179, 49, 0.5)',
			},
		],
	},
	options: {
		scales: {
			y: {
				beginAtZero: true,
			},
		},
		plugins: {
			legend: {
				display: false,
			},
		},
	},
})

const barChart2 = new Chart(ctxBarChart2, {
	type: 'bar',
	data: {
		labels: months,
		datasets: [
			{
				data: [400, 500, 600, 900, 700, 700, 900, 1000, 900, 800, 900, 1000],
				backgroundColor: 'rgba(16, 83, 209, 0.5)',
			},
		],
	},
	options: {
		scales: {
			y: {
				beginAtZero: true,
			},
		},
		plugins: {
			legend: {
				display: false,
			},
		},
	},
})

const barChart3 = new Chart(ctxBarChart3, {
	type: 'bar',
	data: {
		labels: months,
		datasets: [
			{
				data: [
					375000, 800000, 600000, 700000, 1000000, 1100000, 900000, 1100000,
					900000, 1000000, 900000, 1000000,
				],
				backgroundColor: 'rgba(243, 188, 85, 0.5)',
			},
		],
	},
	options: {
		scales: {
			y: {
				beginAtZero: true,
			},
		},
		plugins: {
			legend: {
				display: false,
			},
		},
	},
})

const pieChart1 = new Chart(ctxPieChart1, {
	type: 'pie',
	data: {
		labels: ['0-4 jam', '4-9 jam', '9-15 jam', '15-24 jam'],
		datasets: [
			{
				data: [15, 25, 50, 10],
				backgroundColor: [
					'rgba(29, 179, 49, 1)',
					'rgba(16, 83, 209, 1)',
					'rgba(243, 188, 85, 1)',
					'#ddd',
				],
				hoverOffset: 4,
			},
		],
	},
	options: {
		plugins: {
			legend: {
				display: true,
			},
		},
	},
})
