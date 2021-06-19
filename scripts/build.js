#!/usr/bin/env node

const shell = require("shelljs");
const chalk = require("chalk");
const path = require("path");
const rimraf = require("rimraf");
const ora = require("ora");
const mvdir = require("mvdir");

(async () => {
  const spinner = ora("building...\n").start();

  const serverDistPath = path.resolve(__dirname, "../server/assets/demo");

  shell.exec("microbundle && npm run api:run && npm run api:doc");

  rimraf.sync(serverDistPath);

  await mvdir(path.resolve(__dirname, "../dist"), serverDistPath, {
    copy: true,
  });

  console.log(chalk.green("打包成功"));

  shell.exec("git add ./");

  shell.exec("git commit -m 'fix: fix server demo'");

  shell.exec("git push");

  spinner.stop();
})();
