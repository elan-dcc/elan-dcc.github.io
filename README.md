# ELAN site

A static site featuring information for ELAN researchers and stakeholders.
It is made and build using the static site generator [Hugo](https://gohugo.io/).

Click [here](https://elan-dcc.github.io/) to visit the site. You can also visit it at [elan.healthcampusdenhaag.nl](https://elan.healthcampusdenhaag.nl).

## Installation
If you just want to add or edit a post or publication, you only need to clone
this repo to your device and push your changes. 
As long as your post/publication is in accordance with the
template, there's no need for you to install anything.

For more rigorous changes that require being previewed locally, you
do need to install the following:

Follow Hugo's [quick start](https://gohugo.io/getting-started/quick-start/) to
install the required software for static site generation.

Above will allow you to preview most functionality, but the search feature.
To preview that, you can either install [Scoop](https://scoop.sh/), and run the commands that installs nodejs and nvm,
which will allow us to install everything required to build the search feature:

```sh
scoop install nodejs nvm
```

or you can install the [prebuilt Nodejs installer](https://nodejs.org/en/download/prebuilt-installer).

## Running everything locally

To get everything up and going locally, run:

```sh
hugo && npx -y pagefind --site public --serve
```

and visit http://localhost:1414 (or whatever preview server is used.)


## Adding content (posts, publications and project)
As mentioned before, you do not **need** to have Hugo installed to
add and edit posts, publications and projects. As long as the new
md-files adhere to the right archetype, everything should run smoothly.
However, Hugo does allow you to automagically spawn a file that already
includes the respective archetype.

```sh
hugo new content (nl/en)news/NAME.md
```

To add a publication and retrieve relevant information from pubmed, open the terminal and type:

```sh
python pubmedget.py -pmid PMID
```

Next, go to the file shown in the window to add the datasources, categories and Dutch summary accordingly, and to set draft to false. You may have to make some adjustments to the authors as well (such as changing "Mozart JC" to "Mozart JCWT"). Make sure NOT to use spaces in categories and datasources.

To add a publication without retrieving data from pubmed, type the following:

```sh
hugo new content en/publications/NAME.md
```

To add a project, open the terminal and type

```sh
hugo new content en/projects/NAME.md
```

The front matters and contents of all generated md-files can be edited 
in the respective folders.

Existing content in the content folders can be edited.

### Content summary
There are two ways to create a summary for a post (news). One is by adding
`<!--more-->` to mark the preceding content as the abstraction.

```
+++
title = "title"
date = {{ .Date }}
draft = false
type = "News"
image = "images/post_default_background.png"
+++
Some text
<!--more -->
More text
```

The second is to create a summary, which will not appear in the post

```
+++
title = "title"
date = {{ .Date }}
draft = false
type = "News"
image = "images/post_default_background.png"
summary = "Summary
+++
```

### How to link
There are two types of links: those that link to pages on this website and those
that link to pages on other websites.

Below is an example for the former type of link
```
[here]({{< relref "sciencecommittee" >}} "PHEG Science Committee")
```

Below is an example for an external link
```
[LUMC](https://lumc.nl)
```

### Adding charts dynamically
You can generate charts on the fly using Chart.js. For a complete overview of the available options and customisation possibilities, refer to the [Chart.js documentation](https://www.chartjs.org/docs/latest/).

To add a chart within a page or post, insert the following shortcode into your content. Ensure that each chart has a unique `id`:

```
{{< chart id = "population" >}}
{
    type: 'bar',
    data: {
        labels: [
          'CBS',
          'General Practitioners',
          'Hospitals',
          'Mental Health Care',
          'Perined Children',
          'Perined Mothers',
          'The Netherlands'
        ],
        datasets: [{
            label: 'persons',
            data: [2611953, 734519, 2168282, 409020, 371035, 239615, 16829289],
            backgroundColor: '#9895bc',
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: 'Total population'
            },
            tooltip: {
                displayColors: false
            }
        },
        scales: {
            y: {
                border: {
                    display: false
                }
            },
            x: {
                grid: {
                    display : false
                },
                border: {
                    display: false
                }
            }
        }

    }
}
{{< /chart >}}
```
This will render a bar chart displaying population data for the various ELAN datasets as shown [here](https://elan-dcc.github.io/about_data/).

### Adding/updating images
There are two types of images: the **cover image**, which appears at the top of each post, and **inline images**, used within your post.

To add or update an image, upload the image to the `static/images` directory. 

#### Changing the cover image
To change the cover image, update the following line in your post to reference the new image:
```image = "images/post_default_background.png"```
*(By default, this is set to ``"images/post_default_background.png"``.)*

#### Adding inline images
To include an image within your post, use the following Markdown syntax:
```![Brief description of your image](/images/YOURIMAGE)```
Replace ``YOURIMAGE`` with the filename of your image, ensuring it is stored in the ``static.images`` directory.

## Updating the map of ELAN
The theme elancholia includes a folder "visual_generator". You can
update the data used by the notebook (and potentially the notebook), and run it. Do make sure you have installed the most recent
wijk- en buurtenkaart from [CBS](https://www.cbs.nl/nl-nl/dossier/nederland-regionaal/geografische-data) in `themes\elancholia\visual_generators`.

## Updating the flowchart
The directory `charts` contains all the ``.mmd`` files that are used to generate charts with [mermaid](https://mermaid.js.org/), including the flowchart.

- For the ``flowcharts`` subdirectory, the ``main.mmd`` is considered to be the
main body of the flowcharts shown [here](https://elan-dcc.github.io/researchers/overview_getting_started/).
- "subcharts.mdd" is a special file that stores the names of subcharts across multiple charts. It should be updated as needed.
- All other mmd files are expansions of the mainchart.