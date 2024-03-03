const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },
  video: true,
  videoCompression: true,
  e2e: {

    baseUrl: 'https://automationexercise.com/',

  },


});
