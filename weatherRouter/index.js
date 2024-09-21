const express = require("express");
const weatherRouter = require("./weatherRouter");
const app = express();

app.use(express.json());
app.use("/api", weatherRouter);

const port = 8000;
app.listen(port, () => {
  console.log(`Server is running on ${port}...`);
});
