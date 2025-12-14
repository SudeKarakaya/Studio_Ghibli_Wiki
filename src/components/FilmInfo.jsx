import { useEffect, useState } from "react";

/**
 * Receives a films url and fetches that films information from api.
 * Uses these informations in Characters and Locations pages to show 
 * where each character or location is in which film.
 */
const FilmInfo = ({ filmUrl }) => {
  const [film, setFilm] = useState(null);

  useEffect(() => {
    if (!filmUrl) return;

    const filmId = filmUrl.split("/").pop();

    // Fetch film info by id
    fetch(`https://ghibliapi.vercel.app/films/${filmId}`)
      .then((res) => res.json())
      .then((data) => setFilm(data))
      .catch((err) => {
        console.error("Film fetch error:", err);
      });
  }, [filmUrl]);

  if (!film) return null;

  // Returns film title and original title
  return (
    <p className="text-xs italic text-[#9ce4c3]">
      Appears in: {film.title} ({film.original_title})
    </p>
  );
};

export default FilmInfo;
