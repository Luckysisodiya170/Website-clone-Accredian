"use client";

export default function DeliverResults() {
  const steps = [
    {
      number: "1",
      title: "Skill Gap Analysis",
      desc: "Assess team skill gaps and developmental needs.",
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 17.25l7.5-7.5 4.5 4.5 7.5-7.5" />
        </svg>
      ),
    },
    {
      number: "2",
      title: "Customized Training",
      desc: "Create a tailored roadmap addressing organizational goals.",
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
        </svg>
      ),
    },
    {
      number: "3",
      title: "Flexible Delivery",
      desc: "Deliver adaptable programs aligned with industry needs.",
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 8.25l4.5 3-4.5 3v-6z" fill="currentColor" />
        </svg>
      ),
    },
  ];

  return (
    <section className="max-w-[950px] mx-auto px-4 sm:px-6 py-6 mb-6">
      
      {/* Section Header - Extra Compact */}
      <div className="text-center mb-6">
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-1 tracking-tight">
          How We <span className="text-blue-600">Deliver Results</span> That Matter?
        </h2>
        <p className="text-[13px] sm:text-sm text-slate-700 font-medium">
          A Structured Three-Step Approach to <span className="text-blue-600">Skill Development</span>
        </p>
      </div>

      {/* Grid Container - Tighter gap */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 justify-center items-stretch">
        
        {steps.map((step, index) => (
          <div key={index} className="flex flex-row items-center group h-full">
            
            {/* Left Floating Accent Bar */}
            <div className="w-1 h-[50%] bg-blue-600 rounded-full mr-1.5 transition-transform group-hover:scale-y-110"></div>
            
            {/* Card Content - Minimum Padding */}
            <div className="flex-1 h-full bg-[#f0f7ff] border border-blue-200/80 rounded-xl p-4 sm:p-5 relative flex flex-col items-center justify-start text-center shadow-sm hover:shadow-md transition-all duration-300">
              
              {/* Number Badge (Top-Left) - Smaller */}
              <div className="absolute top-2.5 left-2.5 w-5 h-5 rounded-full bg-white border border-blue-300 flex items-center justify-center text-[10px] font-black text-slate-800 shadow-sm">
                {step.number}
              </div>

              {/* Icon Circle - Smaller Size */}
              <div className="w-12 h-12 bg-[#1d4ed8] rounded-full flex items-center justify-center mb-3 shadow-md shadow-blue-600/30">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-slate-900 mb-1.5 leading-snug px-1">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-[13px] text-slate-600 leading-tight font-normal opacity-95">
                {step.desc}
              </p>
            </div>

            {/* Right Floating Accent Bar */}
            <div className="w-1 h-[50%] bg-blue-600 rounded-full ml-1.5 transition-transform group-hover:scale-y-110"></div>
            
          </div>
        ))}

      </div>
    </section>
  );
}