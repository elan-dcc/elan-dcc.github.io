+++
title = 'About the data'
layout = 'page'
menu = 'researchers_menu'
weight = 5
+++

# ELAN data
The data research infrastructure allows researchers to investigate the current and past states of health affairs in the region Haaglanden and Hollands Midden, while also enabling the development of exploratory and predictive models using the available data as input.  With its extensive data sets the ELAN research infrastructure serves as an ideal platform for conducting a wide range of studies, including both clinical and societal research.

{{< accent >}}
The datasets are housed in two separate data infrastructures: 
<ul> 
<li>the <b>I-Drive</b>: hosted on the secure servers of LUMC. </li>
<li>the <b>CBS-RA</b>: hosted on the servers of the Statistics Netherlands (CBS). </li>
</ul>
Each infrastructure has unique advantages and limitations. For a detailed comparision, visit <a href="../researchers/environments_overview", alt="An overview of the data environments">the data environments overview</a>.
{{< /accent >}}

# Data Sources and Coverage
ELAN securely links data from multiple sources at the individual level, ensuring privacy by minimising the risk of identification, even when datasets are combined. The table below provides an overview of the available data sources and their populations:

| Type of data | Source(s) | Population |
|--------------|-----------|-----------|
| [Primary care health data](https://elan-dcc.github.io/researchers/internal/gp_data/) | General Practitioners | patients in the ELAN region |
| Data from Statistics Netherlands | Statistics Netherlands | the Netherlands |
| Health Insurance data | [Vektis](https://www.vektis.nl/) | the Netherlands | 
| Patient health data | Hospitals | patients from the hospitals HagaZiekenhuis or HMC |
| Acute and chronical care data | Hadoks | patients in Haaglanden | 
| Mental health data | Parnassia | patients in Haaglanden |
| Perinatal data | Perined | patients in the Netherlands |
| Covid-19 | GGD Haaglanden | patients in Haaglanden |
| WMO data  | Municipality of The Hague | citizens of The Hague |
| Cardiovascular data | Hospital | patients from the Reinier de Graaf hospital |
| Your own data | You | A population with an overlap to any of the sources above |

{{< chart id = "population" >}}
{
    type: 'bar',
    data: {
        labels: [
          'Haaglanden',
          'General Practitioners',
          'Hospitals',
          'Mental Health Care',
          'Perined Children',
          'Perined Mothers'
        ],
        datasets: [{
            label: 'persons',
            data: [2611953, 734519, 2168282, 409020, 371035, 239615],
            backgroundColor: '#8eb5ea',
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
                display: true,
                text: 'Total population (2022)',
                font: {
                        size: 18
                     }
            },
            tooltip: {
                displayColors: false
            }
        },
        scales: {
            y: {
                border: {
                    display: false
                },
                ticks: {
                    font: {
                        size: 18
                     }
                }
            },
            x: {
                grid: {
                    display : false
                },
                border: {
                    display: false
                },
                ticks: {
                    font: {
                        size: 18
                     }
                }
            }
        }

    }
}
{{< /chart >}}

{{< accent >}}
For a detailed statistical overview of the data sets, including key insights and research potential, refer to <a href="https://academic.oup.com/ije/article/53/4/dyae099/7720610)" target="_blank">this article</a>.
{{< /accent >}}

By combining comprehensive datasets with secure linkage capabilities, ELAN enables cutting-edge research that bridges the gap between clinical outcomes and societal health determinants.

