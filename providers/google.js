const { createGoogleGenerativeAI } = require('@ai-sdk/google');

const googleProvider = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
});

module.exports = googleProvider;
