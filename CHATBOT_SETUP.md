# ChatBot Setup Guide

## Overview
The website now includes an AI-powered chatbot assistant that helps users find sections and content on the website. It can answer questions like:
- "Where is the study section?"
- "Where is Piyush Garg video?"
- "Where is HackerRank situated on the website?"

## Features
- ✅ Floating chat button (bottom-right corner)
- ✅ Beautiful chat interface with animations
- ✅ AI-powered responses using Google Gemini API
- ✅ Rule-based fallback system (works without API key)
- ✅ Knowledge of all website sections and content

## Setup Instructions

### Option 1: Using Google Gemini API (Recommended for better AI responses)

1. Get a free API key from Google:
   - Visit: https://makersuite.google.com/app/apikey
   - Sign in with your Google account
   - Click "Create API Key"
   - Copy your API key

2. Create a `.env` file in the root directory:
   ```
   VITE_GEMINI_API_KEY=your_api_key_here
   ```

3. Restart your development server:
   ```bash
   npm run dev
   ```

### Option 2: Using Rule-Based System (No API Key Required)

The chatbot will automatically use a rule-based system if no API key is provided. It can still answer questions about:
- Section locations (Hero, About, Skills, Projects, Contact, Study)
- Specific content (Piyush Garg video, HackerRank, etc.)
- Navigation help

## How It Works

1. **With API Key**: The chatbot uses Google's Gemini AI to provide intelligent, contextual responses
2. **Without API Key**: The chatbot uses a built-in knowledge base with rule-based responses

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
2. Ask questions like:
   - "Where is the study section?"
   - "Where can I find Piyush Garg video?"
   - "Where is HackerRank?"
   - "How do I navigate to the projects section?"

## Customization

You can customize the chatbot by editing `src/components/ChatBot.tsx`:
- Modify the `websiteKnowledge` object to add more content
- Update the system prompt for different AI behavior
- Customize the UI styling

## Notes

- The chatbot works entirely client-side (no backend required)
- API calls are made directly from the browser
- The rule-based fallback ensures the chatbot always works, even without an API key
