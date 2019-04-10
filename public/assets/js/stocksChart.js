const stocks = document.getElementById('stocksLineChart');

const ctxStocks = stocks.getContext('2d');
const greenGradient = ctxStocks.createLinearGradient(20, 0, 220, 0);
greenGradient.addColorStop(0, 'rgba(2, 165, 225, 0.6)');
greenGradient.addColorStop(1, 'rgba(2, 165, 225, 0.6)');

const stocksLineChart = new Chart(ctxStocks, {
  type: 'line',
  data: {
    labels: ['2015', '2016', '2017', '2018', '2019', '2020'],
    datasets: [
      {
        label: 'Stocks',
        type: 'line',
        borderColor: greenGradient,
        backgroundColor: greenGradient,
        pointBorderColor: greenGradient,
        pointBackgroundColor: greenGradient,
        pointHoverBackgroundColor: greenGradient,
        pointHoverBorderColor: greenGradient,
        data: [5, 10, 15, 25, 12, 3],
        borderWidth: 2,
        fill: true,
      },
    ],
  },
});
