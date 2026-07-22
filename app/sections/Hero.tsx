"use client";

import { useModal } from "@/app/context/ModalContext";

export default function Hero() {
  const { openModal } = useModal();

  return (
    <section id="home" className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 mt-20 mb-8">
      <div className="w-full bg-[#f0f6ff] rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-[0_0_50px_-5px_rgba(0,0,0,0.12),0_20px_40px_-10px_rgba(37,99,235,0.2)] grid grid-cols-1 md:grid-cols-12 items-end">
        
        <div className="md:col-span-7 px-6 py-8 sm:px-10 md:py-14 lg:pl-12 lg:pr-8 flex flex-col justify-center z-10">
          <h1 className="text-2xl sm:text-4xl md:text-[42px] lg:text-[45px] font-extrabold text-[#0f172a] leading-[1.15] tracking-tight mb-4">
            Next-Gen <span className="text-blue-600">Expertise</span><br />
            For Your <span className="text-blue-600">Enterprise</span>
          </h1>

          <p className="text-xs sm:text-base text-[#060709] max-w-[400px] font-normal mb-5 leading-relaxed">
            Cultivate high-performance teams through expert learning.
          </p>

          <div className="flex items-center flex-wrap gap-x-4 gap-y-2 mb-7">
            {[
              "Tailored Solutions",
              "Industry Insights",
              "Expert Guidance",
            ].map((text) => (
              <div key={text} className="flex items-center gap-1.5 shrink-0">
                <svg className="w-4 h-4 text-green-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-[12px] sm:text-sm text-[#040506] font-medium">{text}</span>
              </div>
            ))}
          </div>

          <div>
            <button
              type="button"
              onClick={openModal}
              className="inline-flex items-center justify-center px-10 sm:px-12 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/25 text-sm cursor-pointer relative z-20"
            >
              Enquire Now
            </button>
          </div>
        </div>

        <div className="md:col-span-5 flex items-end justify-center md:justify-end w-full overflow-hidden">
          <img
            src="/corporate-big-hero-v4.webp"
            alt="Enterprise Experts"
            className="w-auto h-auto max-h-[420px] md:max-h-[460px] object-contain object-bottom block"
          />
        </div>

      </div>
    </section>
  );
}