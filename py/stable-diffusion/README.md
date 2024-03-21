# Stable Diffusion in Python

![messiah, Muad'dib, Lisan al Gaib, brave, portrait, film, kodak ultramax, overexposed, 35mm f/2](test.png)

Generate images using text-to-image model inference in Python. Downloads a model to your computer from HuggingFace of your chosing and provides a prompt and a seed to generate `test.png`.

Note there are some inherent limitations with prompt length with this method, some thoughts and a workaround can be found [here](https://medium.com/@natsunoyuki/using-long-prompts-with-the-diffusers-package-with-prompt-embeddings-819657943050).

## Setup

First, in a terminal, navigate to the folder this example is in, then create a virtual environment in the folder `venv`

```
python -m venv venv
```

Activate the virtual environment - packages will install into your `venv` instead of globally, so you can try different examples that require different versions of packages without clashes

```
source venv/bin/activate
```

Install required packages as listed in `requirements.txt`

```
pip install -r requirements.txt
```

Run the example

```
python stable-diffusion.py
```

When you're done, you can exit the virtual environment by running

```
deactivate
```

[Download this example](https://github.com/XRRCA/CreativeCoding/raw/main/py/stable-diffusion/stable-diffusion.zip) | [Download all examples as `.zip`](https://github.com/XRRCA/CreativeCoding/archive/refs/heads/main.zip)
