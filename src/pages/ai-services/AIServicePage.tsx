import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AI_SERVICES_DATA } from '../../data/services';
import ContactForm from '../../components/forms/ContactForm';
import './AIServicePage.css';

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
    </div>
  );
}
