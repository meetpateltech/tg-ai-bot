const google = require('../providers/google');

module.exports = {
  gemini_pro: {
    model: google('models/gemini-pro')
  },
  gemini_1_5_pro: {
    model: google('models/gemini-1.5-pro-latest')
  },
};
