const crypto = document.getElementById('cryptoLineChart');

const ctxCrypto = crypto.getContext('2d');
const orangeGradient = ctxCrypto.createLinearGradient(100, 0, 500, 0);
orangeGradient.addColorStop(0, 'rgba(225, 184, 2, 0.6)');
orangeGradient.addColorStop(1, 'rgba(225, 184, 2, 0.6)');

const cryptoLineChart = new Chart(ctxCrypto, {
  type: 'line',
  data: {
    labels: ['2015', '2016', '2017', '2018', '2019', '2020'],
    datasets: [
      {
        label: 'Crypto',
        type: 'line',
        borderColor: orangeGradient,
        backgroundColor: orangeGradient,
        pointBorderColor: orangeGradient,
        pointBackgroundColor: orangeGradient,
        pointHoverBackgroundColor: orangeGradient,
        pointHoverBorderColor: orangeGradient,
        data: [5, 10, 15, 25, 12, 3],
        borderWidth: 2,
        fill: true,
      },
    ],
  },
});
