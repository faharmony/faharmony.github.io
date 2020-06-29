/**
 * PROXY CONFIG
 * ---
 * You can get direct access to the Express app instance and hook up your own proxy middleware.
 * @see https://create-react-app.dev/docs/proxying-api-requests-in-development/#configuring-the-proxy-manually
 */

// const morgan = require("morgan"); // HTTP request logger
const { createProxyMiddleware: proxy } = require("http-proxy-middleware");

/**
 * Common proxy options.
 */
const proxyOptions = {
  target: process.env.REACT_APP_PROXY_URL || "https://fadev.fasolutions.com",
  changeOrigin: true,
  secure: false,
};

module.exports = function(app) {
  // FA micro-services
  app.use("/services", proxy(proxyOptions));

  // FA GraphQL server
  app.use("/graphql", proxy(proxyOptions));

  // FA API
  app.use("/rs", proxy(proxyOptions));

  // Uncomment next line to enable logging
  // app.use(morgan("combined"));
};
