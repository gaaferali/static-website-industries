// ─────────────────────────────────────────────
//  IronCore Industries — All Data
// ─────────────────────────────────────────────

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  badge: string;
  capabilities: string[];
  specifications: { label: string; value: string }[];
  industriesServed: string[];
  isAI?: boolean;
  metrics?: { label: string; value: string }[];
}

export const COMPANY_INFO = {
  name: 'IronCore Industries',
  tagline: 'Building Industry. Powering Progress.',
  aboutLead: 'IronCore Industries delivers industrial manufacturing and engineering solutions designed for efficiency, reliability, and long-term performance.',
  aboutBody:
    'We work with businesses, contractors, and industrial organizations to manufacture components, develop engineered solutions, and support industrial projects from planning through production and delivery.',
  mission:
    'To deliver dependable, high-precision industrial solutions that empower modern infrastructure, energy, and manufacturing operations through innovation, craftsmanship, and uncompromised quality.',
  contact: {
    phone: '+1 (800) 555-IRON',
    phoneAlt: '+1 (555) 019-2834',
    email: 'contact@ironcore-industries.com',
    emailQuotes: 'quotes@ironcore-industries.com',
    address: '100 Industrial Parkway, Sector 4, Heavy Tech Zone',
    hours: 'Mon – Fri: 7:00 AM – 6:00 PM EST (Emergency Ops: 24/7)',
  },
  stats: [
    { value: '15+', label: 'Years of Experience' },
    { value: '650+', label: 'Projects Completed' },
    { value: '99.94%', label: 'Precision Rate' },
    { value: '1.2M+', label: 'Accident-Free Hours' },
  ],
  highlights: [
    'ISO 9001:2015 & AWS D1.1 Certified',
    'In-House CMM Laser Inspection',
    'Full Material Traceability & Mill Test Reports',
  ],
};

// ─── CORE INDUSTRIAL SERVICES (4 Items) ──────────────────────────────────────
export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'precision-manufacturing',
    title: 'Precision Manufacturing',
    subtitle: 'High-Tolerance CNC Machining',
    shortDesc:
      'Computer-controlled CNC turning, milling, and high-tolerance component manufacturing for critical industrial applications.',
    fullDesc:
      'Our state-of-the-art precision manufacturing facility utilizes multi-axis CNC machines and automated quality verification systems. We produce custom mechanical parts, shafts, gears, and structural assemblies engineered to micrometer accuracy.',
    image: '/images/service_precision.png',
    badge: 'ISO 9001 Certified',
    capabilities: [
      '5-Axis CNC Milling & Precision Turning',
      'Sub-micron Tolerance Machining',
      'Automated Coordinate Measuring (CMM)',
      'High-Volume Prototype to Mass Production',
      'Custom Tooling & Fixture Design',
    ],
    specifications: [
      { label: 'Max Part Size', value: '3,000 mm × 1,500 mm' },
      { label: 'Tolerance Standard', value: '±0.005 mm (ISO 2768-m)' },
      { label: 'Materials', value: 'Titanium, Stainless, Inconel, Aluminum, Alloys' },
      { label: 'Quality Inspection', value: 'Laser Scanning & 3D CMM Reports' },
    ],
    industriesServed: ['Energy & Utilities', 'Heavy Equipment Mfg', 'Aerospace & Defense', 'Automotive Assembly'],
  },
  {
    id: 'fabrication-assembly',
    title: 'Fabrication & Assembly',
    subtitle: 'Heavy Steel Welding & Structural Systems',
    shortDesc:
      'Full-scale structural steel fabrication, certified MIG/TIG welding, plate bending, and large industrial system assembly.',
    fullDesc:
      "IronCore's fabrication bay handles complex structural steel assemblies, pressure vessels, modular skids, and heavy metal frame structures. Our certified welders and automated robotic cells ensure structural integrity.",
    image: '/images/service_fabrication.png',
    badge: 'AWS Certified Welding',
    capabilities: [
      'Robotic & Certified Manual Welding (MIG, TIG, SAW)',
      'Heavy Plate Rolling & Brake Forming',
      'Structural Steel Truss & Skid Fabrication',
      'Non-Destructive Testing (Ultrasonic & Radiographic)',
      'Surface Preparation & Protective Coating',
    ],
    specifications: [
      { label: 'Crane Capacity', value: '50 Tons Single Hook' },
      { label: 'Welding Standards', value: 'AWS D1.1, ASME Section IX' },
      { label: 'Max Plate Thickness', value: '50 mm High-Yield Steel' },
      { label: 'Coating Systems', value: 'Epoxy Primer, Zinc Rich & Thermal Spray' },
    ],
    industriesServed: ['Civil Infrastructure', 'Mining & Extraction', 'Offshore Energy', 'Industrial Warehousing'],
  },
  {
    id: 'industrial-equipment',
    title: 'Industrial Equipment',
    subtitle: 'Turnkey Mechanical Systems',
    shortDesc:
      'Manufacturing and integration of industrial pumps, compressors, conveyors, and heavy mechanical power units for 24/7 operation.',
    fullDesc:
      'We design, build, and refurbish heavy-duty industrial equipment tailored to demanding factory environments. From custom hydraulic power units to high-volume fluid movement systems, IronCore equipment is engineered for continuous reliability.',
    image: '/images/service_equipment.png',
    badge: 'Heavy Duty Rated',
    capabilities: [
      'Custom Hydraulic & Pneumatic Systems',
      'Industrial Pump Skids & Fluid Transfer Packages',
      'Conveyor Systems & Material Handling',
      'Factory Machinery Overhaul & Retrofit',
      'Factory Acceptance Testing (FAT) & Commissioning',
    ],
    specifications: [
      { label: 'Power Range', value: '15 kW to 1,500 kW' },
      { label: 'Operating Pressure', value: 'Up to 10,000 PSI Hydraulic' },
      { label: 'Testing', value: 'Hydrostatic & Dynamic Load Bays' },
      { label: 'Warranty', value: '3-Year Operational Guarantee' },
    ],
    industriesServed: ['Chemical Processing', 'Water Treatment', 'Material Processing', 'Power Plants'],
  },
  {
    id: 'engineering-solutions',
    title: 'Engineering Services',
    subtitle: 'Custom Design & FEA Analysis',
    shortDesc:
      'End-to-end mechanical engineering, finite element analysis, reverse engineering, and industrial process optimization.',
    fullDesc:
      'Our licensed engineers translate complex operational needs into optimized 3D CAD models, performing stress simulation, thermal analysis, and manufacturability reviews before production begins.',
    image: '/images/service_engineering.png',
    badge: 'Licensed PE Team',
    capabilities: [
      '3D CAD Modeling & Digital Twin Design',
      'Finite Element Analysis (FEA) — Structural & Thermal',
      'Design for Manufacturability (DFM) Review',
      'On-Site 3D Laser Scanning & Field Surveys',
      'Regulatory Compliance Documentation',
    ],
    specifications: [
      { label: 'Software', value: 'SolidWorks Enterprise, ANSYS FEA, AutoCAD' },
      { label: 'Deliverables', value: 'Full Drawings, FEA Reports, BOM' },
      { label: 'Field Surveying', value: 'High-Precision LiDAR Mapping' },
      { label: 'Standards', value: 'ISO, OSHA, DIN, BS Compliance' },
    ],
    industriesServed: ['Government Contracting', 'Plant Expansion', 'R&D Prototyping', 'Renewable Energy'],
  },
];

