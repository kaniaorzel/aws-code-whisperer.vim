var AWS = require("aws-sdk");
var CodeWhisperer = require("./clients/code-whisperer");

const client = new CodeWhisperer({ apiVersion: "2022-06-15" });
console.log(client);
client.getAccessToken(function (err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data);
  }
});
