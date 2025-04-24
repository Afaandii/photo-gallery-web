import { useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/register", {
        method: "POST",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);

        window.location.href = "http://localhost:8000/admin";
      } else {
        const data = await response.json();
        setErrorMessage(data.message);
      }
    } catch (err) {
      console.log("Error Code:", err);
    }
  };
  return (
    <>
      <div className="min-h-screen bg-[#FF85C2] flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Registrasi
          </h2>

          <form className="space-y-4" onSubmit={handleRegister}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                placeholder="Buat Name anda"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                placeholder="Buat Email Kamu "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                placeholder="Buat Password anda"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors">
              Register
            </button>
          </form>

          <p className="text-red-500">{errorMessage}</p>

          <div className="mt-6 text-center text-sm text-gray-600">
            Sudah memiliki akun?
            <a
              href="/login"
              className="text-indigo-600 hover:text-indigo-500 font-medium"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
