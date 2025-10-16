import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useLogin } from "../hooks/auth/userAuth";
import { z, ZodError } from "zod";
import { Lock, Mail, UserPlus } from "lucide-react"; // ✅ added icons for better visuals

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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 p-8 flex flex-col gap-6 relative overflow-hidden">
        {/* Decorative Gradient Accent */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-blue-400 rounded-t-2xl"></div>

        {/* Header Section */}
        <div className="text-center mt-2">
          <div className="flex justify-center mb-2">
            <div className="bg-blue-600 text-white rounded-full p-3 shadow-md">
              {isRegister ? <UserPlus size={26} /> : <Lock size={26} />}
            </div>
          </div>
          <h2 className="text-2xl font-semibold text-gray-800">
            {isRegister ? "Create an Account" : "Welcome Back"}
          </h2>
          <p className="text-sm text-gray-500">
            {isRegister
              ? "Join the CSC Recruitment Portal"
              : "Login to your account to continue"}
          </p>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-4 mt-4" onSubmit={handlelogin}>
          <div className="relative">
            <Mail className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Email Address"
              required
              className="w-full border border-gray-300 rounded-lg px-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400 transition"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={isPending}
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              required
              className="w-full border border-gray-300 rounded-lg px-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400 transition"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isPending}
            />
          </div>

          {isRegister && (
            <select
              required
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400 transition"
            >
              <option value="">Select Role</option>
              <option value="applicant">Applicant</option>
              <option value="hr">HR</option>
              <option value="admin">Admin</option>
            </select>
          )}

          <button
            type="submit"
            disabled={isPending}
            className={`mt-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg px-4 py-2 font-semibold shadow hover:from-blue-700 hover:to-blue-600 transition duration-300 ${
              isPending ? "opacity-70 cursor-not-allowed" : "cursor-pointer"
            }`}
          >
            {isRegister ? "Register" : "Login"}
          </button>
        </form>

        {/* Switch Link */}
        <button
          onClick={() => setIsRegister(!isRegister)}
          className="text-blue-600 hover:underline mt-2 text-sm text-center transition"
        >
          {isRegister
            ? "Already have an account? Login"
            : "Don’t have an account? Register"}
        </button>

        {/* Footer Note */}
        <p className="text-xs text-center text-gray-400 mt-4">
          Civil Service Commission © {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default Login;
