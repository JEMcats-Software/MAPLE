import http.server
import socketserver
import ssl

PORT = 8090
DIRECTORY = "."
SECURE = True  # Set to True to enable HTTPS
CERT_FILE = "cert.pem"  # Path to your certificate
KEY_FILE = "key.pem"    # Path to your private key

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

with socketserver.TCPServer(("", PORT), CustomHandler) as httpd:
    if SECURE:
        httpd.socket = ssl.wrap_socket(
            httpd.socket,
            server_side=True,
            certfile=CERT_FILE,
            keyfile=KEY_FILE,
            ssl_version=ssl.PROTOCOL_TLS
        )
        print(f"Serving '{DIRECTORY}' at https://localhost:{PORT}")
    else:
        print(f"Serving '{DIRECTORY}' at http://localhost:{PORT}")
    httpd.serve_forever()