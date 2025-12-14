import { useParams } from "react-router-dom";
import useFetch from "../fetch/Fetch";

const FilmDetails = () => {
  // Get film id
  const { id } = useParams();
  // Fetch film details with id
  const [film, loading, error] = useFetch(`/api/films/${id}`);

  // Loading
  if (loading) return <p className="p-6 bg-[#7bb591] border-[#7bb591] text-[#0b5b2a]">Loading…</p>;
  // Error
  if (error) return <p className="p-6 bg-[#7bb591] border-[#7bb591] text-[#cd6022]">Error: {error}</p>;


  // Returns Movie banner, film title, original title, description, director, producer, release date and running time from api
  return (
    <div className="bg-[#7bb591] min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-[#2f527d] border border-[#1e3a5f] rounded-xl p-6">
        <img
          src={film.movie_banner}
          alt={film.title}
          className="rounded-lg mb-6 w-full object-cover"
        />

        <h1 className="text-6xl font-bold text-[#5cc998] mb-2 font-['Tangerine']">
          {film.title}
        </h1>

        <p className="italic text-[#9ce4c3] mb-4">
          Original title: {film.original_title}
        </p>

        <p className="text-[#bce4d2] mb-6 leading-relaxed">
          {film.description}
        </p>

        <div className="space-y-2 text-[#bce4d2] text-sm">
          <p><strong>Director:</strong> {film.director}</p>
          <p><strong>Producer:</strong> {film.producer}</p>
          <p><strong>Release Date:</strong> {film.release_date}</p>
          <p><strong>Running Time:</strong> {film.running_time} minutes</p>
        </div>
      </div>
    </div>
  );
};

export default FilmDetails;
