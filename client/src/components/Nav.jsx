import { Link } from "react-router-dom";
import { hamburger } from "../assets/icons";
import { navLinks, buttonLinks } from "../constants";

const Navbar = () => {
  return (
    <header className="px-10 py-5 absolute z-10 w-full overflow-x-hidden">
      <nav className="flex justify-between items-center mx-auto max-w-screen-xl">
        {/* logo */}
        <Link to="/">
          <p className="font-semibold font-display text-3xl"><span className="text-gray-100">▼</span>NKUNZI</p>
        </Link>
        <ul className="flex-1 items-center justify-center gap-16 hidden md:flex">
          {navLinks.map((items) => (
            <li key={items.label}>
              <Link
                to={items.to}
                className="font-display text-lg leading-normal hover:text-grayColor "
              >
                {items.label}
              </Link>
            </li>
          ))}
        </ul>
        {buttonLinks.map((items) => (
          <Link
            to={items.to}
            key={items.label}
            className="hidden p-3 px-8 pt-2 font-display tracking-wide text-white bg-black baseline hover:bg-grayColor md:block  md:p-3 md:ml-4 "
          >
            {items.label}
          </Link>
        ))}
        <div className="block md:hidden focus:outline-none">
          <img src={hamburger} alt="hamburger icon" width={25} height={25} />
        </div>
      </nav>
      <div className="w-full mt-4 bg-black h-0.5"></div>
    </header>
  );
};

export default Navbar;
