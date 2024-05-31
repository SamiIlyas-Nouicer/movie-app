const Details = ({ movie }) => {
  return (
    <div>
      <div className="flex flex-col flex-wrap w-full">
        {movie.genre.map((genre) => (
          <div key={genre.id} className="w-full p-2">
            <div className="text-center w-full flex justify-between items-center">
              <h2 className="rounded bg-spicy-mix-500 p-2 text-derby-200">
                Genre
              </h2>
              ----------------------------------------------------------{">"}{" "}
              <div className="rounded bg-spicy-mix-700 p-2 text-derby-200">
                {genre}
              </div>
            </div>
          </div>
        ))}
        <div className="text-center w-full flex justify-between items-center">
          <h2 className="rounded bg-spicy-mix-500 p-2 text-derby-200 w-full">
            languages Spoken :
          </h2>{" "}
          <span className="flex"> </span>
          {movie.spokenLanguages.map((language) => (
            <div key={language.id} className="w-full p-2">
              <div className="rounded bg-spicy-mix-700 p-2 text-derby-200">
                {language.language}
              </div>
            </div>
          ))}
        </div>
        {movie.filmingLocations.map((location) => (
          <div key={location.id} className="w-full p-2">
            <div className="text-center w-full flex justify-between items-center gap-2">
              <h2 className="rounded bg-spicy-mix-500 p-2 text-derby-200 w-full">
                filmingLocations :
              </h2>

              <div className="rounded bg-spicy-mix-700 p-2 text-derby-200">
                {location}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Details;
