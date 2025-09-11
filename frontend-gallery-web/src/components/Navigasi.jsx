import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightToBracket,
  faBars,
  faXmark,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

export default function Navigasi() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled || menuOpen ? "bg-black/90" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-3 text-white">
        {/* Logo */}
        <div className="avatar">
          <div className="lg:w-[250px] w-[150px] h-8 -ml-10 mt-3 lg:h-14 lg:mt-3 lg:ml-3">
            <img src="/assets/img/nav-logo.png" />
          </div>
        </div>

        {/* Hamburger (mobile only) */}
        <button
          className="lg:hidden text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Search Bar */}
          <form action="" className="mr-6">
            <div className="relative w-[450px]">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </span>
              <input
                type="search"
                placeholder="Cari Gambar serta item lainnya"
                className="w-full pl-12 pr-4 py-3 rounded-full bg-gray-700/70 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/40"
              />
            </div>
          </form>

          {/* Nav Links */}
          <ul className="flex gap-6 text-lg font-medium">
            <li>
              <a
                href="/"
                className="relative inline-block text-[18px] no-underline text-white font-poppins group"
              >
                Beranda
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="relative inline-block text-[18px] no-underline text-white font-poppins group"
              >
                About
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a
                href="/blogs"
                className="relative inline-block text-[18px] no-underline text-white font-poppins group"
              >
                Blog
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a
                href="/explore"
                className="relative inline-block text-[18px] no-underline text-white font-poppins group"
              >
                Explore
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          </ul>

          {/* Login Button */}
          <a
            onClick={() =>
              (document.location.href = "http://localhost:8000/admin")
            }
            className="btn btn-outline lg:mr-10 btn-error px-6 hover:scale-110 duration-500"
          >
            Login <FontAwesomeIcon icon={faArrowRightToBracket} />
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden px-4 pb-6 space-y-4 animate-fadeIn">
          {/* Search */}
          <form action="" className="mt-4">
            <div className="relative w-full">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </span>
              <input
                type="search"
                placeholder="Cari Gambar serta item lainnya"
                className="w-full pl-12 pr-4 py-2 rounded-full bg-gray-700/70 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/40"
              />
            </div>
          </form>

          {/* Nav Links */}
          <ul className="flex flex-col gap-3 text-lg font-medium">
            <li>
              <a
                href="/"
                className="relative inline-block text-[18px] no-underline text-white font-poppins group"
              >
                Beranda
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="relative inline-block text-[18px] no-underline text-white font-poppins group"
              >
                About
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a
                href="/blogs"
                className="relative inline-block text-[18px] no-underline text-white font-poppins group"
              >
                Blog
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a
                href="/explore"
                className="relative inline-block text-[18px] no-underline text-white font-poppins group"
              >
                Explore
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          </ul>

          {/* Login Button */}
          <a
            onClick={() =>
              (document.location.href = "http://localhost:8000/admin")
            }
            className="btn btn-outline btn-error w-full mt-2"
          >
            Login <FontAwesomeIcon icon={faArrowRightToBracket} />
          </a>
        </div>
      )}
    </nav>
  );
}
