#!/usr/bin/env node

const shell = require("shelljs");
const chalk = require("chalk");

shell.exec(
  "sonar-scanner -Dsonar.projectKey=performance-monitoring -Dsonar.sources=./src -Dsonar.host.url=http://localhost:9000 -Dsonar.login=78316f542d73004d010a9decae5bb27490394e2a"
);

console.log(chalk.green("sonar检测成功"));
