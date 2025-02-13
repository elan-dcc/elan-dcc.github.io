var speed = 7000;
var amount = 5;

//This function will return Random value 
const getRandomValue = () => {
   return Math.floor(Math.random() * 100)
}

document.addEventListener('DOMContentLoaded', () => {
           var ctx = document.getElementById('IntroductionChart')
           var options = 
{
   type: 'line',
   data: {
       labels: Array.from(Array(amount).keys()),
       datasets: [{
           label: '',
           data: Array(amount).fill().map(getRandomValue),
           // cubicInterpolationMode: 'monotone',
           pointRadius: 10,
           borderColor: "rgba(255, 255, 255, 0.2)",
           backgroundColor: "rgba(255, 255, 255, 0.2)",
           fill: true,
           borderWidth: -10
       }]
   },
   options: {
       clip: true,
       responsive: true,
       maintainAspectRatio: false,
       animation: {
           easing: 'linear',
           duration: speed
       },
       scales: {
           y: {
               suggestedMin: 0,
               suggestedMax: 110,
               display: false
           },
           x: {
               display: false,
               max: amount - 1
           }
       },
       events: [],
       plugins: {
           legend: {
               display: false
           },
           title: {
               display: false
           },
           tooltip: {
               enabled: false
           }
       }

   }
};

let introductionChart = new Chart(ctx, options);

function advanceChart() {

   updatedData = Array(amount).fill().map(getRandomValue)
   //Update the chart object

   introductionChart.data.datasets[0].data = updatedData;

   //Update the chart
   introductionChart.update();
}

setInterval(function () {
       requestAnimationFrame(advanceChart);
   }, speed);

});