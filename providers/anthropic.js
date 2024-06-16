const { createAnthropic } = require('@ai-sdk/anthropic');

const anthropicProvider = createAnthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

module.exports = anthropicProvider;
