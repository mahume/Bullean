const ctx2 = $('#doughnutChart');
const doughnutChart = new Chart(ctx2, {
  type: 'doughnut',
  data: {
    labels: ['Crypto', 'Stocks', 'Real Estate'],
    datasets: [
      {
        label: 'Investment types',
        backgroundColor: ['#3e95cd', '#8e5ea2', '#3cba9f'],
        data: [2478, 5267, 734, 784, 433],
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: 'Porfolio Investments',
    },
  },
});
