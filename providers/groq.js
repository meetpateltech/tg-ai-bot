const { createOpenAI } = require('@ai-sdk/openai');

const groqProvider = createOpenAI({
  baseURL: 'https://api.groq.com/openai/v1',
  apiKey: process.env.GROQ_API_KEY,
});

module.exports = groqProvider;
