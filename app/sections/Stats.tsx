export default function Stats() {
  const statsData = [
    {
      number: "10K+",
      description: "Professionals Trained For Exceptional Career Success",
    },
    {
      number: "200+",
      description: "Sessions Delivered With Unmatched Learning Excellence",
    },
    {
      number: "5K+",
      description: "Active Learners Engaged In Dynamic Courses",
    },
  ];

  return (
    <section id="stats" className="max-w-[1650px] mx-auto px-4 sm:px-6 lg:px-12 py-10">
      
      {/* Section Header - Made compact */}
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] mb-1.5 tracking-tight">
          Our <span className="text-blue-600">Track Record</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 font-medium">
          The Numbers Behind <span className="text-blue-600">Our Success</span>
        </p>
      </div>

      {/* Stats Cards Grid with Dividers - Reduced gap and spacing */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center max-w-6xl mx-auto">
        {statsData.map((item, index) => (
          <div 
            key={index} 
            className={`flex flex-col items-center text-center px-6 ${
              index !== statsData.length - 1 ? "md:border-r md:border-slate-200" : ""
            }`}
          >
            {/* Number Pill - Compact styling */}
            <div className="bg-[#eff6ff] text-blue-600 font-extrabold text-base px-5 py-1.5 rounded-full mb-3 shadow-sm">
              {item.number}
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-[#1e293b] font-medium max-w-[300px] leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}