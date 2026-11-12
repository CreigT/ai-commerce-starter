# Autonomous AI Commerce SaaS

A simple, production-ready, autonomous AI-native commerce system.

## What this is
A complete starter for an AI-operated commerce store. Agents handle research, pricing, support, marketing, etc. Human only owns and overrides in emergency.

## Deploy to Vercel
1. Push this folder to GitHub.
2. Import project in Vercel.
3. Set environment variables (optional for AI keys).
4. Deploy. Done.

## Features
- Beautiful landing page
- Product storefront with AI recommendations (simulated)
- Customer support AI chat
- Agent dashboard (status of all layers)
- Reasonable paywall for premium AI features
- Fully static / serverless ready

## Environment Variables (add in Vercel)
- OPENAI_API_KEY (for real AI, optional - works without)
- STRIPE_PUBLIC_KEY (for real payments)

## Structure
- index.html : Landing
- store.html : Commerce store
- dashboard.html : Agent monitoring
- support.html : AI support
- assets/ : CSS, JS, images

No human operators needed after setup. Agents run via scheduled functions or client simulations.

Sponsored by CREIGNIFICENT LLC.