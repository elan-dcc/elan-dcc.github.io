+++
title = 'About the external environment'
layout = 'page'
menu = 'researchers_menu_ext'
+++

# The external environment: CBS-RA

## Getting access
First, to get access to the external environment hosted at CBS, you have to pass for CBS's awareness test and you have to install FortiClient VPN to establish a VPN connection and the VMware-environment. Note that this can only be done on a Windows or Mac system. 

Once the awareness test has been done, you need to complete the setup of FortiClient and VMWare. Instructions about these set-ups can be found [here](https://cbs.nl/en-gb/our-services/customised-services-microdata/microdata-conducting-your-own-research/log-in-to-ra). Once these have been properly set up, you can login to the CBS environment. CBS has provided manuals to log in to the RA (Remote access) environment on the previous link including pictures. We highly recommend these installation guides and manuals, but we have summarised the logon procedure here.

First, you log in to FortiClient VPN by entering your userame and password. The username is provided by CBS. They've also provided you with a 4-digit passcode. This 4-digit passcode is the first part of your password. The second part is the code shown on the display of your CBS token. The number of bars on the left side of the display indicate the remaining duration the code is still valid.

Once logged in, you can access the VMware Horizon Client environment. The username consists of three parts, the first being 'gst', the second being your project code, and the first being the username you used to log in to FortiClient VPN. For the next step, you'll receive a code on your phone which you'll have to enter. Next, you use the password that consists out of 8 characters (including lowercase letters, uppercase letters and numbers).

The final step is to click on the 'RA-dekstop' tile in VMware horizon. You will now be logged into your own account on the server. Note that this may take a while. Logged in, you will be presented with a Windows 10 desktop. You can use the app "Windows Explorer", which you can find in the search bar on the left below, to access the drives explained below.

## Drives
To analyse data within the external environment at CBS, there are only 4 drives of interest, namely the F, G, H and K drive. These drives are explained below.

{{< drive_explainer drive="F:" title="Export" >}}
This drive is solely used to export aggregated results. For more information on this process <a href="../exporting_data">click here</a>.
{{< /drive_explainer >}}

{{< drive_explainer drive="G:" title="Data" >}}
This drive houses all the data. These files can be accessed by the researchers and stored on the drive specific to their project: the H drive. Not all files will be accessible to you; those that are, are described in the codebook. If you want to request access to data, contact the ELAN datamanager.
{{< /drive_explainer >}}

{{< drive_explainer drive="H:" title="Analysis" >}}
This drive is the Shared Workspace. All active researchers perform their analyses from this drive. Every researcher has their own directory from which they can work. We urge our researchers to consider storage efficiency, to delete files that are no longer of any use to them, and to zip files that will be shelved for a short amount of time. This ensures there is enough storage left for all researchers to perform their analyses.</p>
<p>
For some projects, data, such as <a href="../gp_data" alt="General Practitioner data">general practicioner data</a>, is stored on this drive.
{{< /drive_explainer >}}

{{< drive_explainer drive="K:" title="Metadata" >}}
This drive contains the metadata: the files that can inform you about the <b>meaning</b> of the data in drive G. To familiarise yourself with data, these files should be checked first, or, alternatively <a href="https://www.cbs.nl/nl-nl/onze-diensten/maatwerk-en-microdata/microdata-zelf-onderzoek-doen/catalogus-microdata" target="_blank">this link</a>.
{{< /drive_explainer >}}

## The Data
Data from a diverse range of sources is accessible to the researchers in the external environment hosted by Statistics Netherlands.

Some of the data has been supplied by Statistics Netherlands. [Here](https://www.cbs.nl/nl-nl/onze-diensten/maatwerk-en-microdata/microdata-zelf-onderzoek-doen/catalogus-microdata) you can find the Dutch catalog of their data sets. However, not every file has been made accessible to every project. The {{< codebook >}} shows what files are accesible for each project.

If you want to have access to a file not accessible by your project, regardless of the source, you should reach out to {{< person who="external" >}}. If your request requires an additional update, then you will need to await the scheduled next update for the source in question. Every start of a new calender year is when data from hospitals, from the municipality of The Hague and from the general practitioners are uploaded to the external environment. We do not have a set frequency yet for the external data sources Perined, Parnassia, GGD and Hadoks.

