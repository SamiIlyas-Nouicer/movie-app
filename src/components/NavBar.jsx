import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Find_Imdb } from "../pages/api/Imdb"; // Adjust the import path according to your project structure
import { Find_Imdb_By_Id } from "../pages/api/Imdb";
import { useEffect } from "react";
import SignOut from "./SignOut";
import { useRouter } from "next/router";

const NavBar = ({ queryResponse, setQueryResponse }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState(null);
  const [movieId, setMovieId] = useState([]);
  const router = useRouter();
  useEffect(() => {
    if (movieId.length > 0) {
      const fetchMovies = async () => {
        try {
          const movies = await Promise.all(
            movieId.map(async (movie) => {
              const infos = await Find_Imdb_By_Id(movie.id);
              console.log("Fetched movie info:", infos); // Log the fetched data
              return { infos };
            })
          );
          router.push("/home");
          console.log("Fetched movies array:", movies); // Log the array of fetched movies
          setQueryResponse(movies);
        } catch (error) {
          console.error("Error fetching movies:", error);
          setError(error.message);
        }
      };
      fetchMovies();
    }
  }, [movieId, setQueryResponse, setError]);

  const handleSearch = async (e) => {
    e.preventDefault();
    setError(null); // Reset error state before new search

    try {
      console.log("Searching for:", searchQuery);

      const response = await Find_Imdb(searchQuery);
      console.log("Response from API:", response);
      const Id = response.results.map((movie) => ({
        id: movie.id,
      }));
      setMovieId(Id);
      console.log("Movie Ids:", Id);
      // setQueryResponse(response);
      setSearchQuery("");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <nav className=" w-full bg-blue-dianne-900 p-4 text-derby-100">
      <div className="flex justify-between items-center">
        <div
          className=" text-xl font-bold cursor-pointer "
          onClick={() => router.push("/home")}
        >
          Movi<span className="text-derby-700">Wise</span>
        </div>
        <div className="flex gap-4">
          <div className=" hidden md:block">
            <div className="relative flex items-center">
              <FontAwesomeIcon
                icon={faSearch}
                className="absolute left-3 text-spicy-mix-700   hover:text-spicy-mix-700  cursor-pointer  hover:rounded-full hover:p-1 hover:bg-peach-orange-300 transition duration-300"
                onClick={handleSearch}
              />
              <input
                type="text"
                placeholder="search"
                className="pl-5 pr-2 py-1 text-center rounded border border-gray-300 text-spicy-mix-700"
                onChange={(e) => setSearchQuery(e.target.value)}
                value={searchQuery}
              />
            </div>{" "}
          </div>
          <SignOut />
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-gray-400 hover:text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-2">
          <a
            href="#"
            className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Home
          </a>
        </div>
      )}
    </nav>
  );
};
export default NavBar;
