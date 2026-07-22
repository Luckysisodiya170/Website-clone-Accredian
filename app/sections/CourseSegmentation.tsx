"use client";

export default function CourseSegmentation() {
  const segments = [
    {
      title: "Program Specific",
      desc: "Certificate, Executive, Post Graduate Certificate",
      image: "./project-management-v2.webp",
    },
    {
      title: "Industry Specific",
      desc: "IT, Healthcare, Retail, Finance, Education, Manufacturing",
      image: "./digital-transformation-v2.webp",
    },
    {
      title: "Topic Specific",
      desc: "Machine Learning, Design, Analytics, Cybersecurity, Cloud",
      image: "./data-science-v2.webp",
    },
    {
      title: "Level Specific",
      desc: "Senior Leadership, Mid-Career Professionals, Freshers",
      image: "./senior-management-v2.webp",
    },
  ];

  return (
    <section id="segmentation" className="max-w-[1650px] mx-auto px-4 sm:px-6 lg:px-12 py-10">
      
      {/* Section Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] mb-1.5 tracking-tight">
          Tailored <span className="text-blue-600">Course Segmentation</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 font-medium">
          Explore <span className="text-blue-600">Custom-fit Courses</span> Designed to Address Every Professional Focus
        </p>
      </div>

      {/* 4 Cards Grid - Compact sizing */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
        {segments.map((item, index) => (
          <div 
            key={index} 
            className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-[0_8px_20px_-4px_rgba(0,0,0,0.06),0_4px_6px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_15px_30px_-4px_rgba(37,99,235,0.12)] transition-all duration-300 flex flex-col group"
          >
            {/* Card Image Container - Reduced height */}
            <div className="w-full h-32 overflow-hidden bg-slate-100">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>

            {/* Card Content - Compact padding */}
            <div className="p-4 flex flex-col items-center text-center flex-grow justify-between">
              <h3 className="text-sm sm:text-base font-bold text-[#0f172a] mb-1.5">
                {item.title}
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}