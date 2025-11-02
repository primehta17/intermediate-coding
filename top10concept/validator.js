import express from "express";
import { body, validationResult, matchedData } from "express-validator";

let app = express();
let PORT = 3000;

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello");
});
app.post(
  "/helo",
  [
    body("name").isString().withMessage("Password should be more than 5 "),
    body("password")
      .isLength({ min: 5 })
      .withMessage("Password should be more than 5 "),
    body("email").isEmail(),
    body("age").isInt({ min: 1, max: 100 }),
    body("role").isIn(["Admin", "User", "Guest"]),
  ],
  (req, res) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
      const data = matchedData(req);
      return res.send(`Hello, ${data.name}! are you ${data.role}`);
    }

    res.send({ errors: result.array() });
  }
);

app.listen(PORT, () => {
  console.log("Port running at ", PORT);
});
