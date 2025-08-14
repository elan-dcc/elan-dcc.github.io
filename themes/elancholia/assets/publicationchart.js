import * as params from '@params';

document.addEventListener('DOMContentLoaded', () => {
    var ctx = document.getElementById('publicationChart')
    var options = 
{
type: 'polarArea',
data: {
labels: params.labels,
datasets: [{
    label: '',
    data: params.data,
    backgroundColor: [
        "rgba(255, 204, 253, 0.5)",
        "rgba(255, 255, 204, 0.5)",
        "rgba(255, 204, 204, 0.5)",
        "rgba(255, 153, 204, 0.5)",
        "rgba(255, 204, 255, 0.5)",
        "rgba(204, 204, 255, 0.5)",
        "rgba(153, 204, 255, 0.5)",
    ],

}]
},
options: {

responsive: true,
maintainAspectRatio: false,
scales: {
    r: {
        beginAtZero: true,
        display: true,
        ticks: {
            z: 2,
            font: {
                size: 18,
                weight: "bold"
            },
            color: "#003c7d",
            showLabelBackdrop: false,
            callback: function(val, index) {
              return index % 2 === 0 ? this.getLabelForValue(val) : '';
            }
        }
        
    }
},
plugins: {
    legend: {
        display: false
    },
    title: {
        display: false
    }
}

}
};

let publicationChart = new Chart(ctx, options);
});