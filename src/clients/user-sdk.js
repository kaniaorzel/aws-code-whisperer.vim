var AWS = require("aws-sdk");
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;
var serviceName = "user-sdk";

apiLoader.services[serviceName] = {};
AWS.UserSdk = Service.defineService(serviceName, ["2022-11-11"]);
Object.defineProperty(apiLoader.services[serviceName], "2022-11-11", {
  get: function get() {
    var model = require("../apis/user-service-2.json");
    model.paginators = require("../apis/paginators.json").pagination;
    return model;
  },
  enumerable: true,
  configurable: true,
});

module.exports = AWS.UserSdk;
