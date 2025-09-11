import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightToBracket,
  faBars,
  faMagnifyingGlass,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function ImagePostsByCategory() {
  const { slug } = useParams();
  const [category, setCategory] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true); // mulai loading
      const res = await fetch(
        `http://localhost:8000/api/image-posts/category/${slug}`
      );
      const data = await res.json();
      setCategory(data.category);
      setPosts(data.image_posts);
      setLoading(false); // selesai loading
    };
    fetchPosts();
  }, [slug]);

  if (loading) {
    return (
      <section className="max-w-7xl mx-auto px-4 mt-20 py-10">
        {/* Skeleton judul */}
        <div className="h-8 w-48 bg-gray-200 rounded animate-pulse mb-8"></div>

        {/* Skeleton grid sesuai jumlah posts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(posts.length || 8)].map((_, i) => (
            <div
              key={i}
              className="rounded-lg overflow-hidden shadow-lg animate-pulse"
            >
              <div className="w-full h-60 bg-gray-200"></div>
              <div className="p-4">
                <div className="h-4 w-3/4 bg-gray-200 rounded mb-2"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="w-full h-full">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 bg-black transition-colors duration-300 
        }`}
      >
        <div className="flex items-center justify-between px-6 py-3 text-white">
          {/* Logo */}
          <div className="avatar">
            <div className="lg:w-[250px] w-[150px] h-8 -ml-10 mt-3 lg:h-14 lg:mt-3 lg:ml-3">
              <img src="/img/nav-logo.png" />
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
              className="btn btn-outline btn-error px-6 hover:scale-110 duration-500"
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
      {/* Navbar end */}
      <div className="max-w-7xl mx-auto px-4 py-10 mt-20">
        {posts.length > 0 && (
          <h1 className="text-3xl font-bold mb-8">{category.name}</h1>
        )}

        {posts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-24 w-24 text-gray-400 mb-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 17L3 12l6.75-5m4.5 10L21 12l-6.75-5M3 6h18"
              />
            </svg>

            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
              Data Image Post Tidak Ada
            </h2>

            {/* Description */}
            <p className="text-gray-500 mb-6">
              Sepertinya kategori ini belum memiliki gambar. Coba jelajahi
              kategori lainnya!
            </p>

            {/* Button kembali */}
            <a
              href="/explore"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              Kembali Ke Kategori
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {posts.map((post) => (
              <div
                key={post.id}
                className="relative group rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={`http://localhost:8000/storage/${post.image}`}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <h2 className="text-lg font-semibold">{post.title}</h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* footer */}
      <hr className="bg-black w-full" />
      <footer className="bg-[#ffff] text-neutral-content p-10" data-aos="fade">
        <div className="footer sm:footer-horizontal">
          <aside>
            <img
              src="/img/logo-text-dark.png"
              alt="footer-logo"
              className="w-[150px] h-[85px]"
            />
            <p className="text-black">
              PixFlow.
              <br />
              Providing reliable tech since 2025
            </p>
          </aside>

          <nav>
            <h6 className="footer-title text-black">Social</h6>
            <div className="grid grid-flow-col gap-4">
              <a
                href="https://github.com/Afaandii"
                className="text-3xl text-black"
                aria-label="github"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://www.instagram.com/afandiii._/"
                className="text-3xl text-black"
                aria-label="instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://www.linkedin.com/in/ahmad-afandi-588139306"
                className="text-3xl text-black"
                aria-label="linkdln"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </nav>

          <nav>
            <h6 className="footer-title text-black">Services</h6>
            <a href="/" className="link link-hover text-black">
              Branding
            </a>
            <a href="/" className="link link-hover text-black">
              Design
            </a>
            <a href="/" className="link link-hover text-black">
              Marketing
            </a>
            <a href="/" className="link link-hover text-black">
              Advertisement
            </a>
          </nav>
          <nav>
            <h6 className="footer-title text-black">Company</h6>
            <a href="/" className="link link-hover text-black">
              About us
            </a>
            <a href="/" className="link link-hover text-black">
              Contact
            </a>
            <a href="/" className="link link-hover text-black">
              Jobs
            </a>
            <a href="/" className="link link-hover text-black">
              Press kit
            </a>
          </nav>
          <nav>
            <h6 className="footer-title text-black">Legal</h6>
            <a href="/" className="link link-hover text-black">
              Terms of use
            </a>
            <a href="/" className="link link-hover text-black">
              Privacy policy
            </a>
            <a href="/" className="link link-hover text-black">
              Cookie policy
            </a>
          </nav>
        </div>

        <hr className="h-[2px] bg-black my-4 w-full" />
        <div className="w-full">
          <p className="font-poppins z-30 text-black text-[13px]">
            © {new Date().getFullYear()} PixFlow
          </p>
        </div>
      </footer>
      {/* footer end */}
    </section>
  );
}
