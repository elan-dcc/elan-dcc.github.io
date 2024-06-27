+++
title = 'About the General Practitioner data'
layout = 'page'
menu = 'researchers_menu'
+++

# About the General Practicioner data
General practitioners keep online medical records of all their patients. They do this via a system called a *Huisartsen Informatie Systeem* or HIS for short. Within the ELAN region, the HIS produced by Medicon and Pharmapartners are the systems used most often. Every consult is called a *journaal* and is registered by the practitioner. An episode is specific for a certain condition, and can therefore encapsulate multiple *journalen*.

These data can be found in both the internal and subsets of it are available to some projects in the external environment.

Every 3 months we collect snapshots of all the datasets below.

| Property          | Abbreviation | Description                                                                                                                                                                                                                                                                                                                                         |
|-------------------|--------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Actions           | ACT          | Actions (operations) declared by the GP. These have been cross checked with NHG-table 15.                                                                                                                                                                                                                                                           |
| Contraindications | CIA          | There are multiple levels contraindications can be logged as: - Active Pharmaceutical Ingredient - medication (expressed as 'HPK', 'PRK' or 'ATC') - undesired group. Optionally, a GP may add the route of administration. More information about medication usage is logged when a contraindication is associated with a HPK or PRK. For example, for every PRK the appropriate GPK and ATC are also present. |
| Correspondence    | COR          | Incoming and outgoing correspondence including referrals. Note that these are not present for HIS Promovendico. |
Episodes | EPS | Episodes per patient. To record symptoms, conditions and complaints, ICPC is used. The starting data of the ICPC, and a possible end date are included. |
Journalen | JRN | Every consultation between a patient and a practitioner. |
| Lab tests | LAB | Measured values/readings in accordance with NHG table 45. Next to lab tests, it includes values like BMI and blood pressure |
Medication | MED | Prescriptions of medication (ATC coding) |
Patients | PAT | Data of every registered patients, including patients who have moved or passed away |
Ruiters | RUI | {{< comment >}}Hoe vertalen we dit? {{< /comment >}} |

The NHG tables can be found [here](https://github.com/elan-dcc/org/tree/main/NHG_tables).

{{< comment >}}Wat is DWH? {{< /comment >}}

 To consolidate the journal and episode data, you can use *the episodenummer*: the episode ID. Every record in the journaal dataset uses a specific method of encoding the medical data, which is referred to by the acronym [SOEP](https://nl.wikipedia.org/wiki/SOEPstatus): subjective, objective, evaluation, plan.

 - subjective: feelings and observations that drove the patient to see his general practicioner.
 - objective: symptoms and signs observed by the general practitioner
 - evaluation: potential diagnoses
 - plan: a plan of action, such as doing more research (e.g. blood analysis, ECG or an X-ray), referrals to a specialist, or medication

 {{< comment >}} Wordt elke record geassocieerd met een ID S O E of P? Ik zou dit toch graag goed visualiseren. En dit geldt dus voor zowel journalen als episodes? Zit deze ook niet bij correspondentie? Hoe heet dit attribuut? Waarom zijn sommige attributen in het Nederlands en andere in het Engels?{{< /comment >}}

 The journaal and episode data sets contain ICPC-coded conditions. This means that, for instance a journal with code R03, wheezing, could be linked to the episode with ICPC R96: asthma.

## Variability per practitioner
Keep in mind that there is great variability in the way general practitioners keep records of their patients. For instance, one practitioner may always provide the **diagnosis** a cold when a patients presents themselves with a sore throat, whereas another may code the cold as a **symptom**. Therefore, when information may seem absent at a glance, we suggest you also explore alternative ways of coding certain determinants or diagnoses.

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