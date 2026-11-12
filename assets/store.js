const products = [
  { name: "AI-Optimized Smart Notebook", price: 24.99, desc: "Researched by Product Agent. Self-organizing notes via AI companion.", img: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=400" },
  { name: "Autonomous Desk Lamp", price: 89.00, desc: "Priced by Pricing Agent. Adjusts light based on focus analytics.", img: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400" },
  { name: "Agent-Curated Coffee Blend", price: 18.50, desc: "Supplier negotiated. Taste profile optimized for productivity.", img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400" },
  { name: "Digital Product: AI Prompt Pack", price: 9.99, desc: "Created by Content Agent. Instant digital delivery.", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400" }
];

const container = document.getElementById('products');
products.forEach(p => {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.innerHTML = `
    <img src="${p.img}" alt="${p.name}" onerror="this.src='https://via.placeholder.com/400x200?text=AI+Product'">
    <div class="product-info">
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <p class="price">$${p.price}</p>
      <button class="btn-primary" onclick="addToCart('${p.name}', ${p.price})">Add to Cart</button>
    </div>
  `;
  container.appendChild(card);
});

function addToCart(name, price) {
  alert(`Added ${name} ($${price}) to cart. Inventory Agent notified. Checkout handled by Finance Agents.`);
  // In production: call API to Cart Agent / Stripe
}