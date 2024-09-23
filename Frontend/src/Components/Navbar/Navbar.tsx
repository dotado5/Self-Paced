import { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import LocalStorage from "../../Services/Localstorage";
import {
  USER_ACCESS_TOKEN,
  USER_FIRSTNAME,
  USER_INITIALS,
} from "../../Constants/api";

export const Logo = ({ width }: { width: string }) => {
  return (
    <div
      className={`text-white bg-[#6C6C6C] px-3 py-1 text-lg font-bold ${width}`}
    >
      <Link to={"/"}>Self-Paced</Link>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [initials, setInitials] = useState<string | null>("");

  useEffect(() => {
    async function getUserDetails() {
      // console.log(LocalStorage.get(USER_INITIALS));

      if (LocalStorage.get(USER_INITIALS)?.length !== 0) {
        await setInitials(LocalStorage.get(USER_INITIALS));
      }

      // console.log(initials);
    }

    getUserDetails();
  }, []);

  useEffect(() => {
    const checkTokenExpiration = () => {
      if (localStorage.getItem(USER_ACCESS_TOKEN)?.length === 0) {
        localStorage.setItem(USER_INITIALS, "");
        localStorage.setItem(USER_FIRSTNAME, "");
      }

      const interval = setInterval(checkTokenExpiration, 1000); // Check every second

      return () => clearInterval(interval);
    };

    checkTokenExpiration();
  }, []);

  return (
    <nav className="navbar">
      <div className="container mx-auto flex justify-between items-center">
        <Logo width={""} />
        <div className="hidden md:flex lg:flex xl:flex space-x-4 items-center">
          <Link to={"/categories"} className="text-black">
            Courses
          </Link>

          {initials && initials.length !== 0 ? (
            <p className="navbarIcon">{initials}</p>
          ) : (
            <Link
              to={"auth/signin"}
              className="bg-[#0D5986] text-white px-3 ml-4 py-1 rounded hover:bg-[#084466]"
            >
              Login
            </Link>
          )}
        </div>
        <div className="md:hidden lg:hidden xl:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#0D5986] focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden lg:hidden xl:hidden">
          <Link to={"/categories"} className="block text-black px-2 py-1">
            Courses
          </Link>
          <Link
            to={"auth/signin"}
            className="block bg-[#0D5986] text-white px-3 py-1 rounded hover:bg-[#084466]"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
