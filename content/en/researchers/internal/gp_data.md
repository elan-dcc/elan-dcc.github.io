+++
title = 'About the General Practitioner data'
layout = 'page'
menu = 'researchers_menu_int'
weight = 10
+++

# About the General Practicioner data
Data from general affiliated practices are available for research on the I-Drive and within certain projects in the CBS-RA environment. General practitioners (GPs) maintain *electronic patient records* (EPR) of all their patients through software systems called a *Huisartsen Informatie Systeem* (HIS). In the ELAN region, the HIS system Medicom from Pharmapartners is predominantly used. Each HIS enforces the use of structure and coding, facilitating data accessibility and uniformity. The *episode of care* forms the foundation of the EPR structure, linking patient encounters to specific health problems. Interventions and diagnostics can also be associate with particular episodes of care, a process referred to as *episode-oriented registration (episode gericht registreren)*. The GP code of conduct for adequate use of the EPR is available [here](https://www.nhg.org/praktijkvoering/informatisering/richtlijn-adequate-dossiervorming-epd/).

## Data Sources and Availability

These data are available in both the internal environent and, for certain projects, the external environment. Snapshots of the datasets listed below are uploaded periodically: annually for the external environment and quarterly for the internal environment.

| Property          | Abbreviation | Description                                                                                                                                                                                                                                                                                                                                         |
|-------------------|--------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Actions           | ACT          | Actions (operations) declared by the GP, cross-checked with NHG-table 15. |
| Contraindications | CIA          | Contraindications, logged at multiple levels. |
| Correspondence    | COR          | Incoming and outgoing correspondence, including referrals. Note: not available for HIS Promedico. |
Episodes | EPS | Episodes of care per patient, registered symptoms and conditions, coded with the [ICPC](https://www.nhg.org/praktijkvoering/informatisering/registratie-adviezen-icpc-nhg-standaarden/). Includes start and possible end dates. |
Journalen | JRN | Records every consultation between a patient and a practitioner. |
| Lab measurements | LAB | Measured values/readings in accordance with NHG table 45, including labt tests, BMI, and blood pressure. |
Medication | MED | Prescriptions of medication, coded using [ATC](https://go.drugbank.com/atc). |
Patients | PAT | Characteristics of all registered patients, including those who have moved or passed away. |
Indicators | RUI | Indicators for selecting groups of patients, categorized based on NHG table 16. An example of an indicator is the code ‘GV,’ which indicates whether a patient is eligible for an annual flu vaccination. |

The NHG tables can be accessed [here](https://github.com/elan-dcc/org/tree/main/NHG_tables).

## Data Structure and Coding Practices
The records of a consultation in the *journaal* dataset are structured by GPs using the [SOEP](https://nl.wikipedia.org/wiki/SOEPstatus) system, which stands for:

- **Subjective:** Patient's concerns and reasons for visiting the GP.
- **Objective:** Observations or symptoms noted by the GP.
- **Evaluation:** Possible diagnoses.
- **Plan:** Proposed actions, such as further tests (e.g. blood analysis, ECG, or X-ray), referrals to specialist, or medication.

Below is an example. Each record is referenced by its *dSOEPCode;* for instance, the first record is an *S-record*, and the last is a *P-record*.

|Extractiedatum|Systeem|StartDate |EndDate   |PATNR|EpisodeID|dDatum     |dSOEPCode|Omschrijving|
|--------------|-------|----------|----------|-----|---------|-----------|---------|------------|
|2020-01-01    |1      |2020-01-01|NA        |1    | 1       | 2019-12-12|S        |cold        |
|2020-01-01    |1      |2020-01-01|NA        |1    | 1       | 2019-12-12|O        |            |
|2020-01-01    |1      |2020-01-01|NA        |1    | 1       | 2019-12-12|E        |            |
|2020-01-01    |1      |2020-01-01|NA        |1    | 1       | 2019-12-12|P        |            |

Typically, a first consultation will result in S, O, E and P records, whereas a follow-up consultation may only include an S or P record. Using *episode-oriented registration*, the related health condition can be found in the *episodes* dataset via the *episode ID*. The *episodes dataset* contains the most up-to-date ICPC-coded health condition, whereas the *E-record* in the *journal* dataset may reflect earlier symptoms or diagnoses (working hypotheses). For example, a journal with ICPC R03 (wheezing) might be linked to an episode with ICPC R96 (asthma).

## Variability per Practitioners
There is significant **variability among GPs** in how patient records are maintained, particularly in using *episode-oriented registration*. For instance, one GP might **diagnose** a cold when a patient reports sore throat, while another might code it as a **symptom.** When data appears incomplete, consider alternative coding methods.

Here's another example: a patient with chronic headaches presents with morning vomiting and dipplopia. Suspecting a brain tumour, the GP records these symptoms in the consultation and refers the patient to a neurologist. If the tumour is not confirmed, the previous *e-record* may be retroactively updated, but this is not guaranteed. In some cases, the initial record might still list migraines rather than the symptoms.

The *StartDate* column is not always reliable. For example, a practitioner might use the date of the first migraine, the consultation date, or even a fictional date. Additionally, a new GP will only record conditions reported by the patient after the transfer of care.

## Data Snapshots
As noted earlier, data is collected quarterly. Patient data evolves over time, so *StartDate* and *EndDate* fields are included in the internal environment.

- For the initial data retrieval, *StartDate* is left empty, and *EndDate* is set to the firt retrieval date.
- For subsequent retrievals:
    - If no changes are detected, the *EndDate* is updated.
    - If new records are added, the new record's *StartDate* is set to the day after the previous record's *StartDate*.
    - If records are modified, the original remains unchanged, and a new record is created with the day after the retrieval date.

## Background on Data Standardisation
GP data is collected by [STIZON](https://stizon.nl/), a trusted third party, which standardises it before sharing it. Standardised attributes start with a 'd'; researchers are encouraged to use these fields, though non-standard attributes may also be useful.

{{< accent >}}
We strongly recommend researchers review the {{< link type="codebookGP" text="codebook">}} for guidance. Additional information on challenges and potential solutions can be found <a href = "https://github.com/elan-dcc/org/blob/main/QandA.md" target="_blank" alt="Q and A">here</a>.
{{< /accent >}}