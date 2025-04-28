import { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";

export default function Description() {
  const faqItems = [
    {
      question: "Apa itu Foto Kenangan?",
      answer:
        "Foto Kenangan adalah platform galeri foto online yang memungkinkan Anda menyimpan, mengelola, dan membagikan momen berharga dengan mudah dan aman.",
    },
    {
      question: "Bagaimana cara mengunggah foto?",
      answer:
        "Anda cukup login ke akun Anda, klik tombol Upload, lalu pilih foto dari perangkat Anda. Foto akan langsung tersimpan dengan aman di akun Anda.",
    },
    {
      question: "Apakah kualitas foto akan berkurang setelah diunggah?",
      answer:
        "Tidak. Kami menjaga kualitas foto Anda tetap tajam tanpa mengurangi resolusi aslinya.",
    },
    {
      question: "Apakah foto saya aman?",
      answer:
        "Ya. Kami menggunakan sistem enkripsi dan keamanan terbaik untuk melindungi foto dan data Anda.",
    },
    {
      question: "Bisakah saya membagikan foto ke media sosial?",
      answer:
        "Tentu! Anda bisa membagikan foto ke Instagram, Facebook, WhatsApp, dan platform lainnya hanya dengan satu klik.",
    },
    {
      question: "Apakah tersedia fitur album privat?",
      answer:
        "Ya, Anda dapat membuat album privat yang hanya bisa diakses oleh Anda atau orang-orang tertentu yang Anda undang.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const leftColumn = faqItems.slice(0, Math.ceil(faqItems.length / 2));
  const rightColumn = faqItems.slice(Math.ceil(faqItems.length / 2));

  return (
    <div className="faq relative flex flex-col items-center justify-center min-h-screen  px-6 py-10">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <h1 className="relative z-10 font-bold text-center text-3xl md:text-4xl text-white mb-10">
        FAQ
      </h1>
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {/* Kolom Kiri */}
        <div className="flex flex-col space-y-4">
          {leftColumn.map((item, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-10 p-4 rounded-lg cursor-pointer hover:bg-opacity-20 transition-all duration-300"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex items-center justify-between">
                <h2 className="font-semibold text-white">{item.question}</h2>
                {openIndex === index ? (
                  <ChevronDown className="text-white w-5 h-5" />
                ) : (
                  <ChevronRight className="text-white w-5 h-5" />
                )}
              </div>
              {openIndex === index && (
                <p className="text-white mt-2 animate-fadeIn">{item.answer}</p>
              )}
            </div>
          ))}
        </div>

        {/* Kolom Kanan */}
        <div className="flex flex-col space-y-4">
          {rightColumn.map((item, index) => (
            <div
              key={index + leftColumn.length}
              className="bg-white bg-opacity-10 p-4 rounded-lg cursor-pointer hover:bg-opacity-20 transition-all duration-300"
              onClick={() => toggleFAQ(index + leftColumn.length)}
            >
              <div className="flex items-center justify-between">
                <h2 className="font-semibold text-white">{item.question}</h2>
                {openIndex === index + leftColumn.length ? (
                  <ChevronDown className="text-white w-5 h-5" />
                ) : (
                  <ChevronRight className="text-white w-5 h-5" />
                )}
              </div>
              {openIndex === index + leftColumn.length && (
                <p className="text-white mt-2 animate-fadeIn">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
