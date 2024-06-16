const { createMistral } = require('@ai-sdk/mistral');

const mistralProvider = createMistral({
  apiKey: process.env.MISTRAL_API_KEY,
});

module.exports = mistralProvider;
