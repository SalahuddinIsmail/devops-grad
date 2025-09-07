import express from "express";

const app = express();
const port = process.env.PORT || 8080;
const env = process.env.APP_ENV || "dev";

app.get("/healthz", (_req, res) => {
  res.json({ status: "ok", env });
});

app.get("/", (_req, res) => {
  res.send("Hello from DevOps Graduation Project!");
});

app.listen(port, () => {
  console.log(`Web listening on :${port}`);
});
