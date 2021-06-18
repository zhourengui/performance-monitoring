const http = require("http");
const shell = require("shelljs");
const createHandler = require("git-webhook-handler");
const handler = createHandler({ path: "/", secret: "123456" });

http
  .createServer(function (req, res) {
    handler(req, res, function (err) {
      res.statusCode = 404;
      res.end("no such location");
    });
  })
  .listen(8888);

handler.on("error", function (err) {
  console.error("Error:", err.message);
});

handler.on("push", function (event) {
  console.log(
    "Received a push event for %s to %s",
    event.payload.repository.name,
    event.payload.ref
  );
  shell.exec("git pull");
  shell.exec("rm -rf ./node_modules");
  shell.exec("yarn");
  shell.exec("pm2 delete app");
  shell.exec("pm2 start ./server/app.js");
});

handler.on("issues", function (event) {
  console.log(
    "Received an issue event for %s action=%s: #%d %s",
    event.payload.repository.name,
    event.payload.action,
    event.payload.issue.number,
    event.payload.issue.title
  );
});
