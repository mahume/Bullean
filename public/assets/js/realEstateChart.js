const realEstate = document.getElementById('realEstateLineChart');

const ctxRealEstate = realEstate.getContext('2d');
const blueGradient = ctxRealEstate.createLinearGradient(20, 0, 220, 0);
blueGradient.addColorStop(0, 'rgba(128, 182, 244, 0.6)');
blueGradient.addColorStop(1, 'rgba(244, 144, 128, 0.6)');

const realEstateLineChart = new Chart(ctxRealEstate, {
  type: 'line',
  data: {
    labels: ['2015', '2016', '2017', '2018', '2019', '2020'],
    datasets: [
      {
        label: 'Real Estate',
        type: 'line',
        borderColor: blueGradient,
        backgroundColor: blueGradient,
        pointBorderColor: blueGradient,
        pointBackgroundColor: blueGradient,
        pointHoverBackgroundColor: blueGradient,
        pointHoverBorderColor: blueGradient,
        data: [5, 10, 15, 25, 12, 3],
        borderWidth: 2,
        fill: true,
      },
    ],
  },
});
