import Footer from "./Footer";
import Navigasi from "./Navigasi";
export default function About() {
  return (
    <>
      <div className="hero w-screen h-[100vh] flex flex-col">
        <Navigasi />
        <div className="h-full flex flex-col justify-center items-center text-slate-400 text-center px-4 bg-opacity-50 bg-black w-full">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Kreativitas Tanpa Batas
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Tempat berbagi foto, inspirasi, dan cerita dari seluruh dunia
          </p>
          <a
            href="/gallery"
            className="btn btn-outline btn-primary !text-white w-[150px] hover:scale-110 duration-500"
          >
            Jelajahi Galeri
          </a>
        </div>
      </div>

      <section className=" bg-gray-50">
        {/* Section Tentang Kami */}
        <div className="max-w-5xl mx-auto py-16 px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Tentang Kami</h2>
          <p className="text-gray-600 leading-relaxed">
            Web ini lahir dari semangat untuk menyebarkan keindahan visual ke
            seluruh dunia. Kami percaya setiap foto memiliki cerita, dan setiap
            orang berhak untuk berbagi dan menemukan inspirasi tanpa batasan.
          </p>
        </div>

        {/* Visi & Misi */}
        <div className="max-w-[75rem] mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Misi */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Misi"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center p-6">
              <span className="text-sm uppercase tracking-widest text-gray-200">
                MISI
              </span>
              <h3 className="mt-2 text-xl md:text-2xl font-bold text-white">
                Memberdayakan kreativitas global melalui media gratis
                berkualitas tinggi.
              </h3>
            </div>
          </div>

          {/* Visi */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Visi"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center p-6">
              <span className="text-sm uppercase tracking-widest text-gray-200">
                VISI
              </span>
              <h3 className="mt-2 text-xl md:text-2xl font-bold text-white">
                Konten yang menginspirasi untuk semua kreator.
              </h3>
            </div>
          </div>
        </div>

        {/* Statistik */}
        <div className="py-10 bg-gray-50">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gray-100 shadow-md rounded-xl p-6 text-center">
              <h3 className="text-3xl font-extrabold text-gray-900">5.7M+</h3>
              <p className="mt-2 text-gray-500">Aset media</p>
            </div>

            <div className="bg-gray-100 shadow-md rounded-xl p-6 text-center">
              <h3 className="text-3xl font-extrabold text-gray-900">6B+</h3>
              <p className="mt-2 text-gray-500">Muat turun</p>
            </div>

            <div className="bg-gray-100 shadow-md rounded-xl p-6 text-center">
              <h3 className="text-3xl font-extrabold text-gray-900">400K+</h3>
              <p className="mt-2 text-gray-500">Kreator</p>
            </div>

            <div className="bg-gray-100 shadow-md rounded-xl p-6 text-center">
              <h3 className="text-3xl font-extrabold text-gray-900">200+</h3>
              <p className="mt-2 text-gray-500">Negara</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="max-w-5xl mx-auto py-20 text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mau Ikut Berkontribusi?
          </h2>
          <p className="text-gray-600 mb-8">
            Unggah karya terbaikmu dan jadilah bagian dari komunitas kreatif
            global.
          </p>
          <a
            href="/upload"
            className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium shadow-lg"
          >
            Mulai Unggah Foto
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
}
