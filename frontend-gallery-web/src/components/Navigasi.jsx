import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";

export default function Navigasi() {
  return (
    <>
      <div className="navbar bg-opacity-50 bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            {/* ul untuk mode mobile */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-slate-800 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 6</a>
              </li>
              <li>
                <a>Menu</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <img
            className="rounded-full ml-2"
            src="../src/assets/img/logo_sementara.png"
            width={65}
            height={60}
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5 text-lg font-medium text-slate-100">
            <li>
              <a
                href="/"
                className="hover:bg-[#dc2121] hover:scale-110 transition duration-700 ease-in-out"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:bg-[#dc2121] hover:scale-110 transition duration-700 ease-in-out"
              >
                About
              </a>
            </li>
            <li className="hover:bg-[#dc2121] hover:scale-110 transition duration-700 ease-in-out rounded-md">
              <a href="/posts">Posts</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-3 mr-3">
          <a
            onClick={() =>
              (document.location.href = "http://localhost:8000/admin")
            }
            className="btn btn-outline btn-error hover:scale-110 duration-500"
          >
            Login
            <FontAwesomeIcon icon={faArrowRightToBracket} />
          </a>
          <a
            href="/register"
            className="btn btn-outline btn-error hover:scale-110 duration-500"
          >
            Register
            <FontAwesomeIcon icon={faArrowRightToBracket} />
          </a>
        </div>
      </div>
    </>
  );
}
