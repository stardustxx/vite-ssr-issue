// @ts-check
const vuePlugin = require("@vitejs/plugin-vue").default;

/**
 * @type {import('vite').UserConfig}
 */
module.exports = {
  plugins: [vuePlugin()],
  build: {
    minify: false,
  },
};
