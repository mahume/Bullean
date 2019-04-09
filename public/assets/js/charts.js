const ctx1 = $('#barChart');
const ctx2 = $('#doughnutChart');

const barChart = new Chart(ctx1, {
  type: 'bar',
  data: {
    labels: ['2015', '2016', '2017', '2018', '2019', '2020'],
    datasets: [
      {
        label: 'Crypto',
        type: 'line',
        borderColor: '#E18102',
        data: [5, 10, 15, 25, 12, 3],
        borderWidth: 1,
        fill: true,
      },
      {
        label: 'Real Estate',
        type: 'line',
        borderColor: '#2CB355',
        data: [10, 40, 80, 30, 10, 50],
        borderWidth: 1,
        fill: true,
      },
      {
        label: 'Stocks',
        type: 'line',
        borderColor: '#796BCB',
        data: [90, 10, 30, 40, 50, 10],
        borderWidth: 1,
        fill: true,
      },
      {
        label: 'Total',
        type: 'bar',
        backgroundColor: 'rgba(0,0,0,0.2)',
        data: [10, 20, 30, 40, 50, 60],
      },
    ],
  },
  options: {
    legend: { display: false },
    responsive: true,
    maintainAspectRatio: true,
  },
});

const doughnutChart = new Chart(ctx2, {
  type: 'doughnut',
  data: {
    labels: ['Crypto', 'Stocks', 'Real Estate'],
    datasets: [
      {
        label: 'Investment types',
        backgroundColor: ['#E18102', '#796BCB', '#2CB355'],
        data: [2478, 5267, 734],
      },
    ],
  },
  options: {},
});
