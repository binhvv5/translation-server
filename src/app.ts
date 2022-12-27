import express from "express";
import config from "config";
import log from "./logger";
import routes from "./routes";
import {clientEureka} from "./eureka.helper";
import {httpRequestTimer, register} from "../prometheus.helper";


const port = config.get("port") as number;
const host = config.get("host") as string;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Prometheus metrics route
app.get('/metrics', async (req, res) => {
  // Start the HTTP request timer, saving a reference to the returned method
  const end = httpRequestTimer.startTimer();
  // Save reference to the path so we can record it when ending the timer
  const route = req.route.path;

  res.setHeader('Content-Type', register.contentType);
  res.send(await register.metrics());

  // End timer and add labels
  end({ route, code: res.statusCode, method: req.method });
});

app.listen(port, host, () => {
  log.info(`Server listing at http://${host}:${port}`);
  clientEureka.start();
  routes(app);
});
