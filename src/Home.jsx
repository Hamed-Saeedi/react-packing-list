import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="hero">
      <div>
        <h1>Discover Your Next Movie 🎬</h1>

        <p>Explore movies, discover new stories and save your favorites.</p>

        <Link to="/movies" className="main-btn">
          Explore Movies
        </Link>
      </div>
    </section>
  );
}

export default Home;
