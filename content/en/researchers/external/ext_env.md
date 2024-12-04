+++
title = 'About the external environment'
layout = 'page'
menu = 'researchers_menu_ext'
+++

# The external environment: CBS-RA

## Access Instructions
TO access the external environment hosted by CBS, you must pass the CBS awareness test and install FortiClient VPN and the VMware environment, which are compatible with Windows and Mac systems. Detailed setup instructions are available [here](https://cbs.nl/en-gb/our-services/customised-services-microdata/microdata-conducting-your-own-research/log-in-to-ra).


### Step-by-step Access Guide
1.  **FortiClient VPN**
    - Install FortiClient VPN following the eprovided [setup instructions](https://cbs.nl/en-gb/our-services/customised-services-microdata/microdata-conducting-your-own-research/log-in-to-ra).
    - Open FortiClient VPN
    - Log in using your CBS-provided username and password comprising:
        - The first part: a 4-digit passcode provided by CBS
        - The second part: the code displayed on your CBS token (note the remaining validity indicated by the bars on the left side of the diplay)
    - Click connect
2. **VMware Horizon Client**
    - Install Vmware Horizon Client as per the [setup instructions](https://cbs.nl/en-gb/our-services/customised-services-microdata/microdata-conducting-your-own-research/log-in-to-ra).
    - Open VMware Horizon Client.
    - Login using your username, which consists of three parts: 
        - The first part: 'gst'
        - The middle part: your project code
        - The last part: the username you used to log into FortiClient VPN. (e.g., 'gst1234abcd')
    - Enter the code sent to your phone via SMS.
    - Use the CBS-provided password that consists out of 8 characters (a mix of lowercase letters, uppercase letters, and numbers).
    - Click on the 'RA-desktop' tile to access the Windows 10 desktop. Note that login may take some time.
3. **The external desktop environment**
    - You can use the app "Windows Explorer", which you can find in the search bar on the left below, to access the drives explained below.

## Drives
To analyse data within the external environment at CBS, there are only 4 drives of interest, namely the F, G, H and K drive. These drives are explained below.

{{< drive_explainer drive="F:" title="Export" >}}
Used exclusively for exporting aggregated results. More details can be found <a href="../exporting_data">here</a>.
{{< /drive_explainer >}}

{{< drive_explainer drive="G:" title="Data" >}}
Contains all microdata files accessible to researchers.  Files accessible to you are listed in the codebook. Contact the ELAN data manager to request access to additional data.
{{< /drive_explainer >}}

{{< drive_explainer drive="H:" title="Analysis" >}}
This Shared Workspace is where all active researchers perform their analyses. Each researcher has a personal directory. TO optimise storage, delete unecessary files and zip files for short-term storage. Some project data, such as <a href="../gp_data" alt="General Practitioner data">general practicioner data</a>, is stored here.
{{< /drive_explainer >}}

{{< drive_explainer drive="K:" title="Metadata" >}}
Houses metadata that explains the data on the G drive. Familiarise yourself with these files first, or visit <a href="https://www.cbs.nl/nl-nl/onze-diensten/maatwerk-en-microdata/microdata-zelf-onderzoek-doen/catalogus-microdata" target="_blank">this link</a>.
{{< /drive_explainer >}}

## Data availability
Researchers have access to various data sources within the CBS external environment. Some data is provided by Statistics Netherlands. The Dutch data catalogue can be found [here](https://www.cbs.nl/nl-nl/onze-diensten/maatwerk-en-microdata/microdata-zelf-onderzoek-doen/catalogus-microdata), though not all files are available for every project. The codebook lists accessible files for each project.

For access to additional files, contact {{< person who="external" >}}. Note that new data from hospitals, The Hague municipality, and general practitioners are uploaded at the beginning of each calendar year. The update frequency for external data sources such as Perined, Parnassia, GGD, and Hadoks has not been established.
