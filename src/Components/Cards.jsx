import { Link } from "react-router-dom";
const Cards = ({ movie }) => {
  const NewTitle = movie.Title.slice(1, 20) + "...";
  return (
    <Link to={`/movie/${movie.imdbID}`}>
      <div
        className="card w-[400px] bg-white p-5 rounded-md shadow-md mb-3 h-auto"
        key={movie.imdbID}
      >
        <div className="relative">
          <img
            src={
              movie.Poster !== "N/A"
                ? movie.Poster
                : "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg"
            }
            alt={movie.Title}
            className="w-[400px] h-[300px] mb-3"
          />

          <div className="absolute top-0 bg-blue-800 p-3 rounded-full w-lg">
            <p className="text-white">{movie.Year}</p>
          </div>
        </div>
        <h2 className="text-lg">
          {movie.Title.length > 20 ? NewTitle : movie.Title}
        </h2>
      </div>
    </Link>
  );
};

export default Cards;
