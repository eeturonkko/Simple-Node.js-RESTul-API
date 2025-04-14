const movies = [
  {
    id: 1,
    title: "Inception",
    director: {
      name: "Christopher Nolan",
      nationality: "British-American",
    },
    genre: ["Sci-Fi", "Action", "Thriller"],
    releaseDate: "2010-07-16",
    rating: 8.8,
    isAvailable: true,
  },
  {
    id: 2,
    title: "The Grand Budapest Hotel",
    director: {
      name: "Wes Anderson",
      nationality: "American",
    },
    genre: ["Comedy", "Drama"],
    releaseDate: "2014-03-28",
    rating: 8.1,
    isAvailable: false,
  },
  {
    id: 3,
    title: "Parasite",
    director: {
      name: "Bong Joon-ho",
      nationality: "South Korean",
    },
    genre: ["Thriller", "Drama"],
    releaseDate: "2019-05-30",
    rating: 8.6,
    isAvailable: true,
  },
  {
    id: 4,
    title: "Interstellar",
    director: {
      name: "Christopher Nolan",
      nationality: "British-American",
    },
    genre: ["Sci-Fi", "Adventure", "Drama"],
    releaseDate: "2014-11-07",
    rating: 8.6,
    isAvailable: true,
  },
  {
    id: 5,
    title: "Spirited Away",
    director: {
      name: "Hayao Miyazaki",
      nationality: "Japanese",
    },
    genre: ["Animation", "Fantasy", "Adventure"],
    releaseDate: "2001-07-20",
    rating: 8.6,
    isAvailable: false,
  },
  {
    id: 6,
    title: "The Social Network",
    director: {
      name: "David Fincher",
      nationality: "American",
    },
    genre: ["Drama", "Biography"],
    releaseDate: "2010-10-01",
    rating: 7.8,
    isAvailable: true,
  },
];

module.exports = movies;
