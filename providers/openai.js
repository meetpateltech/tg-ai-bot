const { createOpenAI } = require('@ai-sdk/openai');

const openaiProvider = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  compatibility: 'strict',
});

module.exports = openaiProvider;
