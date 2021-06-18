#!/usr/bin/env node

const shell = require("shelljs");
const path = require("path");
const { argv } = require("yargs");
const chalk = require("chalk");
const [account, password, email] = argv._;
const expPath = path.resolve(__dirname, "./publish.exp");

shell.exec(`expect ${expPath} ${account} ${password} ${email}`);

console.log(chalk.green("npm发布成功"));
