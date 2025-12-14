import useFetch from "../fetch/Fetch";
import { Link, useNavigate } from "react-router-dom";
import { useState, useTransition } from "react";

const Films = () => {
  // Fetch films from api
  const [films, loading, error] = useFetch("/api/films");
  
  // For navigation to film details page
  const navigate = useNavigate(); 

  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");
  const [isPending, startTransition] = useTransition();

  // Changes visible films based on user input
  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
    startTransition(() => setQuery(value));
  };

  // Search user input
  const getRandomFilm = () => {
    if (!films || films.length === 0) return;
    const randomIndex = Math.floor(Math.random() * films.length);
    const randomFilm = films[randomIndex];
    navigate(`/films/${randomFilm.id}`);
  };

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

  // Changes visible films based on user input
  const filteredFilms = films.filter((film) =>
    film.title.toLowerCase().includes(query.toLowerCase())
  );


  // Returns page title, searched films, random film details button, films, film poster, info, title, original title, release date and director from api.
  return (
    <div className="space-y-6 bg-[#7bb591] min-h-screen p-6">
      <h1 className="text-5xl font-semibold text-[#156d37] font-['Tangerine']">
        Studio Ghibli Films
      </h1>

      <div className="flex flex-col md:flex-row gap-4 md:items-center">
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Search films..."
          className="w-full md:w-1/2 px-3 py-2 rounded bg-[#2f527d] border border-[#1e3a5f] text-sm focus:outline-none focus:ring-2 focus:ring-[#319769]"
        />

        <button
          onClick={getRandomFilm}
          className="px-4 py-2 rounded bg-[#2f527d] text-bold text-[#5cc998] font-medium hover:bg-[#17365f] hover:underline block transition"
        >
           Discover a Random Ghibli Film
        </button>
      </div>

      {isPending && (
        <p className="text-sm text-[#156d37]">
          Searching…
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredFilms.map((film) => (
          <div
            key={film.id}
            className="flex gap-4 bg-[#2f527d] border border-[#1e3a5f] rounded-xl p-4 hover:bg-[#17365f] transition"
          >
            <img
              src={film.image}
              alt={film.title}
              className="w-18 h-26 object-cover rounded-md shrink-0"
            />

            <div className="text-sm space-y-1">
              <Link
                to={`/films/${film.id}`}
                className="font-semibold text-[#5cc998] hover:underline block"
              >
                {film.title}
              </Link>

              <p className="text-xs italic text-[#9ce4c3]">
                {film.original_title}
              </p>

              <p className="text-[#bce4d2]">
                <span className="font-medium">Year:</span>{" "}
                {film.release_date}
              </p>

              <p className="text-[#bce4d2]">
                <span className="font-medium">Director:</span>{" "}
                {film.director}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Films;
