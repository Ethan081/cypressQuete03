/// <reference types="cypress" />

const dotenvPlugin = require('cypress-dotenv');
module.exports = (on, config) => {
  config = dotenvPlugin(config, {}, true)
  console.log('Config env', config.env)
  return config
}

