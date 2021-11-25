// Filter date
flatpickr('#filterDate', {
  mode: 'range',
})

// Charts
const ctxBarChart1 = document.querySelector('#barChart1')
const ctxBarChart2 = document.querySelector('#barChart2')
const ctxBarChart3 = document.querySelector('#barChart3')
const ctxBarChart4 = document.querySelector('#barChart4')
const ctxBarChart5 = document.querySelector('#barChart5')
const ctxPieChart1 = document.querySelector('#pieChart1')
const ctxPieChart2 = document.querySelector('#pieChart2')
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
const times = [
  '00:00',
  '01:00',
  '02:00',
  '03:00',
  '04:00',
  '05:00',
  '06:00',
  '07:00',
  '08:00',
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
  '22:00',
  '23:00',
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
    maintainAspectRatio: false,
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
    maintainAspectRatio: false,
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
    maintainAspectRatio: false,
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

const barChart4 = new Chart(ctxBarChart4, {
  type: 'bar',
  data: {
    labels: times,
    datasets: [
      {
        data: [
          0, 0, 0, 0, 375000, 400000, 500000, 600000, 800000, 600000, 500000,
          500000, 400000, 500000, 600000, 700000, 200000, 100000, 150000,
          200000, 250000, 0, 100000, 50000,
        ],
        backgroundColor: 'rgba(16, 83, 209, 0.5)',
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
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

const barChart5 = new Chart(ctxBarChart5, {
  type: 'bar',
  data: {
    labels: times,
    datasets: [
      {
        data: [
          0, 0, 0, 0, 0, 0, 500000, 600000, 800000, 500000, 500000, 500000,
          100000, 200000, 300000, 400000, 200000, 100000, 150000, 200000,
          250000, 0, 100000, 50000,
        ],
        backgroundColor: 'rgba(243, 188, 85, 0.5)',
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
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
          'rgba(29, 179, 49, .5)',
          'rgba(16, 83, 209, .5)',
          'rgba(243, 188, 85, .5)',
          'rgba(146, 143, 143, .5)',
        ],
        hoverOffset: 4,
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
      },
    },
  },
})

const pieChart2 = new Chart(ctxPieChart2, {
  type: 'doughnut',
  data: {
    labels: ['CASH', 'GO-PAY', 'MEMBERSHIP'],
    datasets: [
      {
        data: [500, 150, 150],
        backgroundColor: [
          'rgba(29, 179, 49, 0.5)',
          'rgba(16, 83, 209, 0.5)',
          'rgba(243, 188, 85, 0.5)',
        ],
        hoverOffset: 4,
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
      },
    },
  },
})

// Sidebar
const toggleSidebar = () => {
  const sidebar = document.querySelector('.sidebar')
  const main = document.querySelector('.main')

  sidebar.classList.toggle('sidebar-close')
  main.classList.toggle('main-close')
}

// Dropdown menu
const dropdownMenu = document.getElementsByClassName('dropdown-menu')
let i

for (i = 0; i < dropdownMenu.length; i++) {
  dropdownMenu[i].addEventListener('click', function () {
    this.classList.toggle('active')
    const panel = this.nextElementSibling
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px'
    }
  })
}
