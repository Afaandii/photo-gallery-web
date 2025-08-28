import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Navigasi() {
  return (
    <>
      <div className="navbar bg-opacity-50 bg-black text-white">
        <div className="navbar-start">
          <div className="avatar">
            <div className=" w-[250px] h-14 mt-3 ml-3 ">
              <img src="./src/assets/img/nav-logo.png" />
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex items-center">
          {/* Search Form */}
          <form action="" className="mr-6">
            <div className="relative w-[450px]">
              <span className="absolute z-50 left-4 top-1/2 -translate-y-1/2 text-gray-300">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="text-gray-300"
                />
              </span>
              <input
                type="search"
                name="keyword"
                id="keyword"
                placeholder="Cari Gambar serta item lainnya"
                className="w-full pl-12 pr-4 py-3 rounded-full bg-gray-700/70 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/40 backdrop-blur-md shadow"
              />
            </div>
          </form>

          {/* Menu Nav */}
          <ul className="menu menu-horizontal px-1 gap-2 text-lg font-medium text-slate-100">
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
                href="/posts"
                className="relative inline-block text-[18px] no-underline text-white font-poppins group"
              >
                Blog
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="relative inline-block text-[18px] no-underline text-white font-poppins group"
              >
                Explore
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-3 mr-3">
          <a
            onClick={() =>
              (document.location.href = "http://localhost:8000/admin")
            }
            className=" btn btn-outline btn-error px-6  hover:scale-110 duration-500"
          >
            Login
            <FontAwesomeIcon icon={faArrowRightToBracket} />
          </a>
          {/* <a
            href="/register"
            className="btn btn-outline btn-error hover:scale-110 duration-500"
          >
            Register
            <FontAwesomeIcon icon={faArrowRightToBracket} />
          </a> */}
        </div>
      </div>
    </>
  );
}
