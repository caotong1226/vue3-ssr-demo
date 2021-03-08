const Koa = require("koa");
const server = require("koa-static");
const { resolve } = require("path");
const app = new Koa();
const router = require("./router");
router(app);
app.use(server(resolve(__dirname, "../../dist")));
app.listen(3000, () => {
  console.log("server is running");
});
