// pages/movies/[id].js
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Find_Imdb_By_Id } from "../api/Imdb"; // Adjust the import to your actual data fetching function
import NavBar from "@/components/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faUser, faClock } from "@fortawesome/free-solid-svg-icons";
import Cast from "./components/Cast";
import Crew from "./components/Crew";
import Details from "./components/Details";
import Release from "./components/Release";
import RatingStars from "./components/RatingStars";

const MovieDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [movie, setMovie] = useState(null);
  const [component, setComponent] = useState("CAST");

  useEffect(() => {
    if (id) {
      // Fetch the movie details using the id
      Find_Imdb_By_Id(id).then(setMovie);
    }
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <NavBar />
      <div className="flex h-full min-h-screen bg-derby-100">
        <div className="w-1/3 flex flex-col justify-center items-center">
          <img
            className="rounded-lg w-2/3 h-2/3"
            src={movie.image}
            alt={movie.title}
          />
          <div className="flex gap-16">
            <div className="text-xl font-bold p-2 flex justify-center items-center">
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: "#FFD43B" }}
                className="mr-2"
              />
              {movie.rating.star}
              <span className="font-normal">/10</span>
            </div>
            <div className="text-lg p-2 flex justify-center items-center">
              <FontAwesomeIcon
                icon={faUser}
                style={{ color: "#e64833" }}
                className="mr-2"
              />
              {movie.rating.count}
            </div>
          </div>
        </div>
        <div className="w-1/3 mt-48 p-1">
          <h1 className="font-bold text-xl p-1">
            {movie.title}
            <p className="opacity-70 p-1">{movie.releaseDetailed.year}</p>
            <p className="font-semibold text-lg p-1">{movie.runtime}</p>
          </h1>
          <p className="font-semibold text-md p-1 mb-5">{movie.plot}</p>
          <div className="flex justify-between">
            <button
              className="border-b-3 border-b-spicy-mix-600 p-1 px-4 hover:bg-derby-300 focus:bg-derby-300 rounded"
              onClick={() => setComponent("CAST")}
            >
              CAST
            </button>
            <button
              className="border-b-3 border-b-spicy-mix-600 p-1 px-4 hover:bg-derby-300 focus:bg-derby-300  rounded"
              onClick={() => setComponent("CREW")}
            >
              CREW
            </button>
            <button
              className="border-b-3 border-b-spicy-mix-600 p-1 px-4 hover:bg-derby-300 focus:bg-derby-300 rounded"
              onClick={() => setComponent("DETAILS")}
            >
              DETAILS
            </button>
            <button
              className="border-b-3 border-b-spicy-mix-600 p-1 px-4 hover:bg-derby-300 focus:bg-derby-300 rounded"
              onClick={() => setComponent("RELEASE")}
            >
              RELEASE
            </button>
          </div>
          <div className="p-1">
            {component === "CAST" && <Cast movie={movie} />}
            {component === "CREW" && <Crew movie={movie} />}
            {component === "DETAILS" && <Details movie={movie} />}
            {component === "RELEASE" && <Release movie={movie} />}
          </div>
        </div>
        <div className="w-1/3 border border-red-700 flex justify-center items-center">
          <div className="p-1 border border-red-700 w-2/3 h-3/5 rounded-lg">
            <div className="  w-full h-1/5 ">
              <RatingStars totalStars={5} className="" />
            </div>
            <div className="border border-red-700 text-4xl w-full h-1/5 flex justify-around items-center">
              <FontAwesomeIcon icon={faClock} /> Add to Watchlist
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
