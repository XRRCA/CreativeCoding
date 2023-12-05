import requests
import json
import time
import sys
from threading import Thread
from pythonosc import udp_client

# Open Sound Control Setup

# Set the IP address and port of the OSC receiver
receiver_ip = "127.0.0.1"  # replace with the actual IP address
receiver_port = 9999  # replace with the actual port number

# Create an OSC client
client = udp_client.SimpleUDPClient(receiver_ip, receiver_port)
print("setup osc client complete")

# forever loop which runs the webrequests and send the json-parsed data over osc.

while True:
    try:
        request = requests.get("https://api.wheretheiss.at/v1/satellites/25544")
        print(f'Send request to {request.url}')
        json_decode = json.loads(request.text)
        lat = "latitude"
        long = "longitude"
        alt = "altitude"
        lat_value = float(json_decode[lat])
        long_value = float(json_decode[long])
        alt_value = float(json_decode[alt])
        print(f'latitude {lat_value}, longitude: {long_value}, altitude: {alt_value}')
        client.send_message(f'/{lat}/', lat_value)
        client.send_message(f'/{long}/', long_value)
        client.send_message(f'/{alt}/', alt_value)
        print("sent values over osc")
        print("press ctrl+c key to quit")
        time.sleep(0.5)
    except KeyboardInterrupt:
        print("Exiting program.")
        sys.exit()








