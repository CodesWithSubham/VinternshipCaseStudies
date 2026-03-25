// Case Study 03: HTTP Methods & Status Codes

import express from "express";
import router from "./routes/products.js";
const app = express();

app.use(express.json());

app.use("/products", router);

app.get("/", (req, res) => {
  res.send("Welcome to Greenfield Community Center!");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Community Center server running at http://localhost:${port}`);
});
