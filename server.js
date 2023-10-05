"use strict";

const http = require("http");
const Metro = require("metro");

// We first load the config from the file system
Metro.loadConfig().then(async (config) => {
  const { middleware } = await Metro.createConnectMiddleware(config);
  const metroBundlerServer = await Metro.runMetro(config);
  const {
    server: { port },
  } = config;

  const httpServer = http.createServer(
    metroBundlerServer.processRequest.bind(metroBundlerServer)
  );
  httpServer.use(middleware);

  httpServer.listen(port);
});
