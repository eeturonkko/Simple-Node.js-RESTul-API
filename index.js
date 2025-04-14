const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const movies = require("./data/movies");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("home", { movies });
});

app.get("/api/movies", (req, res) => res.json(movies));

app.get("/api/movies/:id", (req, res) => {
  const movieId = req.params.id;
  const movie = movies.find((m) => m.id === parseInt(movieId, 10));

  if (!movie) {
    return res.status(404).render("404", { movieId });
  }

  res.json(movie);
});

app.post("/api/movies", (req, res) => {
  const { title, director, genre, releaseDate, rating, isAvailable } = req.body;

  if (
    !title ||
    !director ||
    !genre ||
    !releaseDate ||
    rating === undefined ||
    isAvailable === undefined
  ) {
    return res.status(400).json({ error: "All fields are required." });
  }

  const newMovie = {
    id: movies.length + 1,
    title,
    director,
    genre,
    releaseDate,
    rating,
    isAvailable,
  };

  movies.push(newMovie);
  res.status(201).json(newMovie);
});

app.patch("/api/movies/:id", (req, res) => {
  const movieId = req.params.id;
  const movieIndex = movies.findIndex((m) => m.id === parseInt(movieId, 10));

  if (movieIndex === -1) {
    return res.status(404).json({ error: "Movie not found" });
  }

  const updatedMovie = { ...movies[movieIndex], ...req.body };
  movies[movieIndex] = updatedMovie;

  res.json(updatedMovie);
});

app.delete("/api/movies/:id", (req, res) => {
  const movieId = req.params.id;
  const movieIndex = movies.findIndex((m) => m.id === parseInt(movieId, 10));

  if (movieIndex === -1) {
    return res.status(404).json({ error: "Movie not found" });
  }

  movies.splice(movieIndex, 1);
  res.status(204).send();
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
