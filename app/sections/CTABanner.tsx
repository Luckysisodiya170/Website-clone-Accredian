"use client";

export default function CTABanner() {
  return (
    <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-6 mb-8 bg-transparent">
      
      {/* Main Banner Container - Added bg-[#2563eb] explicitly with transparent section wrapper */}
      <div className="relative overflow-hidden bg-[#2563eb] rounded-2xl px-6 py-8 sm:px-10 sm:py-9 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 shadow-lg">

        {/* Background Concentric Circles Effect */}
        <div className="absolute inset-0 pointer-events-none flex justify-center items-end opacity-90">
          <div className="absolute -bottom-[250px] w-[800px] h-[800px] bg-white/10 rounded-full"></div>
          <div className="absolute -bottom-[150px] w-[600px] h-[600px] bg-white/10 rounded-full"></div>
          <div className="absolute -bottom-[50px] w-[400px] h-[400px] bg-white/5 rounded-full"></div>
        </div>

        {/* Left Side: Icon and Text */}
        <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-5 w-full flex-1 bg-transparent">
          
          {/* Icon Box */}
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-2xl flex items-center justify-center shrink-0 border-[3px] border-blue-400/40 shadow-sm p-2.5 sm:p-3">
            {/* Custom Support Headset Icon */}
            <svg className="w-full h-full text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12V9a7 7 0 0114 0v3" />
              <rect x="3" y="11" width="4" height="7" rx="1.5" />
              <rect x="17" y="11" width="4" height="7" rx="1.5" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 15c1 1.5 3 1.5 4 0" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 16c0 2-1.5 3.5-3.5 3.5h-2" />
            </svg>
          </div>

          {/* Text Content */}
          <div className="flex flex-col justify-center h-full pt-0.5 sm:pt-1 bg-transparent">
            <h2 className="text-[18px] sm:text-[20px] lg:text-[22px] font-bold !text-white mb-1 leading-snug">
              Want to Learn More About Our Training Solutions?
            </h2>
            <p className="text-[12px] sm:text-[13px] !text-white/95 font-medium">
              Get Expert Guidance for Your Team Success!
            </p>
          </div>

        </div>

        {/* Right Side: Contact Us Button */}
        <button className="relative z-10 bg-white text-blue-600 font-bold text-[13px] sm:text-[14px] px-10 py-2 sm:px-12 sm:py-2.5 rounded-lg flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors shadow-sm shrink-0 w-full md:w-auto min-w-[200px] sm:min-w-[220px]">
          Contact Us
          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

      </div>
    </section>
  );
}