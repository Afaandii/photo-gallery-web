import { useRef } from "react";
import Carousel from "./Carousel";
import Description from "./Description";
import Footer from "./Footer";
import Navigasi from "./Navigasi";

export default function Home() {
  const carouselRef = useRef(null);

  const scrollToCarousel = () => {
    carouselRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="hero w-screen h-[100vh] flex flex-col">
        <Navigasi />

        <div className="flex flex-col justify-center items-center h-full gap-5 bg-opacity-50 bg-black w-full">
          <h1 className="font-bold text-slate-400 text-5xl">
            Selamat Datang Di
          </h1>
          <h2 className="font-medium text-slate-400 text-4xl ">
            Web Gallery Foto
          </h2>
          <p className="max-w-[700px] text-slate-400 text-center font-medium ">
            Website Gallery Foto untuk menyimpan kenangan bersama pasangan atau
            keluarga anda untuk mengabadikan momen indah.
          </p>
          <a
            className="btn btn-outline btn-error w-[150px] hover:scale-125 duration-500"
            onClick={scrollToCarousel}
          >
            Coba Sekarang
          </a>
        </div>
      </div>

      <div ref={carouselRef}>
        <Carousel />
      </div>
      <div>
        <Description />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
