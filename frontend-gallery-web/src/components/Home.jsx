import { useRef } from "react";
import Footer from "./Footer";
import Navigasi from "./Navigasi";
import ImagePosts from "./post/ImagePosts";

export default function Home() {
  const cardRef = useRef(null);

  const scrollToCard = () => {
    cardRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="hero w-screen h-[100vh] flex flex-col">
        <Navigasi />

        <div className="flex flex-col justify-center items-center h-full gap-5 bg-opacity-50 bg-black w-full">
          <h1 className="font-bold text-center text-slate-400 lg:text-5xl text-4xl">
            Selamat Datang Di
          </h1>
          <h2 className="font-medium text-slate-400 text-4xl ">PixFlow</h2>
          <p className="max-w-[700px] text-slate-400 text-center font-medium ">
            PixFlow adalah website untuk menyimpan kenangan bersama pasangan
            atau keluarga anda untuk mengabadikan momen indah.
          </p>
          <a
            className="btn btn-outline !text-white btn-primary w-[150px] hover:scale-110 duration-500"
            onClick={scrollToCard}
          >
            Coba Sekarang
          </a>
        </div>
      </div>

      <div ref={cardRef}>
        <ImagePosts />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
