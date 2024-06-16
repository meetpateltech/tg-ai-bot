const anthropic = require('../providers/anthropic');

module.exports = {
  claude_3_ops: {
    model: anthropic('claude-3-opus-20240229'),
  },
  claude_3_haiku: {
    model: anthropic('claude-3-haiku-20240307'),
  },
  claude_3_sonnet: {
    model: anthropic('claude-3-sonnet-20240229'),
  },
};
