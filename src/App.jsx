import "./index.css";
import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Home from "./Pages/Home";
import MovieDetails from "./Pages/MovieDetails";

function App() {
  const [text, setText] = useState("Search Movie....");
  const [loading, Setloading] = useState(false);
  const [movies, setMovies] = useState([]);
  const defaultKeywords = [
    "hero",
    "girl",
    "king",
    "fight",
    "dream",
    "love",
    "horror",
    "comedy ",
  ];

  const changeText = (event) => {
    setText(event.target.value);
  };

  const getMovie = (e) => {
    e.preventDefault();
    const SearchTerms = text.trim();
    if (!SearchTerms) {
      alert("Please Enter a movie name...");
      return;
    }
    fetchMovies(SearchTerms);
  };

  const fetchMovies = (defaultKeywords) => {
    Setloading(true);
    axios
      .get(`https://www.omdbapi.com/?s=${defaultKeywords}&apikey=1231444b`)
      .then((response) => {
        setMovies(response.data.Search || []); // handle undefined Search
      })
      .catch((error) => {
        console.log("Error fetching movies:", error);
        setMovies([]);
      })
      .finally(() => Setloading(false));
  };

  useEffect(() => {
    const RandomMovies =
      defaultKeywords[Math.floor(Math.random() * defaultKeywords.length)];
    fetchMovies(RandomMovies);
  }, []);

  return (
    <>
      <Header
        text={text}
        setText={setText}
        changeText={changeText}
        getMovie={getMovie}
      />
      <Routes>
        <Route path="/" element={<Home loading={loading} movies={movies} />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </>
  );
}

export default App;
