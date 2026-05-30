import { useState } from "react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-87.5">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>

        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Enter Email"
            className="border p-3 rounded-md outline-none"
          />

          <div className="flex border rounded-md overflow-hidden">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              className="p-3 w-full outline-none"
            />

            <button
              type="button"
              className="px-3 bg-gray-200"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <button className="bg-yellow-400 hover:bg-yellow-500 p-3 rounded-md font-semibold">
            Login
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          New User? <span className="text-blue-500">Create Account</span>
        </p>
      </div>
    </div>
  );
}

export default Login;