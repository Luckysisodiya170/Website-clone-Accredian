"use client";

export default function CatFramework() {
  return (
    <section id="cat" className="max-w-[1000px] mx-auto px-4 sm:px-6 py-4 mb-6">
      
      {/* Main Container */}
      <div className="bg-blue-50/70 rounded-2xl py-5 px-4 sm:px-6 shadow-sm">
        
        {/* Section Header*/}
        <div className="text-center mb-4">
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#0f172a] mb-0.5 tracking-tight">
            The <span className="text-blue-600">CAT Framework</span>
          </h2>
          <p className="text-[11px] sm:text-xs text-slate-600 font-medium">
            Our Proven Approach to <span className="text-blue-600">Learning Excellence</span>
          </p>
        </div>

        {/* Image Container  */}
        <div className="relative w-full max-w-3xl mx-auto flex justify-center">
          <img 
            src="/catV2.svg" 
            alt="CAT Framework - Concept, Application, Tools" 
            className="w-full h-auto object-contain mix-blend-multiply" 
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
        
      </div>

    </section>
  );
}