import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  viewportHeight: 1280,
  viewportWidth: 720,
  //timeout global
  defaultCommandTimeout: 11000,
});
