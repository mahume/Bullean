const realEstateChart = document.getElementById('realEstateLineChart');

const ctxRealEstate = realEstateChart.getContext('2d');
const realEstateGradient = ctxRealEstate.createLinearGradient(0, 0, 0, 970);
realEstateGradient.addColorStop(0, 'rgba(225, 2, 195, 0.6)');
realEstateGradient.addColorStop(1, 'rgba(225, 2, 84, 0.6)');

const realEstateLineChart = new Chart(ctxRealEstate, {
  type: 'line',
  data: {
    labels: ['2015', '2016', '2017', '2018', '2019', '2020'],
    datasets: [
      {
        label: 'Real Estate',
        type: 'line',
        borderColor: realEstateGradient,
        backgroundColor: realEstateGradient,
        pointBorderColor: realEstateGradient,
        pointBackgroundColor: realEstateGradient,
        pointHoverBackgroundColor: realEstateGradient,
        pointHoverBorderColor: realEstateGradient,
        data: [5, 10, 15, 25, 12, 3],
        borderWidth: 2,
        fill: true,
      },
    ],
  },
});
