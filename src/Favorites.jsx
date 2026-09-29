import MovieCard from "./MovieCard";

function Favorites({ favorites, onFavorite }) {
  return (
    <section className="page">
      <h1>My Favorites ❤️</h1>

      {favorites.length === 0 ? (
        <p className="empty">You haven't added any favorites yet.</p>
      ) : (
        <div className="movie-grid">
          {favorites.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onFavorite={onFavorite}
              isFavorite={true}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Favorites;
