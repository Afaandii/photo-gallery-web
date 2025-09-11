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
      <h1 className="text-[18px] font-bold mb-5">
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
          {posts.map((post, index) => (
            <div key={index} className="overflow-hidden rounded-xl shadow-lg">
              <Link to={`/image-posts/${post.slug}`}>
                <img
                  src={`http://localhost:8000/storage/${post.image}`}
                  alt={post.title || "image post"}
                  className="w-full h-[500px] object-cover"
                />
              </Link>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
