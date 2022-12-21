import express from "express";
import config from "config";
import log from "./logger";
import routes from "./routes";
import {client} from "./eureka.helper";

const port = config.get("port") as number;
const host = config.get("host") as string;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, host, () => {
  log.info(`Server listing at http://${host}:${port}`);
  client.start();
  routes(app);
});