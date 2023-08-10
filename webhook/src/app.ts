require("dotenv").config();
import express, { Request, Response } from "express";
import axios from "axios";
import config from "config";

const app = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.post("/github-webhook", async (req: Request, res: Response) => {
  try {
    const webhookSiteUrl = config.get("webhookSiteUrl") as string;

    const data = {
      action: req.body.action,
      username: req.body.sender.login,
      repository: req.body.repository.name,
      URL: req.body.repository.url,
      stars: req.body.repository.stargazers_count,
    };

    const response = await axios.post(webhookSiteUrl, data);

    console.log("Data sent to Webhook.site:", response.data);
    res.status(200).send("Webhook data sent to Webhook.site");
  } catch (error) {
    console.error("Error sending data to Webhook.site:", error);
    res.status(500).send("Error sending data to Webhook.site");
  }
});

const port = config.get("port") as number;
app.listen(port, () => {
  console.log(`App started at http://localhost:${port}`);
});
