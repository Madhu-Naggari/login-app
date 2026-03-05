import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Welcome = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("username");
    Cookies.remove("token");
    navigate("/", { replace: true });
  };
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">
        Welcome, {localStorage.getItem("username") || "Guest"}!
      </h1>
      <p className="text-lg text-gray-600">You have successfully logged in.</p>
      <button
        className="mt-8 py-3 w-full cursor-pointer rounded-md bg-indigo-600 text-white transition hover:bg-indigo-700"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Welcome;
