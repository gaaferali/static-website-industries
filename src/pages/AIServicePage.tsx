import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AI_SERVICES_DATA } from '../data/servicesData';
import ContactForm from '../components/ContactForm';

export default function AIServicePage() {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedMachine, setSelectedMachine] = useState(0);
  const [machineCount, setMachineCount] = useState(25);

  const activeAIService = AI_SERVICES_DATA[activeTab] || AI_SERVICES_DATA[0];

  const machines = [
    {
      name: "CNC Machining Center #4",
      status: "OPTIMAL YIELD",
      healthScore: 98.6,
      temp: "42.1 °C",
      vibration: "0.04 mm/s",
      indexVal: "1,482.35",
      growthVal: "+14.8%",
      // Economic bullish rally curve with realistic ups & downs
      pathD: "M 0 110 C 35 90, 65 115, 100 70 C 135 35, 165 80, 200 55 C 235 30, 265 65, 300 35 C 335 15, 365 40, 400 18",
      fillD: "M 0 110 C 35 90, 65 115, 100 70 C 135 35, 165 80, 200 55 C 235 30, 265 65, 300 35 C 335 15, 365 40, 400 18 V 140 H 0 Z",
      endX: 400,
      endY: 18,
      prediction: "Optimal operational trajectory. Continuous ML telemetry predicts 450+ hours zero-downtime uptime."
    },
    {
      name: "Hydraulic Press Skid B",
      status: "ANOMALY DETECTED",
      healthScore: 78.2,
      temp: "68.4 °C",
      vibration: "0.19 mm/s",
      indexVal: "1,120.80",
      growthVal: "-3.4%",
      // Volatile economic pullback & recovery curve
      pathD: "M 0 45 C 40 25, 75 85, 115 55 C 150 95, 190 120, 230 75 C 270 40, 310 90, 355 60 L 400 72",
      fillD: "M 0 45 C 40 25, 75 85, 115 55 C 150 95, 190 120, 230 75 C 270 40, 310 90, 355 60 L 400 72 V 140 H 0 Z",
      endX: 400,
      endY: 72,
      prediction: "Bearing seal friction anomaly detected on Shaft B2. Schedule preventive service in ~72 hours."
    },
    {
      name: "Robotic Welding Cell #1",
      status: "OPTIMAL YIELD",
      healthScore: 99.1,
      temp: "38.5 °C",
      vibration: "0.02 mm/s",
      indexVal: "1,540.90",
      growthVal: "+22.5%",
      // High growth breakout economic wave curve
      pathD: "M 0 125 C 40 105, 75 115, 115 78 C 150 48, 185 82, 225 42 C 265 22, 305 52, 350 24 L 400 10",
      fillD: "M 0 125 C 40 105, 75 115, 115 78 C 150 48, 185 82, 225 42 C 265 22, 305 52, 350 24 L 400 10 V 140 H 0 Z",
      endX: 400,
      endY: 10,
      prediction: "All joint robotic actuators calibrated. Operating at peak yield efficiency and zero power loss."
    }
  ];

  const currentMachine = machines[selectedMachine];

  const calculateSavings = (count: number) => {
    const total = count * 12500;
    return total.toLocaleString();
  };

  return (
    <div className="app-container-wrapper">
      
      {/* Compact Rounded Page Hero Header */}
      <section className="page-hero-banner hero-compact-banner">
        <img 
          src={activeAIService.image} 
          alt={activeAIService.title} 
          className="page-hero-bg" 
        />
        <div className="page-hero-overlay"></div>

        <div className="page-hero-content">
          <div className="hero-tag-chip">AI INDUSTRIAL SUITE</div>
          <h1 className="page-hero-title">IronCore AI Control Room</h1>
          <p className="page-hero-sub">
            Deploy real-time predictive telemetry, computer-vision optical inspection, energy analytics, and autonomous SCADA control across your plant floor.
          </p>
        </div>
      </section>

      {/* 4 AI Solution Tabs */}
      <section id="ai-tabs" className="floating-dark-card">
        <div className="section-header text-center">
          <span className="section-tag-amber">AI SOLUTIONS CATALOGUE</span>
          <h2 className="section-title-light">Select An AI Industrial Platform</h2>
          <p className="section-subtitle">
            Explore our 4 specialized artificial intelligence operational suites:
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="ai-platform-tabs">
          {AI_SERVICES_DATA.map((ai, i) => (
            <button
              key={ai.id}
              className={`platform-tab-btn ${activeTab === i ? 'active' : ''}`}
              onClick={() => setActiveTab(i)}
            >
              <span className="tab-num">0{i + 1}</span>
              <div className="tab-text">
                <span className="tab-title">{ai.title}</span>
                <span className="tab-sub">{ai.badge}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Detail Box */}
        <div className="platform-detail-box">
          <div className="detail-header">
            <div>
              <span className="detail-badge">{activeAIService.badge}</span>
              <h3 className="detail-title">{activeAIService.title}</h3>
              <p className="detail-sub">{activeAIService.subtitle}</p>
            </div>
            <Link to={`/services/${activeAIService.id}`} className="btn btn-outline">
              Full Specs & Model Details →
            </Link>
          </div>

          <p className="detail-full-desc">{activeAIService.fullDesc}</p>

          <div className="detail-grid-col">
            <div>
              <h4 className="box-heading">Key Capabilities</h4>
              <ul className="cap-list">
                {activeAIService.capabilities.map((cap, idx) => (
                  <li key={idx}>
                    <span className="check-icon">✓</span> {cap}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="box-heading">Technical Specifications</h4>
              <div className="specs-table-box">
                {activeAIService.specifications.map((spec, idx) => (
                  <div key={idx} className="spec-row">
                    <span className="spec-lbl">{spec.label}</span>
                    <span className="spec-val">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Telemetry Simulator with COOL UP-AND-DOWN LINEAR TREND CHART */}
      <section id="ai-sim" className="floating-dark-card">
        <div className="section-header text-center">
          <span className="section-tag-amber">LIVE LINEAR TELEMETRY SIMULATOR</span>
          <h2 className="section-title-light">Real-Time Economic & Yield Trend Console</h2>
          <p className="section-subtitle">
            Simulate dynamic up-and-down oscillation curves, yield trajectories, and anomaly peaks:
          </p>
        </div>

        <div className="telemetry-dashboard">
          <div className="dash-header">
            <div className="dash-tabs">
              {machines.map((m, idx) => (
                <button
                  key={idx}
                  className={`dash-tab ${selectedMachine === idx ? 'tab-active' : ''}`}
                  onClick={() => setSelectedMachine(idx)}
                >
                  ● {m.name}
                </button>
              ))}
            </div>
            <div className="live-status-pill">
              ⚡ LIVE LINEAR WAVE (50kHz EDGE)
            </div>
          </div>

          <div className="dash-body">
            <div className="dash-stats-grid">
              <div className="dash-stat-box">
                <span className="stat-name">AI Yield Index Points</span>
                <div className="stat-val optimal-text">
                  {currentMachine.indexVal} <span style={{ fontSize: '0.9rem', color: '#D98B32' }}>PTS</span>
                </div>
                <span className="stat-status-badge">Trajectory Trend: {currentMachine.growthVal}</span>
              </div>

              <div className="dash-stat-box">
                <span className="stat-name">Asset Health Metric</span>
                <div className={`stat-val ${currentMachine.healthScore < 85 ? 'warning-text' : 'optimal-text'}`}>
                  {currentMachine.healthScore}%
                </div>
                <span className="stat-sub">Status: {currentMachine.status}</span>
              </div>

              <div className="dash-stat-box">
                <span className="stat-name">Vibration Linear Peak</span>
                <div className="stat-val">{currentMachine.vibration}</div>
                <span className="stat-sub">Sensors: Multi-Axis Infrared</span>
              </div>
            </div>

            {/* ELEGANT FINANCIAL/ECONOMIC STYLE TREND CHART */}
            <div className="cool-linear-chart-container">
              <div className="chart-top-bar">
                <div className="chart-title-group">
                  <span className="chart-pulse-dot"></span>
                  <span className="chart-main-title">IronCore Industrial Market Index (IX-900)</span>
                </div>
                <div className="chart-time-labels">
                  <span>08:00</span>
                  <span>10:00</span>
                  <span>12:00</span>
                  <span>14:00</span>
                  <span>16:00 (LIVE TRADING)</span>
                </div>
              </div>
              
              <div className="economic-chart-layout">
                {/* Left Y-Axis Index Markers */}
                <div className="y-axis-labels">
                  <span>1,600.00</span>
                  <span>1,400.00</span>
                  <span>1,200.00</span>
                  <span>1,000.00</span>
                  <span>800.00</span>
                </div>

                <div className="chart-svg-box">
                  <svg viewBox="0 0 400 140" className="cool-trend-svg" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="economicWaveGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#D98B32" stopOpacity="0.38" />
                        <stop offset="60%" stopColor="#D98B32" stopOpacity="0.08" />
                        <stop offset="100%" stopColor="#061A2E" stopOpacity="0" />
                      </linearGradient>
                      <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="2.5" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                      </filter>
                    </defs>

                    {/* Financial Grid Lines */}
                    <line x1="0" y1="20" x2="400" y2="20" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
                    <line x1="0" y1="55" x2="400" y2="55" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
                    <line x1="0" y1="90" x2="400" y2="90" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
                    <line x1="0" y1="125" x2="400" y2="125" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />

                    <line x1="100" y1="0" x2="100" y2="140" stroke="rgba(255,255,255,0.04)" strokeDasharray="2 2" />
                    <line x1="200" y1="0" x2="200" y2="140" stroke="rgba(255,255,255,0.04)" strokeDasharray="2 2" />
                    <line x1="300" y1="0" x2="300" y2="140" stroke="rgba(255,255,255,0.04)" strokeDasharray="2 2" />

                    {/* Baseline Comparison Index Line */}
                    <path 
                      d="M 0 100 Q 100 85 200 95 T 400 70" 
                      fill="none" 
                      stroke="#607080" 
                      strokeWidth="1.5" 
                      strokeDasharray="4 4" 
                      opacity="0.4"
                    />

                    {/* Gradient Area Shading */}
                    <path 
                      d={currentMachine.fillD} 
                      fill="url(#economicWaveGrad)" 
                    />

                    {/* Main Up-and-Down Financial Curve */}
                    <path 
                      d={currentMachine.pathD} 
                      fill="none" 
                      stroke="#D98B32" 
                      strokeWidth="3" 
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      filter="url(#glowFilter)"
                    />

                    {/* Live Ticker Endpoint Pulsing Dot (TradingView style) */}
                    <circle 
                      cx={currentMachine.endX} 
                      cy={currentMachine.endY} 
                      r="9" 
                      fill="rgba(217, 139, 50, 0.25)" 
                      className="ticker-pulse-ring"
                    />
                    <circle 
                      cx={currentMachine.endX} 
                      cy={currentMachine.endY} 
                      r="4.5" 
                      fill="#D98B32" 
                      stroke="#FFFFFF"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* AI Prescriptive Insight */}
            <div className="prediction-box">
              <div className="pred-icon">⚡</div>
              <div>
                <h4>AI Prescriptive Operational Insight</h4>
                <p>{currentMachine.prediction}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="floating-section-card">
        <div className="section-header text-center">
          <span className="section-tag-amber">BUSINESS IMPACT</span>
          <h2 className="section-title-dark">Calculate Estimated Annual Downtime Savings</h2>
        </div>

        <div className="roi-calculator-card">
          <div className="calc-slider-box">
            <label htmlFor="machineSlider" className="slider-label">
              <span>Number of Heavy Industrial Machines:</span>
              <strong className="slider-val">{machineCount} Heavy Assets</strong>
            </label>
            <input
              id="machineSlider"
              type="range"
              min="5"
              max="200"
              step="5"
              value={machineCount}
              onChange={e => setMachineCount(parseInt(e.target.value))}
              className="custom-range-slider"
            />
          </div>

          <div className="calc-result-box">
            <div className="res-title">Estimated Annual Savings</div>
            <div className="res-amount">${calculateSavings(machineCount)}</div>
            <p className="res-desc">
              Based on an average 35% reduction in unscheduled downtime and 22% cut in spare parts inventory costs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Inquiry */}
      <section id="ai-quote" className="floating-dark-card">
        <div className="section-header text-center">
          <span className="section-tag-amber">SCHEDULE 72-HOUR POC DEMO</span>
          <h2 className="section-title-light">Deploy AI In Your Facility</h2>
        </div>
        <ContactForm dark />
      </section>

      <style>{`
        .section-subtitle {
          color: #607080;
          font-size: 0.92rem;
          margin-top: 0.4rem;
        }

        .ai-platform-tabs {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          margin-top: 2rem;
          margin-bottom: 2rem;
        }

        .platform-tab-btn {
          background: #09233D;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          padding: 1rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
          text-align: left;
          transition: all 0.2s;
        }

        .platform-tab-btn.active {
          background: #D98B32;
          border-color: #D98B32;
        }

        .tab-num {
          font-family: var(--font-heading);
          font-size: 1.2rem;
          font-weight: 900;
          color: #D98B32;
        }

        .platform-tab-btn.active .tab-num { color: #FFFFFF; }

        .tab-text { display: flex; flex-direction: column; }
        .tab-title { font-size: 0.88rem; font-weight: 800; color: #FFFFFF; }
        .tab-sub { font-size: 0.72rem; color: #607080; }
        .platform-tab-btn.active .tab-sub { color: rgba(255,255,255,0.9); }

        .platform-detail-box {
          background: #09233D;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 14px;
          padding: 2.25rem;
        }

        .detail-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.25rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .detail-badge {
          background: rgba(217, 139, 50, 0.2);
          color: #D98B32;
          font-family: var(--font-heading);
          font-size: 0.75rem;
          font-weight: 800;
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
        }

        .detail-title {
          font-size: 1.75rem;
          font-weight: 800;
          color: #FFFFFF;
          margin-top: 0.3rem;
        }

        .detail-sub {
          font-size: 0.92rem;
          color: #D98B32;
          font-weight: 700;
        }

        .detail-full-desc {
          font-size: 0.98rem;
          color: #E8EDF1;
          line-height: 1.65;
          margin-bottom: 2rem;
        }

        .detail-grid-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.25rem;
        }

        .box-heading {
          font-size: 1.05rem;
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 1rem;
        }

        .cap-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .cap-list li {
          font-size: 0.88rem;
          color: #E8EDF1;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .check-icon { color: #D98B32; font-weight: 900; }

        .specs-table-box {
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          overflow: hidden;
        }

        .spec-row {
          display: flex;
          justify-content: space-between;
          padding: 0.75rem 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 0.88rem;
        }

        .spec-lbl { color: #607080; }
        .spec-val { color: #FFFFFF; font-weight: 700; }

        /* Simulator */
        .telemetry-dashboard {
          background: #09233D;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 14px;
          overflow: hidden;
          margin-top: 2rem;
        }

        .dash-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 1.5rem;
          background: #061A2E;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          flex-wrap: wrap;
          gap: 1rem;
        }

        .dash-tabs { display: flex; gap: 0.5rem; }

        .dash-tab {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #607080;
          padding: 0.4rem 0.8rem;
          border-radius: 6px;
          font-size: 0.82rem;
          font-weight: 700;
          cursor: pointer;
        }

        .dash-tab.tab-active {
          background: #D98B32;
          color: #FFFFFF;
          border-color: #D98B32;
        }

        .live-status-pill {
          font-size: 0.75rem;
          font-weight: 800;
          color: #D98B32;
          font-family: var(--font-heading);
        }

        .dash-body { padding: 2rem; }

        .dash-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
          margin-bottom: 2rem;
        }

        .dash-stat-box {
          background: #061A2E;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 10px;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
        }

        .stat-name { font-size: 0.8rem; color: #607080; }
        .stat-val { font-family: var(--font-heading); font-size: 1.8rem; font-weight: 900; color: #FFFFFF; margin: 0.2rem 0; }
        .optimal-text { color: #34D399; }
        .warning-text { color: #D98B32; }
        .stat-status-badge { font-size: 0.75rem; font-weight: 800; color: #607080; }
        .stat-sub { font-size: 0.72rem; color: #607080; }

        /* Cool Up-and-Down Linear Trend Chart Box */
        .cool-linear-chart-container {
          background: #061A2E;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 1.5rem;
          margin-bottom: 2rem;
          box-shadow: 0 8px 24px rgba(6, 26, 46, 0.4);
        }

        .chart-top-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .chart-title-group {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .chart-pulse-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #D98B32;
          box-shadow: 0 0 10px #D98B32;
          animation: pulseGlow 1.5s infinite alternate;
        }

        @keyframes pulseGlow {
          from { opacity: 0.4; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1.2); }
        }

        .chart-main-title {
          font-family: var(--font-heading);
          font-size: 0.92rem;
          font-weight: 800;
          color: #FFFFFF;
        }

        .chart-time-labels {
          display: flex;
          gap: 1.5rem;
          font-size: 0.72rem;
          color: #607080;
          font-family: var(--font-heading);
          font-weight: 700;
        }

        .economic-chart-layout {
          display: flex;
          gap: 1rem;
          align-items: stretch;
        }

        .y-axis-labels {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          font-family: var(--font-heading);
          font-size: 0.68rem;
          font-weight: 700;
          color: #607080;
          padding-right: 0.5rem;
          border-right: 1px stroke rgba(255, 255, 255, 0.08);
          user-select: none;
        }

        .chart-svg-box {
          height: 180px;
          width: 100%;
          flex: 1;
        }

        .cool-trend-svg {
          width: 100%;
          height: 100%;
        }

        .ticker-pulse-ring {
          animation: ringExpand 1.6s infinite ease-out;
          transform-origin: center;
        }

        @keyframes ringExpand {
          0% { r: 5px; opacity: 0.8; }
          100% { r: 16px; opacity: 0; }
        }

        .prediction-box {
          display: flex;
          gap: 1rem;
          background: rgba(217, 139, 50, 0.1);
          border: 1px solid rgba(217, 139, 50, 0.3);
          border-radius: 10px;
          padding: 1.25rem;
          align-items: flex-start;
        }

        .pred-icon { font-size: 1.4rem; color: #D98B32; }
        .prediction-box h4 { font-size: 0.98rem; font-weight: 800; color: #FFFFFF; margin-bottom: 0.2rem; }
        .prediction-box p { font-size: 0.88rem; color: #E8EDF1; }

        /* ROI Card */
        .roi-calculator-card {
          max-width: 800px;
          margin: 1.5rem auto 0;
          padding: 2.25rem;
          background: #E8EDF1;
          border: 1px solid #DDE4EA;
          border-radius: 14px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.25rem;
          align-items: center;
        }

        .calc-slider-box { display: flex; flex-direction: column; gap: 1rem; }
        .slider-label { display: flex; flex-direction: column; gap: 0.4rem; font-size: 0.9rem; color: #061A2E; font-weight: 700; }
        .slider-val { font-size: 1.4rem; color: #D98B32; }
        .custom-range-slider { width: 100%; accent-color: #D98B32; height: 8px; cursor: pointer; }

        .calc-result-box {
          background: #061A2E;
          border: 1px solid #D98B32;
          border-radius: 10px;
          padding: 1.5rem;
          text-align: center;
        }

        .res-title { font-size: 0.78rem; color: #607080; text-transform: uppercase; letter-spacing: 0.05em; }
        .res-amount { font-family: var(--font-heading); font-size: 2.3rem; font-weight: 900; color: #D98B32; margin: 0.4rem 0; }
        .res-desc { font-size: 0.78rem; color: #607080; }

        @media (max-width: 992px) {
          .ai-platform-tabs { grid-template-columns: repeat(2, 1fr); }
          .detail-grid-col, .dash-stats-grid, .roi-calculator-card { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
