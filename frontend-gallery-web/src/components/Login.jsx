import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        credentials: "include",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
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
      console.log("Error", err);
      setErrorMessage("Unauthorized User!");
    }
  };
  return (
    <>
      <div className="min-h-screen bg-[#FF85C2] flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Login
          </h2>

          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                placeholder="Masukan Email Kamu "
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
                placeholder="Masukan Password anda"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <a
                href="#"
                className="text-sm text-indigo-600 hover:text-indigo-500"
              >
                Lupa password?
              </a>
            </div>

            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors">
              Login
            </button>
          </form>

          <p className="text-red-500">{errorMessage}</p>

          <div className="mt-6 text-center text-sm text-gray-600">
            Tidak memiliki akun?
            <a
              href="/register"
              className="text-indigo-600 hover:text-indigo-500 font-medium"
            >
              Registrasi
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
