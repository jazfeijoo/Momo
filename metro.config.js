const FileStore = require("metro-cache").FileStore;
const AutoCleanFileStore = require("metro-cache").AutoCleanFileStore;
const HttpStore = require("metro-cache").HttpStore;

module.exports = {
  resolver: {},
  transformer: {},
  serializer: {},
  server: {},
  cacheStores: [
    new AutoCleanFileStore({
      root: "./auto",
      intervalMs: 1000,
      cleanupThresholdMs: 30,
    }),
    new FileStore({
      root: "./cache",
    }),
  ],
};
