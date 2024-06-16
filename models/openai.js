const openai = require('../providers/openai');

module.exports = {
  gpt_4o: {
    model: openai('gpt-4o'),
  },
  gpt_4: {
    model: openai('gpt-4'),
  },
  gpt_4_turbo: {
    model: openai('gpt-4-turbo'),
  },
  gpt_3_5_turbo: {
    model: openai('gpt-3.5-turbo'),
  },
};
