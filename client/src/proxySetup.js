const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use("/auth/twitter", proxy({ target: "http://localhost:5000" }));
};