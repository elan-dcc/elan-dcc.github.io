import itertools
import glob
import os
import re

# get flowchart files
flowchart = [os.path.normpath(i) for i in glob.glob("charts/flowchart/*.mmd")]
main = os.path.normpath(glob.glob("charts/flowchart/main.mmd")[0])
flowchart.remove(main)

# get other possible flow charts
files_graphs = [os.path.normpath(i) for i in glob.glob("charts/*.mmd")]

outputdir = "mermaidchartsoutputs/"
# empty output directory (mmmds)
for f in glob.glob(outputdir + "*.mmd"):
    os.remove(f)

# empty output directory (svgs)
svgdir = "static/charts"
for f in glob.glob(svgdir + "*.svg"):
    os.remove(f)

# read in the  of the flowchart
graphs_flowchart = {}

for f in flowchart:
    with open(f, "r", encoding = "utf8") as contents:
        name = f.rsplit('/', 1)[-1][:-4]
        if name != "subgraphs":
            contents.readline() # skip first line
        contents = contents.read()
        graphs_flowchart[name] = contents

# get lists of reoccuring subgraphs
subgraphs = []
if "subgraphs" in graphs_flowchart:
    subgraphs = graphs_flowchart.pop("subgraphs").splitlines()

# sort keys
sorted_graphs = list(graphs_flowchart.keys())
sorted_graphs.sort()

# read in the main graph
with open(main, "r", encoding = "utf8") as contents:
    contents = contents.read()
    graph_main = contents

graphs = {}
# read in other graphs:
for f in files_graphs:
    with open(f, "r", encoding = "utf8") as contents:
        name = f.rsplit('/', 1)[-1][:-4]
        contents = contents.read()
        graphs[name] = contents


def extract_subgraphs(line, content):
    match = re.search(rf'{(re.escape(line))}\s*\n(.*?)\s*\nend', content, re.DOTALL)
    if match:
        items = set()
        for line in match.group(1).strip().split("\n"):
            items.add(line.strip())
        return items
    return set()

outputfiles = []
# make the mmd files with the different combinations
for x in range(len(graphs_flowchart) + 1):
    combinations = list(itertools.combinations(sorted_graphs, x))
    for combination in combinations:
        output = outputdir + "main" + "".join(combination) + ".mmd"
        outputfiles.append("main" + "".join(combination))
        with open(output, "w", encoding = "utf8") as output: 
            output.write(graph_main + "\n")
            if combination == ():
                break
            my_subgraphs = [] #mermaid needs all subcharts to be together
            for graph in combination:
                subchart = extract_subgraphs(subgraphs[0], graphs_flowchart[graph])
                print(subchart)
                my_subgraphs.append(subchart)
                cleaned_chart = re.sub(rf'({re.escape(subgraphs[0])})\s*\n(.*?)\s*\nend', '', graphs_flowchart[graph], flags = re.DOTALL).strip()
                if cleaned_chart:
                    print(cleaned_chart)
                    output.write(cleaned_chart + "\n")
            if my_subgraphs:
                output.write(f"{subgraphs[0]}\n")
                for item in my_subgraphs:
                    output.write(f"{item}\n")
                output.write("end\n\n")

for key, value in graphs.items():
    output = outputdir + "".join(key) + ".mmd"
    outputfiles.append("".join(key))
    with open(output, "w", encoding = "utf8") as output: 
            output.write(value + "\n")

# generate cli commands

with open(outputdir + "commands.sh", "w", encoding = "utf8") as output: 
    for file in outputfiles:
        output.write("aa-exec --profile=chrome mmdc --configFile .github/config.json -i  {}/{}.mmd -o {}/{}.svg -b transparent \n".format(outputdir, file, svgdir, file))
     


