import express from "express";
import { createClient } from "redis";

const app = express();
const PORT = 4000;

const client = createClient();
client.on("error", (err) => console.log("Redis Error:", err));
await client.connect();

//Simple route
app.get("/", async (req, res) => {
  //Check if cached value exists
  const cached = await client.get("message");
  if (cached) {
    return res.send(`From cache: ${caches}`);
  }
  //If not cached, set and return
  const message = "Hello from Expresss with Redis!";
  res.send(`From server: ${message}`);
});

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
