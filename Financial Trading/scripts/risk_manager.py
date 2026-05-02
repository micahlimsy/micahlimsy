import sys

def calculate_kelly_size(win_prob, win_loss_ratio, total_equity, fractional_kelly=0.25):
    """
    f* = (p * b - q) / b
    where:
    f* is the fraction of the current bankroll to wager.
    p is the probability of a win (0 to 1).
    q is the probability of a loss (1 - p).
    b is the net odds received on the wager (win_loss_ratio).
    """
    p = win_prob
    q = 1.0 - p
    b = win_loss_ratio

    if b <= 0:
        return 0

    kelly_f = (p * b - q) / b
    
    # Use fractional Kelly to reduce volatility
    adjusted_f = kelly_f * fractional_kelly
    
    # Safety Cap: Never risk more than 2% of total equity on one trade
    safe_f = min(adjusted_f, 0.02)
    
    # Ensure we don't return a negative size (no edge)
    final_f = max(safe_f, 0)
    
    position_size = total_equity * final_f
    return position_size

if __name__ == "__main__":
    # Example usage: python risk_manager.py 0.65 2.0 10000
    if len(sys.argv) < 4:
        print("Usage: python risk_manager.py <win_prob> <win_loss_ratio> <total_equity>")
        sys.exit(1)
        
    win_p = float(sys.argv[1])
    wl_ratio = float(sys.argv[2])
    equity = float(sys.argv[3])
    
    size = calculate_kelly_size(win_p, wl_ratio, equity)
    print(f"Calculated Position Size: ${size:.2f}")
