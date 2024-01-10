# Network Sniffing Hearing

Using the scapy package to listen to tcp traffic on the local network of the device. it returns packet lengths according to tcp flags.

This is the then recieved into PureData/PlugData and effects various paramaters of various cosine oscillators. Very simple, but good at describing what's happening.

## Requirements

+ [PlugData](https://plugdata.org/)
  + There's a couple objects which require the [ELSE](https://github.com/porres/pd-else) library for PureData(pd), which you could install on Vanilla pd, but it's way easier just to install PlugData.
+ Python==3.12.0
  + If you haven't got Python installed on your computer already, I'd recommend install python through [anaconda](https://www.anaconda.com/) for working with python so you can use the conda package manager.
  + run the command ```pip install scapy python-osc``` to install the required packages

## Setup

Navigate to the folder you downloaded

```bash
cd "your relative path"/network_sniffing_hearing/
```
Install packages

```bash
pip install scapy python-osc
```

To run the script in your terminal run the following command

```bash
python ./main.py
```

To cancel the executing script hit ctrl+c.

[Download this example](https://github.com/XRRCA/CreativeCoding/raw/main/puredata/data_sonification/network_sniffing_hearing.zip) | [Download all examples as `.zip`](https://github.com/XRRCA/CreativeCoding/archive/refs/heads/main.zip)
