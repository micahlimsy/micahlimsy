from futu import *
import pandas as pd

def get_candidates():
    # Connect to the local gateway
    quote_ctx = OpenQuoteContext(host='127.0.0.1', port=11111)
    
    # Simple Scan: Get top gainers in the US market
    # In a real bot, you'd use get_stock_filter for specific technicals
    ret, data = quote_ctx.get_plate_stock('US.NASDAQ')
    
    if ret == RET_OK:
        # For now, let's just take the first 5 symbols to test the pipeline
        symbols = data['code'].head(5).tolist()
        print(f"Scanner found {len(symbols)} candidates: {symbols}")
        quote_ctx.close()
        return symbols
    else:
        print("Failed to scan market:", data)
        quote_ctx.close()
        return []

if __name__ == "__main__":
    get_candidates()
