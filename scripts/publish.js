#!/usr/bin/env node

const shell = require("shelljs");
const path = require("path");
const { argv } = require("yargs");
const fs = require("fs");
const chalk = require("chalk");
const [account, password, email] = argv._;
const expPath = path.resolve(__dirname, "./publish.exp");
const packPath = path.resolve(__dirname, "../package.json");
const packStr = fs.readFileSync(packPath, "utf-8");

const packJSON = JSON.parse(packStr);

packJSON.version = packJSON.version.replace(
  /^(\w)+\.(\w)+\.(\w)+$/,
  (_, $1, $2, $3) => {
    $1 = Number($1);
    $2 = Number($2);
    $3 = Number($3);
    const isOver = $3 === 9;
    return `${$1}.${$2 + (isOver ? 1 : 0)}.${isOver ? 0 : $3 + 1}`;
  }
);

fs.writeFileSync(packPath, JSON.stringify(packJSON, null, "\t"));

shell.exec(`expect ${expPath} ${account} ${password} ${email}`);

console.log(chalk.green("npm发布成功"));
