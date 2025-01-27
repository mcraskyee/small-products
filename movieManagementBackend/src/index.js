require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
const express = require("express");
const movieRouter = require("./routes/movie.router");
const cors = require("cors");
const limiter = require("./utils/rateLimit");
const helmet = require("helmet");
const morgan = require("./utils/morgan");
const { logger } = require("./utils/logger");

const app = express();
const port = process.env.PORT || 3001;

//helmet safety
app.use(helmet());
//json
app.use(express.json());
//cors
app.use(cors());
//express-rate-limit
app.use(limiter);
//morgan http logger
app.use(morgan);

//router
app.use("/v1/movies", movieRouter);

app.listen(port, () => {
  logger.info(`Server is running on port ${port}...`);
});
