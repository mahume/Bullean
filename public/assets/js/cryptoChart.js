window.addEventListener('load', () => {
  const crypto = document.getElementById('cryptoLineChart');

  const data = [30, 10, 15, 50, 12, 3];

  const ctxCrypto = crypto.getContext('2d');
  const orangeGradient = ctxCrypto.createLinearGradient(0, 0, 0, 970);
  orangeGradient.addColorStop(0, 'rgba(225, 128, 2, 0.6)');
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
          data,
          borderWidth: 2,
          fill: true,
        },
      ],
    },
  });
});
