# AI Stock Research Playbook (Research.MD)

Follow this systematic guide for every ticker identified by the scanner. This process pivots the bot from "betting" to professional "asset analysis."

## 1. Research Foundation & Financials (THE MUSTS)
**Prompt:** "Search Yahoo Finance and SEC filings for [TICKER]. Summarize the core financial health:
- **Profitability:** Current Gross, Operating, and Net margins. Are they expanding or contracting over the last 4 quarters?
- **Cash Flow:** What is the Free Cash Flow (FCF)? Is the FCF yield attractive?
- **Valuation:** What is the TTM P/E Ratio and Forward P/E? Compare this to the industry peer average and the company's own 5-year historical mean.
- **Top-line:** Revenue growth vs. EPS growth. Is the growth 'clean' or driven by share buybacks?"

## 2. Management & Insider Audit
**Prompt:** "Analyze the 'Human' side of [TICKER]:
- **Insider Ownership:** What % of shares do the CEO and Board own?
- **Insider Activity:** Detail any buying or selling by executives in the last 6 months. Are they 'putting their money where their mouth is'?
- **Communication:** Analyze the latest quarterly earnings call transcript. Is management transparent about headwinds, or are they evasive?
- **Shareholder Alignment:** Does the company prioritize dividends/buybacks, or is capital being reinvested into low-ROI projects?"

## 3. The Deep Dive (Moat & Catalysts)
**Prompt:** "Generate a Deep Research Report on [TICKER]:
- **Business Model:** Core product in plain English.
- **The Moat:** Top 3 competitors. Does [TICKER] have a 'switching cost' or 'network effect' moat?
- **Catalysts:** Top 3 catalysts (launches, approvals, partnerships) for the next 12 months. Rate: Critical, High, or Strategic."

## 4. Risk & Red Teaming
**Prompt:** "Act as a short-seller. Break the bull case:
- **Accounting:** Any red flags in the 10-K footnotes?
- **Concentration:** Does any single customer represent >20% of revenue?
- **Retail Sentiment:** Search Reddit/Stocktwits for the 3 biggest 'fears' current holders have."

## 5. Technical Analysis
**Prompt:** "Identify: Weekly support/resistance, 200-day MA status, and Relative Strength vs. SPY."

## 6. The Honest Verdict
**Prompt:** "Based on Financials, Management, and Risk, provide a Net View. Only suggest a trade if Edge > 4% and the 'Asymmetry' (low floor vs high ceiling) is verified."
