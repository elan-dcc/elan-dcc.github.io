+++
title = 'About the General Practitioner data'
layout = 'page'
menu = 'researchers_menu'
+++

# About the General Practicioner data
General practitioners maintain electronic patient records (EPR) of all their patients through software systems called a *Huisartsen Informatie Systeem* (HIS). Within the ELAN region, the HIS system Medicom from Pharmapartners is predominantly used. In each HIS the use of structure and coding is enforced, which helps to unlock the data. The episode of care forms the basis of the structure in the EPR, by linking patient encounters to specific health problems. Also interventions and diagnostics can be linked to specific episodes of care. This is called *episode oriented registration* (episode gericht registreren). The GP code of conduct in adequate use of the EPR can be found [here](https://www.nhg.org/praktijkvoering/informatisering/richtlijn-adequate-dossiervorming-epd/).

These data are available in both the internal environent and (to certain projects) the external environment. Snapshots of all the datasets listed below are collected periodically, and uploaded yearly in the external environment and every three months in the internal environment.

| Property          | Abbreviation | Description                                                                                                                                                                                                                                                                                                                                         |
|-------------------|--------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Actions           | ACT          | Actions (operations) declared by the GP, cross-checked with NHG-table 15. |
| Contraindications | CIA          | Contraindications, logged at multiple levels. |
| Correspondence    | COR          | Incoming and outgoing correspondence, including referrals. Note: not available for HIS Promedico. |
Episodes | EPS | Episodes of care per patient, registered symptoms and conditions, coded with the [ICPC](https://www.nhg.org/praktijkvoering/informatisering/registratie-adviezen-icpc-nhg-standaarden/). Includes start and possible end dates. |
Journalen | JRN | Records every consultation between a patient and a practitioner. |
| Lab tests | LAB | Measured values/readings in accordance with NHG table 45, including labt tests, BMI, and blood pressure. |
Medication | MED | Prescriptions of medication, coded using [ATC](https://go.drugbank.com/atc). |
Patients | PAT | Characteristics of all registered patients, including those who have moved or passed away. |
Ruiters | RUI | {{< comment >}}Hoe vertalen we dit? {{< /comment >}} |

The NHG tables can be accessed [here](https://github.com/elan-dcc/org/tree/main/NHG_tables).

{{< comment >}}Wat is DWH? -> data ware house! {{< /comment >}}

## Use of structure
The records of a consultation in the *journaal* dataset are structured by the GP using a system known as [SOEP](https://nl.wikipedia.org/wiki/SOEPstatus). 

	- **Subjective:** Patient's feelings and observations prompting the visit to the general practicioner.
	- **Objective:** symptoms and signs observed by the general practitioner.
	- **Evaluation:** potential diagnoses.
	- **Plan:** Proposed actions, such as further tests (e.g. blood analysis, ECG or an X-ray), referrals to specialist, or medication.

 {{< comment >}} Wordt elke record geassocieerd met een ID S O E of P? Ik zou dit toch graag goed visualiseren. En dit geldt dus voor zowel journalen als episodes? Zit deze ook niet bij correspondentie? Hoe heet dit attribuut? Waarom zijn sommige attributen in het Nederlands en andere in het Engels? MdW: iets gewijzigd hierboven, duidelijker nu?{{< /comment >}}
In general, a first consultation will have all four types (SOEP), but a follow-up consultation might only contain an S or P record. Because, by using episode oriented registration, the linked health condition can be found in the *episodes* dataset (using *episodenummer*, episode ID). The episode contains the most up-to-date ICPC-coded health condition, whereas the E-record in the journal also contains previous symptoms or diagnosis (working hypotheses). For instance a journal with ICPC R03 wheezing, could be linked to the episode with ICPC R96 asthma.

Keep in mind that there is great **variability per practitioner** in the way general practitioners keep records of their patients, especially how to use the *episode oriented registration*. For instance, one practitioner may always provide the **diagnosis** a cold when a patients presents themselves with a sore throat, whereas another may code the cold as a **symptom**. Therefore, when information may seem absent at a glance, we suggest you also explore alternative ways of coding certain determinants or diagnoses.

A second example on how codings can deviate is as follows: a patient has had headaches for years. She is contacting her practitioner because the type of headache has changed, she vomits every morning, and she experiences diplopia. Since those are indications of a brain tumour, the practitioner includes the symptoms in {{< comment >}} the e-line {{< /comment >}} and refers her to the neurologist. The neurologist confirms the practitioner's suspicion. Often, {{< comment >}}the e-line{{< /comment >}} will be changed retroactively to state brain tumour. However, you cannot assume this is **always** true.

Note that, in the previous example, some practitioners may have coded {{< comment >}}the initial e-line {{< /comment >}} as migraines, opposed to the symptoms vomiting and diplopia.

Finally, the starting date is a column that holds very little actual weight. For instance, in our previous example, a practitioner may opt for the date of the first migraine of the patient for the start date or the date of the consultation, or they may even enter a fictive date in the past. Another example is a patient who has been symptomatic for years before switching to a new general practitioner. Their new practitioner will only record their condition if the patient contacts them about it. 

## Snapshots
As already mentioned, the data is collected every 3 months, so researchers only have access to a snapshot in time. As patient's health and conditions develop over time, a *startDate* and *endDate* are added to the data in the internal environment {{< comment >}} Iets specifieker? Hier moet ik nog een stukje toevoegen uit de OG guidance doc. {{< /comment >}}.

{{< comment >}} enddate en startdate geldt dus zowel voor patientregistratie als voor de periode van een act? {{< /comment >}}

The StartDate record is kept empty the first time the internal infrastructure gets data from a practice internal (via STIZON). In that case, the EndDate will be set to the date of the first data retrieval.

For every date after the initial data retrieval, a check is performed to see if the record has been changed or if a new record has been added.

- If neither has been the case, the EndDate is changed to the newest data retrieval date
- In case a new record was added, the StartDate of THAT record is the StartDate of the preious record (+1) {{< comment >}} What is datum + 1? {{< /comment >}}
- In case a record in the HIS was changed, the original record in our dataset stays unaffected. The updated record is added as a new record with the original StartDate + 1 {{< comment >}}One day? {{< /comment >}} and the end date of the updated record is the date of the latest data retrieval.

## Background on the data
When general practitioners enter data in the HIS, this data is collected by [STIZON]{{https://stizon.nl/}}. STIZON standardises the data and shares the data of contracted practices. The standardised attributes start with a 'd', therefore we recommend researchers to use these attributes. However, attributes that do not start with a 'd' may also provide useful information.

We also highly recommend researchers to check the {{< codebook >}} of this environment for guidance.


{{< comment >}} Mijn voorstel is om MACRONIVEAU: systematische problemen bij de rest van de Q&A te zetten, hier: https://github.com/elan-dcc/org{{< /comment >}}