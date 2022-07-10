const svgr = require('@svgr/rollup');

module.exports = {
  rollup(config, options) {
    config.plugins = [svgr(), ...config.plugins];
    return config;
  },
};
