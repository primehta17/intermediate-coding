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
router.get("/", (req, res) => {
  res.json({ message: "Welcome to User Route" });
});

router.post("/add", (req, res) => {
  res.json({ message: "User added successfully" });
});

// Mount the router
app.use("/", router); //use it in routes

// Start server
app.listen(7000, () => {
  console.log("✅ Server running on http://localhost:7000");
});
