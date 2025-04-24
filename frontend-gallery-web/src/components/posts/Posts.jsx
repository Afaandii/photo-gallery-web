import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faComment } from "@fortawesome/free-solid-svg-icons";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";
// import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data), setPosts(data.post);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="bg-[#C9A9A6] max-w-full h-auto min-h-[100vh] p-5">
        <div className="pl-5 pr-5 flex justify-between items-center">
          <h1 className="text-3xl text-slate-600 font-bold text-center md:text-left">
            Trending Photo Posts
          </h1>
          <a
            href="/"
            className="btn btn-secondary hover:scale-110 duration-500"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            Kembali
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-5 md:justify-evenly items-center">
          {posts.map((post, index) => (
            <div
              key={index}
              className="flex flex-col sm:w-80 md:w-96 bg-white shadow-sm border border-slate-200 rounded-lg my-6 w-96 hover:scale-105 duration-500 cursor-pointer"
            >
              <div className="m-2.5 overflow-hidden rounded-md h-full flex justify-center items-center">
                <img
                  className="object-cover w-full h-full"
                  src={`http://localhost:8000/storage/${post.image}`}
                  alt="profile-picture"
                />
              </div>
              <div className="p-6 text-center">
                <h4 className="mb-1 text-xl font-semibold text-slate-800">
                  {post.title}
                </h4>
                <p className="text-base text-slate-600 mt-4 font-light ">
                  {post.deskripsi.replace(/<\/?p>/g, "")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
