import { useState, useEffect } from 'react'

interface AgentStatus {
  status: string;
  message: string;
}

interface Trade {
  id: string;
  ticker: string;
  date: string;
  outcome: string;
  loss: number;
  prob: number;
  model_confidence: number;
  edge: number;
  context: string;
  agents: {
    data: AgentStatus;
    sentiment: AgentStatus;
    timing: AgentStatus;
    model: AgentStatus;
    risk: AgentStatus;
  };
  root_cause: string;
  system_updates: {
    memory: string;
    rules: string;
  };
}

function App() {
  const [trades, setTrades] = useState<Trade[]>([]);

  useEffect(() => {
    fetch('/trades.json')
      .then(res => res.json())
      .then(data => setTrades(data))
      .catch(err => console.error("Error loading trades:", err));
  }, []);

  if (trades.length === 0) return <div>Loading trade data...</div>;

  const trade = trades[0]; // For now show the latest

  return (
    <div className="dashboard">
      <div className="sidebar">
        <div className="tag tag-red">FAILED PREDICTION</div>
        <h1>{trade.ticker}</h1>
        <p>{trade.date}</p>
        <div className="loss">${trade.loss}</div>
        <p>LOSS</p>
        
        <div className="stats">
          <div className="stat-row">
            <span>Probability</span>
            <span>{(trade.prob * 100).toFixed(0)}%</span>
          </div>
          <div className="stat-row">
            <span>Outcome</span>
            <span style={{color: '#F44336'}}>{trade.outcome}</span>
          </div>
          <div className="stat-row">
            <span>Confidence</span>
            <span>{(trade.model_confidence * 100).toFixed(0)}%</span>
          </div>
          <div className="stat-row">
            <span>Edge</span>
            <span>+{(trade.edge * 100).toFixed(0)}%</span>
          </div>
        </div>

        <h3>CONTEXT</h3>
        <p style={{fontSize: '0.9rem', color: '#AAA'}}>{trade.context}</p>
      </div>

      <div className="main-content">
        <header className="header">
          <h2>Post-Mortem Analysis</h2>
          <div className="tag tag-green">✓ Post-mortem complete</div>
        </header>

        <h3>ANALYSIS AGENTS</h3>
        <div className="agent-grid">
          {Object.entries(trade.agents).map(([name, data]) => (
            <div key={name} className="agent-card complete">
              <h4 style={{textTransform: 'capitalize'}}>{name} Agent</h4>
              <div className="tag tag-green">✓ {data.status}</div>
              <p style={{fontSize: '0.8rem', marginTop: '1rem'}}>{data.message}</p>
            </div>
          ))}
        </div>

        <div className="root-cause">
          <h3>🚩 Root Cause Identified</h3>
          <p style={{marginTop: '0.5rem'}}>{trade.root_cause}</p>
        </div>

        <div className="system-updates">
          <div className="update-box">
            <h3>💾 Save to Memory</h3>
            <p>Incident details saved to knowledge base.</p>
            <code>{trade.system_updates.memory}</code>
          </div>
          <div className="update-box">
            <h3>📝 Update Rules</h3>
            <p>New geopolitical override added.</p>
            <pre>{trade.system_updates.rules}</pre>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
