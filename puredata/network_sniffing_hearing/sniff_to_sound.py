"""
sniff_to_sound.py: Sniffs network traffic on a specified interface, extracts TCP flags from packets, and sends corresponding OSC messages to a server. You will need to run as a sudo user.
"""

# Author: Kyle Ramsey
# Main functionality based on: https://www.youtube.com/watch?v=s_hbvRTGcUI by Max Krien
# They mention this article in the video: https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0195948#sec028
# I also used this pdf for reference: https://wiki.sans.blue/Tools/pdfs/ScapyCheatSheet_v0.2.pdf
# And this forum post: https://stackoverflow.com/questions/20429674/get-tcp-flags-with-scapy

# Description: Sniffs network traffic on a specified interface, 
# extracts TCP flags from packets, 
# and sends corresponding OSC messages to a server.

# Usage: sudo python3 sniff_to_sound.py

# Notes: for using in PureData with the [oscparse] and [route] objects.

# to import the modules you first need to have a python interpretor installed, recommend conda.
# then in the terminal run: pip install scapy python-osc

# Import the necessary modules
from scapy.all import *
from pythonosc import udp_client

# Define the IP address and port for the OSC server
osc_ip = input("Enter the IP address for the OSC client (default is localhost (127.0.0.1)): ") or "127.0.0.1"
if osc_ip.lower() == "localhost":
    osc_ip = "127.0.0.1"
osc_port = input("Enter the port number for the OSC client (default is 9999): ") or "9999"

# Get the list of network interfaces
show_interfaces()

# Ask the user for the interface to sniff on, default is eth0
i_face = input("Enter the interface to sniff (default is eth0): ")

# Print the settings for OSC server and the interface
print(f"OSC client IP: {osc_ip}")
print(f"OSC client port: {osc_port}")
print(f"Interface: {i_face}")

# Create an OSC client using the provided IP and port
osc_client = udp_client.SimpleUDPClient(osc_ip, int(osc_port))

# Define the TCP flags in a dictionary for easy lookup
tcp_flags = {
    'F': 'FIN',
    'S': 'SYN',
    'R': 'RST',
    'P': 'PSH',
    'A': 'ACK',
    'U': 'URG',
    'E': 'ECE',
    'C': 'CWR',
}

# Callback function to process packets
def process_packet(packet):
    # Get the length of the packet
    p_length = int(len(packet))
    print(f"Packet length: {p_length}")

    # Check if the packet is a TCP packet
    packet_flags = packet['TCP'].flags
    # Iterate over each flag in the packet
    for value in packet_flags:
        # If the flag is in our dictionary, print and send an OSC message
        if value in tcp_flags:
            print(f"TCP value: {tcp_flags[value]}")
            osc_client.send_message(f"/{tcp_flags[value].lower()}", p_length)
            print(f"Sent OSC message: /{tcp_flags[value].lower()} {p_length}")

    # Return a summary of the packet
    return packet.summary()

# Start sniffing network traffic on the specified interface
# For each TCP packet, call the process_packet function
sniff(prn=process_packet, iface=i_face, filter="tcp")
