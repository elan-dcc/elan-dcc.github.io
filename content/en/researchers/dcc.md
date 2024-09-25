+++
title = 'Data Competence Center'
layout = 'page'
menu = 'researchers_menu'
+++

# ELAN Data Competence Center (ELAN-DCC)

The Data Competence Center of ELAN is one of the core teams. This is the team that concerns itself with the technicalities of the data infrastructure(s). Data managers and people who perform data engineering tasks (typically our data managers as well) work in this team, but there are also data scientists and people with skills around visualization and dashboarding, may you need further assistance with that.

The work we do is mostly on the internal and external data infrastructures, but we aim for a fully open workflow, with the scripts and code openly accessible on our github repository. There, we aim to provide full transparency of the data flows from source (either CBS or one of the partners) to published results. It is open to researchers to use for their own workflow, but it is also OK if the code/scipts/syntax only gets added to github when a project is near its finish line.

Specific tasks for the team, other than assisting researchers in their work, are a standardization of methods, data preparation and data cleaning, as well as delivering basic meta-information about the ELAN infrastructure for visibility. 

The standardization means that we deliver re-usable code for common tasks, like data ingestion and cleaning, for people who do not need special-purpose treatment of most of the columns in their data. The code will be available, but resulting data products will also be available on both data infrastructures (as long as suitable and desired). As an example, .sav files tend to take long to read from e.g. R, especially when they’re large. Therefore, we also provide you with parquet files that read much faster, as well as code to do just that, as well as the code that was used to create them. The same will hold for typically hard to clean features like BMI.

One of the goals is to also deliver a dashboard with aggregate data and meta-data about the data in the ELAN infrastructures. Think of things like the number of patients (which can be filtered by municipality, type of data, age, gender, and perhaps even some common healthcare related patterns) and how complete their data is (how many have GP records, what percentage of people have their weight recorded, etc.). This is at the moment still a work in progress.
