"use client";

export default function AccredianEdge() {
  return (
    <section id="edge" className="max-w-[1650px] mx-auto px-4 sm:px-6 lg:px-12 py-10">
      
      {/* Section Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] mb-1 tracking-tight">
          The <span className="text-blue-600">Accredian Edge</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 font-medium">
          Key Aspects of <span className="text-blue-600">Our Strategic Training</span>
        </p>
      </div>

      <div className="w-full flex justify-center items-center">
        <img 
          src="./accredian-edge-usp-v3.svg" 
          alt="The Accredian Edge - Strategic Training" 
          className="w-full max-w-4xl h-auto object-contain bg-transparent border-0 shadow-none outline-none"
        />
      </div>

    </section>
  );
}