import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Navigasi from "../Navigasi";
import Footer from "../Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function ImagePostsByCategory() {
  const { slug } = useParams();
  const [category, setCategory] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const ImageContentRef = useRef(null);

  const handleScroll = () => {
    ImageContentRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchPosts = async () => {
      try {
        const res = await fetch(
          `http://localhost:8000/api/image-posts/category/${slug}`
        );
        const data = await res.json();
        setCategory(data.category);
        setPosts(data.image_posts);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, [slug]);

  return (
    <section className="w-full h-full">
      {/* Navbar */}
      <div className="show-detil w-screen h-auto flex flex-col">
        <Navigasi />
        <div className="h-full flex flex-col justify-center items-center text-slate-400 text-center px-4 bg-black/70 w-full pt-20">
          {loading ? (
            <div className="h-10 w-64 bg-gray-500 rounded animate-pulse"></div>
          ) : posts.length > 0 ? (
            <h1 className="text-5xl font-bold text-center">{category.name}</h1>
          ) : (
            <h1 className="text-5xl text-red-500 font-bold text-center">
              Data Tidak Ditemukan
            </h1>
          )}

          <a
            onClick={handleScroll}
            className="mt-16 text-gray-300 cursor-pointer hover:text-white transition transform hover:translate-y-1"
          >
            <FontAwesomeIcon icon={faArrowDown} size="2x" />
          </a>
        </div>
      </div>
      {/* Navbar end */}

      <div ref={ImageContentRef} className="max-w-7xl mx-auto px-4 py-10 ">
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="flex flex-col rounded-xl shadow-md overflow-hidden bg-white border animate-pulse"
              >
                {/* Gambar skeleton */}
                <div className="w-full h-60 bg-gray-300" />

                {/* Konten skeleton */}
                <div className="p-4 flex flex-col gap-2">
                  <div className="h-4 bg-gray-300 rounded w-1/3" />
                  <div className="h-6 bg-gray-300 rounded w-2/3" />
                  <div className="h-4 bg-gray-300 rounded w-1/2" />
                  <div className="h-4 bg-gray-300 rounded w-1/4 mt-2" />
                </div>
              </div>
            ))}
          </div>
        ) : posts.length === 0 ? (
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

            <p className="text-gray-500 mb-6">
              Sepertinya kategori ini belum memiliki gambar. Coba jelajahi
              kategori lainnya!
            </p>

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
      <Footer />
      {/* footer end */}
    </section>
  );
}
