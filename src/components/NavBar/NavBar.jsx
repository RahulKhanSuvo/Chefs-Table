import { CgProfile } from "react-icons/cg";

const NavBar = () => {
  return (
    <nav className="flex font-Lexend items-center justify-between ">
      {/* Left Section */}
      <h3 className="flex-1 text-xl font-bold">Recipe Calories</h3>

      {/* Center Section */}
      <div className="flex-1 flex items-center justify-center gap-6">
        <h5>Home</h5>
        <h5>Recipes</h5>
        <h5>About</h5>
        <h5>Search</h5>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex items-center justify-end gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 pl-10 rounded-full bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-gray-500 absolute left-3 top-2.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>
        <div className="bg-[#0BE58A] p-2 rounded-full">
          <span className="text-2xl">
            <CgProfile />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
