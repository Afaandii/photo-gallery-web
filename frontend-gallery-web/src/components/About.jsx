import Footer from "./Footer";
import Navigasi from "./Navigasi";
import person from "../assets/img/momen person.png";
export default function About() {
  return (
    <>
      <div className="hero w-screen h-[100vh] flex flex-col">
        <Navigasi />
        <div className="h-full flex flex-col justify-center items-center text-white text-center px-4 bg-opacity-50 bg-black w-full">
          <h1 className="text-4xl md:text-4xl font-bold text-slate-500">
            About Us
          </h1>
          <p className="text-md md:text-lg mt-4 max-w-2xl text-slate-500">
            Web Gallery Foto adalah tempat untuk menyimpan kenangan indah Anda
            bersama keluarga dan orang tercinta, Abadikan setiap momen indah
            anda kedalam website ini mulai sekarang.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col">
        <div className="flex justify-center w-full items-center flex-col md:flex-row min-h-screen bg-[#FF69B4] p-4 text-center md:text-left">
          {/* Bagian kiri: Deskripsi */}
          <div className="md:w-1/2 flex flex-col items-center md:items-center">
            <h1 className="text-2xl md:text-3xl font-bold text-slate-500 mb-3">
              Kenapa Gallery Photo?
            </h1>
            <ul className="text-gray-200 text-sm md:text-base lg:text-lg leading-relaxed max-w-[500px] list-none mt-2">
              <li>
                📌 <strong>Mudah & Aman</strong>
              </li>
              <ul className="ml-4 list-disc">
                <li>Simpan foto dengan aman tanpa takut kehilangan data.</li>
                <li>Akses kapan saja dari berbagai perangkat.</li>
              </ul>
              <li>
                🎨 <strong>Kualitas Tinggi & Interaktif</strong>
              </li>
              <ul className="ml-4 list-disc">
                <li>Foto tetap tajam tanpa mengurangi resolusi.</li>
                <li>
                  Tambahkan cerita, filter, dan efek untuk mempercantik foto.
                </li>
              </ul>
              <li>
                🔒 <strong>Privasi Terjamin</strong>
              </li>
              <ul className="ml-4 list-disc">
                <li>Pilih album publik atau pribadi sesuai keinginan Anda.</li>
                <li>Data pengguna dijaga dengan sistem keamanan terbaik.</li>
              </ul>
              <li>
                📢 <strong>Bagikan dengan Mudah</strong>
              </li>
              <ul className="ml-4 list-disc">
                <li>Langsung share ke media sosial hanya dengan satu klik.</li>
                <li>Nikmati pengalaman berbagi momen lebih menyenangkan.</li>
              </ul>
            </ul>
          </div>

          <div className="md:w-1/2 flex justify-center hover:scale-105 cursor-pointer duration-500 mt-8 md:mt-0">
            <div className="avatar">
              <div className="rounded-md h-[250px] w-[200px] sm:h-[300px] sm:w-[250px] md:h-[400px] md:w-[350px] lg:h-[500px] lg:w-[400px] ring ring-accent ring-offset-2">
                <img src={person} className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        <div className="min-h-[100vh] w-full flex flex-col justify-center items-center bg-[#FFB6C1] p-4">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-500 mb-10 md:-ml-[50%] lg:-ml-[65%] text-center md:text-left">
            Profile Founders
          </h1>
          <div className="card card-side flex flex-col md:flex-row bg-base-200 shadow-xl w-full md:w-[85%] p-4 md:p-0">
            <figure className="w-full md:w-auto rounded-xl flex justify-center">
              <img
                src="../src/assets/img/foto me.jpg"
                alt="Movie"
                className="w-[450px] md:w-[350px] h-[350px] md:h-[400px] hover:scale-110 duration-500 cursor-pointer"
              />
            </figure>
            <div className="card-body w-full md:w-[30%] text-center md:text-left">
              <h2 className="card-title text-2xl ml-24 mb-3 text-slate-600 md:text-2xl">
                Ahmad Afandi
              </h2>
              <h4 className="text-lg md:text-xl text-slate-600">
                Development website foto kenangan dan pengelola
              </h4>
              <p className="text-base md:text-lg text-slate-600">
                Pengembang perangkat lunak aplikasi website fullstack junior,
                pendidikan sekolah menengah kejurusan.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
