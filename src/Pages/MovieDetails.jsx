import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    useEffect(() => { 
        axios.get(`https://www.omdbapi.com/?i=${id}&apikey=1231444b`).then((res) => {
            setMovie(res.data);
        },[id])
    });

    if (!movie) return <h3 className="text-center">Please while the movie loads</h3>
    return (
      <div className="mx-auto">
        <div className="flex flex-row justify-center items-center md:flex-row xl:flex-row sm:flex-col flex-wrap gap-6">
          <img src={movie.Poster} alt="" className="w-[500px]" />
          <div className="flex flex-col divide-y-2 divide-y-reverse divide-gray-200">
            <h1 className="text-3xl mb-6 font-bold">{movie.Title}</h1>
            <h4 className="text-xl mb-3 py-3">Genre:{movie.Genre}</h4>
            <h4 className="mb-3 py-3">Actors:{movie.Actors}</h4>
            <h5 className="mb-3 py-3">Runtime:{movie.Runtime}</h5>
            <h5 className="mb-3 py-3">Language:{movie.Language}</h5>
            <h5 className="mb-3 py-3">Directors:{movie.Director}</h5>
            <p className="text-gray-500 py-3 w-96">{movie.Plot}</p>
          </div>
        </div>
      </div>
    );
}

export default MovieDetails
