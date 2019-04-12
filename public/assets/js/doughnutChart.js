const ctxDoughnut = document.getElementById('doughnutChart');

const doughnutChart = new Chart(ctxDoughnut, {
  type: 'doughnut',
  data: {
    labels: ['Crypto', 'Real Estate', 'Stocks'],
    datasets: [
      {
        label: 'Investment types',
        backgroundColor: [
          'rgb(234, 182, 101)',
          'rgb(234, 101, 169)',
          'rgb(114, 124, 235)',
        ],
        data: [2478, 5267, 734],
      },
    ],
  },
  options: {},
});
