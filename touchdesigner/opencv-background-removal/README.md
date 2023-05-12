# OpenCV Background Removal

![A black and white video showing background removal - the empty background is now white and the foreground, which is a man sitting looking at the screen, is white](./bgr.gif)

This repository serves as an example of converting OpenCV python code for use in TouchDesigner script TOPs. Compare and contrast `opencv-background-removal.py` with the contents of the script TOP to get started with custom OpenCV python code in TouchDesigner.

For a more complete background removal method, you may want to use [mmhmm](mmhmm.app/download).

## Running the Python example

First, install the required packages in a virtual environment

```
python3 -m venv venv
source venv/bin/activate
pip3 install -r requirements.txt
```

Then run the script

```
python3 opencv-background-removal.py
```
