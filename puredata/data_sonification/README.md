# Data Sonification Example

Using the <https://wheretheiss.at/> api, we do regular webrequests and send the ISSs latitude, longtitude, and altitude over the local network (localhost or 127.0.0.1) using the Open Sound Control protocol.

This is the then recieved into PureData/PlugData and effects various paramaters of a sawtooth oscillator such as the phase, filter cutoff, frequency, and pulsewidth modulation.

## Requirements

+ [PlugData](https://plugdata.org/)
  + There's a couple objects which require the [ELSE](https://github.com/porres/pd-else) library for PureData(pd), which you could install on Vanilla pd, but it's way easier just to install PlugData.
+ Python==3.12.0
  + If you haven't got Python installed on your computer already, I'd recommend install python through [anaconda](https://www.anaconda.com/) for working with python so you can use the conda package manager.

## Setup

Navigate to the folder you downloaded

```bash
cd "your relative path"/python-osc-handler/
```

There's two ways to setup your python environment you can either install the requirements

```bash
pip install -r requirements.txt
```

or you can import the conda environment from the ```environment.yml```

```bash
conda env create --name envname --file=environments.yml
```

Change 'envname' to a name which suits you.

Then activate the environment.

```bash
conda activate envname
```

To run the script in your terminal run the following command

```bash
python .\src\main.py
```

To cancel the executing script hit ctrl+c.

[Download this example](https://github.com/XRRCA/CreativeCoding/raw/main/puredata/data_sonification/data_sonification.zip) | [Download all examples as `.zip`](https://github.com/XRRCA/CreativeCoding/archive/refs/heads/main.zip)
