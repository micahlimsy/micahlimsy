from futu import *
import socket

def test_connection():
    host = '127.0.0.1'
    port = 11111
    
    # Pre-check: Verify if the port is even open to avoid SDK hanging
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.settimeout(2)
        if s.connect_ex((host, port)) != 0:
            print(f"CRITICAL: FutuOpenD is NOT running on {host}:{port}. Please launch it.")
            return False

    try:
        # Initialize context with a short synchronization timeout
        quote_ctx = OpenQuoteContext(host=host, port=port)
        ret, data = quote_ctx.get_market_snapshot(['US.AAPL'])
        
        if ret == RET_OK:
            print("Successfully connected to FutuOpenD!")
            print("AAPL Price:", data['last_price'][0])
            quote_ctx.close()
            return True
        else:
            print("Connected to gateway, but data pull failed. Error:", data)
            quote_ctx.close()
            return False
    except Exception as e:
        print(f"Connection Error: {e}")
        return False

if __name__ == "__main__":
    test_connection()
