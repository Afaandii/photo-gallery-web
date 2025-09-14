import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ImagePosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/image-posts");

        if (!res.ok) {
          throw Error(`HTTP Error Status: ${res.status}`);
        }

        let data = await res.json();
        setPosts(data.post);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-[14px] lg:text-[18px] font-bold mb-5">
        Temukan lebih dari 1 juta gambar yang dibagikan atau diabadikan dari
        beberapa orang.
      </h1>

      {loading ? (
        // Skeleton load
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-pulse">
          {Array.from({ length: 6 }).map((_, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-xl shadow-lg bg-gray-200 h-[500px]"
            ></div>
          ))}
        </div>
      ) : (
        // data
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts && posts.length > 0 ? (
            <>
              {posts.map((post, index) => (
                <div
                  key={index}
                  className="group overflow-hidden rounded-xl shadow-lg relative cursor-pointer transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                >
                  <Link to={`/image-posts/${post.slug}`}>
                    <div className="relative overflow-hidden">
                      <img
                        src={`http://localhost:8000/storage/${post.image}`}
                        alt={post.title || "image post"}
                        className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-110"
                      />

                      {/* Overlay dengan gradient dan title */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="text-white text-xl font-semibold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            {post.title || "Untitled"}
                          </h3>
                          {post.description && (
                            <p className="text-gray-200 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75 line-clamp-2">
                              {post.description}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Icon untuk menunjukkan bisa diklik */}
                      <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </>
          ) : (
            <div className="flex col-span-full flex-col items-center justify-center py-20 text-center">
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
                Ups! Sepertinya Data ini belum dibuat
              </p>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
