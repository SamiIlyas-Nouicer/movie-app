import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [queryResponse, setQueryResponse] = useState({});
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);
  const [actors, setActors] = useState(null);
  const [directors, setDirectors] = useState(null);

  useEffect(() => {
    console.log("query response changed:", queryResponse);
    setMovies(queryResponse);
  }, [queryResponse]);

  return (
    <div className="flex flex-col w-full h-screen bg-derby-100">
      <NavBar
        queryResponse={queryResponse}
        setQueryResponse={setQueryResponse}
      />
      <div className="h-full p-5">
        {movies.length > 0
          ? movies
              .filter((movie) => movie.infos) // Filter out movies with undefined infos
              .map((movie) => (
                <div
                  key={movie.infos.id}
                  className="flex p-3 relative w-8/12 border rounded m-2 border-derby-100 border-1 text-black shadow-lg bg-cascade-1 hover:transform hover:scale-105 transition duration-300 cursor-pointer"
                >
                  <div className="w-2/12 p-5 ">
                    <img
                      className="object-cover rounded"
                      src={movie.infos.image}
                      alt={`${movie.infos.title} poster`}
                    />
                  </div>
                  <div className="flex flex-col w-8/12 p-5">
                    <div className="mb-3">
                      {movie.infos.title} {movie.infos.releaseDetailed?.year}
                    </div>
                    <div className="mb-5">{movie.infos.plot}</div>
                    <div className="absolute bottom-0 p-5">
                      Directed By{" "}
                      {movie.infos.directors ? movie.infos.directors[0] : null}
                    </div>
                  </div>
                  <div className="absolute bottom-0 right-0 p-5">
                    Rating: {movie.infos.rating.star}/10
                  </div>
                </div>
              ))
          : null}
      </div>
    </div>
  );
};

export default Home;
