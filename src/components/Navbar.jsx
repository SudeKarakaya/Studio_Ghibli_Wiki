import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Returns navbar, app title, navigation links to Home, Characters, Films and Locations pages.
  // Chnages layout based on screen size, if screen size is small adds a extended part for Home, Characters, Films and Locations pages.
  return (
    <nav className="bg-[#4470a7] border-b border-[#3fa668]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <NavLink
          to="/"
          className="text-2xl font-bold text-[#095225] font-['Nunito',sans-serif]"
        >
          Studio Ghibli Wiki
        </NavLink>


        <div className="hidden md:flex gap-6 text-lg font-['Nunito',sans-serif]">

          <NavLink
            to="/"
            className={({ isActive }) => {
              if (isActive) {
                return "text-[#095225] font-semibold";
              }
              return "text-[#23446e] hover:text-[#10572b]";
            }}
          >
            Home
          </NavLink>

          <NavLink
            to="/films"
            className={({ isActive }) => {
              if (isActive) {
                return "text-[#095225] font-semibold";
              }
              return "text-[#23446e] hover:text-[#10572b]";
            }}
          >
            Films
          </NavLink>

          <NavLink
            to="/characters"
            className={({ isActive }) => {
              if (isActive) {
                return "text-[#095225] font-semibold";
              }
              return "text-[#23446e] hover:text-[#10572b]";
            }}
          >
            Characters
          </NavLink>

          <NavLink
            to="/locations"
            className={({ isActive }) => {
              if (isActive) {
                return "text-[#095225] font-semibold";
              }
              return "text-[#23446e] hover:text-[#10572b]";
            }}
          >
            Locations
          </NavLink>

        </div>


        <button
          className="md:hidden text-[#0b5b2a] text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

{menuOpen && (
  <div className="md:hidden bg-[#80a2d19e] px-6 pb-4 flex flex-col gap-4 font-['Nunito',sans-serif]">

    <NavLink
      to="/"
      onClick={() => setMenuOpen(false)}
      className={({ isActive }) => {
        if (isActive) {
          return "text-[#095225] font-semibold";
        }
        return "text-[#23446e] hover:text-[#10572b]";
      }}
    >
      Home
    </NavLink>

    <NavLink
      to="/films"
      onClick={() => setMenuOpen(false)}
      className={({ isActive }) => {
        if (isActive) {
          return "text-[#095225] font-semibold";
        }
        return "text-[#23446e] hover:text-[#10572b]";
      }}
    >
      Films
    </NavLink>

    <NavLink
      to="/characters"
      onClick={() => setMenuOpen(false)}
      className={({ isActive }) => {
        if (isActive) {
          return "text-[#095225] font-semibold";
        }
        return "text-[#23446e] hover:text-[#10572b]";
      }}
    >
      Characters
    </NavLink>

    <NavLink
      to="/locations"
      onClick={() => setMenuOpen(false)}
      className={({ isActive }) => {
        if (isActive) {
          return "text-[#095225] font-semibold";
        }
        return "text-[#23446e] hover:text-[#10572b]";
      }}
    >
      Locations
    </NavLink>

  </div>
)}

    </nav>
  );
};

export default Navbar;
