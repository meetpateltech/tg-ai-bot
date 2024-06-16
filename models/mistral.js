const mistral = require('../providers/mistral');

module.exports = {
  small: {
    model: mistral('mistral-small-latest')
  },
  large: {
    model: mistral('mistral-large-latest')
  },
};
