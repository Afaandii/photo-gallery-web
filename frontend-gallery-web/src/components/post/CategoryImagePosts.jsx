import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navigasi from "../Navigasi";
import Footer from "../Footer";

export default function CategoryImagePosts() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/categories");
        const data = await res.json();
        setCategories(data.categories);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  return (
    <section className="w-full h-full">
      <div className="hero w-screen h-auto flex flex-col">
        <Navigasi />
        <div className="h-full flex flex-col justify-center items-center text-slate-400 text-center px-4 bg-black/70 w-full">
          <h1 className="text-center text-5xl font-bold">PixFlow Explore</h1>
          <p className="text-2xl mt-4">
            Temukan Beberapa Photo Berdasarkan Kategori Yang Anda Inginkan.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-6">
          Explore Berdasarkan Kategori
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {loading ? (
            [...Array(4)].map((_, i) => (
              <div
                key={i}
                className="relative block rounded-xl overflow-hidden shadow-lg animate-pulse"
              >
                <div className="w-full h-40 bg-gray-200"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-5 w-20 bg-gray-300 rounded"></div>
                </div>
              </div>
            ))
          ) : (
            <>
              {categories && categories.length > 0 ? (
                <>
                  {categories.map((cat, index) => (
                    <Link
                      key={index}
                      to={`/image-post/category/${cat.slug}`}
                      className="relative block rounded-xl overflow-hidden shadow-lg group"
                    >
                      {/* Background Image */}
                      <img
                        src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt={cat.name}
                        className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <span className="text-white text-lg font-semibold">
                          {cat.name}
                        </span>
                      </div>
                    </Link>
                  ))}
                </>
              ) : (
                <div className="flex flex-col mx-auto items-center justify-center py-20 text-center">
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
                    Data Photo Dengan Kategori Tidak Ada
                  </h2>

                  <p className="text-gray-500 mb-6">
                    Ups! Sepertinya photo dengan kategori ini belum memiliki
                    data
                  </p>

                  <a
                    href="/"
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                  >
                    Kembali Ke Home
                  </a>
                </div>
              )}
            </>
          )}
        </div>
      </div>
      <Footer />
    </section>
  );
}
