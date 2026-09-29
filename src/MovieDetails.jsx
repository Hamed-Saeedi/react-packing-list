import { Link, useParams } from "react-router-dom";
import { movies } from "./data";

function MovieDetails() {
  const { id } = useParams();

  const movie = movies.find((item) => item.id === Number(id));

  if (!movie) {
    return (
      <section className="page">
        <h1>Movie not found 😕</h1>
        <Link to="/movies">Back to Movies</Link>
      </section>
    );
  }

  return (
    <section className="details">
      <img src={movie.image} alt={movie.title} />

      <div>
        <h1>{movie.title}</h1>

        <p>Year: {movie.year}</p>
        <p>Genre: {movie.genre}</p>
        <p>Rating: ⭐ {movie.rating}</p>

        <p>{movie.description}</p>

        <Link to="/movies" className="main-btn">
          Back to Movies
        </Link>
      </div>
    </section>
  );
}

export default MovieDetails;
