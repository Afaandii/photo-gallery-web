import person from "../assets/img/person-img.jpeg";
export default function Description() {
  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row justify-center items-center w-full min-h-screen bg-[#FF69B4] px-6 py-10">
        {/* Bagian Teks */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center text-center lg:text-left">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-4 text-gray-200">
            Kenapa Web Foto Kenangan?
          </h1>
          <p className="text-gray-200 text-sm md:text-base lg:text-lg leading-relaxed max-w-[500px]">
            Kami menghadirkan platform <strong>Foto Kenangan</strong> untuk
            membantu Anda mengabadikan setiap momen spesial dengan fitur
            unggulan:
          </p>
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
          <p className="text-gray-200 text-sm md:text-base lg:text-lg leading-relaxed max-w-[500px] mt-4">
            ✨{" "}
            <strong>
              Abadikan setiap kenangan berharga dan buat momen spesial tetap
              hidup selamanya!
            </strong>{" "}
            ✨
          </p>
          <a
            href="/posts"
            className="mt-5 bg-white text-[#000] px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-[#FF85C2] transition hover:scale-110 duration-500"
          >
            Abadikan Momenmu
          </a>
        </div>

        {/* Bagian Gambar */}
        <div className="w-full lg:w-1/2 flex justify-center hover:scale-105 duration-500">
          <div className="avatar">
            <div className="rounded-md h-[250px] w-[200px] sm:h-[300px] sm:w-[250px] md:h-[400px] md:w-[350px] lg:h-[500px] lg:w-[400px] ring ring-accent ring-offset-2">
              <img src={person} className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