// ─── AI INDUSTRIAL SERVICES (4 Distinct Items) ──────────────────────────────
export const AI_SERVICES_DATA: ServiceItem[] = [
  {
    id: 'ai-predictive-telemetry',
    title: 'AI Predictive Telemetry',
    subtitle: 'Vibration & Wear Anomaly Detection',
    shortDesc:
      'IoT vibration telemetry and machine learning models predicting component micro-friction and bearing failure weeks before breakdown.',
    fullDesc:
      "IronCore's AI Predictive Telemetry platform connects wireless multi-axis vibration & acoustic emission sensors to edge AI microcontrollers. Machine learning models continuously compare real-time FFT spectrum data against baseline digital twin signatures.",
    image: '/images/service_ai.png',
    badge: 'AI Telemetry',
    isAI: true,
    capabilities: [
      'Wireless Multi-Axis Vibration Sensors (10kHz FFT)',
      'Remaining Useful Life (RUL) Predictive Analytics',
      'Automated Alarm Dispatch via MQTT & Webhooks',
      'Non-Invasive Magnetic Retrofit on Legacy Pumps',
      '24/7 Cloud & On-Premises Monitoring Console',
    ],
    specifications: [
      { label: 'Sensor Sampling', value: '50,000 samples/sec Edge' },
      { label: 'Accuracy Rate', value: '98.6% Anomaly Precision' },
      { label: 'Protocols', value: 'Modbus, OPC UA, MQTT, LoRaWAN' },
      { label: 'Deployment Time', value: '< 48 Hours Turnkey' },
    ],
    industriesServed: ['Continuous Process Plants', 'Power Generation', 'Mining Operations', 'Refineries'],
    metrics: [
      { label: 'Downtime Reduction', value: '42%' },
      { label: 'Maint. Cost Savings', value: '28%' },
    ],
  },
  {
    id: 'ai-vision-inspection',
    title: 'AI Vision Quality Control',
    subtitle: 'High-Speed Automated Optical Inspection',
    shortDesc:
      'Computer-vision AI cameras identifying micro-cracks, surface defects, and dimensional variance on assembly lines at 120 parts/sec.',
    fullDesc:
      'Deploy ultra-high-resolution vision cameras paired with edge Neural Processing Units (NPUs) to inspect 100% of manufactured parts. Identifies micro-fractures, weld porosity, coating imperfections, and sub-millimeter tolerances in real time.',
    image: '/images/service_precision.png',
    badge: 'AI Vision',
    isAI: true,
    capabilities: [
      'High-Speed 4K Optical & Infrared Camera Array',
      'Deep Learning Defect Classification (99.8% Recall)',
      'Sub-Millimeter Surface Crack & Porosity Detection',
      'Automated Pneumatic Reject Gate Integration',
      'Real-Time Quality Dashboard & Defect Heatmaps',
    ],
    specifications: [
      { label: 'Inspection Speed', value: 'Up to 120 parts / sec' },
      { label: 'Min Defect Size', value: '0.01 mm² Resolution' },
      { label: 'Latency', value: '< 15 ms Decision Edge' },
      { label: 'Integration', value: 'GigE Vision, Conveyor PLC' },
    ],
    industriesServed: ['Automotive Parts Mfg', 'Aerospace Machining', 'Electronics Assembly', 'Pharma Packaging'],
    metrics: [
      { label: 'Defect Reduction', value: '99.4%' },
      { label: 'Inspection Speed', value: '10x Faster' },
    ],
  },
  {
    id: 'ai-energy-optimization',
    title: 'AI Energy & Thermal Analytics',
    subtitle: 'Smart Load Balancing & Kiln Tuning',
    shortDesc:
      'Algorithmic power optimization reducing industrial peak-demand surcharges and tuning boiler/furnace fuel consumption automatically.',
    fullDesc:
      'Our Thermal & Energy AI analyzes weather conditions, utility peak rate tiers, and machinery load cycles to automatically optimize power draws and thermal combustion efficiency. Prevents costly demand penalty spikes while reducing carbon emissions.',
    image: '/images/service_equipment.png',
    badge: 'AI Energy',
    isAI: true,
    capabilities: [
      'Peak Demand Shaving & Dynamic Load Shedding',
      'Combustion Ratio AI Tuning for Industrial Boilers',
      'Compressor Air Leak & Pressure Drop Detection',
      'Carbon Footprint & Scope 1/2 GHG Compliance Reports',
      'Utility Rate Arbitrage & Microgrid Management',
    ],
    specifications: [
      { label: 'Energy Savings', value: '14% – 22% Utility Bill Reduction' },
      { label: 'Data Integration', value: 'Smart Metering, BACnet, Modbus' },
      { label: 'Optimization Loop', value: '1-Minute Dynamic Adjustment' },
      { label: 'ROI Payback', value: '< 6 Months Average' },
    ],
    industriesServed: ['Steel Mills & Foundries', 'Chemical Processing', 'Cold Storage Facilities', 'Paper & Pulp'],
    metrics: [
      { label: 'Power Reduction', value: '18%' },
      { label: 'Peak Spike Cut', value: '35%' },
    ],
  },
  {
    id: 'ai-autonomous-control',
    title: 'Autonomous Process Control',
    subtitle: 'Closed-Loop SCADA & PLC AI Agent',
    shortDesc:
      'Adaptive machine learning controllers tuning feed rates, pressure valves, and motor RPMs dynamically for maximum throughput.',
    fullDesc:
      'Upgrade static PID controller loops to self-learning reinforcement learning agents. Our Autonomous Process Control continuously learns optimal setpoints across temperature, pressure, and flow rates, dynamically adapting to raw material variances.',
    image: '/images/service_engineering.png',
    badge: 'AI Autonomous',
    isAI: true,
    capabilities: [
      'Self-Tuning Reinforcement Learning Controller',
      'Multi-Variable Closed-Loop SCADA Integration',
      'Raw Material Feed & Density Variance Compensation',
      'Human-in-the-Loop Safe Operating Envelopes',
      'Fail-Safe Hardware Bypass & Manual Override',
    ],
    specifications: [
      { label: 'Control Loop Speed', value: '100 Hz Real-Time' },
      { label: 'Safety Compliance', value: 'SIL 2 / SIL 3 Certified' },
      { label: 'PLC Support', value: 'Siemens S7, Allen-Bradley, Schneider' },
      { label: 'Throughput Lift', value: '+12% Average Output' },
    ],
    industriesServed: ['Cement & Aggregates', 'Food Processing', 'Water Treatment Plants', 'Oil & Gas Upstream'],
    metrics: [
      { label: 'Throughput Gain', value: '+12.5%' },
      { label: 'Quality Variance', value: '-65%' },
    ],
  },
];

// Combined list of all services
export const ALL_SERVICES: ServiceItem[] = [...SERVICES_DATA, ...AI_SERVICES_DATA];

export const INDUSTRIES = [
  {
    title: 'Heavy Manufacturing',
    desc: 'High-strength steel frames, custom gears, and heavy machinery components for assembly plants.',
  },
  {
    title: 'Energy & Utilities',
    desc: 'Precision turbine components, skid systems, and structural supports for power generation.',
  },
  {
    title: 'Civil & Infrastructure',
    desc: 'Large-scale structural beam fabrication, bridge components, and heavy foundation hardware.',
  },
  {
    title: 'Mining & Handling',
    desc: 'Abrasion-resistant liners, conveyor drives, and high-tonnage material handling equipment.',
  },
];
