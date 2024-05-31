const Release = ({ movie }) => {
  return (
    <div className="flex ">
      <h2 className="rounded bg-spicy-mix-500 p-2 text-derby-200 w-full h-min">
        Release locations :
      </h2>
      <div className="flex flex-wrap w-full ">
        {movie.releaseDetailed.originLocations.map((location) => (
          <div key={location.id} className="p-2">
            <div className="rounded bg-spicy-mix-700 p-2 text-derby-200">
              {location.country}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Release;
