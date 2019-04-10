const ctxPortfolio = document.getElementById('barChart');

const portfolioChart = new Chart(ctxPortfolio, {
  type: 'bar',
  data: {
    labels: ['2015', '2016', '2017', '2018', '2019', '2020'],
    datasets: [
      {
        label: 'Crypto',
        type: 'line',
        data: [5, 10, 15, 25, 12, 3],
        borderColor: 'black',
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
