const Router = require("@koa/router");
const fs = require("fs");
const { resolve } = require("path");
const { renderToString } = require("@vue/server-renderer");
const serverBundle = require("../../../dist/server-bundle").default;
const template = fs.readFileSync(
  resolve(__dirname, "../../../dist/index.html"),
  "utf-8"
);
const router = new Router();

const renderState = (state, windowKey) => {
  return `<script>window.${windowKey} = ${JSON.stringify(state)}</script>`;
};

module.exports = (app) => {
  const { app: appCom, router: r, store } = serverBundle();
  router.get(["/", "/about"], async (ctx, next) => {
    r.push(ctx.req.url);
    await r.isReady();
    let appComponent = await renderToString(appCom);
    appComponent = `<div id="app">${renderState(
      store.state,
      "__INIT_STATE__"
    )}${appComponent}</div>`;
    let html = template.replace('<div id="app"></div>', appComponent);
    ctx.body = html;
  });
  app.use(router.routes()).use(router.allowedMethods());
};
