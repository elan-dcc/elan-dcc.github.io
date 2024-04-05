# ELAN site

A static site featuring information for ELAN researchers and stakeholders.
It is made and build using the static site generator [Hugo](https://gohugo.io/).

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
To preview that, install [Scoop](https://scoop.sh/). And run the command that installs nodejs and nvm,
which will allow us to install everything required to build the search feature:

```sh
scoop install nodejs nvm
```

## Running everything locally

To get everything up and going locally, just run:

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
hugo new content \(nl/\)news/NAME.md
```

To add a publication, open the terminal and type

```sh
hugo new content publications/NAME.md
```

To add a project, open the terminal and type

```sh
hugo new content projects/NAME.md
```

The front matters and contents of all generated md-files can be edited 
in the respective folders.


Existing content in the content folders can be edited.

### Content summary
There are two ways to create a summary for a post (news). One is by adding
`<!--more-->` to mark the preceding content as the abstraction.

---
+++
title = "title"
date = {{ .Date }}
draft = false
type = "News"
+++
Some text
<!--more -->
More text
---

The second is to create a summary, which will not appear in the post

---
+++
title = "title"
date = {{ .Date }}
draft = false
type = "News"
summary = "Summary
+++
---


## Updating the graphs
The theme elancholia includes a folder "visual_generator". You can
update the data used there, update the jupyter notebook, and run it.
The SVGs will be updated automatically. The hugo command needs to be
ran to update the