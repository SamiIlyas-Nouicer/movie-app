const Crew = ({ movie }) => {
  return (
    <div>
      <div className="flex flex-col flex-wrap w-full">
        {movie.directors.map((director) => (
          <div key={director.id} className="w-full p-2">
            <div className="text-center w-full flex justify-between items-center">
              <h2 className="rounded bg-spicy-mix-500 p-2 text-derby-200">
                Director
              </h2>
              ----------------------------------------------------------{">"}{" "}
              <div className="rounded bg-spicy-mix-700 p-2 text-derby-200">
                {director}
              </div>
            </div>
          </div>
        ))}
        {movie.writers.map((writer) => (
          <div key={writer.id} className="w-full p-2">
            <div className="text-center w-full flex justify-between items-center">
              <h2 className="rounded bg-spicy-mix-500 p-2 text-derby-200">
                writer
              </h2>
              ----------------------------------------------------------{">"}{" "}
              <div className="rounded bg-spicy-mix-700 p-2 text-derby-200">
                {writer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Crew;
