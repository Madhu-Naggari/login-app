import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import cookies from "js-cookie";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_API_URL}/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: formData.username,
            password: formData.password,
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        setLoading(false);
        setError(data.message || "Login failed");
      } else {
        setLoading(false);
        cookies.set("token", data.token, { expires: 1 });
        localStorage.setItem("username", formData.username);
        navigate("/welcome", { replace: true });
      }
    } catch (err) {
      setLoading(false);
      setError("An error occurred. Please try again.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="flex items-center justify-center w-full px-4 font-poppins">
      <form className="flex w-full flex-col max-w-96" onSubmit={handleSubmit}>
        <h2 className="text-4xl font-bold text-gray-900 text-center">
          Sign in
        </h2>

        <p className="mt-4 text-base text-gray-500/90 text-center">
          Please enter email and password to access.
        </p>

        {/* Username */}
        <div className="mt-10">
          <label className="font-medium">Username</label>
          <input
            placeholder="Please enter username"
            className="mt-2 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-indigo-600 outline-none px-3 py-3 w-full"
            required
            type="text"
            name="username"
            onChange={handleChange}
          />
        </div>

        {/* Password */}
        <div className="mt-6">
          <label className="font-medium">Password</label>

          <div className="relative">
            <input
              placeholder="Please enter your password"
              className="mt-2 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-indigo-600 outline-none px-3 py-3 w-full pr-10"
              required
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={handleChange}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 mt-1"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="mt-8 py-3 w-full cursor-pointer rounded-md bg-indigo-600 text-white transition hover:bg-indigo-700 flex items-center justify-center gap-2"
        >
          {loading && (
            <div className="inline-block w-5 h-5 border-2 border-white rounded-full border-t-transparent animate-spin"></div>
          )}
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="text-center mt-2">
          {error && <span className="text-red-500">* {error}</span>}
        </p>
      </form>
    </section>
  );
}
