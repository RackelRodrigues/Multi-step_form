import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://192.168.1.107:3000",
    // switched to localhost for security and consistency
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  //viewport desktop
  viewportWidth: 1366,
  viewportHeight: 768,

  //viewport phone
  // viewportWidth: 412,
  // viewportHeight: 915,

  //timeout global
  defaultCommandTimeout: 6000,
});
