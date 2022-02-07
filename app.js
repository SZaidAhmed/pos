const express = require("express");
const userRouter = require("./routes/userRoute")
const itemRouter = require("./routes/itemRoute")

const app = express();

app.use(express.json());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/item", itemRouter);

module.exports = app;