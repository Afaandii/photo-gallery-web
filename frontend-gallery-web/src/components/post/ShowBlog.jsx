import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";

export default function ShowBlog() {
  const { slug } = useParams();
  const location = useLocation();
  const [blog, setBlog] = useState(location.state?.blog || null);

  useEffect(() => {
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
    <section className="max-w-3xl mx-auto p-6">
      <div>
        <a
          href="/blogs"
          className="group mb-4 inline-flex items-center gap-2 px-4 py-2 bg-gray-500 hover:bg-gray-700 rounded-lg text-sm text-white"
        >
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="transform transition-transform duration-300 group-hover:-translate-x-1"
          />
          Kembali
        </a>

        <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
        <p className="text-gray-500 mb-4">
          {blog.user?.name} ·{" "}
          {new Date(blog.created_at).toLocaleDateString("id-ID")}
        </p>
        <img
          src={`http://localhost:8000/storage/${blog.image}`}
          alt={blog.title}
          className="w-full h-80 object-cover rounded mb-4"
        />
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>
    </section>
  );
}
