const groq = require('../providers/groq');

module.exports = {
  llama3_8b_8192: {
    model: groq('llama3-8b-8192')
  },
  llama3_70b_8192: {
    model: groq('llama3-70b-8192')
  },
};
