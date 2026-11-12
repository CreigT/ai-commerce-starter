const agents = [
  { layer: "Executive", agents: ["CEO Agent", "Chief Operations", "Strategic Planning", "Governance", "Ethics & Compliance", "Risk Management"], status: "Operational" },
  { layer: "Revenue", agents: ["Sales", "Marketing", "Advertising", "Content Creation", "Social Media", "SEO/AEO", "Email", "Affiliate"], status: "Campaigns Running" },
  { layer: "Customer", agents: ["Support", "Success", "Refund", "Reputation", "CRM", "Loyalty"], status: "24/7 Active" },
  { layer: "Commerce", agents: ["Product Research", "Creation", "Pricing", "Inventory", "Procurement", "Marketplace", "Negotiation", "Contract"], status: "Optimizing" },
  { layer: "Finance", agents: ["Accounting", "Bookkeeping", "AR", "AP", "Treasury", "Cash Flow", "Tax", "Budget"], status: "Balanced" },
  { layer: "Legal", agents: ["Contract", "Regulatory", "IP", "Policy"], status: "Compliant" },
  { layer: "Cybersecurity", agents: ["SOC", "Threat Detection", "Vulnerability", "Identity", "Incident Response", "Backup"], status: "Zero-Trust Active" },
  { layer: "Data", agents: ["Collection", "Analytics", "BI", "Forecasting", "KPI"], status: "Insights Generating" },
  { layer: "Infrastructure", agents: ["Cloud", "DevOps", "CI/CD", "API", "Database", "Monitoring"], status: "Healthy" },
  { layer: "Automation", agents: ["Workflow", "Scheduler", "Event Trigger", "Process Opt"], status: "Orchestrating" },
  { layer: "AI", agents: ["Memory", "Knowledge Base", "RAG", "Model Eval", "Prompt Opt"], status: "Learning" }
];

const container = document.getElementById('agents');
agents.forEach(layer => {
  const card = document.createElement('div');
  card.className = 'agent-card';
  card.innerHTML = `
    <h3>${layer.layer} Layer</h3>
    <p>Agents: ${layer.agents.join(', ')}</p>
    <p class="status">Status: ${layer.status}</p>
  `;
  container.appendChild(card);
});

// Simulate live updates
setInterval(() => {
  const statuses = document.querySelectorAll('.status');
  statuses.forEach(s => {
    if (Math.random() > 0.9) s.textContent = 'Status: Optimizing...';
    else s.textContent = s.textContent.replace('Optimizing...', layer => 'Operational');
  });
}, 5000);