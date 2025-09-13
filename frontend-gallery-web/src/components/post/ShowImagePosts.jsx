import { useEffect, useRef, useState } from "react";
import { Download, Heart, Share2 } from "lucide-react";
import Navigasi from "../Navigasi";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Footer";

// dummy data related post
const relatedImages = [
  {
    id: 1,
    title: "Urban Architecture",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&h=200&fit=crop",
    slug: "urban-architecture",
  },
  {
    id: 2,
    title: "Modern Interior",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop",
    slug: "modern-interior",
  },
  {
    id: 3,
    title: "Nature Landscape",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop",
    slug: "nature-landscape",
  },
  {
    id: 4,
    title: "Street Photography",
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=300&h=200&fit=crop",
    slug: "street-photography",
  },
];

export default function ShowImagePosts() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);
  const imageContentRef = useRef(null);

  const handleScroll = () => {
    imageContentRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleShare = () => {
    navigator
      .share?.({
        title: post?.title,
        url: window.location.href,
      })
      .catch(() => {
        // Fallback - copy to clipboard
        navigator.clipboard.writeText(window.location.href);
      });
  };

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
      <section className="h-full w-full">
        {/* navbar */}
        <div className="show-detil w-screen h-auto flex flex-col">
          <Navigasi />
          <div className="h-full flex flex-col justify-center items-center text-slate-400 text-center px-4 bg-black/70 w-full pt-20">
            <h1 className="text-center text-2xl lg:text-3xl font-bold">
              Detail Image Posts
            </h1>
            <h5 className="mt-3 text-center font-medium text-2xl lg:text-4xl">
              {/* placeholder title */}
              <div className="h-6 w-40 bg-gray-300 rounded mx-auto mt-2 animate-pulse"></div>
            </h5>

            <a className="mt-10 text-gray-300 cursor-pointer">
              <FontAwesomeIcon icon={faArrowDown} size="2x" />
            </a>
          </div>
        </div>
        {/* navbar end */}

        {/* skeleton content */}
        <section className="max-w-6xl mx-auto px-4 py-8 animate-pulse">
          <div className="w-full flex flex-col lg:flex-row justify-evenly items-center gap-6">
            {/* Image Placeholder */}
            <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
              <div className="w-[500px] max-w-full h-[400px] bg-gray-300"></div>
            </div>

            {/* Content Placeholder */}
            <div className="p-6 max-w-md w-full">
              {/* User Profile */}
              <div className="flex items-center gap-3 mb-4 p-3 bg-gray-50 rounded-xl border border-gray-200">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                <div className="flex flex-col gap-2">
                  <div className="h-3 w-20 bg-gray-300 rounded"></div>
                  <div className="h-2 w-14 bg-gray-300 rounded"></div>
                </div>
              </div>

              {/* Title */}
              <div className="h-7 w-3/4 bg-gray-300 rounded mb-4"></div>

              {/* Description */}
              <div className="space-y-3 mb-4">
                <div className="h-3 w-full bg-gray-300 rounded"></div>
                <div className="h-3 w-5/6 bg-gray-300 rounded"></div>
                <div className="h-3 w-2/3 bg-gray-300 rounded"></div>
              </div>

              {/* Date */}
              <div className="h-3 w-40 bg-gray-300 rounded mb-4"></div>

              {/* Action Buttons */}
              <div className="flex gap-2 mb-4">
                <div className="h-8 w-20 bg-gray-300 rounded-lg"></div>
                <div className="h-8 w-20 bg-gray-300 rounded-lg"></div>
              </div>

              {/* Download Button */}
              <div className="h-10 w-48 bg-gray-300 rounded-lg"></div>
            </div>
          </div>

          {/* Related Images Section */}
          <div className="mt-12">
            <div className="h-6 w-48 bg-gray-300 rounded mb-8 mx-auto"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl overflow-hidden shadow-md"
                >
                  <div className="w-full h-40 bg-gray-300"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* footer */}
        <Footer />
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
    <section className="h-full w-full">
      {/* navbar */}
      <div className="show-detil w-screen h-auto flex flex-col">
        <Navigasi />
        <div className="h-full flex flex-col justify-center items-center text-slate-400 text-center px-4 bg-black/70 w-full pt-20">
          <h1 className="text-center text-2xl lg:text-3xl font-bold">
            Detail Image Posts
          </h1>
          <h5 className="mt-3 text-center font-medium text-2xl lg:text-4xl">
            {post.title}
          </h5>

          <a
            onClick={handleScroll}
            className="mt-10 text-gray-300 cursor-pointer hover:text-white transition transform hover:translate-y-1"
          >
            <FontAwesomeIcon icon={faArrowDown} size="2x" />
          </a>
        </div>
      </div>
      {/* navbar end */}

      {/* detail image */}
      <div className="w-full h-full flex flex-col lg:flex-row justify-evenly items-center mx-auto px-4 py-8">
        <div
          ref={imageContentRef}
          className="bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
        >
          <img
            src={`http://localhost:8000/storage/${post.image}`}
            alt={post.title}
            className="w-full max-h-[600px] object-cover bg-gray-100 hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="p-6 max-w-md">
          {/* User Profile - DITAMBAHKAN DI ATAS TITLE */}
          <div className="flex items-center gap-3 mb-4 p-3 bg-gray-50 rounded-xl border border-gray-200">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
              alt="afandi"
              className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-200"
            />
            <div>
              <h3 className="font-semibold text-gray-800 text-sm">Afandi</h3>
              <p className="text-xs text-gray-500">Author</p>
            </div>
          </div>

          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {post.title}
          </h1>

          <div
            className="text-gray-700 leading-relaxed mb-4"
            dangerouslySetInnerHTML={{ __html: post.deskripsi }}
          />

          <p className="mt-3 text-sm text-gray-500 mb-4">
            Diposting pada:{" "}
            {new Date(post.created_at).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 mb-4">
            <button
              onClick={handleLike}
              className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm transition-all ${
                liked
                  ? "bg-red-500 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-red-50"
              }`}
            >
              <Heart className={`w-4 h-4 ${liked ? "fill-current" : ""}`} />
              Like
            </button>

            <button
              onClick={handleShare}
              className="flex items-center gap-1 px-3 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all text-sm"
            >
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>

          <a
            href={`http://localhost:8000/api/image-posts-download/${post.slug}`}
            download
            className="inline-flex items-center gap-2 mt-2 px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-md hover:shadow-lg transform hover:-translate-y-1"
          >
            <Download className="w-5 h-5" />
            Download Foto
          </a>
        </div>
      </div>
      {/* detail image end */}

      {/* Related Images Section */}
      <div className="w-full bg-gray-50 py-12 mt-8">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Gambar Terkait
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedImages.map((image) => (
              <div key={image.id} className="group cursor-pointer">
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={image.image}
                      alt={image.title}
                      className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <h3 className="text-white font-medium text-sm p-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        {image.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
