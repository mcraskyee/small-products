// const movies = [
//   {
//     id: 1,
//     title: "Inception",
//     description: "A skilled thief steals secrets from dreams.",
//     types: ["Sci-Fi"],
//     averageRating: 4.5,
//     reviews: [
//       { id: 1, content: "Amazing movie!", rating: 5 },
//       { id: 2, content: "Great visuals.", rating: 4 },
//     ],
//   },
// ];

const movies = [];

let nextMovieId = 1;
let nextReviewId = 1;

//Get all movies：keywords search (filter+toLowerCase+includes)，rating sort (sort)，pagination(slice)
//query: sort(rating, -rating), page, keyword(q), limit(pagesize)
const searchMovie = ({ keyword, limit = 10, page = 1, sort }) => {
  let moviesCopy = [...movies]; //sort会改变原数组，必须拷贝
  //search
  if (keyword) {
    moviesCopy = moviesCopy.filter(
      (movie) =>
        movie.title.toLowerCase().includes(keyword.toLowerCase()) ||
        movie.description.toLowerCase().includes(keyword.toLowerCase())
    );
  }
  //sort
  if (sort === "rating") {
    moviesCopy.sort((a, b) => a.averageRating - b.averageRating);
  } else if (sort === "-rating") {
    moviesCopy.sort((a, b) => b.averageRating - a.averageRating);
  }
  //paginate
  const startIndex = Number(page - 1) * Number(limit);
  const endIndex = startIndex + Number(limit);
  const returnedMovies = moviesCopy.slice(startIndex, endIndex);
  return returnedMovies;
};

//get one movie：search by id(find)
const getMovieById = (id) => {
  return movies.find((movie) => movie.id === id);
};

//add a movie(unshift)
//new added movie need to be returned in priority
//body: title, description, types(string)
const create = ({ title, description, types }) => {
  const newMovie = {
    id: nextMovieId++,
    title,
    description,
    types,
    averageRating: 0,
    reviews: [],
  };
  movies.unshift(newMovie);
  return newMovie;
};

//update movie's information(find)
//body: title, description, types(string)
const update = (id, { title, description, types }) => {
  const movie = getMovieById(id);
  if (title) {
    movie.title = title;
  }
  if (description) {
    movie.description = description;
  }
  if (types) {
    movie.types = types;
  }
  return movie;
};

//delete one movie(findIndex, splice)
const remove = (id) => {
  const movieIndex = movies.findIndex((movie) => movie.id === id);
  if (movieIndex === -1) {
    return false;
  }
  movies.splice(movieIndex, 1);
  return true;
};

//get a comment of one movie
const getReviews = (movieId) => {
  const movie = getMovieById(movieId);
  return movie.reviews;
};

//add and record comment
//body: content, rating
const addReview = (movieId, { content, rating }) => {
  const movie = getMovieById(movieId);
  const newReview = {
    id: nextReviewId++,
    content,
    rating,
  };
  movie.reviews.push(newReview);
  movie.averageRating = Number(
    movie.reviews.reduce((sum, review) => sum + review.rating, 0) /
      movie.reviews.length
  ).toFixed(2);
  return newReview;
};

module.exports = {
  getMovieById,
  searchMovie,
  remove,
  update,
  create,
  getReviews,
  addReview,
};
