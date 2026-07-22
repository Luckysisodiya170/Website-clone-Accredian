"use client";

export default function StrategicSkillEnhancement() {
  const targetAudience = [
    {
      title: "Tech Professionals",
      desc: "Enhance expertise, embrace tech, drive innovation.",
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Non-Tech Professionals",
      desc: "Adapt digitally, collaborate in tech environments.",
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Emerging Professionals",
      desc: "Develop powerful skills for rapid career growth.",
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      ),
    },
    {
      title: "Senior Professionals",
      desc: "Strengthen leadership, enhance strategic decisions.",
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-10 py-10 ">
      
      {/* Main Container - Reduced max width and compact padding */}
      <div className="bg-[#2563eb] rounded-2xl px-6 pt-6 sm:px-10 sm:pt-8 text-white relative shadow-xl overflow-visible pb-6 sm:pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Left Side: Larger Header & Image */}
          <div className="lg:col-span-5 flex flex-col justify-center relative">
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase !text-white/90 mb-1">
              Who Should Join?
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black tracking-tight mb-2 leading-[1.15] !text-white">
              Strategic Skill Enhancement
            </h2>
            
            {/* Image */}
            <div className="relative w-full max-w-[320px] sm:max-w-[300px] mx-auto lg:mx-0 translate-y-8 sm:translate-y-8 z-10">
              <img 
                src="/imagehuman.png" 
                alt="Strategic Skill Enhancement Professionals" 
                className="w-full h-auto object-contain block drop-shadow-2xl"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </div>

          {/* Right Side: 2x2 Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6 pt-4 lg:pt-0">
            {targetAudience.map((item, index) => (
              <div key={index} className="flex flex-col items-start">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-2 shadow-sm shrink-0">
                  {item.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-1 !text-white">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base !text-white leading-relaxed font-normal opacity-95">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}