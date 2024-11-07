
async function lineChart(id, datapoints){

    const data =  [{
          label: 'Practices',
          data: datapoints,
          backgroundColor: '#9895bc',
        },
    ];

    new Chart(
    document.getElementById(id),
    {
        type: 'bar',
        data: {
            labels: [2022, 2023, 2024],
            datasets: data
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: false
                },
                legend: {
                    display: false
                },
                tooltip: {
                    displayColors: false
                }
            },
            scales: {
                y: {
                    title: {
                        display: false
                    },
                    beginAtZero: true,
                    ticks: {
                        display: false
                    },
                    grid: {
                        display: false
                    },
                    border: {
                        display: false
                    }
                },
                x: {
                    ticks: {
                        font: {
                            size: 18
                        }
                    },
                    grid: {
                        display:false
                    },
                    border: {
                        display: false
                    }
                }
            }
        }
    }
    );

}