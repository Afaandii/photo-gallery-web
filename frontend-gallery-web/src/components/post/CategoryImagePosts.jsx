import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navigasi from "../Navigasi";
import Footer from "../Footer";

export default function CategoryImagePosts() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch("http://localhost:8000/api/categories");
      const data = await res.json();
      setCategories(data.categories);
    };
    fetchCategories();
  }, []);

  return (
    <section className="w-full h-full">
      <div className="hero w-screen h-auto flex flex-col">
        <Navigasi />
        <div className="h-full flex flex-col justify-center items-center text-slate-400 text-center px-4 bg-opacity-50 bg-black w-full">
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
          {categories.length === 0
            ? [...Array(4)].map((_, i) => (
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
            : categories.map((cat, index) => (
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
        </div>
      </div>
      <Footer />
    </section>
  );
}
