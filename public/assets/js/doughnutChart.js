const ctxDoughnut = document.getElementById('doughnutChart');

const doughnutChart = new Chart(ctxDoughnut, {
  type: 'doughnut',
  data: {
    labels: ['Crypto', 'Real Estate', 'Stocks'],
    datasets: [
      {
        label: 'Investment types',
        backgroundColor: [
          'rgb(225, 184, 2)',
          'rgb(235, 100, 170)',
          'rgb(111, 137, 235)',
        ],
        data: [2478, 5267, 734],
      },
    ],
  },
  options: {},
});
