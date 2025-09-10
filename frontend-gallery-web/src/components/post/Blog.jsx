// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { useEffect, useState } from "react";
import Footer from "../Footer";
import Navigasi from "../Navigasi";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/blogs");

        if (!res.ok) {
          throw Error(`HTTP Status Error ${res.status}`);
        }

        let data = await res.json();
        setBlogs(data.blog);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchBlog();
  }, []);

  return (
    <>
      <section className="w-full h-full mb-3">
        <div className="hero w-screen h-auto flex flex-col">
          <Navigasi />
          <div className="h-full flex flex-col justify-center items-center text-slate-400 text-center px-4 bg-opacity-50 bg-black w-full">
            <h1 className="text-center text-5xl font-bold">PixFlow Blog</h1>
            <p className="text-2xl mt-4">
              Temukan Beberapa Blog yang dibuat dari komunitas kami
            </p>
          </div>
        </div>

        <div className="flex flex-col w-full h-full px-5">
          <div className="py-6 ">
            <h1 className="text-4xl font-bold text-black">Latest Upload</h1>
          </div>
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Card 1 */}
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="flex flex-col rounded-xl shadow-md overflow-hidden bg-white border w-full lg:w-1/3"
              >
                <img
                  src={`http://localhost:8000/storage/${blog.image}`}
                  alt="Top 20 Images"
                  className="w-full h-60 object-cover"
                />
                <div className="p-4 flex flex-col gap-1">
                  <p className="text-sm text-gray-500">{blog.category.name}</p>
                  <h2 className="font-bold text-lg">{blog.title}</h2>
                  <p className="text-sm text-gray-600">
                    {blog.user.name} ·{" "}
                    {new Date(blog.created_at).toISOString().split("T")[0]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
