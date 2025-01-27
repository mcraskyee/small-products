const {
  searchMovie,
  getMovieById,
  create,
  update,
  getReviews,
  addReview,
} = require("../models/movie.model");
const { logger } = require("../utils/logger");

//GET /v1/movies -200
const getMovies = (req, res) => {
  logger.info("Getting all movies", { query: req.query });
  const movies = searchMovie(req.query);
  logger.debug("Successfully get all movies", { count: movies.length });
  res.json(movies);
};

//GET /v1/movies/:id -200
const getMovie = (req, res) => {
  logger.info("Getting movie by id", id);
  const { id } = req.params;
  const movie = getMovieById(Number(id));
  if (!movie) {
    logger.warn("Movie not found", id);
    res.status(404).json({ message: "Movie not found" });
    return;
  }
  res.json(movie);
};

//POST v1/movies -201
const createMovie = (req, res) => {
  logger.info("Creating new movie", movie);
  const { title, description, types } = req.body;
  if (!title || !description || !Array.isArray(types) || types.length === 0) {
    logger.warn("Some fields are invalid.");
    res.status(400).send("Some fields are invalid.", movie);
    return;
  }

  const movie = create({ title, description, types });
  res.status(201).json(movie);
};

//PUT /v1/movies/:id -201
const updateMovie = (req, res) => {
  logger.info("Updating movie by id", id);
  const { id } = req.params;
  const movie = getMovieById(Number(id));
  if (!movie) {
    logger.warn("Movie not found", id);
    res.status(404).json({ message: "Movie not found" });
    return;
  }
  const { title, description, types } = req.body;
  if (types) {
    if (!Array.isArray(types) || types.length === 0) {
      logger.warn("Movie must be an array", id);
      res.status(400).json({
        message: "types must be an array",
      });
      return;
    }
  }
  const updatedMovie = update(Number(id), { title, description, types });

  res.status(201).json(updatedMovie);
};

//DELETE /v1/movies/:id -204
const deleteMovie = (req, res) => {
  logger.info("Deleting movie by id", id);
  const { id } = req.params;
  const isDeleted = remove(Number(id));
  if (!isDeleted) {
    logger.warn("Movie is not found", id);
    return res.status(404).send("Movie is not found.");
  }
  res.sendStatus(204);
};

//GET /v1/movies/:id/reviews
const getMovieReviews = (req, res) => {
  logger.info("Getting movie reviews", id);
  const { id } = req.params;
  const movie = getMovieById(Number(id));
  if (!movie) {
    logger.warn("Movie not found", id);
    res.status(404).json({ message: "Movie not found" });
  }
  const reviews = getReviews(movie.id);
  res.json(reviews);
};

//POST /v1/movies/:id/reviews
const addMovieReviews = (req, res) => {
  logger.info("Adding movie reviews", id);
  const { id } = req.params;
  const movie = getMovieById(Number(id));
  if (!movie) {
    logger.warn("Movie not found", id);
    res.status(404).json({ message: "Movie not found" });
    return;
  }
  const { content, rating } = req.body;
  if (!content || !rating || !rating < 1 || rating > 5) {
    logger.warn("content is required and rating need to be 1-5.", id);
    res
      .status(400)
      .json({ message: "content is required and rating need to be 1-5." });
    return;
  }
  const newReview = addReview(movie.id, { content, rating });
  res.status(201).json(newReview);
};

module.exports = {
  getMovie,
  getMovies,
  createMovie,
  updateMovie,
  deleteMovie,
  getMovieReviews,
  addMovieReviews,
};
