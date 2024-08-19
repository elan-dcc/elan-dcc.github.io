+++
title = 'Overview of the data environments'
layout = 'page'
menu = 'researchers_menu'
+++

# Overview of the data environments
{{< comment >}}Tabel hier{{< /comment >}}
In case you are going to work with encrypted routine (care) data, ELAN offers two distinct environments: one within the LUMC and the other through Remote Access (RA) provided by Statistics Netherlands (SN, CBS in Dutch). Please read the information below for the distinction between the two environments. 

Both environments provide access to encrypted GP-care data from affiliated GPs within the GP research partnership of ELAN.
In the Netherlands, practitioners keep track of their patient's health in electronic patient records (EPR) called a *Huisartsen Informatie Systeem* (HIS). For more information on how the ELAN-GP-datawarehouse is designed, and more in particular, how the health records are transformed into different data files, click [here]({{< relref "gp_data" >}} "About GP data").

## Internal data infrastructure
{{< comment >}}Wat zit hier verder nog meer in? {{< /comment >}}
Within the internal (LUMC) environment, researchers can get access to encrypted GP-care data. These comprise almost 1,2 million patients from 150 affiliated GPs in the ELAN region. A Trusted Third Party (STIZON) collects these health records and stores them in separate files on a data server with a Microsoft Azure Datawarehouse. Subsets of this data are constructed according to the wishes/requirements of the diverse ELAN research projects. These subsets are made by the ELAN-datamanager in the (remote) data environment of our TTP and then transferred via VPN to the LUMC. Here, in the LUMC environment, they are stored in secure folders on the I-drive, only accessible to members of the research project.

For more information on the steps in this process click [here](https://elan-dcc.github.io/researchers/internal/int_env/).

The internal data infrastructure also includes the opportunity for precision recruitment via STIZON as trusted third party, by offering GPs tiles for patient selection. For this, the ELAN-datamanager can transfer pseudo-patient-IDs back to STIZON, after making a specific selection in cooperation with the researcher.

{{< comment >}} TO DO: Margots file met hiaten:
Procedures: discuss dataset with data-manager, sign DTA, access PHEG I-drive, communicate updates with ELAN-team and WP-holder, submit paper to scientific board, share syntaxes, archive (no information in current guideline)
Possibility to go ‘back to the GP’ as there are pseudonymized data (see more information in governance document), information on ‘tegelproject’ or precision medicine (no information in current guideline)
 {{< /comment >}}

## External Data Infrastructure
The external data infrastructure is hosted on the CBS servers. The CBS-RA environment of ELAN offers researchers a unique data-infrastructure in which researchers are able to combine data from multiple caregivers (i.e. GP, hospital, mental health care, Municipal Health Services, social care and perinatal data) with the SN-microdata (SN=Statistics Netherlands=CBS). Within this infrastructure, researchers operate from within projects. Every project has access to different subsets of datasets. Dutch descriptions on all datasets being maintained by Statistics Netherlands can be found [here](https://www.cbs.nl/nl-nl/onze-diensten/maatwerk-en-microdata/microdata-zelf-onderzoek-doen/catalogus-microdata). If researchers require access to a dataset not made available in their project, they can contact the data manager.

Currently, there are 6 projects available for researchers to work from.

- **Project 9002: Diabetes and cardiovascular diseases and complications**
    The mapping the risk factors, heath care usage, prevalence and incidence of cardiovascular diseases and complications and diabetes.
- **Project 9003: Health differences between different spatial levels (neighbourhoods and districts)**
    The investigation of regional health differences in the region Haaglanden and Hollands-Midden.
- **Project 9004: COVID-19**
    Gaining insights in socio-demographic determinants of the spread and severity of COVID-19
- **Project 9005: Patient Flows**
    The exploration of referrals and flow of people between primary, secondary care and social domain
- **Project 9020: Population Health Information System**
    The exploration of the extent of which privacy sensitive information needs to be linked to support Population Health Management.
- **Project 9269: Socio-demographic determinants of mental health issues and illnesses**
    The identification of socio-demographic determinants of the developmental course of mental health problems.

{{< comment >}} Ik stel voor een aparte repo te maken voor de samengestelde variabelen! {{< /comment >}}

