const stocksChart = document.getElementById('stocksLineChart');

const ctxStocks = stocksChart.getContext('2d');
const stocksGradient = ctxStocks.createLinearGradient(0, 0, 0, 970);
stocksGradient.addColorStop(0, 'rgba(32, 2, 225, 0.6)');
stocksGradient.addColorStop(1, 'rgba(2, 165, 225, 0.6)');

const stocksLineChart = new Chart(ctxStocks, {
  type: 'line',
  data: {
    labels: ['2015', '2016', '2017', '2018', '2019', '2020'],
    datasets: [
      {
        label: 'Stocks',
        type: 'line',
        borderColor: stocksGradient,
        backgroundColor: stocksGradient,
        pointBorderColor: stocksGradient,
        pointBackgroundColor: stocksGradient,
        pointHoverBackgroundColor: stocksGradient,
        pointHoverBorderColor: stocksGradient,
        data: [5, 25, 15, 10, 12, 3],
        borderWidth: 2,
        fill: true,
      },
    ],
  },
});
