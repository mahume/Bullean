const portfolioChart = document.getElementById('barChart');

const ctxPortfolio = portfolioChart.getContext('2d');
// Crypto Gradient
const cryptoPortfolioGradient = ctxPortfolio.createLinearGradient(0, 0, 0, 970);
cryptoPortfolioGradient.addColorStop(0, 'rgba(225, 128, 2, 0.5)');
cryptoPortfolioGradient.addColorStop(1, 'rgba(225, 184, 2, 0.5)');
// Real Estate Gradient
const realEstatePortfolioGradient = ctxPortfolio.createLinearGradient(
  0,
  0,
  0,
  970
);
realEstatePortfolioGradient.addColorStop(0, 'rgba(225, 2, 195, 0.5)');
realEstatePortfolioGradient.addColorStop(1, 'rgba(225, 2, 84, 0.5)');
// Stocks Gradient
const stocksPortfolioGradient = ctxPortfolio.createLinearGradient(0, 0, 0, 970);
stocksPortfolioGradient.addColorStop(0, 'rgba(32, 2, 225, 0.5)');
stocksPortfolioGradient.addColorStop(1, 'rgba(2, 165, 225, 0.5)');

window.addEventListener('load', () => {
  const portfolioChart = new Chart(ctxPortfolio, {
    type: 'bar',
    data: {
      labels: ['2015', '2016', '2017', '2018', '2019', '2020'],
      datasets: [
        {
          label: 'Crypto',
          type: 'line',
          data: [5, 10, 15, 25, 12, 3],
          borderColor: cryptoPortfolioGradient,
          backgroundColor: cryptoPortfolioGradient,
          pointBorderColor: cryptoPortfolioGradient,
          pointBackgroundColor: cryptoPortfolioGradient,
          pointHoverBackgroundColor: cryptoPortfolioGradient,
          pointHoverBorderColor: cryptoPortfolioGradient,
          borderWidth: 1,
          fill: true,
        },
        {
          label: 'Real Estate',
          type: 'line',
          borderColor: realEstatePortfolioGradient,
          backgroundColor: realEstatePortfolioGradient,
          pointBorderColor: realEstatePortfolioGradient,
          pointBackgroundColor: realEstatePortfolioGradient,
          pointHoverBackgroundColor: realEstatePortfolioGradient,
          pointHoverBorderColor: realEstatePortfolioGradient,
          data: [10, 40, 80, 30, 10, 50],
          borderWidth: 1,
          fill: true,
        },
        {
          label: 'Stocks',
          type: 'line',
          borderColor: stocksPortfolioGradient,
          backgroundColor: stocksPortfolioGradient,
          pointBorderColor: stocksPortfolioGradient,
          pointBackgroundColor: stocksPortfolioGradient,
          pointHoverBackgroundColor: stocksPortfolioGradient,
          pointHoverBorderColor: stocksPortfolioGradient,
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
});
