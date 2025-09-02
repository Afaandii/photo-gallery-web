import { useEffect, useState } from "react";

export default function Card() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/posts");

        if (!res.ok) {
          throw Error(`HTTP Error Status: ${res.status}`);
        }

        let data = await res.json();
        setPosts(data.post);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPost();
  }, []);

  return (
    <>
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-[18px] font-bold mb-5">
          Temukan lebih dari 1 juta gambar yang dibagikan atau diabadikan dari
          beberapa orang.
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <div key={index} className="overflow-hidden rounded-xl shadow-lg">
              <a href="/">
                <img
                  src={`http://localhost:8000/storage/${post.image}`}
                  alt="Leaves with snow"
                  className="w-full h-[500px] object-cover"
                />
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
