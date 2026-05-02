# Trading Bot Math & Formulas

These formulas are used by the AI to calibrate the "Edge" and by the Python scripts for position sizing.

## 1. Market Edge
`Edge = p_model - p_market`
- **p_model:** The true probability calculated by the AI ensemble.
- **p_market:** The probability implied by current prices (e.g., if a stock is at $100 and target is $110, p_market might be the delta of the call option).
- **Threshold:** Only trade when `Edge > 0.04` (4%).

## 2. Kelly Criterion (Position Sizing)
`f* = (p * b - q) / b`
- **f*:** Fraction of total equity to wager.
- **p:** Probability of a win.
- **q:** Probability of a loss (1 - p).
- **b:** Net odds (Win/Loss ratio).
- **Fractional Kelly:** We use `0.25 * f*` to reduce variance and "gambler's ruin."

## 3. Mispricing Score (Z-Score)
`Delta = (p_model - p_market) / standard_deviation`
- Measures how far our model diverges from market consensus. Higher Z-score = higher confidence opportunity.

## 4. Brier Score (Calibration)
`BS = (1/n) * sum(predicted - outcome)^2`
- Used in the Post-Mortem. Measures how accurate the AI's probability estimates actually are. Lower is better (< 0.25).
