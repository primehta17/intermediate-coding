import express from "express";
import axios from "axios";
import Joi from "joi";
// const joi = require("joi");

let app = express();
app.use(express.json());
let api = "https://jsonplaceholder.typicode.com/todos/1";

const signupSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(3).max(10).required(),
  age: Joi.number().integer().min(1).required(),
});

app.get("/api", async (req, res) => {
  try {
    let resp = await axios(api);
    // console.log(resp.id);
    res.json(resp.data);
  } catch (error) {
    console.error(error);
  }
});

app.post("/signup", (req, res) => {
  const { error, value } = signupSchema.validate(req.body, {
    abortEarly: false,
  });
  if (error) {
    console.log(error);
    return res.send(error.details);
  }
  res.json({ message: "User Data is valid", data: value });
});
app.listen(5000, console.log("App running"));
