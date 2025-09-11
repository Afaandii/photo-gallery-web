import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Download, ArrowLeft } from "lucide-react";

export default function ShowImagePosts() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchPost = async () => {
      try {
        const res = await fetch(
          `http://localhost:8000/api/image-posts/${slug}`
        );
        if (!res.ok) throw Error(`HTTP Error Status: ${res.status}`);
        let data = await res.json();
        setPost(data.image_post);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [slug]);

  // Skeleton loading
  if (loading) {
    return (
      <section className="max-w-5xl mx-auto px-4 py-8 animate-pulse">
        <div className="h-6 w-32 bg-gray-300 rounded mb-6"></div>

        <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
          <div className="w-full h-[400px] bg-gray-300"></div>

          <div className="p-6 space-y-4">
            <div className="h-8 w-2/3 bg-gray-300 rounded"></div>
            <div className="h-4 w-full bg-gray-300 rounded"></div>
            <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
            <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
            <div className="h-4 w-40 bg-gray-300 rounded"></div>
            <div className="h-10 w-48 bg-gray-300 rounded"></div>
          </div>
        </div>
      </section>
    );
  }

  if (!post) {
    return (
      <p className="text-center mt-10 text-red-500 font-semibold">
        Data tidak ditemukan
      </p>
    );
  }

  return (
    <section className="max-w-5xl mx-auto px-4 py-8">
      <Link
        to="/"
        className="inline-flex items-center gap-2 mb-6 text-gray-600 hover:text-gray-900 transition"
      >
        <ArrowLeft className="w-4 h-4" />
        Kembali
      </Link>

      <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
        <img
          src={`http://localhost:8000/storage/${post.image}`}
          alt={post.title}
          className="w-full max-h-[600px] object-contain bg-gray-100"
        />

        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {post.title}
          </h1>

          <div
            className="text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.deskripsi }}
          />

          <p className="mt-3 text-sm text-gray-500">
            Diposting pada:{" "}
            {new Date(post.created_at).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>

          <a
            href={`http://localhost:8000/api/image-posts-download/${post.slug}`}
            download
            className="inline-flex items-center gap-2 mt-6 px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-md"
          >
            <Download className="w-5 h-5" />
            Download Foto
          </a>
        </div>
      </div>
    </section>
  );
}
