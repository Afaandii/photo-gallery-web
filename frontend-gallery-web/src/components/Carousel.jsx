import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import foto from "../assets/img/person-img.jpeg";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
const fotoSlide = [foto, foto, foto, foto, foto, foto, foto];

export default function Carousel() {
  return (
    <div
      id="carousel"
      className="relative w-full min-h-screen flex flex-col items-center bg-[#C9A9A6]"
    >
      {/* Bagian Title */}
      <div className="flex flex-col justify-center items-center text-center gap-3 mt-10">
        <h1 className="text-2xl md:text-4xl font-bold text-slate-500">
          Dokumentasi Posts Foto
        </h1>
        <h4 className="text-md md:text-xl text-slate-500">
          Abadikan Setiap Momen Indah Anda Mulai Dari Sini
        </h4>
        <a
          className="btn btn-accent w-[150px] hover:scale-125 duration-500"
          href="/posts"
        >
          Mulai Disini
        </a>
      </div>

      {/* Carousel */}
      <div className="relative w-full flex justify-center mt-6">
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          spaceBetween={20}
          pagination={{ el: ".custom-pagination", clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
          breakpoints={{
            320: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-[90%] md:w-[80%] h-[250px] md:h-[380px]"
        >
          {fotoSlide.map((data, i) => (
            <SwiperSlide key={i}>
              <img
                src={data}
                alt={`Slide ${i + 1}`}
                className="w-full h-full rounded-md object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Tombol Panah, sudah dikasih posisi */}
      <div className="swiper-button-prev absolute top-1/2 left-24 md:left-24 transform translate-y-1/2">
        <span className="text-4xl cursor-pointer text-slate-800">&#60;</span>
      </div>
      <div className="swiper-button-next absolute top-1/2 right-24 md:right-24 transform translate-y-1/2 ">
        <span className="text-4xl cursor-pointer text-slate-800">&#62;</span>
      </div>

      {/* Custom Pagination */}
      <div className="custom-pagination mt-5 mb-5 cursor-pointer"></div>
    </div>
  );
}
