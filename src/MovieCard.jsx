import { Link } from "react-router-dom";

function MovieCard({ movie, onFavorite, isFavorite }) {
  return (
    <div className="movie-card">
      <img src={movie.image} alt={movie.title} />

      <div className="movie-info">
        <h3>{movie.title}</h3>

        <p>
          {movie.year} • {movie.genre}
        </p>

        <p>⭐ {movie.rating}</p>

        <div className="card-buttons">
          <Link to={`/movies/${movie.id}`} className="details-btn">
            Details
          </Link>

          <button onClick={() => onFavorite(movie)}>
            {isFavorite ? "❤️" : "🤍"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
