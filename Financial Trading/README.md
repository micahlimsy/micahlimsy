# Moomoo AI Trading Bot
This project implements an AI-powered trading bot for Moomoo using the Gemini CLI and FutuOpenAPI.

## Architecture
- **Step 1: Scan** - Filter stocks using technical indicators via FutuAPI.
- **Step 2: Research** - Analyze news and sentiment using Gemini's web search.
- **Step 3: Predict** - Estimate price move probability.
- **Step 4: Risk** - Calculate position size using Kelly Criterion.
- **Step 5: Execute** - Place orders via FutuOpenD.

## Setup
1. Install [FutuOpenD](https://www.futunn.com/en/opensource).
2. Install dependencies: `pip install futu-api pandas`.
3. Configure `config.json` (to be created).

# Dashboard
1. Open terminal in directory "Financial Trading"
2. cd dashboard
3. run npm dev
4. open localhost link to view dashboard