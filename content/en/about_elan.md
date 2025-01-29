+++
title = 'About ELAN'
layout = 'page'
+++

# About ELAN

The Extramural LUMC Academic Network (ELAN) brings researchers and healthcare professionals in the region together to support innovation and improvements in healthcare research, training and education.

If you want to do research within the Leiden-The Hague area (the northern part of the province of South Holland), you can make use of the following research opportunities to (1) make contact with general practitioners (GPs) or GPs-in-training and teachers, and/or (2) help with patient recruitment, and/or (3) get access to encrypted routine (care) data of the ELAN data warehouse. Information on options 1 and 2 can be found on [www.elanresearch.nl](https://www.elanresearch.nl), information on option 3 can be found [here](https://elan-dcc.github.io/about_data/).

One of the elements of the ELAN data warehouse is the primary care data from affiliated GPs. By using information on the actual experienced care for bench marking and research we can build a learning healthcare system. This is how GPs and [LUMC-PHEG](https://www.lumc.nl/afdelingen/public-health-en-eerstelijnsgeneeskunde/) and the [Health Campus Den Haag](https://healthcampusdenhaag.nl/en/) will tackle the challenges in healthcare together.


## Partnership with general practitioners

Through ELAN over 100 affiliated general practitioners and their patients from the following regions can be reached:

{{< regionstats >}}

    {{< subtile id = "patients" >}}
        {{< chart id = "patientgraph" >}}
        {
            type: 'doughnut',
            data: {
                labels: [
                "Pink",
                "Blue",
                'Purple'
                ],
                datasets: [{
                    label: 'patients',
                    data: [631797, 363171, 200730],
                    backgroundColor: ['rgba(231, 7, 119, 1)', 'rgba(0, 176, 240, 1)', 'rgba(112, 48, 160, 1)'],
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    title: {
                        display: false
                    },
                    tooltip: {
                        displayColors: false
                    }
                }
            },
            plugins: [{
                    beforeDraw: function (chart, _) {
                        let ctx = chart.ctx;
                        total = (chart.config._config.data.datasets[0].data.reduce((partialSum, a) => partialSum + a, 0)/1e6).toFixed(1) + " M";
                        label = chart.config._config.data.datasets[0].label;
                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'middle';
                        ctx.font = '25px Arial';
                        ctx.fillText(total, 
                                    chart.width/2, 
                                    chart.height/2);
                        ctx.restore();
                    }
                }

        ]
        }
        {{< /chart >}}

    {{< /subtile >}}
    {{< subtile id = "practices" >}}
        {{< chart id = "practicegraph" >}}
        {
            type: 'doughnut',
            data: {
                labels: [
                "Pink",
                "Blue",
                'Purple'
                ],
                datasets: [{
                    label: 'practices',
                    data: [75, 30, 52],
                    backgroundColor: ['rgba(231, 7, 119, 1)', 'rgba(0, 176, 240, 1)', 'rgba(112, 48, 160, 1)'],
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    title: {
                        display: false
                    },
                    tooltip: {
                        displayColors: false
                    }
                }
            },
            plugins: [{
                    beforeDraw: function (chart, _) {
                        let ctx = chart.ctx;
                        total = chart.config._config.data.datasets[0].data.reduce((partialSum, a) => partialSum + a, 0);
                        label = chart.config._config.data.datasets[0].label;
                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'middle';
                        ctx.font = '25px Arial';
                        ctx.fillText(total, 
                                    chart.width/2, 
                                    chart.height/2);
                        ctx.restore();
                    }
                }

        ]
        }
        {{< /chart >}}
    {{< /subtile >}}
{{< /regionstats >}}

