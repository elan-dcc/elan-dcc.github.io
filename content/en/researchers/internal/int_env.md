+++
title = 'About the internal environment'
layout = 'page'
menu = 'researchers_menu_int'
+++

# The internal environment: ELAN-GP data on the I-drive

Research data from the ELAN-GP-datawarehouse is made available on the I-drive of the LUMC network. This drive is accessible to everyone with an appointment at the LUMC. The different subfolders on the I-drive are nót accessible to all, but shielded in such a way, that only the directly involved have access. For example: access to a research project folder with ELAN-GP data is restricted to the involved researchers only.

ELAN-GP research data is always a subset of the original data in the ELAN-datawarehouse, which resides on a remote server with our Trusted Third Party. This data is normally refreshed every 3 months. About 10% of the participating practices deliver their data every 6 months or yearly (this depends on the software used in these practices).

To acquire data from the ELAN-GP-datawarehouse, researchers should follow the steps described in ....  Once the ELAN ticket has been approved and all necessary documents have been uploaded (amongst which the Data Transfer Agreement), the researcher can contact the DCC (Data Competence Centre). In the case of ELAN-GP-data this means that communication with the ELAN-GP-datamanager will be initiated.

Although the coveted data should be thouroughly described in the ELAN-ticket and/or other documents, in reality there are always questions about the data, from both sides. Communication (mail, meetings) between the researcher and the datamanager is meant to dissolve any misunderstanding, so both parties have a clear understanding of which data is actually needed for the research project AND if it is possible to provide that data.

Once this is all clear, the datamanager will construct a data set. A connection is made to the ELAN-GP-datawarehouse, which resides on a data server at STIZON (the trusted party which collects all the GP-data for us). This connection is (of course) secure. The data server hosts a Microsoft Azure Datawarehouse and by means of (Transact-)SQL the datamanager can compose the desired data. This data almost always comes in the form of multiple datafiles, i.e. a file for Episodes, another for Medication, and so on.
After the data files have been constructed, it's time to transfer them to the LUMC-environment. This is done via a VPN-connection and, in case of large files, can take quite some time.

When the data transfer has been completed, the ELAN-GP-datamanager will create a secure folder on the I-drive, in which the data is placed. Only researchers involved in the research project AND who have uploaded a signed Data Transfer Agreement, get access to the secure folder.  
