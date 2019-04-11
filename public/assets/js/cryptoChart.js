const cryptoChart = document.getElementById('cryptoLineChart');

const ctxCrypto = cryptoChart.getContext('2d');
const cryptoGradient = ctxCrypto.createLinearGradient(0, 0, 0, 970);
cryptoGradient.addColorStop(0, 'rgba(225, 128, 2, 0.6)');
cryptoGradient.addColorStop(1, 'rgba(225, 184, 2, 0.6)');

const cryptoLineChart = new Chart(ctxCrypto, {
  type: 'line',
  data: {
    labels: ['2015', '2016', '2017', '2018', '2019', '2020'],
    datasets: [
      {
        label: 'Crypto',
        type: 'line',
        borderColor: cryptoGradient,
        backgroundColor: cryptoGradient,
        pointBorderColor: cryptoGradient,
        pointBackgroundColor: cryptoGradient,
        pointHoverBackgroundColor: cryptoGradient,
        pointHoverBorderColor: cryptoGradient,
        data: [30, 10, 15, 50, 12, 3],
        borderWidth: 2,
        fill: true,
      },
    ],
  },
});
