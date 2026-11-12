function sendMessage() {
  const input = document.getElementById('user-input');
  const text = input.value.trim();
  if (!text) return;

  const messages = document.getElementById('chat-messages');
  messages.innerHTML += `<div class="message user">${text}</div>`;
  input.value = '';

  // Simulate AI Agent response (in production: call RAG / LLM API)
  setTimeout(() => {
    const responses = [
      "I've checked with the Inventory Agent. Your item is in stock and will ship via the Procurement Agent today.",
      "The Pricing Agent confirms this is the best rate. Loyalty Program Agent has applied a 10% discount.",
      "Refund Agent has approved. Funds will be returned by Accounts Payable within 3-5 days.",
      "Based on analytics, I recommend the AI-Optimized Smart Notebook for your use case.",
      "All systems are autonomous. No human needed. Is there anything else the Support Agent can help with?"
    ];
    const reply = responses[Math.floor(Math.random() * responses.length)];
    messages.innerHTML += `<div class="message ai">${reply}</div>`;
    messages.scrollTop = messages.scrollHeight;
  }, 800);
}

document.getElementById('user-input').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') sendMessage();
});