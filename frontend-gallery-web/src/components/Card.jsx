export default function Card() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-[18px] font-bold mb-5">
          Temukan lebih dari 1 juta gambar yang dibagikan atau diabadikan oleh
          beberapa orang.
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="overflow-hidden rounded-xl shadow-lg">
            <a href="/">
              <img
                src="https://cdn.pixabay.com/photo/2023/12/06/14/39/snow-8433815_1280.jpg"
                alt="Leaves with snow"
                className="w-full h-[500px] object-cover"
              />
            </a>
          </div>

          <div className="overflow-hidden rounded-xl shadow-lg">
            <a href="/">
              <img
                src="https://images.unsplash.com/photo-1574158622682-e40e69881006"
                alt="Puppy"
                className="w-full h-[500px] object-cover"
              />
            </a>
          </div>

          <div className="overflow-hidden rounded-xl shadow-lg">
            <a href="/">
              <img
                src="https://cdn.pixabay.com/photo/2022/11/14/14/13/lake-7591750_1280.jpg"
                alt="Wedding"
                className="w-full h-[500px] object-cover"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
