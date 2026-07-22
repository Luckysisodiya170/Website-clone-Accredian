"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-transparent pt-5 pb-4 px-4 sm:px-6">
      <div className="max-w-[1000px] mx-auto bg-transparent">
        
        {/* Top Section: Logo, Socials & CTA */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
          
          {/* Left: Logo & Social Icons */}
          <div className="flex flex-col gap-3">
            <div className="h-7 bg-transparent">
              <img 
                src="/logo.webp" 
                alt="Accredian Logo" 
                className="h-full w-auto object-contain mix-blend-multiply"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = `
                    <div class="flex flex-col leading-none bg-transparent">
                      <span class="text-xl font-extrabold text-[#2563eb] tracking-tight">accredian</span>
                      <span class="text-[9px] text-slate-500 tracking-widest uppercase mt-0.5">credentials that matter</span>
                    </div>
                  `;
                }}
              />
            </div>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3 text-slate-800 bg-transparent">
              {/* Facebook */}
              <Link href="#" className="hover:text-blue-600 transition-colors">
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
              </Link>
              {/* LinkedIn */}
              <Link href="#" className="hover:text-blue-600 transition-colors">
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </Link>
              {/* Twitter / X */}
              <Link href="#" className="hover:text-blue-600 transition-colors">
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </Link>
              {/* Instagram */}
              <Link href="#" className="hover:text-blue-600 transition-colors">
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </Link>
              {/* YouTube */}
              <Link href="#" className="hover:text-blue-600 transition-colors">
                <svg className="w-5 h-5 fill-currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </Link>
            </div>
          </div>

          {/* Right: CTA Button */}
          <div className="flex flex-col items-center md:items-end bg-transparent">
            <button className="bg-blue-600 text-white font-semibold text-[13px] px-6 py-1.5 rounded-md hover:bg-blue-700 transition-colors mb-1">
              Enquire Now
            </button>
            <p className="text-[11px] text-slate-600 font-medium">
              Speak with our Advisor
            </p>
          </div>
        </div>

        {/* Top Divider */}
        <hr className="border-slate-700 w-full my-4 bg-transparent" />

        {/* Middle Section: Links & Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-transparent">
          
          {/* Accredian Links */}
          <div className="bg-transparent">
            <h3 className="text-[14px] font-bold text-black mb-2">Accredian</h3>
            <ul className="flex flex-col gap-1.5">
              <li>
                <Link href="#" className="text-[12px] !text-black hover:text-blue-600 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[12px] !text-black hover:text-blue-600 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[12px] !text-black hover:text-blue-600 transition-colors">
                  Why Accredian
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="bg-transparent">
            <h3 className="text-[14px] font-bold text-black mb-2">Contact Us</h3>
            <div className="flex flex-col gap-1.5 text-[12px] text-black">
              <p>
                Email us:{" "}
                <a href="mailto:enterprise@accredian.com" className="text-blue-600 hover:underline font-medium">
                  enterprise@accredian.com
                </a>
              </p>
              <p className="leading-snug pr-0 lg:pr-32 text-black">
                Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Divider */}
        <hr className="border-slate-700 w-full mt-4 mb-3 bg-transparent" />

        {/* Copyright Section */}
        <div className="text-center text-[11px] sm:text-[12px] text-slate-900 font-medium bg-transparent">
          © 2026 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
        </div>

      </div>
    </footer>
  );
}