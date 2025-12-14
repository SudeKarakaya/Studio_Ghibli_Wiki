import useFetch from "../fetch/Fetch";
import { useEffect, useState } from "react";

const Locations = () => {

  // Fetch locations from api
  const [locations, loading, error] = useFetch("/locations");
  const [filmsMap, setFilmsMap] = useState({});

  // When locations are shown on the page, fetches related films and stores them
  useEffect(() => {
    if (!locations.length) return;

    // Gets film id
    const filmIds = [
      ...new Set(
        locations
          .flatMap((l) => l.films || [])
          .map((url) => url.split("/").pop())
      ),
    ];

    // Gets film data by id
    Promise.all(
      filmIds.map((id) =>
        fetch(`${base_url}/films/${id}`)
          .then((res) => res.json())
          .then((data) => ({ id, data }))
      )
    ).then((results) => {
      const map = {};
      results.forEach(({ id, data }) => {
        map[id] = data;
      });
      setFilmsMap(map);
    });
  }, [locations]);

  // Loading
  if (loading)
    return (
      <p className="p-6 bg-[#7bb591] text-[#0b5b2a]">
        Loading…
      </p>
    );

  // Error
  if (error)
    return (
      <p className="p-6 bg-[#7bb591] text-[#cd6022]">
        Error: {error}
      </p>
    );


  // Returns location name, film name, climate, terrain and surface water level from api.
  return (
    <div className="bg-[#7bb591] min-h-screen p-6 space-y-6">
      <h1 className="text-5xl font-semibold text-[#156d37] font-['Tangerine']">
        Studio Ghibli Locations
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {locations.map((location) => {
          const filmId = location.films?.[0]?.split("/").pop();
          const film = filmId && filmsMap[filmId];

          return (
            <div
              key={location.id}
              className="bg-[#2f527d] border border-[#1e3a5f] rounded-xl p-4 text-sm text-[#bce4d2]"
            >
              <h2 className="text-lg font-semibold text-[#5cc998]">
                {location.name}
              </h2>

              {film && (
                <p className="text-xs italic text-[#9ce4c3] mb-1">
                  Appears in: {film.title} ({film.original_title})
                </p>
              )}

              <p>Climate: {location.climate}</p>
              <p>Terrain: {location.terrain}</p>
              <p>Surface water level: {location.surface_water}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Locations;
