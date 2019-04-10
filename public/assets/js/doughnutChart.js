const ctxDoughnut = document.getElementById('doughnutChart');

const doughnutChart = new Chart(ctxDoughnut, {
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
