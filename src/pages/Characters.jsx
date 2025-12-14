import useFetch from "../fetch/Fetch";
import { useState, useTransition, useEffect } from "react";
import FilmInfo from "../components/FilmInfo";

// Number of characters to display for each Load More.
const items = 10;

const Characters = () => {
  // Fetch characters from api
  const [people, loading, error] = useFetch("/people");

  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");
  const [, startTransition] = useTransition();

  const [visibleCount, setVisibleCount] = useState(items);

  // Changes visible characters based on user input
  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
    startTransition(() => {
      setQuery(value);
      setVisibleCount(items);
    });
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

  // Filters characters by name
  const filteredPeople = people.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  // Shows only 10 characters at a time
  const visiblePeople = filteredPeople.slice(0, visibleCount);

  // Returns page title, search bar, character details for each character and Load More button
  return (
    <div className="bg-[#7bb591] min-h-screen p-6 space-y-6">
      <h1 className="text-5xl font-semibold text-[#156d37] font-['Tangerine']">
        Studio Ghibli Characters
      </h1>

      <input
        value={input}
        onChange={handleChange}
        placeholder="Search characters..."
        className="w-full md:w-1/2 px-3 py-2 rounded bg-[#2f527d] border border-[#1e3a5f] text-sm  focus:outline-none focus:ring-2 focus:ring-[#319769]"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {visiblePeople.map((person) => (
          <div
            key={person.id}
            className="bg-[#2f527d] border border-[#1e3a5f]
                       rounded-xl p-4 text-sm text-[#bce4d2]"
          >
            <h2 className="text-lg font-semibold text-[#5cc998]">
              {person.name}
            </h2>

            <FilmInfo filmUrl={person.films?.[0]} />

            <p>Gender: {person.gender}</p>
            <p>Age: {person.age}</p>
            <p>Eye: {person.eye_color}</p>
            <p>Hair: {person.hair_color}</p>
          </div>
        ))}
      </div>

      {visibleCount < filteredPeople.length && (
        <div className="flex justify-center">
          <button
            onClick={() =>
              setVisibleCount((prev) => prev + items)
            }
            className="px-6 py-2 rounded-lg
                       bg-[#2f527d] border border-[#1e3a5f]
                       text-[#5cc998] hover:bg-[#17365f]
                       transition"
          >
            Load more
          </button>
        </div>
      )}
    </div>
  );
};

export default Characters;
