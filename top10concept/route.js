import express from "express";

const app = express();
const router = express.Router();

// Define route
router.get("/", (req, res) => {
  const obj = {
    a: "this",
    number: 34,
  };
  res.json(obj);
});

// Mount the router
app.use("/", router);

// Start server
app.listen(7000, () => {
  console.log("✅ Server running on http://localhost:7000");
});
