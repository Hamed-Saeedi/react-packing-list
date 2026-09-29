import { useState } from "react";
import { movies } from "./data";
import MovieCard from "./MovieCard";

function Movies({ favorites, onFavorite }) {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");

  const genres = ["All", "Action", "Sci-Fi", "Fantasy"];

  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesGenre = genre === "All" || movie.genre === genre;

    return matchesSearch && matchesGenre;
  });

  return (
    <section className="page">
      <h1>Explore Movies 🎬</h1>

      <div className="filters">
        <input
          type="text"
          placeholder="Search movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={genre} onChange={(e) => setGenre(e.target.value)}>
          {genres.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>

      <div className="movie-grid">
        {filteredMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onFavorite={onFavorite}
            isFavorite={favorites.some((item) => item.id === movie.id)}
          />
        ))}
      </div>

      {filteredMovies.length === 0 && <p className="empty">No movies found.</p>}
    </section>
  );
}

export default Movies;
