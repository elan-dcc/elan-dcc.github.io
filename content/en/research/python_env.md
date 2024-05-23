+++
title = 'Python environment'
layout = 'page'
+++

# Python environment

In the instructions below, replace 0000 with the code of your project at CBS.

1. Install [Mambaforge](https://github.com/conda-forge/miniforge?tab=readme-ov-file)
1. Open the Miniforge Prompt
1. Create an environment for your package.
    ```sh
    conda create -n 0000
    conda activate 0000
    ```

1. Install pip

    ```sh
    conda install pip
    ```

1. Install all the packages with the pip command. Do not use `conda install` to install packages.

    ```sh
    pip install packagename
    ```

1. Export the environment with pip. Potentially, you could use the `cd` command to go to the preferred directory to save the txt file in, or you could make the path of environment0000.txt an absolute one, such as D:\Users\WillisB\0000\environment0000.txt. If you want to navigate to another drive in the shell, such as 'D:', type `D:`.

    ```sh
    pip freeze > environment0000.txt
    ```

1. Test the file containing all the packages and dependencies locally by removing the environment, reinstating it, and installing all the packages through the file you just generated.

    ```sh
    conda deactivate
    conda remove -n 0000 --all 
    conda create -n 0000 
    conda activate 0000 
    conda install pip 
    pip install environment0000.txt
    ```

1. Test the Python environment
1. Send the generated environment0000.txt to CBS.