# Doogu ChatBot Setup Guide

## Overview
Meet **Doogu** 🤖 - your friendly AI assistant! Doogu can help you with:
- **Website Navigation**: Find sections and content on the website
- **General Questions**: Answer any questions you have about anything
- **Today's News**: Share the latest headlines and current events

Example questions:
- "Where is the study section?"
- "Where is Piyush Garg video?"
- "What's the news today?"
- "Tell me about React"
- "What is artificial intelligence?"

## Features
- ✅ Floating chat button (bottom-right corner)
- ✅ Beautiful chat interface with animations
- ✅ AI-powered responses using Google Gemini API
- ✅ News fetching capability (using NewsAPI)
- ✅ Rule-based fallback system (works without API keys)
- ✅ Knowledge of all website sections and content
- ✅ Can answer general questions on any topic

## Setup Instructions

### Option 1: Full Setup with AI and News (Recommended)

1. **Get Google Gemini API Key** (for AI responses):
   - Visit: https://makersuite.google.com/app/apikey
   - Sign in with your Google account
   - Click "Create API Key"
   - Copy your API key

2. **Get NewsAPI Key** (for news fetching - optional):
   - Visit: https://newsapi.org/
   - Sign up for a free account
   - Get your API key from the dashboard
   - Free tier: 100 requests/day

3. Create a `.env` file in the root directory:
   ```
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   VITE_NEWS_API_KEY=your_news_api_key_here
   ```

4. Restart your development server:
   ```bash
   npm run dev
   ```

### Option 2: Using Rule-Based System (No API Keys Required)

Doogu will automatically use a rule-based system if no API keys are provided. It can still answer questions about:
- Section locations (Hero, About, Skills, Projects, Contact, Study)
- Specific content (Piyush Garg video, HackerRank, etc.)
- Navigation help
- Basic general questions (with limited knowledge)

## How It Works

1. **With Gemini API Key**: Doogu uses Google's Gemini AI to provide intelligent, contextual responses to any question
2. **With News API Key**: Doogu can fetch and share today's top headlines when asked about news
3. **Without API Keys**: Doogu uses a built-in knowledge base with rule-based responses for website navigation and basic questions

## Website Knowledge Base

The chatbot knows about:
- All main sections (Hero, About, Skills, Projects, Contact, Study)
- Study Section resources:
  - YouTube Channels: Piyush Garg, Hitesh Choudhary, Telusko, etc.
  - Practice Platforms: HackerRank, LeetCode, CodeChef, etc.
  - Text Resources: w3schools, interviewbit, sanfoundry
  - System Design Images

## Usage

1. Click the chat button in the bottom-right corner
2. Doogu will greet you with a friendly message
3. Ask questions like:
   - **Website Navigation**: "Where is the study section?", "Where is HackerRank?", "Where can I find Piyush Garg video?"
   - **General Questions**: "What is React?", "Tell me about AI", "How does JavaScript work?"
   - **Today's News**: "What's the news today?", "Show me headlines", "What's happening in the world?"
   - **Anything else**: Doogu can answer questions on any topic!

## Customization

You can customize Doogu by editing `src/components/ChatBot.tsx`:
- Modify the `websiteKnowledge` object to add more content
- Update the system prompt for different AI behavior
- Customize the greeting message
- Adjust news fetching logic
- Customize the UI styling

## Notes

- The chatbot works entirely client-side (no backend required)
- API calls are made directly from the browser
- The rule-based fallback ensures the chatbot always works, even without an API key
