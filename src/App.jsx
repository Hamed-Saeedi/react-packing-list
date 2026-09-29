import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import Movies from "./Movies";
import Favorites from "./Favorites";
import MovieDetails from "./MovieDetails";
import About from "./About";

function App() {
  const [favorites, setFavorites] = useState([]);

  function handleFavorite(movie) {
    const alreadyFavorite = favorites.some((item) => item.id === movie.id);

    if (alreadyFavorite) {
      setFavorites(favorites.filter((item) => item.id !== movie.id));
    } else {
      setFavorites([...favorites, movie]);
    }
  }

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/movies"
          element={<Movies favorites={favorites} onFavorite={handleFavorite} />}
        />

        <Route
          path="/favorites"
          element={
            <Favorites favorites={favorites} onFavorite={handleFavorite} />
          }
        />

        <Route path="/movies/:id" element={<MovieDetails />} />

        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
