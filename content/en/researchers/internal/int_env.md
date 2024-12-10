+++
title = 'Step-by-step Access Guide: I-Drive'
layout = 'page'
menu = 'researchers_menu_int'
weight = 15
+++

# Requesting Access to the I-Drive (internal environment)
Research data from the ELAN-GP data warehouse is made available on the I-drive of the LUMC network. While the I-drive is accessible to all LUMC staff, subfolders are restricted to authorised personnel directly involved in specific projects. For instance, access to a research project folder containing ELAN-GP data is limited to the designated researchers.

## Data Source and Updates
ELAN-GP research data is a subset of the original data stored in the ELAN data warehouse, managed by STIZON, the trusted third party. The data is typically updated every three months. However, approximately 10% of participating practices provide updates every six months or annually, depending on their software capabilities.

## Steps to Request Data
To access data from the ELAN-GP data warehouse, follow these steps:

1. Follow the steps described [here]({{< relref "/researchers/overview_getting_started" >}} "Steps to initiate data analysis")
1. Submit an ELAN ticket with a detailed description of the required data.
1. Upload all necessary documents, including a signed Data Transfer Agreement (DTA).
1. Once the ticket is approved, contact the Data Competence Centre (DCC), which will liaise with the ELAN-GP data manager.

## Resolving Data Queries

Although the requested data should be clearly described in the ELAN ticket, clarifications are often needed. The researcher and the data manager will communicate via email or meetings to ensure the dataset is accurately defined and feasible for the project.

## Data Extraction and Transfer

Once requirements are confirmed:

- The data manager connects securely to the ELAN-GP data warehouse, hosted on a Microsoft Azure platform at STIZON.
- Using Transact-SQL, the data manager extracts the required data, typically producing multiple files (e.g., episodes, medication).
- The dataset is securely transferred to the LUMC environment via a VPN connection. For large files, this process may take significant time.

Upon completing the transfer, the data manager creates a secure folder on the I-drive and places the data files there. Access to this folder is granted only to researchers involved in the project who have submitted a signed DTA.