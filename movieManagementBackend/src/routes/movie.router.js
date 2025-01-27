const { Router } = require("express");
const {
  getMovie,
  getMovies,
  updateMovie,
  createMovie,
  deleteMovie,
  getMovieReviews,
} = require("../controllers/movie.controller");
const { addReview } = require("../models/movie.model");
const movieRouter = Router();

movieRouter.get("/", getMovies);

movieRouter.get("/:id", getMovie);

movieRouter.post("/", updateMovie);

movieRouter.put("/:id", createMovie);

movieRouter.delete("/:id", deleteMovie);

movieRouter.post("/:id/reviews", getMovieReviews);

movieRouter.get("/:id/reviews", addReview);

module.exports = movieRouter;
