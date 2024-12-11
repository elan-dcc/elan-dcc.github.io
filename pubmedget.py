import xml.etree.ElementTree as ET
from urllib.request import urlretrieve
import os
import argparse


if __name__ == '__main__':
    parser = argparse.ArgumentParser(
        prog="PubMedGet",
        description="Retrieve relevant information about a publication from PubMed.",
        epilog='Make sure to make some final edits in the produced md file!')

    parser.add_argument("-pmid", "--pmid", required=True, help="PMID of publicatoin to be parsed")
    args = parser.parse_args()

    url = f"https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id={args.pmid}"
    location = "temp_pubmed.xml"

    urlretrieve(url, location)

    # parse XML file
    tree = ET.parse(location)
    root = tree.getroot()

    def monthToNum(stringMonth):
        m = {
                'jan': 1,
                'feb': 2,
                'mar': 3,
                'apr': 4,
                'may': 5,
                'jun': 6,
                'jul': 7,
                'aug': 8,
                'sep': 9, 
                'oct': 10,
                'nov': 11,
                'dec': 12
        }
        s = stringMonth.strip()[:3].lower()

        try:
            out = m[s]
            return out
        except:
            raise ValueError('not a month.')


    def find_tag(tag):
        """Finds the first occurence of a tag."""
        for item in root.findall('.//' + tag):
            return item.text

        return ""

    def find_authors():
        lastnames = []
        initials = []
        for item in root.findall('.//LastName'):
            lastnames.append(item.text)
        for item in root.findall('.//Initials'):
            initials.append(item.text)
        return [f"{i} {j}" for i, j in zip(lastnames, initials)]


    def find_doi():
        doi = root.find('.//ArticleIdList/ArticleId[@IdType="{}"]'.format("doi")).text
        return doi

    def find_date():
        mydate = root.find('.//History/PubMedPubDate[@PubStatus="{}"]'.format("pmc-release"))
        if mydate is None:
            mydate = root.find('.//JournalIssue/PubDate')

        month = mydate[1].text
        if not month.isnumeric():
            month = monthToNum(month)

        if len(mydate) == 2:
            return  f"{mydate[0].text}-{int(month):02d}-01"
        else:
            return  f"{mydate[0].text}-{int(month):02d}-{int(mydate[2].text):02d}"

    authors = find_authors()
    abstract = find_tag('AbstractText')
    volume = find_tag('Volume')
    issue = find_tag('Issue')
    journal = find_tag('Title')
    articletitle = find_tag('ArticleTitle')
    pages = find_tag('MedlinePgn')
    doi = find_doi()
    date = find_date()
    year = date[:4]

    # delete local file
    os.remove(location)

    destination = f"content/en/publications/{date}_{articletitle[:15]}.md"

    """
    Two types of tags:
    - workpackages/themes: cardiovascular diseases, ...
    - datasources: ELAN hospitaldata + ELAN gp-data + municipality data + external hospitaldata + external gp-data
    """

    text = rf"""+++
date = {date}
year = {year}
title = "{articletitle}"
authors = {authors}
journal = "{journal}"
volume = "{volume}"
issue = "{issue}"
pagerange = "{pages}"
doi = "{doi}"
summaryeng = "{abstract}"
summarynl = ""
themes = [""]
datasources = [""]
ticketnummer = ""
category = "Publication"
type = "Article"
draft = true
+++
"""

    with open(destination, 'w', encoding='utf-8') as file:
            file.writelines(text)

    print(f"Done! Go to {destination} to edit the file.")
