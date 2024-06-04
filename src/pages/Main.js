import NavBar from "@/components/NavBar";
import { useEffect, useState } from "react";
import { Get_Week_Top10 } from "./api/Imdb";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await Get_Week_Top10();
        console.table("Response from API:", response.data);

        if (Array.isArray(response.data)) {
          setMovies(response.data);
        } else {
          console.error("Unexpected response format:", response);
          setError("Unexpected response format");
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
        setError(error.message);
      }
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    console.log("Movies state updated:", movies);
  }, [movies]);

  return (
    <div>
      <NavBar />
      <div className="min-h-screen h-full bg-derby-200">
        <h1 className="font-bold text-3xl p-3">Most watched this week</h1>
        <div className="flex ">
          {error && <div className="text-red-500">{error}</div>}
          {movies.length > 0 ? (
            movies.map((movie) => (
              <div
                key={movie.id}
                className="flex flex-col  relative w-8/12  border rounded m-2 border-derby-100 border-1 text-black shadow-lg bg-cascade-1
                hover:transform hover:scale-105 transition duration-300 cursor-pointer"
              >
                <div className="">
                  <img
                    className="object-cover rounded"
                    src={movie.primaryImage?.imageUrl}
                    alt={`${movie.originalTitleText?.text || "Movie"} poster`}
                  />
                </div>
                <div className="flex flex-col h-2/12  p-1 text-center">
                  <div className="mb-3">
                    {movie.originalTitleText?.text || "Unknown Title"}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>No movies found.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
