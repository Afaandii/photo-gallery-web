// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import Footer from "../Footer";
import Navigasi from "../Navigasi";

export default function Blogs() {
  return (
    <>
      <section className="w-full h-full mb-3">
        <div className="hero w-screen h-auto flex flex-col">
          <Navigasi />
          <div className="h-full flex flex-col justify-center items-center text-slate-400 text-center px-4 bg-opacity-50 bg-black w-full">
            <h1 className="text-center text-5xl font-bold">PixFlow Blog</h1>
            <p className="text-2xl mt-4">
              Temukan Beberapa Blog yang dibuat dari komunitas kami
            </p>
          </div>
        </div>

        <div className="flex flex-col w-full h-full px-5">
          <div className="py-6 ">
            <h1 className="text-4xl font-bold text-black">Latest Upload</h1>
          </div>
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Card 1 */}
            <div className="flex flex-col rounded-xl shadow-md overflow-hidden bg-white border w-full lg:w-1/3">
              <img
                src="https://cdn.pixabay.com/photo/2025/02/06/17/42/snow-9388109_1280.jpg"
                alt="Top 20 Images"
                className="w-full h-60 object-cover"
              />
              <div className="p-4 flex flex-col gap-1">
                <p className="text-sm text-gray-500">Community</p>
                <h2 className="font-bold text-lg">
                  Top 20 Images from July 2025
                </h2>
                <p className="text-sm text-gray-600">
                  Alyssa Wright · August 12, 2025
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col rounded-xl shadow-md overflow-hidden bg-white border w-full lg:w-1/3">
              <img
                src="https://cdn.pixabay.com/photo/2025/02/06/17/42/snow-9388109_1280.jpg"
                alt="Canada"
                className="w-full h-60 object-cover"
              />
              <div className="p-4 flex flex-col gap-1">
                <p className="text-sm text-gray-500">Community</p>
                <h2 className="font-bold text-lg">
                  Unsplash Around the World: Canada
                </h2>
                <p className="text-sm text-gray-600">
                  Alyssa Wright · July 16, 2025
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col rounded-xl shadow-md overflow-hidden bg-white border w-full lg:w-1/3">
              <img
                src="https://cdn.pixabay.com/photo/2025/02/06/17/42/snow-9388109_1280.jpg"
                alt="Top 20 Images on Unsplash"
                className="w-full h-60 object-cover"
              />
              <div className="p-4 flex flex-col gap-1">
                <p className="text-sm text-gray-500">Community</p>
                <h2 className="font-bold text-lg">
                  Top 20 Images on Unsplash from June 2025
                </h2>
                <p className="text-sm text-gray-600">
                  Alyssa Wright · July 8, 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
