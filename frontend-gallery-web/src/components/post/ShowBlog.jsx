// import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import Navigasi from "../Navigasi";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function ShowBlog() {
  const { slug } = useParams();
  const location = useLocation();
  const [blog, setBlog] = useState(location.state?.blog || null);
  const blogContentRef = useRef(null);

  const handleScroll = () => {
    blogContentRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!blog) {
      const fetchBlog = async () => {
        const res = await fetch(`http://localhost:8000/api/blog/${slug}`);
        const data = await res.json();
        setBlog(data.blog ?? data);
      };
      fetchBlog();
    }
  }, [slug, blog]);

  return (
    <section className="w-full h-full">
      <div className="hero w-screen h-auto flex flex-col">
        <Navigasi />
        <div className="h-full flex flex-col justify-center items-center text-slate-400 text-center px-4 bg-opacity-50 bg-black w-full">
          <p className="text-gray-300 mb-6 text-xl lg:text-3xl">
            {blog.user?.name} ·{" "}
            {new Date(blog.created_at).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
          <h1 className="text-center text-gray-300 text-2xl lg:text-3xl font-bold">
            {blog.title}
          </h1>

          <a
            onClick={handleScroll}
            className="mt-16 text-gray-300 cursor-pointer hover:text-white transition transform hover:translate-y-1"
          >
            <FontAwesomeIcon icon={faArrowDown} size="2x" />
          </a>
        </div>
      </div>

      <div ref={blogContentRef} className="max-w-6xl mx-auto p-6 -mt-6">
        <div>
          <img
            src={`http://localhost:8000/storage/${blog.image}`}
            alt={blog.title}
            className="w-full h-full object-cover rounded mb-4"
          />
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
      </div>
    </section>
  );
}
