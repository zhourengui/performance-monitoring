const Koa = require("koa");
const fs = require("fs");
const Router = require("@koa/router");
const cors = require("@koa/cors");
const sharp = require("sharp");
const body = require("koa-body");
const path = require("path");
const sourcemap = require("source-map");
const { getClientIP } = require("./utils/utils");
const static = require("koa-static");

const port = 1234;
const app = new Koa();
const router = new Router();

function getStat(dir) {
  return new Promise((resolve) =>
    fs.stat(dir, (err, stat) => resolve(err ? false : stat))
  );
}

router.get("/doppler-velocity", async (ctx) => {
  const { size } = ctx.query;
  const res = await sharp(
    path.resolve(__dirname, "./assets/images/doppler-velocity.png")
  )
    .resize(Number(size) || 1)
    .toBuffer();
  ctx.body = res;
});

router.post("/err-traceback", async (ctx) => {
  try {
    const { source, lineno, colno, error } = JSON.parse(ctx.request.body);
    const clientIP = getClientIP(ctx.req);
    const file = `./errors/${clientIP === "::1" ? "127.0.0.1" : clientIP}`;
    const statInfo = await getStat(file);
    let errors = [];

    const mapFileName = /[\s\S]+\/(\w+\.\w+)/g.exec(source)[1] + ".map";
    const consumer = await new sourcemap.SourceMapConsumer(
      fs.readFileSync(
        path.resolve(__dirname, "./sourcemap/" + "main.js.map"),
        "utf8"
      )
    );
    const errPosition = consumer.originalPositionFor({
      line: lineno,
      column: colno,
    });
    if (statInfo) {
      errors = JSON.parse(fs.readFileSync(file, "utf-8") || "[]");
    }
    errors.push({
      source,
      lineno,
      colno,
      error,
      ...errPosition,
    });
    fs.writeFileSync(file, JSON.stringify(errors));

    ctx.body = "记录成功";
  } catch (error) {
    console.error(error);
    ctx.body = "找不到soucemap";
  }
});

router.post("/err-events", async (ctx) => {
  const { events } = JSON.parse(ctx.request.body);
  const clientIP = getClientIP(ctx.req);
  // const file = `./events/${clientIP === "::1" ? "127.0.0.1" : clientIP}`;
  // const statInfo = await getStat(file);
  // if (statInfo) {
  //   errors = JSON.parse(fs.readFileSync(file, "utf-8") || "[]");
  // }
  fs.writeFileSync(
    `./events/${clientIP === "::1" ? "127.0.0.1" : clientIP}`,
    JSON.stringify(events)
  );
  ctx.body = "保存成功";
});

router.get("/get-err-events", async (ctx) => {
  try {
    const clientIP = getClientIP(ctx.req);
    const events = fs.readFileSync(
      `./events/${clientIP === "::1" ? "127.0.0.1" : clientIP}`,
      "utf-8"
    );
    ctx.body = JSON.parse(events || "[[]]");
  } catch (error) {
    ctx.body = [[]];
  }
});

router.get("/get-err-traceback", async (ctx) => {
  const clientIP = getClientIP(ctx.req);
  const events = fs.readFileSync(
    `./errors/${clientIP === "::1" ? "127.0.0.1" : clientIP}`,
    "utf-8"
  );
  ctx.body = JSON.parse(events || "[]");
});

router.post("/performance-log", async (ctx) => {
  const clientIP = getClientIP(ctx.req);
  const file = `./performances/${clientIP === "::1" ? "127.0.0.1" : clientIP}`;
  const statInfo = await getStat(file);
  let performances = [];
  if (statInfo) {
    console.error(statInfo);
    performances = JSON.parse(fs.readFileSync(file, "utf-8") || "[]");
  }
  const log = JSON.parse(ctx.request.body);
  performances.push(log);
  fs.writeFileSync(file, JSON.stringify(performances));
  ctx.body = "记录成功";
});

router.get("/get-performance-log", async (ctx) => {
  try {
    const clientIP = getClientIP(ctx.req);
    const performances = fs.readFileSync(
      `./performances/${clientIP === "::1" ? "127.0.0.1" : clientIP}`,
      "utf-8"
    );
    ctx.body = JSON.parse(performances || "[]");
  } catch (error) {
    ctx.body = [];
  }
});

app
  .use(cors())
  .use(static(path.resolve(__dirname, "./assets")))
  .use(body())
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(port, () => console.log(`Server IS Running At Port ${port}`));
