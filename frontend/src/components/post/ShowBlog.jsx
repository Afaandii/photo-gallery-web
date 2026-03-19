import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import Navigasi from "../Navigasi";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Footer";

export default function ShowBlog() {
  const { slug } = useParams();
  const location = useLocation();
  const [blog, setBlog] = useState(location.state?.blog || null);
  const blogContentRef = useRef(null);

  const handleScroll = () => {
    blogContentRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
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

  if (!blog) {
    return (
      <section className="w-full min-h-screen bg-gray-50">
        <Navigasi />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-gray-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Loading...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full h-full min-h-screen bg-gray-50">
      {/* navbar  */}
      <div className="show-detil w-screen h-auto flex flex-col">
        <Navigasi />
        <div className="h-full flex flex-col justify-center items-center text-slate-400 text-center px-4 bg-black/70 w-full pt-20">
          <p className="text-gray-300 mb-3 lg:mb-6 text-xl lg:text-3xl">
            {blog.user?.name} ·{" "}
            {new Date(blog.created_at).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
          <h1 className="text-center text-gray-300 text-xl lg:text-3xl font-bold">
            {blog.title}
          </h1>

          <a
            onClick={handleScroll}
            className="mt-5 lg:mt-12 text-gray-300 cursor-pointer hover:text-white transition transform hover:translate-y-1"
          >
            <FontAwesomeIcon icon={faArrowDown} size="2x" />
          </a>
        </div>
      </div>
      {/* navbar end */}

      {/* Main Content */}
      <div ref={blogContentRef} className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Featured Image Card */}
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden mb-8">
            <div className="relative">
              <img
                src={`http://localhost:8000/storage/${blog.image}`}
                alt={blog.title}
                className="w-full h-full md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>

          {/* Content Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            {/* Article Meta */}
            <div className="flex flex-wrap items-center justify-between pb-6 border-b border-gray-100">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Dipublikasikan</p>
                  <p className="font-semibold text-gray-800">
                    {formatDate(blog.created_at || new Date())}
                  </p>
                </div>
              </div>

              {/* Share Buttons */}
              <div className="flex items-center space-x-3">
                <span className="text-gray-500 text-sm font-medium">
                  Bagikan:
                </span>
                <button
                  aria-label="twitter"
                  className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors duration-200"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </button>
                <button
                  aria-label="facebook"
                  className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-200"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </button>
                <button
                  aria-label="instagram"
                  className="p-2 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 hover:opacity-90 text-white rounded-full transition-colors duration-200"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm8 2.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none mt-8">
              <div
                className="text-gray-700 leading-relaxed text-lg"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            </div>

            {/* Author Info Section */}
            <div className="mt-10 pt-8 border-t border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Penulis
              </h3>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {blog.user?.name?.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-lg">
                    {blog.user?.name}
                  </p>
                  <p className="text-gray-600 text-sm">
                    Content Writer & Digital Storyteller
                  </p>
                  <p className="text-gray-500 text-xs mt-1">
                    Bergabung sejak {new Date(blog.created_at).getFullYear()}
                  </p>
                </div>
              </div>
            </div>

            {/* Tags Section */}
            <div className="mt-10 pt-8 border-t border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Tag Terkait
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  #blog
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                  #artikel
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">
                  #terbaru
                </span>
                <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm font-medium rounded-full">
                  #info
                </span>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row justify-between items-center gap-4">
              <button
                onClick={() => window.history.back()}
                className="w-full sm:w-auto flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors duration-200"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Kembali
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <Footer />
      {/* footer end */}
    </section>
  );
}
