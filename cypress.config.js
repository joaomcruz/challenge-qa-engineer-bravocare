const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  videoCompression: true,
  e2e: {
    baseUrl: 'https://automationexercise.com/'
  },

});
