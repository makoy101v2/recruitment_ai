import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useLogin } from "../hooks/auth/userAuth";

import { z, ZodError } from "zod";

const loginSchema = z.object({
  username: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const Login: React.FC = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login, isPending } = useLogin();

  const handlelogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      loginSchema.parse({ username, password });

      login(
        { username, password },
        {
          onSettled: () => {
            setUsername("");
            setPassword("");
          },
        }
      );
    } catch (err) {
      if (err instanceof ZodError) {
        toast.error(err.issues[0]?.message || "Validation error");
      } else {
        toast.error((err as Error).message || "An unexpected error occurred");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md border border-gray-200 p-8 flex flex-col gap-6">
        <h2 className="text-2xl font-semibold text-center mb-2 text-gray-800">
          {isRegister ? "Register" : "Login"}
        </h2>

        <form className="flex flex-col gap-4" onSubmit={handlelogin}>
          <input
            type="text"
            placeholder="Email"
            required
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            disabled={isPending}
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isPending}
          />
          {isRegister && (
            <select
              required
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Role</option>
              <option value="applicant">Applicant</option>
              <option value="hr">HR</option>
              <option value="admin">Admin</option>
            </select>
          )}
          <button
            type="submit"
            className="bg-blue-600 text-white rounded px-4 py-2 font-medium hover:bg-blue-700 transition cursor-pointer"
            disabled={isPending}
          >
            {isRegister ? "Register" : "Login"}
          </button>
        </form>

        <button
          onClick={() => setIsRegister(!isRegister)}
          className="text-blue-600 hover:underline mt-2 text-sm text-center"
        >
          {isRegister
            ? "Already have an account? Login"
            : "Don't have an account? Register"}
        </button>
      </div>
    </div>
  );
};

export default Login;
