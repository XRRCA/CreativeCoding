from pythonosc.dispatcher import Dispatcher
from pythonosc.osc_server import BlockingOSCUDPServer


def print_handler(address, *args):
    print(f"{address}: {args}")


def default_handler(address, *args):
    print(f"DEFAULT {address}: {args}")


dispatcher = Dispatcher()
dispatcher.map("/*", print_handler)
dispatcher.set_default_handler(default_handler)

ip = "127.0.0.1"
port = 9998

server = BlockingOSCUDPServer((ip, port), dispatcher)
server.serve_forever()
