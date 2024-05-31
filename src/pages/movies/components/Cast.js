const Cast = ({ movie }) => {
  return (
    <div>
      <div className="flex  ">
        {movie.actors.map((actor) => (
          <div key={actor.id} className="w-full p-2">
            <div className="text-center">
              <h2 className="rounded bg-spicy-mix-700 p-2 text-derby-200">
                {actor}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Cast;
