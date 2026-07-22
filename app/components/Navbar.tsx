"use client";

import { useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Stats", href: "#stats" },
  { label: "Clients", href: "#partnerships" },
  { label: "Accredian Edge", href: "#edge" },
  { label: "CAT", href: "#cat" },
  { label: "How It Works", href: "#process" },
  { label: "FAQs", href: "#faqs" },
  { label: "Testimonials", href: "#reviews" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <nav className="w-full bg-white fixed top-0 z-50 shadow-[0_25px_45px_-15px_rgba(0,0,0,0.10)]">
      <div className="max-w-7xl w-full mx-auto px-4 md:px-8 flex justify-around items-center h-17">
        
        <a href="#home" onClick={() => setActiveTab("Home")} className="flex items-center">
          <img 
            src="/logo.webp" 
            alt="Logo" 
            className="h-8 w-auto object-contain"
          />
        </a>

        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = activeTab === label;
            return (
              <a
                key={label}
                href={href}
                onClick={() => setActiveTab(label)}
                className={`text-[15px] border-b-[3px] transition-colors py-1 ${
                  isActive
                    ? "!text-blue-600 !border-blue-600 font-extrabold"
                    : "!text-slate-800 !border-transparent hover:text-blue-600 font-medium"
                }`}
              >
                {label}
              </a>
            );
          })}
        </div>

        <button
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-slate-600 hover:text-slate-900"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-gray-200 bg-white px-6 py-4 space-y-3 md:hidden shadow-lg absolute w-full left-0">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = activeTab === label;
            return (
              <a
                key={label}
                href={href}
                onClick={() => {
                  setActiveTab(label);
                  setMobileMenuOpen(false);
                }}
                className={`block text-sm font-bold py-1 ${
                  isActive ? "text-blue-600" : "!text-black hover:text-blue-600"
                }`}
              >
                {label}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
}