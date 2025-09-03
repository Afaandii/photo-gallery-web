export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="text-xl mt-2 text-red-500">Halaman tidak ditemukan</p>
      <a
        href="/"
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
      >
        Kembali ke Home
      </a>
    </div>
  );
}
