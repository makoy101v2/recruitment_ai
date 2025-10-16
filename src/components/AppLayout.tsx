import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useUser } from "../hooks/auth/useUser";
import { useLogout } from "../hooks/auth/useLogout";

const AppLayout: React.FC = () => {
  const { isAuthenticated } = useUser();
  const { logout } = useLogout();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
  };

  const navLinks = [
    { to: "/jobs", label: "Jobs", icon: "💼" },
    { to: "/hr", label: "HR Dashboard", icon: "👩‍💼" },
    { to: "/admin", label: "Admin Panel", icon: "🛠️" },
    { to: "/report", label: "Reports", icon: "📊" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900 font-sans">
      {/* HEADER */}
      <header className="px-4 sm:px-6 py-4 bg-white border-b border-gray-200 shadow-sm sticky top-0 z-20">
        <div className="w-full max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <span className="bg-blue-700 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center text-lg shadow-sm">
              CSC
            </span>
            <div>
              <h1 className="text-lg font-semibold text-gray-800 tracking-tight">
                Recruitment Portal
              </h1>
              <p className="text-xs text-gray-500 -mt-1">
                Civil Service Commission Philippines
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden sm:flex gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-4 py-2 rounded-md font-medium text-sm transition-all duration-200
                  ${
                    isActive
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                  }`
                }
              >
                <span>{link.icon}</span> {link.label}
              </NavLink>
            ))}

            {/* Conditional Login / Logout */}
            {!isAuthenticated ? (
              <NavLink
                to="/login"
                className="flex items-center gap-2 px-4 py-2 rounded-md font-medium text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-all"
              >
                🔐 Login
              </NavLink>
            ) : (
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 rounded-md font-medium text-sm transition-all cursor-pointer hover:bg-gray-100"
              >
                🚪 Logout
              </button>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="sm:hidden p-2 rounded-md hover:bg-gray-100 transition"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="sm:hidden mt-3 flex flex-col gap-2 border-t border-gray-100 pt-2 bg-white rounded-lg shadow-md animate-fadeIn">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-4 py-2 rounded-md font-medium text-sm transition-all duration-200
                  ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                  }`
                }
                onClick={() => setMobileOpen(false)}
              >
                <span>{link.icon}</span> {link.label}
              </NavLink>
            ))}

            {/* Mobile Login/Logout */}
            {!isAuthenticated ? (
              <NavLink
                to="/login"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 px-4 py-2 rounded-md font-medium text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700"
              >
                🔐 Login
              </NavLink>
            ) : (
              <button
                onClick={() => {
                  handleLogout();
                  setMobileOpen(false);
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-md font-medium text-sm transition-all"
              >
                🚪 Logout
              </button>
            )}
          </nav>
        )}
      </header>

      {/* MAIN */}
      <main className="flex-1 w-full px-4 md:px-8 py-6">
        <div className="w-full max-w-8xl mx-auto h-full">
          <Outlet />
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-white border-t border-gray-200 text-center py-4 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Civil Service Commission – Recruitment
        Portal
      </footer>
    </div>
  );
};

export default AppLayout;
