var AWS = require("aws-sdk");
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;
var serviceName = "code-whisperer";

apiLoader.services[serviceName] = {};
AWS.CodeWhisperer = Service.defineService(serviceName, ["2022-06-15"]);
Object.defineProperty(apiLoader.services[serviceName], "2022-06-15", {
  get: function get() {
    var model = require("../apis/service-2.json");
    model.paginators = require("../apis/paginators.json").pagination;
    return model;
  },
  enumerable: true,
  configurable: true,
});

module.exports = AWS.CodeWhisperer;
