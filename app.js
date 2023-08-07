const express = require("express");
const dotenv = require("dotenv");
const { connectDB, databaseConnect } = require("./database/database");
const userRouter = require("./router/userRouter");
const { router } = require("./router/userRouter");
const app = express();

app.use(express.json());
app.use("/", router);

dotenv.config({ path: "environment/config.env" });

connectDB();

app.listen(process.env.PORT, () => {
  console.log(`Server Started On http://localhost:${process.env.PORT}`);
});
