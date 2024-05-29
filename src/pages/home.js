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
    <div className="flex flex-col w-full h-full bg-peach-orange-200">
      <NavBar
        queryResponse={queryResponse}
        setQueryResponse={setQueryResponse}
      />
      <div className="h-full">
        {movies.length > 0
          ? movies?.map((movie) => (
              <div key={movie.infos.imdb_id} className="flex p-2 ">
                <div className="w-1/12 p-5 ">
                  {" "}
                  <img className="object-cover rounded" src={movie.image}></img>
                </div>
                <div className="flex flex-col w-8/12 p-5 text-">
                  <div className="mb-3">
                    {movie.infos.title} {movie.infos.release_date}
                  </div>
                  <div className="mb-5">{movie.infos.description}</div>

                  <div>
                    Directed By{" "}
                    {movie.infos.directors ? movie.infos.directors[0] : null}
                  </div>
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Home;
