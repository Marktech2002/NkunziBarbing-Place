import { Fragment } from "react";
import { Menu } from "@headlessui/react";
import { Avatar } from "../../assets/img";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const links = [
  { href: "/account-settings", label: "Account settings" },
  { href: "/subscription", label: "Subscribe" },
  { href: "/appointments", label: "Appointments" },
  { href: "/sign-out", label: "Sign out" },
];

const NavBar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="font-display">
      <div
        className={`font-display fixed top-0 left-0 right-0 z-50 border-b-1 shadow-md ${
          scrollPosition > 100 ? "backdrop-blur" : ""
        }`}
      >
        <div className="mt-5 ml-4 flex items-center">
          <Link to="/">
            <p className="font-semibold font-display text-3xl">
              <span className="text-gray-100">▼</span>NKUNZI
            </p>
          </Link>
          <Link to="/appointments">
            <p className="hidden ml-[1080px] px-7 py-3 text-lg text-white leading-none rounded-lg hover:bg-bgLight hover:text-black bg-black md:block">
              BOOK AN APPOINTMENT
            </p>
          </Link>
        </div>
        <Menu>
          <Menu.Button>
            <div className="flex absolute top-3 right-10 items-center border-2 rounded-full pr-3 hover:bg-stone-400">
              <img
                src={Avatar}
                alt="User Avatar"
                className="w-15 h-12 rounded-full"
              ></img>
              <svg
                fill="#ebe3e0"
                height="20px"
                width="20px"
                version="1.1"
                id="Layer1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 407.437 407.437"
                stroke="#ebe3e0"
              >
                <g id="SVGRepo_iconCarrier">
                  <polygon points="386.258,91.567 203.718,273.512 21.179,91.567 0,112.815 203.718,315.87 407.437,112.815 "></polygon>{" "}
                </g>
              </svg>
            </div>
          </Menu.Button>
          <Menu.Items className="bg-bgLight font-medium text-lg rounded-[10px] w-fit space-y-3 pl-6 py-3 absolute top-full right-0  md:right-2 mt-2">
            {links.map((link) => (
              /* Use the `active` state to conditionally style the active item. */
              <Menu.Item key={link.href} as={Fragment} className="flex w-48">
                {({ active }) => (
                  <div>
                    <a
                      href={link.href}
                      className={`${
                        active ? "bg-white text-black px-3" : " text-black"
                      }`}
                    >
                      {link.label}
                    </a>
                  </div>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Menu>
      </div>
    </div>
  );
};

export default NavBar;
