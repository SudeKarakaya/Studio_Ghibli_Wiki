import { Link } from "react-router-dom";

const Home = () => {


  // Returns main title, information about the studio and navigations to films, characters and locations.
  return (
    <div className="bg-[#7bb591] min-h-screen p-6">

      <section className="bg-[#2f527d] border border-[#1e3a5f] rounded-xl p-10 text-center max-w-5xl mx-auto">
        <h1 className="text-6xl font-bold text-[#5cc998] mb-4 font-['Tangerine']">
          Studio Ghibli
        </h1>

        <p className="text-gray-200 max-w-2xl mx-auto">
          Studio Ghibli is a Japanese animation studio founded in 1985 by Hayao Miyazaki and Isao Takahata.
          The studio is mostly recognized for its hand-drawn animation style, their unique stories and storytelling.
          Studio Ghibli films often explore themes such as nature, humanity, childhood, war, and personal growth.
          Over the years, Studio Ghibli has become one of the most internationally recognized animation studios in the world.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto">
        
        <Link
          to="/films"
          className="bg-[#2f527d] border border-[#1e3a5f] rounded-xl p-8 text-center
                     hover:bg-[#17365f] transition group"
        >
          <h2 className="text-5xl font-semibold text-[#5cc998] mb-2 group-hover:underline font-['Tangerine']">
            Films
          </h2>
          <p className="text-gray-200 text-sm">
            Discover Studio Ghibli's iconic films, including release years, directors, and detailed story descriptions.
          </p>
        </Link>

        <Link
          to="/characters"
          className="bg-[#2f527d] border border-[#1e3a5f] rounded-xl p-8 text-center
                     hover:bg-[#17365f] transition group"
        >
          <h2 className="text-5xl font-semibold text-[#5cc998] mb-2 group-hover:underline font-['Tangerine']">
            Characters
          </h2>
          <p className="text-gray-200 text-sm">
            Explore the memorable characters from the Studio Ghibli universe.
          </p>
        </Link>

        <Link
          to="/locations"
          className="bg-[#2f527d] border border-[#1e3a5f] rounded-xl p-8 text-center
                     hover:bg-[#17365f] transition group"
        >
          <h2 className="text-5xl font-semibold text-[#5cc998] mb-2 group-hover:underline font-['Tangerine']">
            Locations
          </h2>
          <p className="text-gray-200 text-sm">
            Browse locations and environments that shape the stories of Studio Ghibli films.
          </p>
        </Link>

      </section>
    </div>
  );
};

export default Home;
