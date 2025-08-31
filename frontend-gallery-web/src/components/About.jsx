import Footer from "./Footer";
import Navigasi from "./Navigasi";
export default function About() {
  return (
    <>
      <div className="hero w-screen h-[100vh] flex flex-col">
        <Navigasi />
        <div className="h-full flex flex-col justify-center items-center text-white text-center px-4 bg-opacity-50 bg-black w-full">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Kreativitas Tanpa Batas
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Tempat berbagi foto, inspirasi, dan cerita dari seluruh dunia
          </p>
          <a
            href="/gallery"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full shadow text-white font-medium"
          >
            Jelajahi Galeri
          </a>
        </div>
      </div>

      <section className=" bg-gray-100">
        {/* Section Tentang Kami */}
        <div className="max-w-5xl mx-auto py-16 px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Tentang Kami</h2>
          <p className="text-gray-600 leading-relaxed">
            Web ini lahir dari semangat untuk menyebarkan keindahan visual ke
            seluruh dunia. Kami percaya setiap foto memiliki cerita, dan setiap
            orang berhak untuk berbagi dan menemukan inspirasi tanpa batasan.
          </p>
        </div>

        {/* Fitur */}
        <div className="max-w-6xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <span className="text-4xl">📸</span>
            <h3 className="mt-4 font-semibold text-lg">Unggah & Bagikan</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Bagikan hasil foto terbaikmu untuk dilihat dunia.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <span className="text-4xl">🌍</span>
            <h3 className="mt-4 font-semibold text-lg">
              Foto dari Seluruh Dunia
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              Jelajahi koleksi dari berbagai belahan dunia.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <span className="text-4xl">🎨</span>
            <h3 className="mt-4 font-semibold text-lg">Bebas Digunakan</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Gunakan foto untuk proyek pribadi atau komersial.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <span className="text-4xl">🤝</span>
            <h3 className="mt-4 font-semibold text-lg">Komunitas Kreatif</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Terhubung dengan fotografer & kreator lainnya.
            </p>
          </div>
        </div>

        {/* Statistik */}
        <div className="bg-indigo-600 py-16 text-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold">20K+</h3>
              <p>Foto Gratis</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold">5K+</h3>
              <p>Kontributor Aktif</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold">1M+</h3>
              <p>Unduhan</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="max-w-5xl mx-auto py-20 text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ikut Berkontribusi?
          </h2>
          <p className="text-gray-600 mb-8">
            Unggah karya terbaikmu dan jadilah bagian dari komunitas kreatif
            global.
          </p>
          <a
            href="/upload"
            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium shadow-lg"
          >
            Mulai Unggah Foto
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
}
