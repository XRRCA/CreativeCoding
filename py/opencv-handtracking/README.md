# OpenCV Hand Tracking

![A hand with lines drawn over it indicating a computer is tracking the hands location](opencv-handtracking.jpg)

Simple hand tracking with OpenCV - turns a circle a different color when a tracked hand gets close.

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
python opencv-handtracking.py
```

When you're done, you can exit the virtual environment by running

```
deactivate
```

[Download this example](https://github.com/XRRCA/CreativeCoding/raw/main/py/opencv-handtracking/opencv-handtracking.zip) | [Download all examples as `.zip`](https://github.com/XRRCA/CreativeCoding/archive/refs/heads/main.zip)

Adapted from https://www.analyticsvidhya.com/blog/2021/07/building-a-hand-tracking-system-using-opencv/
