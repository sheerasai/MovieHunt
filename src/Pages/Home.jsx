
import Cards from "../Components/Cards";
import Preloader from "../Components/Preloader";
const Home = ({ loading, movies }) => {
  return (
    <>
      <div className="mx-auto">
        <div className="flex justify-center md:flex-row xl:flex-row sm:flex-col flex-wrap gap-4">
          {loading ? (
            <Preloader />
          ) : (
            movies.length > 0 &&
            movies.map((movie) => <Cards movie={movie} key={movie.imdbID} />)
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
