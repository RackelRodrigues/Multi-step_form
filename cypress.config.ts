import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    // switched to localhost for security and consistency
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  viewportWidth: 1366,
  viewportHeight: 768,

  //timeout global
  defaultCommandTimeout: 11000,
});
